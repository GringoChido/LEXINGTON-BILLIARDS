import sharp from "sharp"
import { readdir, stat, unlink, rename } from "fs/promises"
import { join, extname, basename } from "path"
import { existsSync } from "fs"

const PUBLIC = "public/images"

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...(await getFiles(full)))
    else files.push(full)
  }
  return files
}

async function optimize() {
  const files = await getFiles(PUBLIC)
  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))

  let totalBefore = 0
  let totalAfter = 0
  const converted = [] // jpg/png files converted to webp (to delete after)

  for (const file of imageFiles) {
    const ext = extname(file).toLowerCase()
    const name = basename(file)
    const before = (await stat(file)).size
    totalBefore += before

    // Determine max width based on usage context
    const isHero = name.includes("hero") || name.includes("slide") || name.includes("lifestyle")
    const isBrandLogo = file.includes("/brands/") && !name.includes("scene-")
    const isTile = name.includes("tile-")
    const isWhy = name.includes("why-")
    const maxWidth = isBrandLogo ? 400 : isTile || isWhy ? 800 : isHero ? 1600 : 1200
    const quality = isBrandLogo ? 85 : 78

    // Validate image is readable
    let meta
    try {
      meta = await sharp(file).metadata()
    } catch {
      console.log(`SKIP ${file} — not a valid image`)
      totalBefore -= before
      continue
    }

    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
      // Check if a .webp version already exists
      const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
      if (existsSync(webpPath)) {
        // Webp already exists — this is a duplicate, just delete it
        console.log(`DELETE ${file} (webp version exists)`)
        converted.push(file)
        totalBefore -= before // don't count toward totals
        continue
      }

      // Convert to webp
      const needsResize = meta.width && meta.width > maxWidth
      let pipeline = sharp(file)
      if (needsResize) pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true })

      const hasAlpha = meta.channels === 4
      await pipeline.webp({ quality, effort: 6, alphaQuality: hasAlpha ? 90 : undefined }).toFile(webpPath)

      const after = (await stat(webpPath)).size
      totalAfter += after
      const savings = ((1 - after / before) * 100).toFixed(0)
      console.log(`CONVERT ${file} (${fmtSize(before)}) → ${webpPath} (${fmtSize(after)}) [${savings}% saved]`)
      converted.push(file)
    } else {
      // Re-optimize existing webp in-place
      const needsResize = meta.width && meta.width > maxWidth

      const buf = await (needsResize
        ? sharp(file).resize(maxWidth, null, { withoutEnlargement: true }).webp({ quality, effort: 6 }).toBuffer()
        : sharp(file).webp({ quality, effort: 6 }).toBuffer())

      if (buf.length < before * 0.92) {
        // Write to tmp then rename to avoid corrupting in-place
        const tmp = file + ".tmp"
        await sharp(buf).toFile(tmp)
        await rename(tmp, file)
        totalAfter += buf.length
        const savings = ((1 - buf.length / before) * 100).toFixed(0)
        console.log(`OPTIMIZE ${file} (${fmtSize(before)}) → (${fmtSize(buf.length)}) [${savings}% saved]`)
      } else {
        totalAfter += before
        console.log(`SKIP ${file} (${fmtSize(before)}) — already optimal`)
      }
    }
  }

  // Delete converted originals
  for (const f of converted) {
    await unlink(f)
  }

  console.log(`\nTotal: ${fmtSize(totalBefore)} → ${fmtSize(totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}% saved)`)
  if (converted.length) console.log(`Deleted ${converted.length} old jpg/png files`)
}

function fmtSize(bytes) {
  return (bytes / 1024).toFixed(0) + "K"
}

optimize().catch(console.error)
