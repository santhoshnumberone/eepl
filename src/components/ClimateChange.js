import { Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ClimateChangeVideoSource from '../assets/videos/2018HD_celsius_1080p30.mp4'
import { graphql,  useStaticQuery } from 'gatsby'
import {AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
import {MdZoomOutMap} from 'react-icons/md'

const ClimateChange = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
          name: {in: ["Pi"]}}) {
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

    return (

        <ClimateChangeContainer>
            <CompanyTag><Quote1><sup><LeftQuote/></sup> WE ARE AS GODS AND MIGHT AS WELL GET GOOD AT IT <sup><RightQuote/></sup> - <QuoteName>STEWART BRAND / EDMUND LEACH</QuoteName></Quote1><Quote2><sup><LeftQuote/></sup> BE THE CHANGE YOU WANT TO SEE IN THE WORLD <sup><RightQuote/></sup> - <QuoteName>MAHATMA GANDHI / ANONYMOUS</QuoteName></Quote2></CompanyTag>            
            <CompanyConatiner css={''}>
            
            <HeadLine css={''}>
                <Vision>
                <Title>PLAYING AN ACTIVE PART IN ACCELERATING</Title>
                <NavLink1 to={"https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-13-climate-action.html"}>GOAL 13: CLIMATE ACTION BY UNDP</NavLink1>
                <MainMessage css={''}>To limit warming to 1.5&#8451;, global net CO<sub>2</sub> emissions must drop by 45% between 2010 and 2030, and reach net zero around 2050.</MainMessage>
                </Vision>
                <Space css={'height:1.0rem;'}></Space>
                <Message1>
                <Invite1>
                WANT TO KNOW MORE BEFORE INVESTING?
                </Invite1>
                <InviteSpecific1>
                    GET IN TOUCH
                </InviteSpecific1>
                <ContactImageContainer1 css={''}>
                        {data.allFile.edges.map((image, key) =>(
                            <ContactImage key={key} fluid={image.node.childImageSharp.fluid}/>
                        ))}
                </ContactImageContainer1 >
                
                <LinkedInDetails1><LinkedInIcon/><Description ><ProfileLink to={"https://www.linkedin.com/in/santhosh-electraanu"}>SANTHOSH</ProfileLink></Description></LinkedInDetails1>
                <Phone1><PhoneIcon/><Description>+91-8105415436</Description></Phone1>
                <Email1><EmailIcon/><Description>santhosh@electraanuenergy.com</Description></Email1>
                </Message1>
            </HeadLine>
            {/* Regular website temperature */}
            <ClimateChangeTemperatureOutter css={''}>
                <Source css={''}>NASA Global Climate Change - <NavLink to={"https://climate.nasa.gov/climate_resources/139/video-global-warming-from-1880-to-2019/"}>Global warming from 1880 to 2019</NavLink>
                </Source>
                <ClimateChangeTemperature css={''}><ZoomOutOption/>
                <TemperatureChangeVideo src={ClimateChangeVideoSource} type="video/mp4" autoPlay loop muted playsInline/>
                </ClimateChangeTemperature>
                <VideoInfo css={''}>
                    <DataInfo css={''}>
                    <strong>Data: </strong>Provided by Robert B. Schmunk (NASA/GSFC GISS).
                    </DataInfo>
                    <CreditInfo css={''}>
                    <strong>Credit: </strong><NavLink to={"https://svs.gsfc.nasa.gov/4787"}>NASA's Scientific Visualization Studio.</NavLink>
                    </CreditInfo>
                </VideoInfo>
            </ClimateChangeTemperatureOutter>
            {/* Horizontal Info */}
            <InfoContainer >
                        <InviteHorizontal>
                        <ContactMessage1>
                        WANT TO KNOW MORE BEFORE INVESTING?
                        </ContactMessage1>
                        <ContactMessage2>
                        GET IN TOUCH
                        </ContactMessage2>
                        </InviteHorizontal>
                                                
                        <ContactImageContainer css={''}>
                        {data.allFile.edges.map((image, key) =>(
                            <ContactImage key={key} fluid={image.node.childImageSharp.fluid}/>
                        ))}
                        </ContactImageContainer >
                        <ContactDetails >
                            <ContactBox >
                                <LinkedInIcon/>
                                <Description css="  -webkit-user-select: none; /* Safari */ -moz-user-select: none; /* Firefox */ -ms-user-select: none; /* IE10+/Edge */  user-select: none; /* Standard */"><ProfileLink to={"https://www.linkedin.com/in/santhosh-electraanu"}>SANTHOSH</ProfileLink></Description>
                            </ContactBox>
                            <ContactBox >
                                <PhoneIcon/>
                                <Description>+91-8105415436</Description>
                            </ContactBox>
                            <ContactBox >
                                <EmailIcon/>
                                <Description>santhosh@electraanuenergy.com</Description>
                            </ContactBox>
                        </ContactDetails>
              </InfoContainer>

              <Message2>
              <Invite2>
              WANT TO KNOW MORE BEFORE INVESTING?
              </Invite2>
              <InviteSpecific2>
                  GET IN TOUCH
              </InviteSpecific2>
              <ContactImageContainer2 css={''}>
                      {data.allFile.edges.map((image, key) =>(
                          <ContactImage key={key} fluid={image.node.childImageSharp.fluid}/>
                      ))}
              </ContactImageContainer2 >
              
              <LinkedInDetails2><LinkedInIcon/><Description ><ProfileLink to={"https://www.linkedin.com/in/santhosh-electraanu"}>SANTHOSH</ProfileLink></Description></LinkedInDetails2>
              <Phone2><PhoneIcon/><Description>+91-8105415436</Description></Phone2>
              <Email2><EmailIcon/><Description>santhosh@electraanuenergy.com</Description></Email2>
              </Message2>
            </CompanyConatiner>
        </ClimateChangeContainer>
    )
}

