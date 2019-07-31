import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index";
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index";
import merge from "deepmerge";

const pageInnerMargin = 85;
const contentWidth = 420;
const darkerBlue = "#0f8f5e";
const lightBlue = "#aaf6d9";
const lighterBlue = "#ebfcf6";

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
      color: lightBlue,
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
      color: lightBlue,
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
      primary: "#387780",
      modes: null,
      highlight: lighterBlue,
      // muted: lighterBlue,
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
      li: {
        marginBottom: "4px",
      },
      h3: {
        marginTop: 4,
      },
      waves: {
        Section: {
          width: contentWidth * 2 + pageInnerMargin * 2,
          marginLeft: -(contentWidth + 2 * pageInnerMargin),
          marginTop: 0,
          marginBottom: 0,
        },
        ScrollerContainer: {
          flex: null,
          width: "content",
          paddingLeft: pageInnerMargin,
        },
        ScrollerStep: {
          padding: 0,
          borderLeft: 0,
          minHeight: "400px",
        },
        ScrollerProgress: {
          backgroundColor: "muted",
          left: "-25px",
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
