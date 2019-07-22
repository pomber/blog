module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
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
