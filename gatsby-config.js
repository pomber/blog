module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
        ],
        remarkPlugins: [require(`remark-slug`), require(`remark-import-code`)],
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: { mdx: false },
    },
    `gatsby-theme-waves`,
  ],
  siteMetadata: {
    title: `Blog by @pomber`,
    author: `Rodrigo Pombo`,
    description: `Posts by @pomber. JavaScript, React, dev tools, animations and more`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/pomber`,
      },
      {
        name: `github`,
        url: `https://github.com/pomber`,
      },
    ],
  },
};
