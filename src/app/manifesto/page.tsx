import type { Metadata } from "next"
import ManifestoClient from "./ManifestoClient"

export const metadata: Metadata = {
  title: "Manifesto — Bugbuster Culture",
  description:
    "Manifesto do Bugbuster Culture: qualidade como atitude coletiva, guia vivo para decisões, times e comunidades.",
  openGraph: {
    title: "Manifesto — Bugbuster Culture",
    description:
      "Qualidade como cultura: princípios claros, prática diária e impacto real.",
    type: "article",
  },
  alternates: { canonical: "/manifesto" },
}

export default function ManifestoPage() {
  return <ManifestoClient />
}
