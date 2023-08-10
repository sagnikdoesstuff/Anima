import React from "react";
import { StyleFilledWrapper } from "../../components/StyleFilledWrapper";
import { ArrowLeft4 } from "../../icons/ArrowLeft4";
import { ArrowRight2 } from "../../icons/ArrowRight2";
import "./style.css";

export const Box = (): JSX.Element => {
  return (
    <div className="box">
      <div className="div">
        <StyleFilledWrapper
          className="style-filled"
          override={<ArrowRight2 className="icon-instance-node-3" color="#E76F51" />}
          style="filled"
          tagIconWrapperIcon={<ArrowLeft4 className="icon-instance-node-3" color="#E76F51" />}
        />
        <StyleFilledWrapper
          className="style-stroke"
          override={<ArrowRight2 className="icon-instance-node-3" color="#E76F51" />}
          style="stroke"
          tagIconWrapperIcon={<ArrowLeft4 className="icon-instance-node-3" color="#E76F51" />}
        />
        <StyleFilledWrapper
          className="style-filledgreytext"
          override={<ArrowRight2 className="icon-instance-node-3" color="#484848" />}
          style="filledgreytext"
          tagIconWrapperIcon={<ArrowLeft4 className="icon-instance-node-3" color="#484848" />}
        />
      </div>
    </div>
  );
};
