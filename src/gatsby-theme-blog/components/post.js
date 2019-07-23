/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import WithSide from "../components/with-side";
import replaceImportedCode from "remark-import-code/loader";

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
      <WithSide
        content={
          <Styled.h1 sx={{ paddingBottom: "80px" }}>{post.title}</Styled.h1>
        }
        side={
          <Styled.p sx={{ paddingTop: 1 }}>
            <Styled.a
              href="https://pomb.us"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Rodrigo Pombo
            </Styled.a>
            <br />
            <span sx={{ fontSize: 1 }}>{post.date}</span>
          </Styled.p>
        }
      />
      <MDXRenderer>{replaceImportedCode(post.body)}</MDXRenderer>
    </main>
  </Layout>
);

export default Post;