export default ClimateChange

const QuoteName = styled.div`
color:#ff1010;`

const LeftQuote = styled(ImQuotesLeft)`
font-size:0.4rem;
color: #ff1010;
`
const RightQuote = styled(ImQuotesRight)`
font-size:0.4rem;
color: #ff1010;`

const ZoomOutOption = styled(MdZoomOutMap)`
position:absolute;
font-size: 10rem;
color:red;
display:none;
`
const CompanyTag = styled.div`
display: flex;
flex-direction: row;
font-size: 0.6rem;
margin-top:0.1rem;
justify-content: space-evenly;

@media screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    margin-left:2rem;
    margin-right:2rem;
    
  }

  @media screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    margin-left:4rem;
    margin-right:3.5rem;
    
  }
  @media screen and (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    margin-left:3rem;
    margin-right:1.5rem;
    
  }
  @media screen and (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    margin-left:2rem;
    margin-right:2.5rem;
    
  }
  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: center;
    margin-left:0.8rem;
    margin-right:0.8rem;
    
  }
    animation: fadeIn ease-in 2.6s;
    -webkit-animation: fadeIn ease-in 2.6s;
    -moz-animation: fadeIn ease-in 2.6s;
    -o-animation: fadeIn ease-in 2.6s;
    -ms-animation: fadeIn ease-in 2.6s;
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
      }`

const Quote1 = styled.div`
transition: transform .2s;
display: inline-flex;
flex-wrap: wrap;
gap: 0.2rem;
felx-direction: column;
&:hover{
  -ms-transform: scale(1.15); /* IE 9 */
  -webkit-transform: scale(1.15); /* Safari 3-8 */
  transform: scale(1.15); 
}`

const Quote2 = styled.div`
display: inline-flex;
flex-wrap: wrap;
gap: 0.2rem;
felx-direction: column;
transition: transform .2s;
&:hover{
  -ms-transform: scale(1.15); /* IE 9 */
  -webkit-transform: scale(1.15); /* Safari 3-8 */
  transform: scale(1.15); 
}`

const ContactBox = styled.div`
    font-size:1.0rem;
    text-align: justify;
    margin-top: 0.1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    line-height: 1.2 !important;
    letter-spacing: -1.1px; 

    display: flex;
    align-items: center;
    height: 1%;
    width: 90%;
    align-self:end;
    position: relative;
    `

const ContactDetails = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content:space-evenly;
`

const ClimateChangeTemperature = styled.div`
padding-left:2rem;
padding-right:2rem;
padding: 0.9rem;
width:91%;
height: 100%;
overflow:hidden;
z-index:1000;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
@media screen and (max-width: 1360px) {
  min-width:100%;
  padding-left:0.6rem;
  padding-right:2.5rem;}
