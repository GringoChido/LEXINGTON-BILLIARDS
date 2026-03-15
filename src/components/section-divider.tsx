type DividerProps = {
  from: string
  to: string
  flip?: boolean
}

export const WaveDivider = ({ from, to, flip = false }: DividerProps) => (
  <div
    className="relative -mt-px -mb-px"
    style={{ background: from, transform: flip ? "scaleY(-1)" : undefined }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="block w-full h-12 sm:h-16 lg:h-20"
      fill={to}
    >
      <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
    </svg>
  </div>
)

export const AngleDivider = ({ from, to, flip = false }: DividerProps) => (
  <div
    className="relative -mt-px -mb-px"
    style={{ background: from, transform: flip ? "scaleX(-1)" : undefined }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="block w-full h-10 sm:h-14 lg:h-16"
      fill={to}
    >
      <polygon points="0,60 1440,0 1440,60" />
    </svg>
  </div>
)
