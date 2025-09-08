import type { Metadata } from "next"
import SobreClient from "./SobreClient"
const site =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://seu-dominio.com"

export const metadata: Metadata = {
  title: "Sobre | BugBuster Culture",
  description:
    "Um movimento independente que trata qualidade como cultura — conheça propósito, história e valores.",
  alternates: { canonical: `${site}/sobre` },
  openGraph: {
    title: "Sobre | BugBuster Culture",
    description:
      "Qualidade como atitude coletiva: propósito, ideação e valores.",
    url: `${site}/sobre`,
    siteName: "BugBuster Culture",
    images: [{ url: `${site}/og/sobre.png`, width: 1200, height: 630, alt: "Sobre a BugBuster Culture" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre | BugBuster Culture",
    description:
      "Conheça a visão, a ideação e os valores do movimento BugBuster Culture.",
    images: [`${site}/og/sobre.png`],
  },
  keywords: [
    "qualidade de software",
    "cultura de qualidade",
    "Quality as a Culture",
    "Bugbuster Culture",
    "manifesto",
    "ideação",
  ],
}

export default function Page() {
  return <SobreClient />
}