@media screen and (max-width: 780px) {
    min-width:100%;
    padding-left:0.6rem;
    padding-right:2.6rem;}
@media screen and (max-width: 414px) {
  min-width:100%;
  padding-left:0.6rem;
  padding-right:0.9rem;}
`

const ClimateChangeContainer = styled.div`
position: relative;
width: 100%;
height: 100%;

`
const CompanyConatiner = styled.div`
padding-right: 2rem;
padding-left: 2rem;
display:flex;
flex-direction: row;
position: relative;
@media screen and (max-width: 1360px) {
    flex-direction: column;}
`

const HeadLine = styled.div`
flex: 0 0 24rem;
border: 0;
margin: 0;
letter-spacing: -1.1px;
max-height: 33rem;
font-size: 1.5rem;
font-weight: bold;
line-height: 1.2 !important;
margin-right: 0.1em;
margin-left: 0.1rem;
position: relative;
z-index: 600;
padding: 0.6rem calc((100vw - 1300px) / 2);
text-align: center;
color: #1227DC;
@media screen and (max-width: 1360px) {
    max-height:9.6rem;
    padding-bottom: 2rem;
    padding-right: 1rem;
    padding-left: 1rem;}
@media screen and (max-width: 590px) {
    line-height: 1.2 !important;}  
`

const Vision = styled.div`
background: #f6f6f6;
// box-shadow: 0 0 0 1px  #1227DC;
// box-shadow: 0.1rem 0.1rem 0.1rem 1px #1227DC;
box-shadow: /* ie */
                 0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #1227DC, /* bottom */
                 2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
-webkit-box-shadow:
                0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                0px  2px  2px  0px  #1227DC, /* bottom */
                2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
-moz-box-shadow:
                0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #1227DC, /* bottom */
                 2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
border-radius: 4px 4px;
padding: 0.69rem;
padding-top: 0.5rem;
margin-top:0.6rem;
animation: fadeIn ease-in 5s;
-webkit-animation: fadeIn ease-in 5s;
-moz-animation: fadeIn ease-in 3.7s;
-o-animation: fadeIn ease-in 5s;
-ms-animation: fadeIn ease-in 5s;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
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

const Title = styled.div`
letter-spacing: -1.1px;
text-align: center;
// color: #0a0a0a;
color:black;
font-size: clamp(1.4rem, 3.3vw, 1.63rem);
font-weight: bold;

padding-bottom:0.6rem;
line-height: 1.0 !important;
position: relative;
z-index: 600;
@media screen and (max-width: 1360px) {
    text-align: center;}
@media screen and (max-width: 590px) {
    line-height: 1.2 !important;
    padding-bottom:0.1rem;}
`
const NavLink1 = styled(Link)`
cursor: pointer;
border: 0;
text-decoration: none;
background: none;
text-align: center;
color: #ff1010;
font-size: clamp(1.1rem, 3.3vw, 1.46rem);
font-weight: bold;
line-height: 1.0 !important;
position: relative;
z-index: 600;
&:hover{
    color: #ff1010;
    text-decoration: underline;
}
@media screen and (max-width: 590px) {
    line-height: 1.2 !important;}
`

const MainMessage = styled.div`
letter-spacing: -1.1px;
text-align: justify;
// color: #221bff;
color: #1227DC;
font-size: clamp(1.0rem, 3.3vw, 1.1rem);
font-weight: bold;
line-height: 1.2 !important;
margin-right: 0.1em;
margin-left: 0.1rem;
position: relative;
@media screen and (max-width: 1360px) {
    text-align: center;}
@media screen and (max-width: 590px) {
    line-height: 1.2 !important;
    padding-bottom:0.1rem;
    text-align: justify;}
`
const Space = styled.div`
@media screen and (max-width: 1360px) {
    display: none;}`

const Message1 = styled.div`
@media screen and (max-width: 1360px) {
  display:none;}
background: #f6f6f6;
// box-shadow: 0 0 0 1px  #1227DC;
box-shadow: /* ie */
                 0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #1227DC, /* bottom */
                 2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
-webkit-box-shadow:
                0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                0px  2px  2px  0px  #1227DC, /* bottom */
                2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
-moz-box-shadow:
                0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #1227DC, /* bottom */
                 2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
border-radius: 4px 4px;
padding: 0.69rem;
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

const Invite1 = styled.div`
padding-top:0.1rem;
font-size: 1.28rem;
text-align: center;
color: black;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */`

const InviteSpecific1 = styled.div`
font-size: 1.15rem;
text-align: center;
color: #ff1010;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */`

