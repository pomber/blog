// import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index";
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index";
import merge from "deepmerge";

const pageInnerMargin = 85;
const contentWidth = 420;

export default merge(blogTheme, {
  colors: {
    text: "#333",
    background: "#fafafa",
    sideColor: "#eee",
    sideBackground: "#333",
    primary: "salmon",
    modes: null,
  },
  space: {
    ...blogTheme.space,
    pageTopMargin: 260,
    pageBottomMargin: 180,
    pageInnerMargin: pageInnerMargin,
    sideRight: contentWidth + 2 * pageInnerMargin,
  },
  sizes: {
    content: contentWidth,
  },
  styles: {
    root: {
      color: "text",
      // display: "flex",
    },
  },
});
