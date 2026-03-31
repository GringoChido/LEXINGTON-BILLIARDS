const BASE_URL = "https://lexingtonbilliardsandspas.com"

interface HowToStep {
  name: string
  text: string
}

interface HowToProps {
  name: string
  description: string
  image?: string
  steps: HowToStep[]
}

export const HowToSchema = ({ name, description, image, steps }: HowToProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(image && { image: `${BASE_URL}${image}` }),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
