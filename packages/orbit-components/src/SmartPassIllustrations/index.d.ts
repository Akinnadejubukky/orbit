// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/SmartPassIllustration";

export type Sizes = "extraSmall" | "small" | "medium" | "large" | "display";

export interface Props extends Common.Global {
  readonly size?: Sizes;
  readonly title?: string;
  readonly desciption?: string;
  readonly primary?: string;
  readonly secondary?: string;
  readonly ariaLabelledby?: string;
}

declare const SmartPassIllustration: React.FunctionComponent<Props>;

declare const SmartPassV1: typeof SmartPassIllustration;
declare const SmartPassV2: typeof SmartPassIllustration;
declare const SmartPassV3: typeof SmartPassIllustration;
declare const SmartPassV4: typeof SmartPassIllustration;
declare const SmartPassV5: typeof SmartPassIllustration;

export { SmartPassV1 };
export { SmartPassV2 };
export { SmartPassV3 };
export { SmartPassV4 };
export { SmartPassV5 };

export { SmartPassIllustration, SmartPassIllustration as default };
