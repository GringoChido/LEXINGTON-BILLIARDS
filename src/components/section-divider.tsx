type DividerProps = {
  from: string
  to: string
}

export const SectionDivider = ({ from, to }: DividerProps) => (
  <div className="-mt-px -mb-px h-1" style={{ background: from }} aria-hidden="true">
    <div className="h-full" style={{ background: to }} />
  </div>
)
