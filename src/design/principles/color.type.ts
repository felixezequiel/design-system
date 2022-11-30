export type VariantPrimary = "primary";
export type VariantSecondary = "secondary";
export type VariantPremium = "premium";
export type VariantHighlight = "highlight";
export type VariantDEFAULT = "DEFAULT";
export type VariantLow = "low";
export type VariantHigh = "high";
export type VariantAlert = "alert";
export type VariantSuccess = "success";

export type Intencity100 = 100;
export type Intencity400 = 400;
export type Intencity700 = 700;

export type KeyIntencity =
  | VariantDEFAULT
  | Intencity100
  | Intencity400
  | Intencity700;

export type Intencity = {
  [key in KeyIntencity]: string;
};

export type KeyDefaultColor = VariantLow | VariantHigh;

export type DefaultColor = {
  [key in KeyDefaultColor]: Intencity;
};

export type KeyBrandColor =
  | VariantPrimary
  | VariantPremium
  | VariantSecondary
  | VariantHighlight;
export type BrandColor = {
  [key in KeyBrandColor]: Intencity;
};

export type KeyFeedbackColor = VariantAlert | VariantSuccess;
export type FeedbackColor = {
  [key in KeyFeedbackColor]: Intencity;
};

export type KeyGradientColor =
  | VariantPrimary
  | VariantSecondary
  | VariantPremium
  | VariantDEFAULT;

export type GradientColors = {
  [key in KeyGradientColor]: string;
};

export type Default = "default";
export type Brand = "brand";
export type Feedback = "feedback";
export type Gradient = "gradient";

export type Principles = Default | Brand | Feedback | Gradient;

export type ValuesColors<K> = K extends Default
  ? DefaultColor
  : K extends Brand
  ? BrandColor
  : K extends Feedback
  ? FeedbackColor
  : K extends Gradient
  ? GradientColors
  : undefined;

export type Colors = {
  [key in Principles]: ValuesColors<key>;
};
