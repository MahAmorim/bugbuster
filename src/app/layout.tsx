import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Importando o Header e Footer globais
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "🐞⚡ Bugbuster Culture — Qualidade como Cultura",
  description:
    "Movimento aberto que transforma qualidade em impacto real. Manifesto, problemas e soluções, QaaC (Quality as a Culture) e próximos passos para construir o futuro da qualidade como cultura.",
  generator: "Bugbuster Culture",
  keywords: [
    "QA",
    "Qualidade de Software",
    "Quality as a Culture",
    "QaaC",
    "Cultura Antifrágil",
    "Testes com intenção",
    "Manifesto Bugbuster",
    "Comunidade QA",
    "Marcela Amorim",
    "Software Testing",
    "Qualidade como Cultura",
  ],
  authors: [{ name: "Marcela Amorim", url: "https://linktr.ee/qa.marcelaamorim" }],
  openGraph: {
    type: "website",
    url: "https://bugbusterculture.github.io/",
    siteName: "Bugbuster Culture",
    title: "Bugbuster Culture — Qualidade como Cultura",
    description:
      "Movimento que transforma qualidade em impacto real: manifesto, problemas e soluções, QaaC e próximos passos. Seja parceiro e construa o futuro da qualidade.",
    images: [
      {
        url: "https://bugbusterculture.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bugbuster Culture",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@qa_marcelaamorim",
    creator: "@qa_marcelaamorim",
    title: "Bugbuster Culture — Qualidade como Cultura",
    description:
      "Qualidade como atitude, não como fase. Conheça o manifesto, soluções, QaaC e próximos passos do movimento Bugbuster.",
    images: ["https://bugbusterculture.github.io/og-image.png"],
  },
  metadataBase: new URL("https://bugbusterculture.github.io"),
  alternates: {
    canonical: "https://bugbusterculture.github.io",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {/* Header global */}
        <Header />

        {/* Conteúdo da página */}
        <main className="pt-16">{children}</main>

        {/* Footer global */}
        <Footer />

        {/* Analytics */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
