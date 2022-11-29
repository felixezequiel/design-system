export interface VariantColor {
  DEFAULT: string;
  100: string;
  400: string;
  700: string;
}

export interface DefaultColor {
  low: VariantColor;
  high: VariantColor;
}

export interface BrandColor {
  primary: VariantColor;
  premium: VariantColor;
  secondary: VariantColor;
  highlight: VariantColor;
}

export interface FeedbackColor {
  alert: VariantColor;
  success: VariantColor;
}

export interface GradientColors {
  secondary: string;
  primary: string;
  premium: string;
  DEFAULT: string;
}

export interface Colors {
  default: DefaultColor;
  brand: BrandColor;
  feedback: FeedbackColor;
  gradient: GradientColors;
}
