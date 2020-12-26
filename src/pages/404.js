import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link} from 'gatsby'
// import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql,  useStaticQuery } from 'gatsby'

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
          name: {in: ["image404"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
    return(
  
      <Layout>
        <SEO title="404: Not found" />
        <Fzf>
        <h1 css={'color:#ff0101;'}>404</h1>
        <h1 css={'color:#808080;'}>Sorry, the page you were looking for doesn't exist</h1>
        <FourZeroContainer>
        {data.allFile.edges.map((image, key) =>(
                            <FourZero key={key} fluid={image.node.childImageSharp.fluid}/>
                        ))}</FourZeroContainer>
        <Link to="/">Go back to the homepage</Link>
        </Fzf>
      </Layout>
    )
}

export default NotFoundPage

const Fzf = styled.div`

display: flex;
flex-direction: column;
width: 100%;
height:100%;
// background:blue;
-o-object-fit: cover;
object-fit: cover;
position: relative;
text-align: center;
margin: 0 auto;
align-self: center;
justify-self: center;
justify-content: center;
align-content:space-around;
flex-wrap:wrap;
padding: 1.6rem calc((100vw - 1300px) / 2);

h1{
  font-size:clamp(1.0rem, 6vw, 3.7rem);
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
animation: fadeIn ease-in 1s;
-webkit-animation: fadeIn ease-in 1s;
-moz-animation: fadeIn ease-in 1s;
-o-animation: fadeIn ease-in 1s;
-ms-animation: fadeIn ease-in 1s;
@keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
  }    
`

const FourZero = styled(Img)``

const FourZeroContainer = styled.div`
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
text-align: center;
margin: 0 auto;
align-self: center;
justify-self: center;
justify-content: center;
width:100%; 
max-width: 33%;
-o-object-fit: cover;
object-fit: cover;
position: relative;`