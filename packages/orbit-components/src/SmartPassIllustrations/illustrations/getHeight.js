// @flow
import theme from "../../defaultTheme";
import { SIZE_OPTIONS } from "../../primitives/IllustrationPrimitive/consts";
import type { Sizes } from "..";

const getHeightToken = (size: Sizes) => {
  const tokens = {
    [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.heightIllustrationSmall,
    [SIZE_OPTIONS.SMALL]: "120px",
    [SIZE_OPTIONS.MEDIUM]: theme.orbit.heightIllustrationMedium,
    [SIZE_OPTIONS.LARGE]: "280px",
    [SIZE_OPTIONS.DISPLAY]: "460px",
  };
  return tokens[size];
};

export default getHeightToken;
