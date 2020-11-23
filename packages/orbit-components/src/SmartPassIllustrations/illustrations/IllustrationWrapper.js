// @flow
import * as React from "react";

import getHeightToken from "./getHeight";
import type { Props } from "..";

type WrapperProps = {|
  ...Props,
  viewBox: string,
  children: React.Node,
|};

const IllustrationWrapper = ({
  size = "medium",
  viewBox,
  title,
  description,
  ariaLabelledby,
  dataTest,
  children,
}: WrapperProps) => {
  const height = getHeightToken(size);

  return (
    <svg
      height={height}
      data-test={dataTest}
      viewBox={viewBox}
      fill="none"
      role="img"
      aria-labelledby={ariaLabelledby}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={ariaLabelledby}>{title}</title>
      <desc>{description}</desc>
      {children}
    </svg>
  );
};

export default IllustrationWrapper;
