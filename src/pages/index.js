import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Icon from '../components/Icon'

const AboutContainer = styled.div`
  text-align: center;
`

const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`

const IconWrapper = styled.a`
  color: #bbb;
  transition: all 1s ease;

  &:hover {
    color: ${props => props.color};
    transform: scale(1.3);
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        home: markdownRemark(fileAbsolutePath: { regex: "/data/home.md/" }) {
          frontmatter {
            socials {
              name
              url
              color
              icon
            }
          }
          html
        }
      }
    `}
    render={({ avatar, home }) => (
      <Layout>
        <Img fixed={avatar.childImageSharp.fixed} style={{ borderRadius: 75 }} />

        <AboutContainer dangerouslySetInnerHTML={{ __html: home.html }} />

        <SocialContainer>
          {home.frontmatter.socials.map(social => (
            <IconWrapper
              key={social.name}
              target='_blank'
              href={social.url}
              title={social.name}
              color={social.color}
            >
              <Icon size='2x' icon={social.icon} />
            </IconWrapper>
          ))}
        </SocialContainer>
      </Layout>
    )}
  />
)
