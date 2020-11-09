// @flow
import { useEffect, useState } from "react";

import boundingClientRect from "../../utils/boundingClientRect";
import type { UseDimensions } from "./useDimensions";

const defaultPositions = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  pureTop: 0,
  pureLeft: 0,
  pureRight: 0,
  pureBottom: 0,
};

const useDimensions: UseDimensions = ({ iconBoundingRef }) => {
  const [dimensions, setDimensions] = useState({
    set: false,
    iconBounding: {
      ...defaultPositions,
    },
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const iconBounding = boundingClientRect(iconBoundingRef);

      setDimensions({
        set: true,
        iconBounding,
      });
    };

    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);
    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [iconBoundingRef]);

  return dimensions;
};

export default useDimensions;
