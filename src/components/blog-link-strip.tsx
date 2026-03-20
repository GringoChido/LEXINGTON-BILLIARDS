import Link from "next/link"

export const BlogLinkStrip = ({ category }: { category: string }) => (
  <section className="py-8">
    <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)] text-center">
      <Link
        href="/blog"
        className="text-base font-bold inline-flex items-center gap-2 transition-colors hover:opacity-80"
        style={{ color: "var(--color-primary)" }}
      >
        Read more about {category} on our blog &rarr;
      </Link>
    </div>
  </section>
)
