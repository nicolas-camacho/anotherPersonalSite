import React from "react"
import styled from 'styled-components'
//Components
import Layout from "../components/layout/layout"
//resources
import react from "../images/react.svg"
import vue from "../images/vue.svg"
import css3 from "../images/css3.svg"
import gatsby from "../images/gatsby.svg"
import jest from "../images/jest.svg"
import html5 from "../images/html5.svg"

const MeWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  margin: 5px;

  @media (min-width: 600px) {
    margin: 0
  }
`

const MailMe = styled.a`
  color: #58b368;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const Techs = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Logo = styled.img`
  width: ${props => props.msize}px;
  height: ${props => props.msize}px;

  @media (min-width: 600px) {
    width: ${props => props.dsize}px;
    height: ${props => props.dsize}px;
  }
`

const LOGOS = [html5, css3, react, vue, jest, gatsby]; 

const IndexPage = () => (
  <Layout>
    <MeWrapper>
      <p>Hi <span role="img" aria-label="greeting">👋</span>, I'm Nicolas.</p>
      <p>I'm a passionate web developer focused on frontend technologies, currently living in Barranquilla, Colombia.</p>
      <p>If you want to contact me, <MailMe href="mailto:nicolas.aguilar1999@gmail.com">email</MailMe> is a great choice.</p>
      <p>Technologies that I actually handle:</p>
    </MeWrapper>
    <Techs>
      {LOGOS.map((logo, index) => {
        return (
          <Logo key={index} src={logo} dsize={70} msize={50} />
        )
      })}
    </Techs>
  </Layout>
)

export default IndexPage
