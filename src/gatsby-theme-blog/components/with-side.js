/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";

const WithSide = ({ content, side }) => {
  return (
    <div sx={{ position: "relative" }}>
      <div
        sx={{
          position: "absolute",
          right: "sideRight",
          top: 0,
          color: "sideColor",
          width: "content",
          textAlign: "right",
        }}
      >
        {side}
      </div>
      {content}
    </div>
  );
};

export default WithSide;
