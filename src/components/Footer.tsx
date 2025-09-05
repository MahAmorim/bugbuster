import { Badge } from "@/components/ui/badge"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden mt-20">
      {/* Glow de fundo suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl opacity-40" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Frase forte */}
        <h3 className="text-lg md:text-xl font-bold mb-4 
          bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
          bg-clip-text text-transparent"
        >
          O Futuro é Agora. O Futuro é Qualidade. O Presente é Bugbuster.
        </h3>

        {/* Créditos */}
        <p className="text-muted-foreground mb-6">
          Marcela Amorim — <span className="font-medium">Fundadora do Movimento Bugbuster</span>
        </p>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">#Bugbuster</Badge>
          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md">#QualidadeComoCultura</Badge>
          <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-md">#InovaçãoEQualidade</Badge>
        </div>

        {/* Linha sutil */}
        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bugbuster Culture — Qualidade como Cultura
        </div>
      </div>
    </footer>
  )
}