const LinkedInDetails1 = styled.div`
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;`

const Phone1 = styled.div`
padding-top:0.4rem;
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
`

const Email1 = styled.div`
padding-top:0.4rem;
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
`
const ContactImageContainer1 = styled.div`
text-align: center;
margin: 0 auto;
align-self: center;
justify-self: center;
justify-content: center;
width:100%; 
max-width: 33%;
-o-object-fit: cover;
object-fit: cover;
position: relative;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
`

const Message2 = styled.div`
background: #f6f6f6;
color: #1227DC;
// box-shadow: 0 0 0 1px  #1227DC;
box-shadow: /* ie */
                 0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #1227DC, /* bottom */
                 2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
-webkit-box-shadow:
                0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                0px  2px  2px  0px  #1227DC, /* bottom */
                2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
-moz-box-shadow:
                0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #1227DC, /* bottom */
                 2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
border-radius: 4px 4px;
display:none;
@media screen and (max-width: 960px) {
  display:block;
  margin-top:1rem;
  padding: 1rem;
  padding-top:0.1rem;
  margin-bottom:1rem;
  align-self: center;
  justify-self: center;
  justify-content: center;
  line-height: 1.0 !important;
  letter-spacing: -1.1px;}
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

const Invite2 = styled.div`
padding-top:1.6rem;
font-size: 1.28rem;
text-align: center;
color: black;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */`

const InviteSpecific2 = styled.div`
padding-top:0.2rem;
font-size: 1.15rem;
text-align: center;
color: #ff1010;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */`

const LinkedInDetails2 = styled.div`
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */`

const Phone2 = styled.div`
padding-top:0.4rem;
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
`

const Email2 = styled.div`
padding-top:0.4rem;
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
`
const ContactImageContainer2 = styled.div`
text-align: center;
margin: 0 auto;
align-self: center;
justify-self: center;
justify-content: center;
width:100%; 
max-width: 33%;
-o-object-fit: cover;
object-fit: cover;
position: relative;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
`
const InfoContainer = styled.div`
  background: #f6f6f6;
  color: #1227DC;
  // box-shadow: 0 0 0 1px  #1227DC;
  box-shadow: /* ie */
                 0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #1227DC, /* bottom */
                 2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
-webkit-box-shadow:
                0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                0px  2px  2px  0px  #1227DC, /* bottom */
                2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
-moz-box-shadow:
                0px -2px 2px -1px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #1227DC, /* bottom */
                 2px  0px  2px  0px  #1227DC, /* right */
                -2px  0px  2px  0px  #1227DC; /* left */
  border-radius: 4px 4px;
  display: none;
  @media screen and (max-width: 1360px) and (min-width: 960px) {
    max-height:9rem;
    display: grid;
    justify-content: center;
    padding-top:0.5rem;
    padding-bottom: 0.5rem;
    margin-top:1rem;
    margin-bottom:1.5rem;
    align-content: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-columns: 180px 280px 330px;
    justify-items:center;
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

const InviteHorizontal = styled.div`
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */`

const ContactMessage1 = styled.div`
font-size: clamp(1.0rem, 1.5vw, 1.2rem);
text-align: justify;
margin-top: 1.0rem;
margin-right: 1rem;
margin-left: 1rem;
line-height: 1.0 !important;
letter-spacing: -1.1px;

@media screen and (max-width: 1360px) {
  width: 15rem;
  max-height: 3rem;
  justify-content: center;
  align-content: center;
  display: grid;
  justify-content: center;
  // align-content: center;
  // grid-template-columns: 1fr;
  // max-width: 100%;
  // padding: 0 2rem;
  font-size: 1.28rem;
  text-align: center;
  color: black;
}

@media screen and (max-width: 780px) {
  margin-top: 60rem;
  max-height: 3rem;
  justify-content: center;
  align-content: center;
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 1.28rem;
  text-align: center;
  color: black;
}
`
const ContactMessage2 = styled.div`
color: #ff1010;
@media screen and (max-width: 1360px) {
  width: 15rem;
  max-height: 3rem;
  justify-content: center;
  align-content: center;
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 1.28rem;
  text-align: center;
}

