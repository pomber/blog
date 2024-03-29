import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index";
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index";
import merge from "deepmerge";

const pageInnerMargin = 85;
const contentWidth = 420;

const codeTheme = [
  {
    types: [
      "attr-name",
      "variable",
      "constant",
      "function",
      "class-name",
      "selector",
    ],
    style: {
      color: "white",
    },
  },
  {
    types: ["deleted", "string", "attr-value", "char", "number", "inserted"],
    style: {
      color: "#aaf6d9",
    },
  },
  {
    types: ["comment"],
    style: {
      color: "white",
      fontStyle: "italic",
    },
  },
  {
    types: ["builtin", "changed", "keyword", "punctuation", "operator", "tag"],
    style: {
      color: "#aaf6d9",
    },
  },
];

export default merge.all([
  blogTheme,
  wavesTheme,
  {
    colors: {
      text: "#333",
      background: "#fafafa",
      sideColor: "#eee",
      sideBackground: "#202226",
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
      },
      waves: {
        Section: {
          width: contentWidth * 2 + pageInnerMargin * 2,
          marginLeft: -(contentWidth + 2 * pageInnerMargin),
        },
        ScrollerContainer: {
          flex: null,
          width: "content",
          paddingLeft: pageInnerMargin,
        },
        CodeContainer: {
          width: "content",
          paddingRight: "pageInnerMargin",
        },
        CodeSticker: {
          border: 0,
        },
        theme: {
          default: {
            code: { color: "white", background: "#202226" },
            pre: { color: "white", background: "#202226" },
            styles: codeTheme,
          },
        },
      },
    },
  },
]);
