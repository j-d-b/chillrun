import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from 'gatsby-image';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "chillrun.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div><Img style={{ width: 80 }} fluid={data.placeholderImage.childImageSharp.fluid} /></div>
            <span style={{ marginLeft: '1rem' }}>{siteTitle}</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header
