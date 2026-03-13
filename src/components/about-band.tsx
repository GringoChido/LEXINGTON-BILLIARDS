"use client"

import Image from "next/image"
import Link from "next/link"

export const AboutBand = () => {
  return (
    <section className="py-[var(--section-padding-y)] bg-surface">
      <div className="mx-auto max-w-[var(--content-max)] px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Showroom — logo centered */}
          <div className="lg:col-span-3 aspect-[16/10] rounded-xl overflow-hidden animate-[fadeUp_0.5s_ease-out_both] flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Lexington Billiards and Spas"
              width={280}
              height={280}
              className="w-48 sm:w-56 lg:w-72 h-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="lg:col-span-2 animate-[fadeUp_0.5s_ease-out_0.15s_both]">
            <p className="section-label mb-4">Our Story</p>
            <h2 className="heading-section text-[length:var(--text-h3)] mb-4">
              50 Years, One Family
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              The Wilson family has been in billiards longer than most dealers
              have been in business. From our 5,000 sq ft showroom on Leestown
              Road, we deliver, install, and service across all of Central and
              Eastern Kentucky.
            </p>
            <Link
              href="/about"
              className="text-accent font-medium hover:underline underline-offset-4 transition-colors"
            >
              Read Our Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
