module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  siteMetadata: {
    title: `Blog by @pomber`,
    author: `Rodrigo Pombo`,
    description: `Posts by @pomber. JavaScript, React, dev tools, animations. That kind of content.`,
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
