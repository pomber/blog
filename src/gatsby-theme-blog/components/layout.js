/** @jsx jsx */
import { jsx, css, Styled } from "theme-ui";
import { Global } from "@emotion/core";

export default ({ children, ...props }) => (
  <Styled.root sx={{ display: "flex", width: "100%" }}>
    <Global styles={{ body: { margin: 0 } }} />
    <aside
      sx={{
        flex: "50% 0 0",
        minHeight: "100vh",
        backgroundColor: "sideBackground",
        boxSizing: "border-box",
        paddingTop: "pageTopMargin",
        paddingBottom: "pageBottomMargin",
      }}
    />
    <div
      sx={{
        flex: "50% 0 0",
        minHeight: "100vh",
        boxSizing: "border-box",
        paddingTop: "pageTopMargin",
        paddingLeft: "pageInnerMargin",
        paddingBottom: "pageBottomMargin",
      }}
    >
      <div sx={{ width: "content" }}>{children}</div>
    </div>
  </Styled.root>
);
