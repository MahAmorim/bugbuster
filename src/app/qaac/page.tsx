import type { Metadata } from "next"
import QaacClient from "./QaacClient"

const site = "https://seu-dominio.com"

export const metadata: Metadata = {
  title: "Quality as a Culture (QaaC) | BugBuster Culture",
  description:
    "Quality as a Culture (QaaC) é tratar qualidade como mentalidade coletiva. Entenda pilares, benefícios e como aplicar no dia a dia.",
  alternates: { canonical: `${site}/qaac` },
  openGraph: {
    title: "Quality as a Culture (QaaC) | BugBuster Culture",
    description:
      "Qualidade como cultura: pilares, benefícios e práticas. Veja casos e materiais.",
    url: `${site}/qaac`,
    siteName: "Bugbuster Culture",
    images: [{ url: `${site}/og/qaac.png`, width: 1200, height: 630, alt: "Quality as a Culture" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality as a Culture (QaaC) | BugBuster Culture",
    description:
      "Qualidade como cultura: pilares, benefícios e práticas.",
    images: [`${site}/og/qaac.png`],
  },
  keywords: [
    "QaaC", "Quality as a Culture", "qualidade de software",
    "cultura de qualidade", "testes com intenção", "Bugbuster Culture"
  ],
}

export default function Page() {
  return <QaacClient />
}
