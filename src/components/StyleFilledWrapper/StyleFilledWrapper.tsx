/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft4 } from "../../icons/ArrowLeft4";
import { ArrowRight2 } from "../../icons/ArrowRight2";
import { Tag } from "../Tag";
import "./style.css";

interface Props {
  style: "filled" | "filledgreytext" | "stroke";
  className: any;
  tagIconWrapperIcon: JSX.Element;
  override: JSX.Element;
}

export const StyleFilledWrapper = ({
  style,
  className,
  tagIconWrapperIcon = <ArrowLeft4 className="icon-instance-node-2" color="#E76F51" />,
  override = <ArrowRight2 className="icon-instance-node-2" color="#E76F51" />,
}: Props): JSX.Element => {
  return (
    <div className={`style-filled-wrapper ${className}`}>
      <Tag
        cButtonTextClassName={`${style === "filledgreytext" && "class-3"}`}
        className={`${style === "stroke" ? "class" : "class-2"}`}
        iconWrapperIcon={tagIconWrapperIcon}
        override={override}
        text="SUBSCRIBE"
      />
    </div>
  );
};

StyleFilledWrapper.propTypes = {
  style: PropTypes.oneOf(["filled", "filledgreytext", "stroke"]),
};