@media screen and (max-width: 780px) {
  margin-top: 60rem;
  max-height: 3rem;
  justify-content: center;
  align-content: center;
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 1.28rem;
  text-align: center;
  color: black;
}

`


const ContactImageContainer = styled.div`
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
position: relative;
`

const ContactImage = styled(Img)`
border-radius: 51%;
`
const ClimateChangeTemperatureOutter = styled.div`
position: relative;
text-align: center;
justify-content: center;
align-items: center;
min-width: 59rem;
width: 100%;
height: 100%;
@media screen and (max-width: 1360px) {
  padding-left: 2rem;
  min-width: 22rem;}

@media screen and (max-width: 780px) {
  margin-top: 0.6rem;}


@media screen and (max-width: 650px) {
  margin-top: 3.1rem;}

@media screen and (max-width: 414px) {
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  margin-top: 7rem;}
@media screen and (max-width: 375px) {
  padding-left: 0.1rem;
  padding-right: 0.7rem;
  margin-top: 6rem;}
  
@media screen and (max-width: 360px) {
  padding-left: 0.1rem;
  padding-right: 1.9rem;
  margin-top: 7.6rem;}
@media screen and (max-width: 320px) {
  padding-left: 0.1rem;
  padding-right: 6rem;
  margin-top: 9.9rem;}
// @media screen and (max-width: 510px) {
// margin-top: 3rem;}

animation: fadeIn ease-in 4.5s;
-webkit-animation: fadeIn ease-in 4.5s;
-moz-animation: fadeIn ease-in 4.5s;
-o-animation: fadeIn ease-in 4.5s;
-ms-animation: fadeIn ease-in 4.5s;
z-index:1000; 

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


const Source = styled.div`
font-size: clamp(0.9rem, 3.1vw, 1.1rem);
line-height: 1.2 !important;
letter-spacing: -1.1px;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
@media screen and (max-width: 690px) {
    margin-left: 0.1rem;
    margin-right: 1.9rem;
}
@media screen and (max-width: 510px) {
  margin-left: 0.1rem;
  margin-right: 1.9rem;
}
`

const TemperatureChangeVideo = styled.video`
width: 100%;
height: 110%;
-o-object-fit: cover;
object-fit: cover;
box-shadow: 0 0 0 6px  #ff1010;
border-radius: 6px 6px;
z-index:1000;
// &:hover{
//   filter: brightness(96%);
// }
`

const DataInfo = styled.div`
font-size: clamp(0.9rem, 3.1vw, 1.0rem);
line-height: 1.2 !important;
letter-spacing: -1.1px;`

const CreditInfo = styled.div`
font-size: clamp(0.9rem, 3.1vw, 1.0rem);
line-height: 1.2 !important;
letter-spacing: -1.1px;`

const VideoInfo = styled.div`
font-size: clamp(0.9rem, 3.1vw, 1.1rem);
line-height: 1.2 !important;
letter-spacing: -1.1px;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
// @media screen and (max-width: 640px) {
//     margin-left: 0.5rem;
// }
@media screen and (max-width: 690px) {
  margin-left: 0.1rem;
  margin-right: 1.9rem;
}
@media screen and (max-width: 510px) {
margin-left: 0.1rem;
margin-right: 1.9rem;
}
`
const LinkedInIcon = styled(AiFillLinkedin)`
font-size: 1.4rem;
text-align: justify;`
const PhoneIcon = styled(FiPhoneCall)`
font-size: 1.4rem;
text-align: justify;`
const EmailIcon = styled(HiOutlineMail)`
font-size: 1.4rem;
text-align: justify;`

const Description = styled.p`
text-align: justify;
font-size: 0.87rem; 
padding: 0.1rem;`

const ProfileLink = styled(Link)`
text-align: justify;
font-size: 0.87rem; 
padding: 0.1rem;
&:hover{
  color:#ff1010;
  text-decoration: underline;
}`

const NavLink = styled(Link)`
display:absolute;
cursor: pointer;
text-decoration:none;
border: 0;
margin: 0;
padding: 0;

background: none;
text-align: center;
color: #ff1010;

line-height: 1.4 !important;
margin: 0;
position: relative;
text-shadow: 0 1px white;
z-index: 600;
&:hover{
    color: #ff1010;
    text-decoration: underline;}
`