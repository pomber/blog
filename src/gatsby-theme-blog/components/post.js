/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <div sx={{ position: "relative" }}>
        <Styled.h1 sx={{ paddingBottom: 80 }}>{post.title}</Styled.h1>
        <div
          sx={{
            position: "absolute",
            right: "sideRight",
            color: "background",
            top: 0,
            width: "content",
            textAlign: "right",
          }}
        >
          <Styled.p
            sx={{
              fontSize: 1,
            }}
          >
            {post.date}
          </Styled.p>
        </div>
      </div>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
  </Layout>
);

export default Post;
