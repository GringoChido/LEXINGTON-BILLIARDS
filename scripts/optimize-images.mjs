import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const jobs = [
  // Hero slides — max 1920w, quality 80
  { src: 'public/images/pool-tables.jpeg', out: 'public/images/pool-tables.jpeg', w: 1920, q: 80 },
  { src: 'public/images/pool-tables-slide-2.png', out: 'public/images/pool-tables-slide-2.jpg', w: 1920, q: 80 },
  { src: 'public/images/pool-tables-slide-3.jpg', out: 'public/images/pool-tables-slide-3.jpg', w: 1920, q: 80 },
  { src: 'public/images/pool-tables-hero.jpg', out: 'public/images/pool-tables-hero.jpg', w: 1920, q: 80 },
  // Brand scenes — max 1200w, quality 80
  { src: 'public/images/brands/scene-cl-bailey.jpeg', out: 'public/images/brands/scene-cl-bailey.jpg', w: 1200, q: 80 },
  { src: 'public/images/brands/scene-brunswick.webp', out: 'public/images/brands/scene-brunswick.webp', w: 1200, q: 80 },
  { src: 'public/images/brands/scene-ae-schmidt.jpg', out: 'public/images/brands/scene-ae-schmidt.jpg', w: 1200, q: 80 },
  { src: 'public/images/brands/scene-connelly.webp', out: 'public/images/brands/scene-connelly.webp', w: 1200, q: 80 },
  { src: 'public/images/brands/scene-olhausen.webp', out: 'public/images/brands/scene-olhausen.webp', w: 1200, q: 80 },
  { src: 'public/images/brands/scene-imperial.webp', out: 'public/images/brands/scene-imperial.webp', w: 1200, q: 80 },
  { src: 'public/images/brands/scene-american-heritage.jpg', out: 'public/images/brands/scene-american-heritage.jpg', w: 1200, q: 80 },
  // Feature images — max 1200w
  { src: 'public/images/accessory-kit.webp', out: 'public/images/accessory-kit.webp', w: 1200, q: 80 },
  { src: 'public/images/repair-service.jpg', out: 'public/images/repair-service.jpg', w: 1200, q: 80 },
  // Homepage hero images
  { src: 'public/images/pool-tables.webp', out: 'public/images/pool-tables.webp', w: 1920, q: 80 },
  { src: 'public/images/hot-tubs.jpg', out: 'public/images/hot-tubs.jpg', w: 1920, q: 80 },
  { src: 'public/images/big-green-egg.jpg', out: 'public/images/big-green-egg.jpg', w: 1920, q: 80 },
  { src: 'public/images/arcade.jpg', out: 'public/images/arcade.jpg', w: 1920, q: 80 },
  // Tile images — max 800w
  { src: 'public/images/tile-pool-tables.jpg', out: 'public/images/tile-pool-tables.jpg', w: 800, q: 80 },
  { src: 'public/images/tile-hot-tubs.jpg', out: 'public/images/tile-hot-tubs.jpg', w: 800, q: 80 },
  { src: 'public/images/tile-big-green-egg.webp', out: 'public/images/tile-big-green-egg.webp', w: 800, q: 80 },
  { src: 'public/images/tile-arcade.avif', out: 'public/images/tile-arcade.avif', w: 800, q: 80 },
  { src: 'public/images/tile-accessories.webp', out: 'public/images/tile-accessories.webp', w: 800, q: 80 },
  // Why-us background images — max 800w
  { src: 'public/images/why-pool-tables.jpg', out: 'public/images/why-pool-tables.jpg', w: 800, q: 80 },
  { src: 'public/images/why-spas.jpg', out: 'public/images/why-spas.jpg', w: 800, q: 80 },
  { src: 'public/images/why-delivery.jpg', out: 'public/images/why-delivery.jpg', w: 800, q: 80 },
  { src: 'public/images/why-service.jpg', out: 'public/images/why-service.jpg', w: 800, q: 80 },
];

let totalBefore = 0;
let totalAfter = 0;

for (const job of jobs) {
  if (!fs.existsSync(job.src)) {
    console.log('SKIP (missing):', job.src);
    continue;
  }
  const before = fs.statSync(job.src).size;
  totalBefore += before;
  const ext = path.extname(job.out).slice(1);
  const tmp = job.out + '.tmp';

  let pipe = sharp(job.src).resize({ width: job.w, withoutEnlargement: true });

  if (ext === 'jpg' || ext === 'jpeg') pipe = pipe.jpeg({ quality: job.q, mozjpeg: true });
  else if (ext === 'webp') pipe = pipe.webp({ quality: job.q });
  else if (ext === 'avif') pipe = pipe.avif({ quality: job.q });
  else if (ext === 'png') pipe = pipe.png({ quality: job.q });

  await pipe.toFile(tmp);

  if (job.src !== job.out && fs.existsSync(job.src)) fs.unlinkSync(job.src);
  fs.renameSync(tmp, job.out);

  const after = fs.statSync(job.out).size;
  totalAfter += after;
  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`${job.out}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (-${pct}%)`);
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (-${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`);
