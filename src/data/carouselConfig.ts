// Tokens de layout (um lugar só para mexer)
export const CARD_MIN_WIDTH = 320;
export const CARD_GAP = 24;

// Tokens visuais
export const carouselGradients = {
  card: "from-purple-500 via-blue-500 to-cyan-400",
} as const;

// Estilos de progresso (tipados)
export const progressStyles = ["bar", "bounce", "glow"] as const;
export type ProgressStyle = typeof progressStyles[number];

// Textos (fácil de traduzir/trocar)
export const carouselStrings = {
  title: "QaaC em ação: exemplos práticos",
  subtitle:
    "Veja como aplicar o QaaC para acelerar com confiança e reduzir retrabalho.",
  ariaLabel: "Exemplos práticos de Quality as a Culture",
  cta: {
    label: "Ver impacto do QaaC",
    href: "/impacto",
  },
} as const;

// Defaults de props (opcional)
export const defaultCarouselProps = {
  speed: 60,
  autoplay: true,
  drag: true,
  showControls: true,
  edgeFade: true,
  showProgressBar: true,
  progressStyle: "bar" as ProgressStyle,
};
