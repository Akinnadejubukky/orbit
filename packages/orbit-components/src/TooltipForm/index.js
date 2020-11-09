// @flow
import React, { useRef } from "react";
import styled from "styled-components";

import TooltipPrimitive from "../primitives/TooltipPrimitive";
import defaultTheme from "../defaultTheme";
import resolveTooltipPosition from "./helpers/resolveTooltipPosition";
import useDimensions from "./hooks/useDimensions";

import type { Props } from "./index";

const StyledFormFeedbackTooltip = styled.div`
  position: absolute;
  ${resolveTooltipPosition};
`;

StyledFormFeedbackTooltip.defaultProps = {
  theme: defaultTheme,
};

const TooltipForm = ({
  iconRef,
  tooltipShown,
  prefferedPosition = "top",
  prefferedAlign,
  dataTest,
  error,
  help,
  inlineLabel,
}: Props) => {
  const contentRef = useRef(null);

  const { iconBounding } = useDimensions({ iconBoundingRef: iconRef }, inlineLabel);

  return (
    <StyledFormFeedbackTooltip
      ref={contentRef}
      data-test={dataTest}
      iconBounding={iconBounding}
      inlineLabel={inlineLabel}
      position="top"
      aria-live="polite"
    >
      {help && !error && (
        <TooltipPrimitive
          preferredPosition={prefferedPosition}
          preferredAlign={prefferedAlign}
          content={help}
          help={!!help}
          tooltipShown={tooltipShown}
        />
      )}
      {error && (
        <TooltipPrimitive
          preferredPosition={prefferedPosition}
          preferredAlign={prefferedAlign}
          content={error}
          error={!!error}
          tooltipShown={tooltipShown}
        />
      )}
    </StyledFormFeedbackTooltip>
  );
};

export default TooltipForm;
