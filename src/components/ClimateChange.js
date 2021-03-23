import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import ClimateChangeVideoSource from '../assets/videos/2018HD_celsius_1080p30.mp4'
import { graphql,  useStaticQuery } from 'gatsby'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {MdPhoneInTalk} from 'react-icons/md'

// import { symbol } from 'prop-types'

const ClimateChange = () => {
    const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }

    query {
      image1: file(relativePath: { eq: "Pi.jpeg" }) {
        ...servicesImage
      }

      image2: file(relativePath: { eq: "initialImage.png" }) {
        ...servicesImage
      }
    }
  `)

    return (

        <ClimateChangeContainer>

          <Vision>
                <Title>PLAYING AN ACTIVE PART IN ACCELERATING</Title>
                <NavLink1 href={"https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-13-climate-action.html"}>GOAL 13: CLIMATE ACTION BY UNDP</NavLink1>
                <MainMessage css={''}>TO LIMIT WARMING TO 1.5&#8451;, GLOBAL NET CO<sub>2</sub> EMISSIONS MUST DROP BY 45% BETWEEN 2010 AND 2030, AND REACH NET ZERO AROUND 2050.</MainMessage>
          </Vision>
          <ProofAndContact>
          <ClimateChangeTemperatureOutter css={''}>
                <Source css={''}>NASA GLOBAL CLIMATE CHANGE - <NavLink href={"https://climate.nasa.gov/climate_resources/139/video-global-warming-from-1880-to-2019/"}>GLOBAL WARMING FROM 1880 TO 2019</NavLink>
                </Source>
                <ClimateChangeTemperature css={''}>
                  <TemperatureChangeVideo poster={data.image2.childImageSharp.gatsbyImageData} src={ClimateChangeVideoSource} type="video/mp4" autoPlay loop muted playsInline/>
                  <Invitation>
                <Invite1>
                WANT TO KNOW MORE BEFORE INVESTING?
                </Invite1>
                <InviteSpecific1>
                    GET IN TOUCH
                </InviteSpecific1>
                <ContactImageContainer1 css={''}>
                  <ContactImage image={data.image1.childImageSharp.gatsbyImageData}/>
                </ContactImageContainer1 >
                <LinkedInDetails1><LinkedInIcon/><Description ><ProfileLink href={"https://www.linkedin.com/in/santhosh-electraanu"}>SANTHOSH</ProfileLink></Description></LinkedInDetails1>
                <Phone1><PhoneIcon/><Description>+91-8105415436</Description></Phone1>
                <Email1><EmailIcon/><Description>santhosh@electraanuenergy.com</Description></Email1>
            </Invitation>
                </ClimateChangeTemperature>
                <VideoInfo css={''}>
                    <DataInfo css={''}>
                    <strong>DATA: </strong>PROVIDED BY ROBERT B. SCHMUNK (NASA/GSFC GISS).
                    </DataInfo>
                    <CreditInfo css={''}>
                    <strong>CREDIT: </strong><NavLink href={"https://svs.gsfc.nasa.gov/4787"}>NASA's SCIENTIFIC VISUALIZATION STUDIO.</NavLink>
                    </CreditInfo>
                </VideoInfo>
              <Message2>
              <Invite2>
              WANT TO KNOW MORE BEFORE INVESTING?
              </Invite2>
              <InviteSpecific2>
                  GET IN TOUCH
              </InviteSpecific2>
              <ContactImageContainer2 css={''}>
              <ContactImage image={data.image1.childImageSharp.gatsbyImageData}/>
              </ContactImageContainer2 >
              
              <LinkedInDetails2><LinkedInIcon/><Description ><ProfileLink href={"https://www.linkedin.com/in/santhosh-electraanu"}>SANTHOSH</ProfileLink></Description></LinkedInDetails2>
              <Phone2><PhoneIcon/><Description>+91-8105415436</Description></Phone2>
              <Email2><EmailIcon/><Description>santhosh@electraanuenergy.com</Description></Email2>
              </Message2>
            </ClimateChangeTemperatureOutter>
            
          </ProofAndContact>
        </ClimateChangeContainer>
    )
}

export default ClimateChange

const ClimateChangeContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
`

const Vision = styled.div`

// background: #f8f9f5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  padding-right: 5px; //5120x.0010=5
  padding-left: 5px;
  margin-top: 43.2px; //2880x0.015=43.2
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    padding-right: 4px; //4096x.0010=4
    padding-left: 4px;
    margin-top: 34.56px; //2304x0.015=34.56
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    padding-right: 4px; //4096x.0010=4
    padding-left: 4px;
    margin-top: 32.4px; //2160x0.015=32.4
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  padding-right: 3px; //3840x.0010=3
  padding-left: 3px;
  margin-top: 32.4px; //2160x0.015=32.4
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    padding-right: 3.2px; //3200x.0010=3.2
    padding-left: 3.2px;
    margin-top: 21.6px; //1440x0.015=21.6
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    padding-right: 3px; //3088x.0010=3
    padding-left: 3px;
    margin-top: 21.6px; //1440x0.015=21.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    padding-right: 3px; //3000x.0010=3
    padding-left: 3px;
    margin-top: 30px; //2000x0.015=30
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    padding-right: 2.96px; //2960x.0010=2.96
    padding-left: 2.96px;
    margin-top: 21.6px; //1440x0.015=21.6
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      padding-right: 2.88px; //2880x.0010=2.88
      padding-left: 2.88px;
      margin-top: 76.8px; //5120x0.015=76.8
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      padding-right: 2.88px; //2880x.0010=2.88
      padding-left: 2.88px;
      margin-top: 27px; //1800x0.015=27
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    padding-right: 2.778px; //2778x.0010=2.778
    padding-left: 2.778px;
    margin-top: 33px; //1284x0.015=19.26
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    padding-right: 2.736px; //2736x.0010=2.736
    padding-left: 2.736px;
    margin-top: 27.36px; //1824x0.015=27.36
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    padding-right: 2.048px; //2732x.0010=2.048
    padding-left: 2.048px;
    margin-top: 30.72px; //2048x0.015=30.72
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    padding-right: 2.688px; //2688x.0010=2.688
    padding-left: 2.688px;
    margin-top: 33px; //1242x0.015=18.63
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      padding-right: 2.560px; //2560x.0010=2.560
      padding-left: 2.560px;
      margin-top: 25.5px; //1700x0.015=25.5
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      padding-right: 2.560px; //2560x.0010=2.560
      padding-left: 2.560px;
      margin-top: 24px; //1600x0.015=24
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      padding-right: 2.560px; //2560x.0010=2.560
      padding-left: 2.560px;
      margin-top: 21.6px; //1440x0.015=21.6
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    padding-right: 2.532px; //2532x.0010=2.532
    padding-left: 2.532px;
    margin-top: 37.98px; //1170x0.015=37.98
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    padding-right: 2.436px; //2436x.0010=2.436
    padding-left: 2.436px;
    margin-top: 16.875px; //1125x0.015=16.875
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    padding-right: 2.4px; //2400x.0010=2.4
    padding-left: 2.4px;
    margin-top: 16.2px; //1080x0.015=16.2
  }	
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    padding-right: 2.388px; //2388x.0010=2.388
    padding-left: 2.388px;
    margin-top: 25.02px; //1668x0.015=25.02
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    padding-right: 2.36px; //2360x.0010=2.36
    padding-left: 2.36px;
    margin-top: 24.6px; //1640x0.015=24.6
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    padding-right: 2.34px; //2340x.0010=2.34
    padding-left: 2.34px;
    margin-top: 16.23px; //1080x0.015=16.23
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    padding-right: 2.31px; //2310x.0010=2.31
    padding-left: 2.31px;
    margin-top: 16.23px; //1080x0.015=16.23
  }	

	@media screen and (max-width: 2304px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      padding-right: 2.304px; //2304x.0010=2.304
      padding-left: 2.304px;
      margin-top: 61.44px; //4096x0.015=61.44
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      padding-right: 2.304px; //2304x.0010=2.304
      padding-left: 2.304px;
      margin-top: 21.6px; //1440x0.015=21.6
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    padding-right: 2.28px; //2280x.0010=2.28
      padding-left: 2.28px;
      margin-top: 16.2px; //1080x0.015=16.2
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    padding-right: 2.224px; //2224x.0010=2.224
      padding-left: 2.224px;
      margin-top: 25.02px; //1668x0.015=25.02
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      padding-right: 2.16px; //2160x.0010=2.16
      padding-left: 2.16px;
      margin-top: 61.44px; //4096x0.015=61.44
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      padding-right: 2.16px; //2160x.0010=2.16
      padding-left: 2.16px;
      margin-top: 57.6px; //3840x0.015=57.6
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      padding-right: 2.16px; //2160x.0010=2.16
      padding-left: 2.16px;
      margin-top: 24.3px; //1620x0.015=24.3
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      padding-right: 2.16px; //2160x.0010=2.16
      padding-left: 2.16px;
      margin-top: 21.6px; //1440x0.015=21.6
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      margin-top: 33px; //0.0015x 2732=4.098
      margin-bottom: 4.098px; 
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      padding-right: 2px; //2048x.001=2.0
      padding-left: 2px;
      margin-top: 23.04px; //1536x0.015=23.04
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    margin-top: 33px; //0.0015x 3000=4.5
    margin-bottom: 4.5px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    padding-right: 1.921px; //1921x.001=1.921
    padding-left: 1.921px;
    margin-top: 16.2px; //1080x0.015=16.2
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      padding-right: 1.921px; //1921x.001=1.921
      padding-left: 1.921px;
      margin-top: 18px; //1200x0.015=18
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      padding-right: 1.921px; //1921x.001=1.921
      padding-left: 1.921px;
      margin-top: 16.2px; //1080x0.015=16.2
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    padding-right: 1.824px; //1824x.001=1.824
    padding-left: 1.824px;
    margin-top: 41.04px; //2736x0.015=41.04
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    padding-right: 1.8px; //1800x.001=1.800
    padding-left: 1.8px;
    margin-top: 43.2px; //2880x0.015=43.2
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    padding-right: 1.992px; //1792x.01=1.992
    padding-left: 1.992px;
    margin-top: 12.42px; //828x0.015=12.42
  }	
}
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    padding-right: 1.7px; //1700x.01=1.7
    padding-left: 1.7px;
    margin-top: 38.4px; //2560x0.015=38.4
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    padding-right: 1.68px; //1680x.0010=1.68
    padding-left: 1.68px;
    margin-top: 15.75px; //1050x0.015=15.75
  }
	
	@media screen and (max-width: 1668px){

		// Vertical Tablet Display
		@media screen and (max-height: 2388px){
      padding-right: 16px; //1600x.01=16
      padding-left: 16px;
      margin-top: 35.82px; //2388x0.015=35.82
    }
		// Vertical Tablet Display	
		@media screen and (max-height: 2224px){
      padding-right: 16px; //1600x.01=16
      padding-left: 16px;
      margin-top: 33.36px; //2224x0.015=33.36
    }
	}
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    padding-right: 16.4px; //1640x.01=16.4
    padding-left: 16.4px;
    margin-top: 35.4px; //2360x0.015=35.4
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    padding-right: 16.2px; //1620x.01=16.2
    padding-left: 16.2px;
    margin-top: 32.4px; //2160x0.015=32.4
  }
	
	@media screen and (max-width: 1600px){

		// Vertical Monitor Display
		@media screen and (max-height: 2560px){
      padding-right: 16px; //1600x.01=16
      padding-left: 16px;
      margin-top: 38.4px; //2560x0.015=38.4
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1200px){
      padding-right: 0.8px; //1600x.0005=0.8
      padding-left: 0.8px;
      margin-top: 18px; //1200x0.015=18
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 900px){
      padding-right: 1.60px; //1600x.0010=1.60
      padding-left: 1.60px;
      margin-top: 13.5px; //900x0.015=13.5
    }
	}
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

// Vertical Tablet Display
@media screen and (max-width: 1536px), and (max-height: 2048px){

  padding-right: 1.536px; //1536x.001=15.36
  padding-left: 1.536px;
  margin-top: 23.04px; //1536x0.015=23.04
}	
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{		    
  padding-right: 28.8px; //1440x.02=28.8
  padding-left: 28.8px;
  // Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    margin-top: 48px; //3200x0.015=48
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    margin-top: 46.32px; //3088x0.015=46.32
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    margin-top: 44.4px; //2960x0.015=44.4
  }
  // Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    margin-top: 38.4px; //2560x0.015=38.4
  }
  // Vertical Monitor Display
	@media screen and (max-height: 2304px){
    margin-top: 34.56px; //2304x0.015=34.56
  }
  // Vertical Tablet Display
	@media screen and (max-height: 2160px){
    margin-top: 32.4px; //2160x0.015=32.4
  }
  // Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    margin-top: 21.6px; //1440x0.015=21.6
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    margin-top: 13.5px; //900x0.015=13.5
  }
}
//////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    padding-right: 27.32px; //1366x.02=27.32
    padding-left: 27.32px;
    margin-top: 11.52px; //768x0.015=11.52
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    padding-right: 26.68px; //1334x.02=26.68
    padding-left: 26.68px;
    margin-top: 11.25px; //750x0.015=11.25
  }	
}
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    padding-right: 1.284px; //1284x.0010=1.284
    padding-left: 1.284px;
    margin-top: 41.67px; //2778x0.015=41.67
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      padding-right: 0.64px; //1280x.0005=0.64
      padding-left: 0.64px;
      margin-top: 12px; //800x0.015=12
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      padding-right: 0.64px; //1280x.0005=0.64
      padding-left: 0.64px;
      margin-top: 11.52px; //768x0.015=11.52
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      padding-right: 0.64px; //1280x.0005=0.64
      padding-left: 0.64px;
      margin-top: 10.8px; //720x0.015=10.8
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    padding-right: 1.24px; //1242x.0010=1.24
    padding-left: 1.24px;
    margin-top: 40.02px; //2688x0.015=40.02
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    padding-right: 1.2px; //1200x.0010=1.2
    padding-left: 1.2px;
    margin-top: 28.8px; //1920x0.015=28.8
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    padding-right: 1.2px; //1200x.0010=1.2
    padding-left: 1.2px;
    margin-top: 24px; //1600x0.015=24
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    padding-right: 1.17px; //1170x.0010=1.17
    padding-left: 1.17px;
    margin-top: 37.98px; //2532x0.015=37.98
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    padding-right: 1.136px; //1136x.0010=1.136
    padding-left: 1.136px;
    margin-top: 9.6px; //640x0.015=9.6
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    padding-right: 1.125px; //1125x.0010=1.125
    padding-left: 1.125px;
    margin-top: 36.54px; //2436x0.015=36.54
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    padding-right: 1.08px; //1080x.0010=1.08
    padding-left: 1.08px;
    margin-top: 36px; //2400x0.015=36
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    padding-right: 1.08px; //1080x.0010=1.08
    padding-left: 1.08px;
    margin-top: 35.1px; //2340x0.015=35.1    
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    padding-right: 1.08px; //1080x.0010=1.08
    padding-left: 1.08px;
    margin-top: 34.65px; //2310x0.015=34.65    
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    padding-right: 1.08px; //1080x.0010=1.08
    padding-left: 1.08px;
    margin-top: 34.2px; //2280x0.015=34.2    
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    padding-right: 1.08px; //1080x.0010=1.08
    padding-left: 1.08px;
    margin-top: 28.8px; //1921x0.015=28.8    
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    padding-right: 1.08px; //1080x.0010=1.08
    padding-left: 1.08px;
    margin-top: 28.8px; //1920x0.015=28.8    
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    padding-right: 1.05px; //1050x.0010=1.05
    padding-left: 1.05px;
    margin-top: 25.2px; //1680x0.015=25.2    
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    padding-right: 1px; //1024x.0005=0.512
    padding-left: 1px;
    margin-top: 11.52px; //768x0.015=11.52
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    padding-right: 1px; //1024x.0005=0.512
    padding-left: 1px;
    margin-top: 9px; //600x0.015=9
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    padding-right: 1px; //960x.0005=0.45
    padding-left: 1px;
    margin-top: 9.6px; //640x0.015=9.6
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    padding-right: 1px; //960x.0005=0.45
    padding-left: 1px;
    margin-top: 8.1px; //540x0.015=8.1
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    padding-right: 1px; //900x.0005=0.45
    padding-left: 1px;
    margin-top: 37px; //1600x0.015=24
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    padding-right: 1px; //900x.0005=0.45
    padding-left: 1px;
    margin-top: 37px; //1440x0.015=21.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    padding-right: 1px; //854x.0005=0.427
    padding-left: 1px;
    margin-top: 7.2px; //480x0.015=7.2
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    padding-right: 1px; //828x.0005=0.414
    padding-left: 1px;
    margin-top: 26.88px; //1792x0.015=26.88
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      padding-right: 1px; //800x.0005=0.4
      padding-left: 1px;
      margin-top: 19.2px; //1280x0.015=19.2
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      padding-right: 1px; //800x.0005=0.4
      padding-left: 1px;
      margin-top: 9px; //600x0.015=9
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      padding-right: 1px; //800x.0005=0.4
      padding-left: 1px;
      margin-top: 7.2px; //480x0.015=7.2
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    padding-right: 0.768px; //768x.0010=0.768
    padding-left: 0.768px;
    margin-top: 20.49px; //1366x0.015=20.49
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    padding-right: 1.05px; //768x.0010=1.05
    padding-left: 1.05px;
    margin-top: 19.2px; //1280x0.015=19.2
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    padding-right: 0.768px; //768x.0010=0.768
    padding-left: 0.768px;
    margin-top: 15.36px; //1024x0.015=15.36
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    padding-right: 0.75px; //750x.0010=0.75
    padding-left: 0.75px;
    margin-top: 20.01px; //1334x0.015=20.01
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    padding-right: 1px; //720x.0010=.72
    padding-left: 1px;
    margin-top: 19.2px; //1280x0.015=19.2
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    padding-right: 1px; //640x.0010=.64
    padding-left: 1px;
    margin-top: 17.04px; //1136x0.015=17.04
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    padding-right: 1px; //640x.0010=.64
    padding-left: 1px;
    margin-top: 14.4px; //960x0.015=14.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    padding-right: 1px; //600x.0010=.6
    padding-left: 1px;
    margin-top: 15.36px; //1024x0.015=15.36
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    padding-right: 1px; //800x.0010=.8
    padding-left: 1px;
    margin-top: 12px; //800x0.015=12
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    padding-right: 1px; //540x.0010=0.54
    padding-left: 1px;
    margin-top: 14.4px; //960x0.015=14.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    padding-right: 1px; //480x.0010=0.48
    padding-left: 1px;
    margin-top: 12.81px; //854x0.015=12.81
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    padding-right: 1px; //480x.0010=0.48
    padding-left: 1px;
    margin-top: 12px; //800x0.015=12
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    padding-right: 1px; //360x.0010=0.36
    padding-left: 1px;
    margin-top: 12px; //800x0.015=12
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    padding-right: 1px; //320x.0010=0.32
    padding-left: 1px;
    margin-top: 12px; //800x0.015=12
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    padding-right: 1px; //360x.0010=0.75
    padding-left: 1px;
    margin-top: 7.2px; //480x0.015=7.2
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    padding-right: 1px; //320x.0010=0.75
    padding-left: 1px;
    margin-top: 7.2px; //480x0.015=7.2
  }	
}
//////////////////////////////////////////////////////////////////
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
// background: red;
letter-spacing: -0.6px;
text-align: center;
// color: #0a0a0a;
color:black;
// font-size: clamp(1.55rem, 1.9vw, 1.1rem);
font-weight: bold;

padding-bottom:0.1rem;
line-height: 1.0 !important;
position: relative;
z-index: 600;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(5.15rem, 1.9vw, 1.1rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(4.46rem, 1.9vw, 1.1rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(4.46rem, 1.9vw, 1.1rem);
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(4.15rem, 1.9vw, 1.1rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(4.15rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      font-size: clamp(6.55rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(4.15rem, 1.9vw, 1.1rem);
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    font-size: clamp(4.15rem, 1.9vw, 1.1rem);
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    font-size: clamp(4.15rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      font-size: clamp(5.55rem, 1.9vw, 1.1rem);
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    font-size: clamp(5.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    font-size: clamp(5.55rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    font-size: clamp(5.55rem, 1.9vw, 1.1rem);
  }	
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(3.55rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(3.51rem, 1.9vw, 1.1rem);
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(5.51rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(5.51rem, 1.9vw, 1.1rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(5.45rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(5.06rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(3.28rem, 1.9vw, 1.1rem);
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(5.15rem, 1.9vw, 1.1rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      font-size: clamp(5rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(2.82rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(2.82rem, 1.9vw, 1.1rem);
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      font-size: clamp(5rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(2.82rem, 1.9vw, 1.1rem);
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    font-size: clamp(5rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1.55rem, 1.9vw, 1.1rem);
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1.55rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1.55rem, 1.9vw, 1.1rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    font-size: clamp(4.64rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    font-size: clamp(4.64rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(4.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
  // Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(4.55rem, 1.9vw, 1.1rem);
  }
  // Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(1.55rem, 1.9vw, 1.1rem);
  }
  @media screen and (max-width: 1668px){
    
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(4.42rem, 1.9vw, 1.1rem);
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(4.33rem, 1.9vw, 1.1rem);
    }
  }

  // Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(4.42rem, 1.9vw, 1.1rem);
  }
  // Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(4.15rem, 1.9vw, 1.1rem);
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(4.15rem, 1.9vw, 1.1rem);
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(2.55rem, 1.9vw, 1.1rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(1.60rem, 1.9vw, 1.1rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 2048px){
    font-size: clamp(4.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
  // Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(5.42rem, 1.9vw, 1.1rem);
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(5.40rem, 1.9vw, 1.1rem);
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(5.24rem, 1.9vw, 1.1rem);
  }
  // Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
  }
  // Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(3.78rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(3.60rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(3.55rem, 1.9vw, 1.1rem);
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(1.33rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(1.6rem, 1.9vw, 1.1rem);
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    font-size: clamp(3.5rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    font-size: clamp(4.37rem, 1.9vw, 1.1rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monior Display
		@media screen and (max-height: 800px){
      font-size: clamp(1.6rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(1.5rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(1.4rem, 1.9vw, 1.1rem);
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    font-size: clamp(4.37rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(3.9rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    font-size: clamp(3.9rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    font-size: clamp(4.1rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    font-size: clamp(3.1rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    font-size: clamp(3.9rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    font-size: clamp(3.9rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(3.81rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(3.79rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(3.42rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(3.42rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(3.06rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(1.4rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(1.2rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(2.82rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(2.82rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(2.28rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(2.78rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(2.69rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(2.51rem, 1.9vw, 1.1rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    font-size: clamp(2.6rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    font-size: clamp(2.1rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(2.1rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    font-size: clamp(2.2rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    font-size: clamp(2.4rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    font-size: clamp(2.10rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(2.10rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    font-size: clamp(1.24rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    font-size: clamp(1.24rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
`


const NavLink1 = styled.a`
cursor: pointer;
// background: gray;
letter-spacing: -0.6px;
text-align: center;
// color: #0a0a0a;
color:black;
// font-size: clamp(1.55rem, 1.9vw, 1.1rem);
font-weight: bold;
text-decoration: none;
padding-bottom:0.2rem;
line-height: 1.0 !important;
position: relative;
z-index: 600;
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(5.15rem, 1.9vw, 1.1rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(4.46rem, 1.9vw, 1.1rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(4.46rem, 1.9vw, 1.1rem);
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(4.15rem, 1.9vw, 1.1rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(4.15rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      font-size: clamp(6.55rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(4.15rem, 1.9vw, 1.1rem);
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    font-size: clamp(4.15rem, 1.9vw, 1.1rem);
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    font-size: clamp(4.15rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    font-size: clamp(6.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      font-size: clamp(5.55rem, 1.9vw, 1.1rem);
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    font-size: clamp(5.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    font-size: clamp(5.55rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    font-size: clamp(5.55rem, 1.9vw, 1.1rem);
  }	
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(3.55rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(3.51rem, 1.9vw, 1.1rem);
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(5.51rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(5.51rem, 1.9vw, 1.1rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(5.45rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(5.06rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(3.28rem, 1.9vw, 1.1rem);
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(5.15rem, 1.9vw, 1.1rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      font-size: clamp(5rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(2.82rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(2.82rem, 1.9vw, 1.1rem);
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      font-size: clamp(5rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(2.82rem, 1.9vw, 1.1rem);
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    font-size: clamp(5rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1.55rem, 1.9vw, 1.1rem);
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1.55rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1.55rem, 1.9vw, 1.1rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    font-size: clamp(4.64rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    font-size: clamp(4.64rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(4.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
  // Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(4.55rem, 1.9vw, 1.1rem);
  }
  // Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(1.55rem, 1.9vw, 1.1rem);
  }
  
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(4.42rem, 1.9vw, 1.1rem);
    } 
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(4.33rem, 1.9vw, 1.1rem);
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(4.42rem, 1.9vw, 1.1rem);
  }
  // Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(4.15rem, 1.9vw, 1.1rem);
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(4.15rem, 1.9vw, 1.1rem);
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(2.55rem, 1.9vw, 1.1rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(1.60rem, 1.9vw, 1.1rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 2048px){
    font-size: clamp(4.55rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
  // Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(5.42rem, 1.9vw, 1.1rem);
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(5.40rem, 1.9vw, 1.1rem);
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(5.24rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(3.78rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(3.60rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(3.55rem, 1.9vw, 1.1rem);
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(1.33rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(1.6rem, 1.9vw, 1.1rem);
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    font-size: clamp(3.5rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    font-size: clamp(4.37rem, 1.9vw, 1.1rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      font-size: clamp(1.6rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(1.5rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(1.4rem, 1.9vw, 1.1rem);
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    font-size: clamp(4.37rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(3.9rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    font-size: clamp(3.9rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    font-size: clamp(4.1rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    font-size: clamp(3.1rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    font-size: clamp(3.9rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    font-size: clamp(3.9rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(3.81rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(3.79rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(3.42rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(3.42rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(3.06rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(1.4rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(1.2rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(2.82rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(2.82rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(2.28rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(2.78rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(2.69rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(2.28rem, 1.9vw, 1.1rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    font-size: clamp(2.6rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    font-size: clamp(2.1rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(2.1rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    font-size: clamp(2.2rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    font-size: clamp(2.4rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    font-size: clamp(2.10rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(2.10rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }		
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    font-size: clamp(1.24rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    font-size: clamp(1.24rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
color: #ff1010;
&:hover{
    color: #ff1010;
    text-decoration: underline;
`

const ProofAndContact = styled.div`

// background: #f5f5f5;
background: black;
border: 0.1rem white;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
gap: 0px;
justify-content: center;
align-items: center;
align-content: center;
line-height: 1.2 !important;
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{ 
  min-width: 4096px;//5120x0.8=4096
  margin-left: 256px; //5120x0.05=256
  margin-right:256px;
  margin-top: 10px; //2880x0.033=95.04
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    min-width: 3276.8px;//4096x0.8=3276.8
    margin-left: 204.8px; //4096x0.05=204.8
    margin-right: 204.8px;
    margin-top: 5px; //2340x0.010=21
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    min-width: 3276.8px;//4096x0.8=3276.8
    margin-left: 204.8px; //4096x0.05=204.8
    margin-right: 204.8px;
    margin-top: 5px; //2160x0.010=21
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  min-width: 3072px;//3840x0.8=3072
  margin-left: 192px; //3840x0.05=192
  margin-right: 192px;
  margin-top: 5px; //2160x0.010=21
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    min-width: 3040px;//3200x0.95=3040
    margin-left: 32px; //3200x0.01=32
    margin-right: 32px;
    margin-top: 10px; //1440x0.005=7.2
    margin-bottom: 60px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    min-width: 2933.6px;//3088x0.95=2933.6
    margin-left: 30.8px; //3088x0.01=30.8
    margin-right: 30.8px;
    margin-top: 10px; //1440x0.005=7.2
    margin-bottom: 60px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    min-width: 2400px;//3000x0.8=2400
    margin-left: 150px; //3000x0.05=150
    margin-right: 150px;
    margin-top: 5px; //2000x0.010=20
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    min-width: 2812px;//2960x0.95=2812
    margin-left: 29.6px; //2960x0.01=29.6
    margin-right: 29.6px;
    margin-top: 10px; //1440x0.005=7.2
    margin-bottom: 60px;
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      min-width: 2736px;//2880x0.95=2736
      margin-left: 28.8px; //2880x0.01=28.8
      margin-right: 28.8px;
      margin-top: 25.6px; //5120x0.005=25.6
      margin-bottom: 60px;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      min-width: 2304px;//2880x0.8=2304
      margin-left: 288px; //2880x0.10=288
      margin-right: 288px;
      margin-top: 5px; //1800x0.010=18
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    min-width: 2639.1px;//2778x0.95=2639.1
    margin-left: 27.78px; //2778x0.01=27.78
    margin-right: 27.78px;
    margin-top: 33px; //1284x0.005=6.42
    margin-bottom: 60px;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    min-width: 2188.8px;//2736x0.8=2188.8
    margin-left: 136.8px; //2736x0.05=136.8
    margin-right: 136.8px;
    margin-top: 5px; //1824x0.010=18.24
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    min-width: 2185.6px;//2732x0.8=2185.6
    margin-left: 136.6px; //2732x0.05=136.6
    margin-right: 136.6px;
    margin-top: 5px; //2048x0.010=20.48
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    min-width: 2553.6px;//2688x0.95=2553.6
    margin-left: 26.88px; //2688x0.01=26.88
    margin-right: 26.88px;
    margin-top: 33px; //1242x0.005=6.21
    margin-bottom: 60px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      min-width: 2048px;//2560x0.8=2048
      margin-left: 128px; //2560x0.05=128
      margin-right: 128px;
      margin-top: 5px; //1700x0.010=17
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      min-width: 2048px;//2560x0.8=2048
      margin-left: 128px; //2560x0.05=128
      margin-right: 128px;
      margin-top: 5px; //1600x0.010=16
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      min-width: 2432px;//2560x0.95=2432
      margin-left: 25.60px; //2560x0.01=25.60
      margin-right: 25.60px;
      margin-top: 10px; //1440x0.005=7.2
      margin-bottom: 60px;
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    min-width: 2405.4px;//2532x0.95=2405.4
    margin-left: 25.32px; //2532x0.01=25.32
    margin-right: 25.32px;
    margin-top: 10px; //1170x0.005=8.5
    margin-bottom: 60px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    min-width: 2314.2px;//2436x0.95=2314.2
    margin-left: 24.36px; //2436x0.01=24.36
    margin-right: 24.36px;
    margin-top: 10px; //1125x0.005=5.625
    margin-bottom: 60px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    min-width: 2280px;//2400x0.95=2280
    margin-left: 24px; //2400x0.01=24
    margin-right: 24px;
    margin-top: 10px; //1080x0.005=5.4
    margin-bottom: 60px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    min-width: 1910.4px;//2388x0.8=1910.4
    margin-left: 119.4px; //2388x0.05=119.4
    margin-right: 119.4px;
    margin-top: 16.68px; //1668x0.010=16.68
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    min-width: 1888px;//2360x0.8=1888
    margin-left: 118px; //2360x0.05=118
    margin-right: 118px;
    margin-top: 16.4px; //1640x0.010=16.4
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    min-width: 2246.4px;//2340x0.96=2246.4
    margin-left: 10.8px; //1080x0.01=10.8
    margin-right: 10.8px;
    margin-top: 5.4px; //1080x0.0050=5.4
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    min-width: 2217.6px;//2310x0.96=2217.6
    margin-left: 10.8px; //1080x0.01=10.8
    margin-right: 10.8px;
    margin-top: 5.4px; //1080x0.0050=5.4
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      min-width: 2211.84px;//2304x0.96=2211.84
      margin-left: 23.04px; //2304x0.01=23.04
      margin-right: 23.04px;
      margin-top: 40.96px; //4096x0.010=40.96
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      min-width: 1843.2px;//2304x0.8=1843.2
      margin-left: 115.2px; //2304x0.05=115.2
      margin-right: 115.2px;
      margin-top: 14.4px; //1440x0.010=14.4
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    min-width: 2188.8px;//2280x0.96=2188.8
      margin-left: 22.8px; //2280x0.01=22.8
      margin-right: 22.8px;
      margin-top: 5.4px; //1080x0.005=5.4
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    min-width: 1779.2px;//2224x0.8=1779.2
      margin-left: 222.4px; //2224x0.10=222.4
      margin-right: 222.4px;
      margin-top: 8.34px; //1668x0.005=8.34
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      min-width: 2073.6px;//2160x0.96=2073.6
      margin-left: 21.6px; //2160x0.01=21.6
      margin-right: 21.6px;
      margin-top: 20.48px; //1096x0.005=20.48
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      min-width: 2073.6px;//2160x0.96=2073.6
      margin-left: 21.6px; //2160x0.01=21.6
      margin-right: 21.6px;
      margin-top: 19.2px; //3840x0.005=19.2
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      min-width: 1728px;//2160x0.8=1728
      margin-left: 108px; //2160x0.05=108
      margin-right: 108px;
      margin-top: 8.1px; //1620x0.005=8.1
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      min-width: 1728px;//2160x0.8=1728
      margin-left: 108px; //2160x0.05=108
      margin-right: 108px;
      margin-top: 7.2px; //1440x0.005=7.2
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      min-width: 1945.6px;//2048x0.95=1945.6
      margin-left: 20.48px; //2048x0.01=20.48
      margin-right: 20.48px;
      margin-top: 13.66px; //2732x0.005=13.66
      margin-bottom: 60px;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      min-width: 1863.68px;//2048x0.91=1863.68
      margin-left: 20.48px; //2048x0.01=20.48
      margin-right: 20.48px;
      margin-top: 7.2px; //1440x0.005=7.2
      margin-bottom: 1px;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    min-width: 1900px;//2000x0.95=1900
    margin-left: 20px; //2000x0.01=20
    margin-right: 20px;
    margin-top: 15px; //3000x0.005=15
    margin-bottom: 60px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    min-width: 1536.8px;//1921x0.8=1536.8
    margin-left: 96.05px; //1921x0.05=96.05
    margin-right: 96.05px;
    margin-top: 5.4px; //1080x0.005=5.4
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      min-width: 1536.8px;//1921x0.8=1536.8
      margin-left: 96.05px; //1921x0.05=96.05
      margin-right: 96.05px;
      margin-top: 6px; //1200x0.005=6
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      min-width: 1536.8px;//1921x0.8=1536.8
      margin-left: 96.05px; //1921x0.05=96.05
      margin-right: 96.05px;
      margin-top: 5.4px; //1080x0.005=5.4
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    min-width: 1732.8px;//1824x0.95=1732.8
    margin-top: 27.36px; //2736x0.010=27.36
    margin-left: 18.24px; //1824x0.01=18.24
    margin-right:18.24px;
    margin-bottom:60px;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    min-width: 1710px;//1800x0.95=1710
    margin-top: 28.8px; //2880x0.010=28.8
    margin-left: 18px; //1800x0.01=18
    margin-right:18px;
    margin-bottom:60px;
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    min-width: 1702.4px;//1792x0.95=1702.4
    margin-top: 18.28px; //828x0.010=8.28
    margin-left: 17.92px; //1792x0.01=17.92
    margin-right:17.92px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
  // Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    min-width: 1700px;//1700x0.95=1700
    margin-left: 17px; //1700x0.01=17
    margin-right:17px;
    margin-top: 25.6px; //2560x0.010=25.6
  }
  // Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    min-width: 1344px;//1680x0.8=1344
    margin-left: 168px; //1680x0.1=168
    margin-right:168px;
    margin-top: 10.50px; //1050x0.010=10.50
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      min-width: 1584.6px;//1668x0.95=1584.6
      margin-left: 16.8px; //1680x0.01=16.8
      margin-right:16.8px;
      margin-top: 23.88px; //2388x0.010=23.88
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      min-width: 1584.6px;//1668x0.95=1584.6
      margin-left: 16.8px; //1680x0.01=16.8
      margin-right:16.8px;
      margin-top: 22.24px; //2224x0.010=22.24
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    min-width: 1558px;//1640x0.95=1558
    margin-left: 16.4px; //1640x0.01=16.4
    margin-right:16.4px;
    margin-top: 23.6px; //2360x0.010=23.6
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    min-width: 1539px;//1620x0.95=1539
    margin-left: 16px; //1620x0.01=16
    margin-right:16px;
    margin-top: 21.6px; //2160x0.010=21.6
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      min-width: 1577px;//1600x0.95=1577
      margin-left: 16px; //1600x0.01=16
      margin-right:16px;
      margin-top: 25.6px; //2560x0.010=25.6
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      margin-left: 80px; //1600x0.05=80
      margin-right:80px;
      margin-top: 12px; //1200x0.01=12
      min-width: 1280px;//1600x0.8=1280
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      margin-left: 80px; //1600x0.05=80
      margin-right:80px;
      margin-top: 9px; //900x0.01=9
      min-width: 1280px;//1600x0.8=1280
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    min-width: 1459.2px;//1536x0.95=1459.2
    margin-left: 30.72px; //1536x0.02=30.72
    margin-right:30.72px;
    margin-top: 20.48px; //2048x0.01=20.48
    margin-bottom: 60px; //2048x0.01=20.48
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	    
  min-width: 1382.4px;//1440x0.96=1382.4
  margin-left: 14.4px; //1440x0.01=14.4
  margin-right: 14.4px;

	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    margin-top: 32px; //3200x0.010=32
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    margin-top: 30.8px; //3088x0.010=30.8
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    margin-top: 29.6px; //2960x0.010=29.6
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    margin-top: 25.6px; //2560x0.010=25.6
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    margin-top: 23.04px; //2304x0.010=23.04
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    margin-top: 21.6px; //2160x0.010=21.6
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    margin-top: 7.2px; //1440x.005=7.2
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    min-width: 1152px;//1440x0.8=1152
  margin-left: 144px; //1440x0.10=144
  margin-right: 144px;
    margin-top: 9px; //900x0.01=9
  }
}
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    min-width: 1092.8px;//1366x0.8=1092.8
    margin-right: 136.6px; //1366x.10=136.6
    margin-left: 136.6px;
    margin-top: 7.68px; //768x0.01=7.68
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    min-width: 1280.64px;//1334x0.96=1280.64
    margin-right: 13.34px; //1334x.01=13.34
    margin-left: 13.34px;
    margin-top: 15px; //750x0.01=7.5
    margin-bottom: 37px; //750x0.01=7.5
  }	
}
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    margin-left: 12.84px; //1284x0.01=12.84
      margin-right:12.84px;
      margin-top: 27.78px; //2778x0.01=27.78
      min-width: 1232.64px;//1284x0.96=1232.64
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      margin-left: 64px; //1280x0.05=64
      margin-right:64px;
      min-width: 1024px;//1280x0.8=1024
      margin-top: 4px; //800x0.005=4
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      margin-left: 64px; //1280x0.05=64
      margin-right:64px;
      min-width: 1024px;//1280x0.8=1024
      margin-top: 3.84px; //768x0.005=3.84
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      margin-left: 64px; //1280x0.05=64
      margin-right:64px;
      min-width: 1024px;//1280x0.8=1024
      margin-top: 3.6px; //720x0.005=3.6
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    margin-left: 12.4px; //1242x0.01=12.4
      margin-right:12.4px;
      min-width: 1192.32px;//1242x0.96=1192.32
      margin-top: 26.88px; //2688x0.01=26.88
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    margin-left: 12px; //1200x0.01=12
    margin-right:12px;
    min-width: 1044px;//1200x0.96=1044
    margin-top: 19.2px; //1920x0.01=19.2
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    margin-left: 12px; //1200x0.01=12
    margin-right:12px;
    min-width: 1152px;//1200x0.96=1152
    margin-top: 16px; //1600x0.01=16
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    margin-left: 11.7px; //1170x0.01=11.7
    margin-right:11.7px;
    min-width: 936px;//1170x0.96=936
    margin-top: 25.32px; //2532x0.01=25.32
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    margin-left: 11.36px; //1136x0.01=11.36
    margin-right:11.36px;
    min-width: 1123.2px;//1136x0.96=1123.2
    margin-top: 10px; //640x0.01=6.4
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    margin-left: 11.25px; //1125x0.01=11.25
    margin-right:11.25px;
    min-width: 1080px;//1125x0.96=1080
    margin-top: 24.36px; //2436x0.01=24.36
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    min-width: 1036.8px;//1080x0.96=1036.8
    margin-left: 10.8px; //1080x0.01=10.8
    margin-right: 10.8px;
    margin-top: 24px; //2400x0.010=24
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    min-width: 1036.8px;//1080x0.96=1036.8
    margin-left: 10.8px; //1080x0.01=10.8
    margin-right: 10.8px;
    margin-top: 23.4px; //2340x0.010=23.4
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    min-width: 1036.8px;//1080x0.96=1036.8
    margin-left: 10.8px; //1080x0.01=10.8
    margin-right: 10.8px;
    margin-top: 23.1px; //2310x0.010=23.1
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    min-width: 1036.8px;//1080x0.96=1036.8
    margin-left: 10.8px; //1080x0.01=10.8
    margin-right: 10.8px;
    margin-top: 22.8px; //2280x0.010=22.8
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    min-width: 1036.8px;//1080x0.96=1036.8
    margin-left: 10.8px; //1080x0.01=10.8
    margin-right: 10.8px;
    margin-top: 19.21px; //1921x0.010=19.21
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    min-width: 1036.8px;//1080x0.96=1036.8
    margin-left: 10.8px; //1080x0.01=10.8
    margin-right: 10.8px;
    margin-top: 19.2px; //1920x0.010=19.2
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    min-width: 1008px;//1050x0.96=1008
    margin-left: 10.5px; //1050x0.01=10.5
    margin-right: 10.5px;
    margin-top: 16.8px; //1680x0.010=16.8
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    margin-left: 20.48px; //1024x0.02=20.48
    margin-right:20.48px;
    min-width: 890.88px;//1024x0.87=890.88
    margin-top: 3.84px; //768x0.005=3.84
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    margin-left: 20.48px; //1024x0.02=20.48
    margin-right:20.48px;
    min-width: 890.88px;//1024x0.87=890.88
    margin-top: 3px; //600x0.005=3
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    min-width: 921.6px;//960x0.96=921.6
    margin-left: 10px; //960x0.01=9.6
    margin-right: 10px;
    margin-top: 6.4px; //640x0.010=6.4
    margin-bottom: 37px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    min-width: 921.6px;//960x0.96=921.6
    margin-left: 10px; //960x0.01=9.6
    margin-right: 10px;
    margin-top: 5.4px; //540x0.010=5.4
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    min-width: 864px;//900x0.96=864
    margin-left: 9px; //900x0.01=9
    margin-right: 9px;
    margin-top: 37px; //1600x0.010=16
    margin-bottom: 37px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    min-width: 864px;//900x0.96=864
    margin-left: 9px; //900x0.01=9
    margin-right: 9px;
    margin-top: 37px; //1440x0.010=14.4
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    min-width: 819.84px;//854x0.96=819.84
    margin-left: 8px; //854x0.01=8
    margin-right: 8px;
    margin-top: 4.8px; //480x0.010=4.8
    margin-bottom: 37px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    min-width: 794.88px;//828x0.96=794.88
    margin-left: 8px; //828x0.01=8
    margin-right: 8px;
    margin-top: 17.92px; //1792x0.010=17.92
    margin-bottom: 37px;
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      min-width: 768px;//800x0.96=768
      margin-left: 8px; //800x0.01=8
      margin-right: 8px;
      margin-top: 12.8px; //1280x0.010=12.8
      margin-bottom: 37px;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      min-width: 768px;//800x0.96=768
      margin-left: 8px; //800x0.01=8
      margin-right: 8px;
      margin-top: 6px; //600x0.010=6
      margin-bottom: 37px;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      min-width: 768px;//800x0.96=768
      margin-left: 8px; //800x0.01=8
      margin-right: 8px;
      margin-top: 4.8px; //480x0.010=4.8
      margin-bottom: 37px;
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    min-width: 614.4px;//768x0.96=614.4
    margin-left: 7.68px; //768x0.01=7.68
    margin-right: 7.68px;
    margin-top: 13.66px; //1366x0.010=13.66
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    min-width: 614.4px;//768x0.96=614.4
    margin-left: 7.68px; //768x0.01=7.68
    margin-right: 7.68px;
    margin-top: 12.8px; //1280x0.010=12.8
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    min-width: 614.4px;//768x0.96=614.4
    margin-left: 7.68px; //768x0.01=7.68
    margin-right: 7.68px;
    margin-top: 10.24px; //1024x0.010=10.24
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    min-width: 720px;//750x0.96=720
    margin-left: 7.5px; //750x0.01=7.5
    margin-right: 7.5px;
    margin-top: 13.34px; //1334x0.010=13.34
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    min-width: 691.2px;//720x0.96=691.2
    margin-left: 7.2px; //720x0.01=7.2
    margin-right: 7.2px;
    margin-top: 12.8px; //1280x0.010=12.8
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    min-width: 614.4px;//640x0.96=614.4
    margin-left: 6px; //640x0.01=6
    margin-right: 6px;
    margin-top: 11.36px; //1136x0.010=11.36
    margin-bottom: 37px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    min-width: 614.4px;//640x0.96=614.4
    margin-left: 6px; //640x0.01=6
    margin-right: 6px;
    margin-top: 9.6px; //960x0.010=9.6
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    min-width: 576px;//600x0.96=576
    margin-left: 6px; //600x0.01=6
    margin-right: 6px;
    margin-top: 10.24px; //1024x0.010=10.24
    margin-bottom: 37px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    min-width: 576px;//600x0.96=576
    margin-left: 6px; //600x0.01=6
    margin-right: 6px;
    margin-top: 8px; //800x0.010=8
    margin-bottom: 37px;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    min-width: 518.4px;//540x0.96=518.4
    margin-left: 5px; //540x0.01=5
    margin-right: 5px;
    margin-top: 10px; //540x0.010=5.4
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    min-width: 460.8px;//480x0.96=460.8
    margin-left: 4.8px; //480x0.01=4.8
    margin-right: 4.8px;
    margin-top: 10px; //480x0.010=4.8
    margin-bottom: 37px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    min-width: 460.8px;//480x0.96=460.8
    margin-left: 4.8px; //480x0.01=4.8
    margin-right: 4.8px;
    margin-top: 10px; //480x0.010=4.8
    margin-bottom: 37px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    min-width: 460.8px;//480x0.96=460.8
    margin-left: 4.8px; //480x0.01=4.8
    margin-right: 4.8px;
    margin-top: 10px; //480x0.010=4.8
    margin-bottom: 37px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    min-width: 460.8px;//480x0.96=460.8
    margin-left: 4.8px; //480x0.01=4.8
    margin-right: 4.8px;
    margin-top: 10px; //480x0.010=4.8
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    min-width: 324px;//360x0.9=324
    margin-left: 3.6px; //360x0.01=3.6
    margin-right: 3.6px;
    margin-top: 4.8px; //480x0.010=4.8
    margin-bottom: 37px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    min-width: 307.2px;//320x0.96=307.2
    margin-left: 3.2px; //320x0.01=3.2
    margin-right: 3.2px;
    margin-top: 4.8px; //480x0.010=4.8
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
box-shadow: /* ie */
                 0px -4px 4px -2px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  4px  4px  0px  #1227DC, /* bottom */
                 4px  0px  4px  0px  #1227DC, /* right */
                -4px  0px  4px  0px  #1227DC; /* left */
-webkit-box-shadow:
                0px -4px 4px -2px  #1227DC, /* top - THE BLUE SHADOW */
                0px  4px  4px  0px  #1227DC, /* bottom */
                4px  0px  4px  0px  #1227DC, /* right */
                -4px  0px  4px  0px  #1227DC; /* left */
-moz-box-shadow:
                0px -4px 4px -2px  #1227DC, /* top - THE BLUE SHADOW */
                 0px  4px  4px  0px  #1227DC, /* bottom */
                 4px  0px  4px  0px  #1227DC, /* right */
                -4px  0px  4px  0px  #1227DC; /* left */

`

const ClimateChangeTemperature = styled.div`

padding: 0.2rem;
max-width:100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
gap: 0px;
overflow:hidden;
z-index:1000;
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  width: 4147.2px; //5120x0.81=4147.2
  gap: 51.2px; //5120x0.01=51.2
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    width: 3317.76px; //4096x0.81=3317.76
    gap: 40.96px; //4096x0.01=40.96
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    width: 3317.76px; //4096x0.81=3317.76
    gap: 40.96px; //4096x0.01=40.96
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  width: 3110.4px; //3840x0.81=3110.4
  gap: 38.4px; //3840x0.01=38.4
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    width: 3072px; //3200x0.96=3072
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    width: 2964.48px; //3088x0.96=2964.48
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    width: 2430px; //3000x0.81=2430
    gap: 30px; //3000x0.01=30
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    width: 2841.6px; //2960x0.96=2841.6
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      width: 2764.8px; //2880x0.96=2764.8
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      width: 3142.8px; //2880x0.81=3142.8
      gap: 28.8px; //2880x0.01=28.8
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    width: 2666.88px; //2778x0.96=2666.88
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    width: 2216.16px; //2736x0.81=2216.16
    gap: 27.36px; //2736x0.01=27.36
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    width: 2212.92px; //2732x0.81=2212.92
    gap: 27.32px; //2732x0.01=27.32
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    width: 2580.48px; //2688x0.96=2580.48
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      width: 2073.6px; //2560x0.81=2073.6
      gap: 25.6px; //2560x0.01=25.6
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      width: 2073.6px; //2560x0.81=2073.6
      gap: 25.6px; //2560x0.01=25.6
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      width: 2457.6px; //2560x0.96=2457.6
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    width: 2430.72px; //2532x0.96=2430.72
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    width: 2338.56px; //2436x0.96=2338.56
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    width: 2304px; //2400x0.96=2304
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    width: 1934.28px; //2388x0.81=1934.28
    gap: 23.88px; //2388x0.01=23.88
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    width: 1911.6px; //2360x0.81=1911.6
    gap: 23.6px; //2360x0.01=23.6
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    width: 2246.4px; //2340x0.96=2246.4
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    width: 2217.6px; //2310x0.96=2217.6
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      width: 2211.84px; //2304x0.96=2211.84
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      width: 1866.24px; //2304x0.81=1866.24
      gap: 23.04px; //2304x0.01=23.04
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    width: 2188.8px; //2280x0.96=2188.8
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    width: 1801.44px; //2224x0.81=1801.44
      gap: 22.24px; //2224x0.01=22.24
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      width: 2073.6px; //2160x0.96=2073.6
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      width: 2073.6px; //2160x0.96=2073.6
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      width: 1749.6px; //2160x0.81=1749.6
      gap: 21.6px; //2160x0.01=21.6
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      width: 1749.6px; //2160x0.81=1749.6
      gap: 21.6px; //2160x0.01=21.6
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      width: 1966.08px; //2048x0.96=1966.08
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      width: 2007.04px; //2048x0.98=2007.04
      gap: 20.48px; //2048x0.01=20.48
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    width: 1920px; //2000x0.96=1920
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    width: 1556.01px; //1921x0.81=1556.01
    gap: 19.21px; //1921x0.01=19.21
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      width: 1555.2px; //1920x0.81=1555.2
      gap: 19.20px; //1920x0.01=19.20
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      width: 1555.2px; //1920x0.81=1555.2
      gap: 19.20px; //1920x0.01=19.20
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    width: 1751.04px; //1824x0.96=1751.04
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    width: 1728px; //1800x0.96=1728
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    width: 1720.32px; //1792x0.96=1720.32
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
  // Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    width: 1632px; //1700x0.96=1632
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    width: 1260px; //1680x0.73=1260
    gap: 16.8px; //1680x0.01=16.8
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      width: 1601.28px; //1668x0.96=1601.28
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      width: 1601.28px; //1668x0.96=1601.28
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    width: 1574.4px; //1640x0.96=1574.4
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    width: 1555.2px; //1620x0.96=1555.2
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      width: 1536px; //1600x0.96=1536
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      width: 1392px; //1600x0.87=1392
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      width: 1392px; //1600x0.87=1392
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    width: 1459.2px; //1536x0.95=1459.2
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    width: 1368px; //1440x0.95=1368
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    width: 1368px; //1440x0.95=1368
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    width: 1368px; //1440x0.95=1368
  }
	// Vertical Monitor Display
  @media screen and (max-height: 2304px){
    width: 1368px; //1440x0.95=1368
  }
  // Vertical Tablet Display
	@media screen and (max-height: 2160px){
    width: 1368px; //1440x0.95=1368
  }
  // Horizontal Smartphone Display
  @media screen and (max-height: 1440px){
    width: 1368px; //1440x0.95=1368
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    width: 1166.4px; //1440x0.81=1166.4
    gap: 14.4px; //1440x0.01=14.4
  }
}
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    width: 1106.46px; //1366x0.81=1106.46
    gap: 13.66px; //1366x0.01=13.66
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    width: 1267.3px; //1334x0.95=1267.3
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    width: 1232.64px; //1284x0.96=1232.64
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      width: 1113.6px; //1280x0.87=1113.6
      gap: 12.8px; //1280x0.01=12.8
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      width: 1113.6px; //1280x0.87=1113.6
      gap: 12.8px; //1280x0.01=12.8
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      width: 1113.6px; //1280x0.87=1113.6
      gap: 12.8px; //1280x0.01=12.8
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    width: 1192.32px; //1242x0.96=1192.32
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    width: 1152px; //1200x0.96=1152
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    width: 1152px; //1200x0.96=1152
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    width: 1111.5px; //1170x0.95=1111.5
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    width: 1079.2px; //1136x0.95=1079.2
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    width: 1068.75px; //1125x0.95=1068.75
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    width: 1026px; //1080x0.95=1026
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    width: 1026px; //1080x0.95=1026
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    width: 1026px; //1080x0.95=1026
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    width: 1026px; //1080x0.95=1026
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    width: 1026px; //1080x0.95=1026
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    width: 1026px; //1080x0.95=1026
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    width: 1026px; //1080x0.95=1026
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    width: 972.8px; //1024x0.95=972.8
    gap: 10.24px; //1024x0.01=10.24
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    width: 972.8px; //1024x0.95=972.8
    gap: 10.24px; //1024x0.01=10.24
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    width: 912px; //960x0.95=912
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    width: 912px; //960x0.95=912
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    width: 855px; //900x0.95=855
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    width: 855px; //900x0.95=855
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    width: 811.3px; //854x0.95=811.3
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    width: 786.6px; //828x0.95=786.6
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      width: 760px; //800x0.95=760
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      width: 760px; //800x0.95=760
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      width: 760px; //800x0.95=760
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    width: 729.6px; //768x0.95=729.6
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    width: 729.6px; //768x0.95=729.6
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    width: 729.6px; //768x0.95=729.6
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    width: 712.5px; //750x0.95=712.5
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    width: 691.2px; //720x0.96=691.2
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    width: 614.4px; //640x0.96=614.4
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    width: 614.4px; //640x0.96=614.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    width: 576px; //600x0.96=576
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    width: 576px; //600x0.96=576
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    width: 518.4px; //540x0.96=518.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    width: 456px; //480x0.96=456
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    width: 456px; //480x0.96=456
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    width: 456px; //480x0.96=456
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    width: 456px; //480x0.96=456
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    width: 324px; //360x0.97=349
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    width: 288px; //320x0.97=310
  }	
}
//////////////////////////////////////////////////////////////////
`


const MainMessage = styled.div`
letter-spacing: -0.6px;
text-align: justify;
color: #1227DC;
font-weight: bold;
position: relative;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{ 
  font-size: clamp(3.33rem, 1.9vw, 0.66rem);
  margin-left: 51px;
  margin-right: 51px; //5120x0.01=51
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.96rem, 1.9vw, 1.1rem);
    margin-left: 40.96px;
    margin-right: 40.96px; //4096x0.01=40.96
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.96rem, 1.9vw, 1.1rem);
    margin-left: 40.96px;
    margin-right: 40.96px; //4096x0.01=40.96
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(2.6rem, 1.9vw, 1.1rem);
  margin-left: 38px;
  margin-right: 38px; //3840x0.01=38
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    line-height: 1 !important;
    text-align: center;
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
    margin-left: 29.6px;
    margin-right: 29.6px; //2960x0.01=29.6
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    line-height: 1 !important;
    text-align: center;
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
    margin-left: 29.6px;
    margin-right: 29.6px; //2960x0.01=29.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(2.1rem, 1.9vw, 1.1rem);
    margin-left: 30px;
    margin-right: 30px; //3000x0.01=30
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    line-height: 1 !important;
    text-align: center;
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
    margin-left: 29.6px;
    margin-right: 29.6px; //2960x0.01=29.6
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      line-height: 1 !important;
      text-align: center;
      font-size: clamp(3.82rem, 1.9vw, 1.1rem);
      margin-left: 28.8px;
      margin-right: 28.8px; //2880x0.01=28.8
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(2.1rem, 1.9vw, 1.1rem);
      margin-left: 28.8px;
      margin-right: 28.8px; //2880x0.01=28.8
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    line-height: 1 !important;
    text-align: center;
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
    margin-left: 27.78px;
    margin-right: 27.78px; //2778x0.01=27.78
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    font-size: clamp(1.99rem, 1.9vw, 1.1rem);
    margin-left: 27.36px;
    margin-right: 27.36px; //2736x0.01=27.36
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    font-size: clamp(1.99rem, 1.9vw, 1.1rem);
    margin-left: 27.32px;
    margin-right: 27.32px; //2732x0.01=27.32
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    line-height: 1 !important;
    text-align: center;
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
    margin-left: 26.88px;
    margin-right: 26.88px; //2688x0.01=26.88
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(1.82rem, 1.9vw, 1.1rem);
      margin-left: 25.60px;
      margin-right: 25.60px; //2560x0.01=25.60
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(1.82rem, 1.9vw, 1.1rem);
      margin-left: 25.60px;
      margin-right: 25.60px; //2560x0.01=25.60
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      line-height: 1 !important;
      text-align: center;
      font-size: clamp(3.82rem, 1.9vw, 1.1rem);
      margin-left: 25.6px;
      margin-right: 25.6px; //2560x0.01=25.6
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    line-height: 1 !important;
    text-align: center;
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
    margin-left: 25.6px;
    margin-right: 25.6px; //2560x0.01=25.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    line-height: 1 !important;
    text-align: center;
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
    margin-left: 23.88px;
    margin-right: 23.88px; //2388x0.01=23.88
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    line-height: 1 !important;
    text-align: center;
    font-size: clamp(3.82rem, 1.9vw, 1.1rem);
    margin-left: 23.88px;
    margin-right: 23.88px; //2388x0.01=23.88
  }	
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(1.78rem, 1.9vw, 1.1rem);
    margin-left: 23.88px;
    margin-right: 23.88px; //2388x0.01=23.88
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
    margin-left: 23.6px;
    margin-right: 23.6px; //2360x0.01=23.6
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(3.33rem, 1.9vw, 1.1rem);
    margin-left: 23.4px;
    margin-right: 23.4px; //2340x0.01=23.4
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(3.33rem, 1.9vw, 1.1rem);
    margin-left: 23.1px;
    margin-right: 23.1px; //2310x0.01=23.1
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      line-height: 1 !important;
    font-size: clamp(3.51rem, 1.4vw, 0.2rem);
    margin-left: 23.04px;
    margin-right: 23.04px; //2304x0.01=23.04
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.60rem, 1.9vw, 1.1rem);
    margin-left: 23.04px;
    margin-right: 23.04px; //2304x0.01=23.04
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(3.69rem, 1.9vw, 1.1rem);
    margin-left: 2.304px;
    margin-right: 2.304px; //2304x0.01=2.304
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    text-align: center;
    font-size: clamp(1.82rem, 1.9vw, 1.1rem);
    margin-left: 1.152px;
    margin-right: 1.152px; //2304x0.05=1.152
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      line-height: 1 !important;
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    margin-left: 23.04px;
    margin-right: 23.04px; //2304x0.01=23.04
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      line-height: 1 !important;
      font-size: clamp(3rem, 1.9vw, 1.1rem);
    margin-left: 23.04px;
    margin-right: 23.04px; //2304x0.01=23.04
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(1.69rem, 1.9vw, 1.1rem);
    margin-left: 23.04px;
    margin-right: 23.04px; //2304x0.01=23.04
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.69rem, 1.9vw, 1.1rem);
    margin-left: 23.04px;
    margin-right: 23.04px; //2304x0.01=23.04
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      line-height: 1 !important;
      font-size: clamp(3rem, 1.9vw, 1.1rem);
      margin-left: 24.08px;
      margin-right: 24.08px; //2408x0.01=24.08
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(1.51rem, 1.9vw, 1.1rem);
      margin-left: 20.48px;
      margin-right: 20.48px; //2048x0.01=20.48
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    line-height: 1 !important;
    font-size: clamp(3rem, 1.9vw, 1.1rem);
    margin-left: 20px;
    margin-right: 20px; //2000x0.01=20
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1.01rem, 1.9vw, 1.1rem);
    margin-left: 19.21px;
    margin-right: 19.21px; //1921x0.01=19.21
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1.01rem, 1.9vw, 1.1rem);
      margin-left: 19.21px;
      margin-right: 19.21px; //1921x0.01=19.21
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1.01rem, 1.9vw, 1.1rem);
      margin-left: 19.21px;
      margin-right: 19.21px; //1921x0.01=19.21
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    font-size: clamp(2.72rem, 1.9vw, 0.66rem);
    line-height: 2.1rem !important;
    margin-left: 18.24px;
    margin-right: 18.24px; //1824x0.01=18.24
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    font-size: clamp(2.72rem, 1.9vw, 0.66rem);
    line-height: 2.1rem !important;
    margin-left: 18px;
    margin-right: 18px; //1800x0.01=18
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(2.72rem, 1.9vw, 0.66rem);
    line-height: 2.1rem !important;
    margin-left: 17.92px;
    margin-right: 17.92px; //1792x0.01=17.92
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(3.33rem, 1.9vw, 0.66rem);
    line-height: 3.4rem !important;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    line-height: 0.9 !important;
    font-size: clamp(1.10rem, 1.6vw, 0.2rem); //1.55x0.6=0.93 
    margin-left: 151.2px;
    margin-right: 151.2px; //1680x0.09=151.2
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(3.10rem, 1.9vw, 0.66rem);
      line-height: 3.4rem !important;
      margin-left: 16.8px;
      margin-right: 16.8px; //1680x0.01=16.8
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(2.96rem, 1.9vw, 0.66rem);
      line-height: 2.4rem !important;
      margin-left: 16.8px;
      margin-right: 16.8px; //1680x0.01=16.8
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(2.49rem, 1.9vw, 0.66rem);
    line-height: 1.9rem !important;
    margin-left: 16.4px;
    margin-right: 16.4px; //1640x0.01=16.4
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(2.24rem, 1.9vw, 0.66rem);
    line-height: 2.6rem !important;
    margin-left: 16.2px;
    margin-right: 16.2px; //1620x0.01=16.2
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(2.21rem, 1.9vw, 0.66rem);
      line-height: 2.4rem !important;
      margin-left: 16px;
      margin-right: 16px; //1600x0.01=16
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      line-height: 0.9 !important;
      font-size: clamp(1.236rem, 1.6vw, 0.2rem); //2.55x0.6=1.53 
      margin-left: 80px;
      margin-right: 80px; //1600x0.05=80
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      line-height: 0.9 !important;
      font-size: clamp(1.23rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
      margin-left: 80px;
      margin-right: 80px; //1600x0.05=80
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 2048px){
    font-size: clamp(2.55rem, 1.9vw, 0.66rem);
    line-height: 2.4rem !important;
    margin-left: 1.536px;
    margin-right: 1.536px; //1536x0.001=1.536
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    line-height: 1.0 !important;
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    line-height: 1.0 !important;
    font-size: clamp(3.01rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    line-height: 1.0 !important;
    font-size: clamp(2.96rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    line-height: 1.0 !important;
    font-size: clamp(2.436rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    line-height: 1.0 !important;
    font-size: clamp(2.268rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.16rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.13rem, 1.9vw, 1.1rem);
    margin-left: 14.4px;
    margin-right: 14.4px; //1440x0.01=86.4
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    line-height: 0.9 !important;
    font-size: clamp(1.05rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 86.4px;
    margin-right: 86.4px; //1440x0.06=86.4
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    line-height: 0.9 !important;
    font-size: clamp(0.96rem, 1.6vw, 0.2rem); //1.22x0.55=0.66
    margin-left: 81.96px;
    margin-right: 81.96px; //1366x0.15=204.9
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    line-height: 0.9 !important;
    font-size: clamp(2.1rem, 1.6vw, 0.2rem); 
    margin-left: 13.34px;
    margin-right: 13.34px; //1334x0.01=13.34
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    line-height: 0.9 !important;
    font-size: clamp(3.05rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 12.8px;
    margin-right: 12.8px; //1284x0.01=12.8
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      line-height: 0.9 !important;
    font-size: clamp(0.96rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 12.8px;
    margin-right: 12.8px; //1284x0.01=12.8
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      line-height: 0.9 !important;
    font-size: clamp(0.94rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 12.8px;
    margin-right: 12.8px; //1284x0.01=12.8
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      line-height: 0.9 !important;
    font-size: clamp(0.91rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 12.8px;
    margin-right: 12.8px; //1284x0.01=12.8
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    line-height: 0.9 !important;
    font-size: clamp(3.05rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 12.8px;
    margin-right: 12.8px; //1284x0.01=12.8
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    line-height: 0.9 !important;
    font-size: clamp(2.64rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 72px;
    margin-right: 72px; //1200x0.06=72
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    line-height: 0.9 !important;
    font-size: clamp(2.64rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 72px;
    margin-right: 72px; //1200x0.06=72
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    line-height: 0.9 !important;
    font-size: clamp(3.05rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 1.17px;
    margin-right: 1.17px; //1170x0.01=1.17
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    line-height: 0.9 !important;
    font-size: clamp(2.24rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 1.136px;
    margin-right: 1.136px; //1136x0.01=1.136
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    line-height: 0.9 !important;
    font-size: clamp(3.05rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 1.125px;
    margin-right: 1.125px; //1125x0.01=1.125
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    line-height: 1 !important;
    font-size: clamp(2.51rem, 1.4vw, 0.2rem);
    margin-left: 10.8px;
    margin-right: 10.8px; //1080x0.07=10.8
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    line-height: 1 !important;
    font-size: clamp(2.50rem, 1.4vw, 0.2rem);
    margin-left: 10.8px;
    margin-right: 10.8px; //1080x0.07=10.8
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    line-height: 1 !important;
    font-size: clamp(2.50rem, 1.4vw, 0.2rem);
    margin-left: 10.8px;
    margin-right: 10.8px; //1080x0.07=10.8
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    line-height: 1 !important;
    font-size: clamp(2.46rem, 1.4vw, 0.2rem);
    margin-left: 10.8px;
    margin-right: 10.8px; //1080x0.07=10.8
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    line-height: 1 !important;
    font-size: clamp(2.33rem, 1.4vw, 0.2rem);
    margin-left: 10.8px;
    margin-right: 10.8px; //1080x0.07=10.8
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    line-height: 1 !important;
    font-size: clamp(2.33rem, 1.4vw, 0.2rem);
    margin-left: 10.8px;
    margin-right: 10.8px; //1080x0.07=10.8
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    line-height: 1 !important;
    font-size: clamp(1.87rem, 1.4vw, 0.2rem);
    margin-left: 75.6px;
    margin-right: 75.6px; //1080x0.07=75.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    line-height: 0.9 !important;
    font-size: clamp(0.87rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 15.36px;
    margin-right: 15.36px; //768x0.02=15.36
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    line-height: 0.9 !important;
    font-size: clamp(0.83rem, 1.6vw, 0.2rem); //1.28x0.6=0.768 
    margin-left: 12px;
    margin-right: 12px; //600x0.02=12
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    line-height: 1 !important;
    font-size: clamp(1.82rem, 1.4vw, 0.2rem);
    margin-left: 9.6px;
    margin-right: 9.6px; //960x0.01=9.6
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    line-height: 1 !important;
    font-size: clamp(1.82rem, 1.4vw, 0.2rem);
    margin-left: 9.6px;
    margin-right: 9.6px; //960x0.01=9.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    line-height: 1 !important;
    font-size: clamp(1.73rem, 1.4vw, 0.2rem);
    margin-left: 9px;
    margin-right: 9px; //900x0.01=9
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    line-height: 1 !important;
    font-size: clamp(1.73rem, 1.4vw, 0.2rem);
    margin-left: 9px;
    margin-right: 9px; //900x0.01=9
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    line-height: 1 !important;
    font-size: clamp(1.42rem, 1.4vw, 0.2rem);
    margin-left: 8.54px;
    margin-right: 8.54px; //854x0.01=8.54
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    line-height: 1 !important;
    font-size: clamp(1.96rem, 1.4vw, 0.2rem);
    margin-left: 8.28px;
    margin-right: 8.28px; //854x0.01=8.28
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      line-height: 1 !important;
      font-size: clamp(1.64rem, 1.4vw, 0.2rem);
      margin-left: 8px;
      margin-right: 8px; //800x0.01=8
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      line-height: 1 !important;
      font-size: clamp(1.42rem, 1.4vw, 0.2rem);
      margin-left: 8px;
      margin-right: 8px; //800x0.01=8
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      line-height: 1 !important;
      font-size: clamp(1.42rem, 1.4vw, 0.2rem);
      margin-left: 8px;
      margin-right: 8px; //800x0.01=8
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    line-height: 1 !important;
    font-size: clamp(1.60rem, 1.4vw, 0.2rem);
    margin-left: 53.76px;
    margin-right: 53.76px; //768x0.07=53.76
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    line-height: 1 !important;
    font-size: clamp(1.55rem, 1.4vw, 0.2rem);
    margin-left: 53.76px;
    margin-right: 53.76px; //768x0.07=53.76
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    line-height: 1 !important;
    font-size: clamp(1.55rem, 1.4vw, 0.2rem);
    margin-left: 53.76px;
    margin-right: 53.76px; //768x0.07=53.76
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    line-height: 1 !important;
    font-size: clamp(1.60rem, 1.4vw, 0.2rem);
    margin-left: 53.76px;
    margin-right: 53.76px; //768x0.07=53.76
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    line-height: 1 !important;
    font-size: clamp(1.33rem, 1.4vw, 0.2rem);
    margin-left: 7.2px;
    margin-right: 7.2px; //720x0.01=1.2
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    line-height: 1 !important;
    font-size: clamp(1.15rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //640x0.01=6.4
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    line-height: 1 !important;
    font-size: clamp(1.15rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //640x0.01=6.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    line-height: 1 !important;
    font-size: clamp(1.06rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //600x0.01=6
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    line-height: 1 !important;
    font-size: clamp(1.06rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //600x0.01=6
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    line-height: 1 !important;
    font-size: clamp(1rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //540x0.01=4.8
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    line-height: 1 !important;
    font-size: clamp(0.99rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //480x0.01=4.8
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    line-height: 1 !important;
    font-size: clamp(0.99rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //480x0.01=4.8
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    line-height: 1 !important;
    font-size: clamp(0.99rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //480x0.01=4.8
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    line-height: 1 !important;
    font-size: clamp(0.99rem, 1.4vw, 0.2rem);
    margin-left: 6px;
    margin-right: 6px; //480x0.01=4.8
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    line-height: 1 !important;
    font-size: clamp(0.82rem, 1.4vw, 0.2rem);
    margin-left: 3.6px;
    margin-right: 3.6px; //360x0.01=3.6
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    line-height: 1 !important;
    font-size: clamp(0.82rem, 1.4vw, 0.2rem);
    margin-left: 3.6px;
    margin-right: 3.6px; //360x0.01=3.6
  }	
}
//////////////////////////////////////////////////////////////////
`

const Invitation = styled.div`
background: #f8f9f5;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{ 
  display:block;
  width:547.2px; //0.19x2880=547.2
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    display:block;
    width:614.4px; //0.15x4096=614.4
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    display:block;
    width:614.4px; //0.15x4096=614.4
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  display:block;
  width:576px; //0.15x3840=576
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    display:block;
    width:450px; //0.15x3000=450
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    display:none;
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      display:none;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      display:block;
      width:432px; //0.15x2880=432
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    display:none;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    display:block;
    width:410.4px; //0.15x2736=410.4
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    display:block;
    width:409.8px; //0.15x2732=409.8
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      display:block;
      width:384px; //0.15x2560=384
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      display:block;
      width:384px; //0.15x2560=384
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      display:none;
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    display:block;
      width:358.2px; //0.15x2388=358.2
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    display:block;
      width:354px; //0.15x2360=354
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    display:none;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      display:none;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      display:block;
      width:345.6px; //0.15x2304=345.6
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    display:none;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    display:block;
      width:333.6px; //0.15x2224=333.6
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      display:none;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      display:none;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      display:block;
      width:345.6px; //0.16x2160=345.6
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      display:block;
      width:324px; //0.15x2160=324
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      display:none;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      display:block;
      width:307.2px; //0.15x2048=307.2
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    display:block;
    width:288.15px; //0.15x1921=288.15
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      display:block;
      width:288px; //0.15x1920=288
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      display:block;
      width:288px; //0.15x1920=288
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    display:none;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    display:none;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    display:none;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    display:block;
    width:252px; //0.15x1680=252
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      display:none;
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      display:none;
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    display:none;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    display:none;
  }  
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      display:none;
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      display:block;
      width:240px; //0.15x1600=240
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      display:block;
      width:240px; //0.15x1600=240
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    display:none;
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    display:none;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    display:none;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    display:none;
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    display:block;
    width:230.4px; //0.16x1440=230.4
  }
}
//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    display: block;
    width:204.9px; //0.15x1366=204.9
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    display: none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    display:none;
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      display:block;
      width:204.8px; //0.16x1280=204.8
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      display:block;
      width:204.8px; //0.16x1280=204.8
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      display:block;
      width:204.8px; //0.16x1280=204.8
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    display:none;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    display:none;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    display:none;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    display:block;
    width:194.56px; //0.19x1024=194.56
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    display:block;
    width:194.56px; //0.19x1024=194.56
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    display:none;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    display:none;
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      display:none;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      display:none;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      display:none;
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    display:none;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    display:none;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    display:none;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    display:none;
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    display:none;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
box-shadow: /* ie */
                 0px -2px 2px -1px  #F5AD28, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #F5AD28, /* bottom */
                 2px  0px  2px  0px  #F5AD28, /* right */
                -2px  0px  2px  0px  #F5AD28; /* left */
-webkit-box-shadow:
                0px -2px 2px -1px  #F5AD28, /* top - THE BLUE SHADOW */
                0px  2px  2px  0px  #F5AD28, /* bottom */
                2px  0px  2px  0px  #F5AD28, /* right */
                -2px  0px  2px  0px  #F5AD28; /* left */
-moz-box-shadow:
                0px -2px 2px -1px  #F5AD28, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #F5AD28, /* bottom */
                 2px  0px  2px  0px  #F5AD28, /* right */
                -2px  0px  2px  0px  #F5AD28; /* left */

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

text-align: center;
color: black;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(2.159rem, 1.9vw, 0.60rem); 
  padding-top:0.1rem;
padding-bottom:0.2rem;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.37rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.37rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(2.06rem, 1.9vw, 0.60rem); 
  padding-top:0.1rem;
  padding-bottom:0.2rem;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(1.91rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(1.91rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(1.72rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(1.24rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(1.24rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.64rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(1.28rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(1.28rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){}	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(1.42rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    //None
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(0.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){}
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){}
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){}
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){}
  
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){}
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
  }
}
//////////////////////////////////////////////////////////////////

@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){}
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){}
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){}
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){}
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){}
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){}
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){}
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(0.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){}
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){}
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){}
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){}
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){}	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){}
	}
}
//////////////////////////////////////////////////////////////////
`

const InviteSpecific1 = styled.div`
text-align: center;
color: #ff1010;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(2.159rem, 1.9vw, 0.60rem); 
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.37rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.37rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(2.06rem, 1.9vw, 0.60rem); 
  padding-top:0.1rem;
  padding-bottom:0.2rem;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(1.91rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(1.91rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(1.78rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(1.72rem, 1.9vw, 0.60rem); 
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(1.24rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(1.24rem, 1.9vw, 0.60rem); 
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.64rem, 1.9vw, 0.60rem); 
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(1.28rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(1.28rem, 1.9vw, 0.60rem); 
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){}	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(1.42rem, 1.9vw, 0.60rem); 
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1.33rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    //None
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){}
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){}
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){}
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){}
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){}
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
    }
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){}
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){}
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){}
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){}
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){}
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){}
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){}
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(0.87rem, 1.9vw, 0.60rem); 
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){}
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(0.78rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){}
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){}
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){}
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){}	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){}
	}
}
//////////////////////////////////////////////////////////////////
`

const LinkedInDetails1 = styled.div`
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
`

const Phone1 = styled.div`
padding-top:0.4rem;
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(3.159rem, 1.9vw, 0.60rem); 
}
`

const Email1 = styled.div`
padding-top:0.4rem;
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(3.159rem, 1.9vw, 0.60rem); 
}
`
const ContactImageContainer1 = styled.div`
text-align: center;
margin: 0 auto;
align-self: center;
justify-self: center;
justify-content: center;
width:100%; 
-o-object-fit: cover;
object-fit: cover;
position: relative;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  max-width: 50%;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    max-width: 50%;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    max-width: 50%;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  max-width: 50%;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    max-width: 50%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      max-width: 50%;
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    max-width: 50%;
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    max-width: 50%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      max-width: 50%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      max-width: 50%;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    max-width: 50%;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    max-width: 50%;
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    max-width: 50%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    max-width: 50%;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      max-width: 50%;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    max-width: 42%;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    max-width: 42%;
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      max-width: 42%;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){}	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      max-width: 46%;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      max-width: 46%;
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      max-width: 46%;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    max-width: 46%;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      max-width: 46%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      max-width: 46%;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    //None
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    max-width: 50%;
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){}
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){}
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){}
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){}
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){}
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      max-width: 50%;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      max-width: 42%;
    }
  }
}
//////////////////////////////////////////////////////////////////


@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){}
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){}
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){}
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){}
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){}
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){}
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){}
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    max-width: 42%;
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    max-width: 50%;
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){}
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      max-width: 50%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      max-width: 50%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      max-width: 50%;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    max-width: 50%;
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    max-width: 50%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){}
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){}
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){}
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){}	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){}
	}
}
//////////////////////////////////////////////////////////////////
`

const Message2 = styled.div`
background: #f8f9f5;
color: #1227DC;
display:none;
box-shadow: /* ie */
                 0px -4px 4px -2px  #E18A07, /* top - THE BLUE SHADOW */
                 0px  4px  4px  0px  #E18A07, /* bottom */
                 4px  0px  4px  0px  #E18A07, /* right */
                -4px  0px  4px  0px  #E18A07; /* left */
-webkit-box-shadow:
                0px -4px 4px -2px  #E18A07, /* top - THE BLUE SHADOW */
                0px  4px  4px  0px  #E18A07, /* bottom */
                4px  0px  4px  0px  #E18A07, /* right */
                -4px  0px  4px  0px  #E18A07; /* left */
-moz-box-shadow:
                0px -4px 4px -2px  #E18A07, /* top - THE BLUE SHADOW */
                 0px  4px  4px  0px  #E18A07, /* bottom */
                 4px  0px  4px  0px  #E18A07, /* right */
                -4px  0px  4px  0px  #E18A07; /* left */
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  display:none;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
  // Horizontal Monitor Display
  @media screen and (max-height: 2304px){
    display:none;
  }
  // Horizontal Monitor Display
  @media screen and (max-height: 2160px){
    display:none;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  display:none;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    display:block;
    max-width: 2208px; //3200x0.69=2208
    margin-top:14.4px; // 1440x.010=14.4
    margin-bottom:14.4px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    display:block;
    max-width: 2130.72px; //3088x0.69=2130.72
    margin-top:14.4px; // 1440x.010=14.4
    margin-bottom:14.4px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
  // Horizontal Monitor Display	
  @media screen and (max-width: 3000px),and (max-height: 2000px){
    display:none;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2960px),and (max-height: 1440px){
    display:block;
    max-width: 2042.4px; //2960x0.69=2042.4
    margin-top:14.4px; // 1440x.010=14.4
    margin-bottom:14.4px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }

  @media screen and (max-width: 2880px){

    // Vertical Monitor Display
    @media screen and (max-height: 5120px){
      display:block;
      max-width: 1987.2px; //2880x0.69=1987.2
      margin-top:51.2px; // 5120x.010=51.2
      margin-bottom:51.2px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1800px){
        display:none;
    }
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2778px),and (max-height: 1284px){
    display:block;
    max-width: 1916.82px; //2778x0.69=1916.82
    margin-top:12.84px; // 1284x.010=12.84
    margin-bottom:12.84px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
  // Horizontal Tablet Display
  @media screen and (max-width: 2736px),and (max-height: 1824px){
    display:none;
  }	
  // Horizontal Tablet Display
  @media screen and (max-width: 2732px),and (max-height: 2048px){
    display:none;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2688px),and (max-height: 1242px){
    display:block;
    max-width: 1840.92px; //2668x0.69=1840.92
    margin-top:12.42px; // 1242x.010=12.42
    margin-bottom:12.42px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
  @media screen and (max-width: 2560px){

    // Horizontal Monitor Display
    @media screen and (max-height: 1700px){
      display:none;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1600px){
      display:none;
    }	
    // Horizontal Smartphone Display
    @media screen and (max-height: 1440px){
      display:block;
      max-width: 1766.4px; //2560x0.69=1766.4
      margin-top:14.4px; // 1440x.010=14.4
      margin-bottom:14.4px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }	
  }

  // Horizontal Smartphone Display
  @media screen and (max-width: 2532px),and (max-height: 1170px){
    display:block;
    max-width: 1747.08px; //2532x0.69=1747.08
    margin-top:11.70px; // 1170x.010=11.70
    margin-bottom:11.70px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    display:block;
    max-width: 1680.84px; //2436x0.69=1680.84
    margin-top:11.25px; // 1125x.010=11.25
    margin-bottom:11.25px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    display:block;
    max-width: 1656px; //2400x0.69=1656
    margin-top:10.8px; // 1080x.010=10.8
    margin-bottom:10.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
  // Horizontal Tablet Display
  @media screen and (max-width: 2388px),and (max-height: 1668px){
    display:none;
  }
  // Horizontal Tablet Display
  @media screen and (max-width: 2360px),and (max-height: 1640px){
    display:none;
  }	
  // Horizontal Smartphone Display
  @media screen and (max-width: 2340px),and (max-height: 1080px){
    display:block;
    max-width: 1614.6px; //2340x0.69=1614.6
    margin-top:10.8px; // 1080x.010=10.8
    margin-bottom:10.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2310px),and (max-height: 1080px){
    display:block;
    max-width: 1593.9px; //2310x0.69=1593.9
    margin-top:10.8px; // 1080x.010=10.8
    margin-bottom:10.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	

  @media screen and (max-width: 2304px){
    
    // Vertical Monitor Display
    @media screen and (max-height: 4096px){
      display:block;
      max-width: 1589.76px; //2304x0.69=1589.76
      margin-top:40.96px; // 4096x.010=40.96
      margin-bottom:40.96px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1440px){
      display:none;
    }	
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    display:block;
    max-width: 1987.2px; //2280x0.69=1987.2
    margin-top:40.96px; // 4096x.010=40.96
    margin-bottom:40.96px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    display:none;
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      display:block;
      max-width: 1490.4px; //2160x0.69=1490.4
      margin-top:40.96px; // 4096x.010=40.96
      margin-bottom:40.96px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      display:block;
      max-width: 1490.4px; //2160x0.69=1490.4
      margin-top:38.4px; // 3840x.010=38.4
      margin-bottom:38.4px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      display:none;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      display:none;
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      display:block;
      max-width: 1413.12px; //2048x0.69=1413.12
      margin-top:27.32px; // 2732x.010=27.32
      margin-bottom:27.32px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      display:none;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    display:block;
    max-width: 1380px; //2000x0.69=1380
    margin-top:30px; // 3000x.010=30
    margin-bottom:30px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    display:none;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      display:none;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      display:none;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    display:block;
    max-width: 1258.56px; //1824x0.69=1258.56
    margin-top:27.36px; // 2736x.010=27.36
    margin-bottom:27.36px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    display:block;
    max-width: 1242px; //1800x0.69=1242
    margin-top:28.8px; // 2880x.010=28.8
    margin-bottom:28.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    display:block;
    max-width: 1236.48px; //1792x0.69=1236.48
    margin-top:8.28px; // 828x.010=8.28
    margin-bottom:8.28px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    display:block;
    max-width: 1173px; //1700x0.69=1173
    margin-top:25.6px; //2560x.010=25.6
    margin-bottom:25.6px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    display:none;
  }
	
	@media screen and (max-width: 1668px){

		// Vertical Tablet Display
		@media screen and (max-height: 2388px){
      display:block;
      max-width: 1150.92px; //1668x0.69=1150.92
      margin-top:23.88px; // 2388x.010=23.88
      margin-bottom:23.88px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }
		// Vertical Tablet Display	
		@media screen and (max-height: 2224px){
      display:block;
      max-width: 1150.92px; //1668x0.69=1150.92
      margin-top:22.24px; // 2224x.010=22.24
      margin-bottom:22.24px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }
	}
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    display:block;
    max-width: 1131.6px; //1640x0.69=1131.6
    margin-top:23.6px; // 2360x.010=23.6
    margin-bottom:23.6px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    display:block;
    max-width: 1117.8px; //1620x0.69=1117.8
    margin-top:21.6px; // 2160x.010=21.6
    margin-bottom:21.6px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	
	@media screen and (max-width: 1600px){

		// Vertical Monitor Display
		@media screen and (max-height: 2560px){
      display:block;
      max-width: 1104px; //1600x0.69=1104
      margin-top:25.6px; // 2560x.010=25.6
      margin-bottom:25.6px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1200px){
      display:none;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 900px){
      display:none;
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    display:block;
    max-width: 1059.84px; //1536x0.69=1059.84
    margin-top:20.48px; // 2048x.010=20.48
    margin-bottom:20.48px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
  max-width: 993.6px; //1440x0.69=993.6
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    display:block;
    margin-top:32px; // 3200x.010=32
    margin-bottom:32px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    display:block;
    margin-top:30.88px; // 3088x.010=30.88
    margin-bottom:30.88px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    display:block;
    margin-top:29.6px; // 2960x.010=29.6
    margin-bottom:29.6px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    display:block;
    margin-top:25.6px; // 2560x.010=25.6
    margin-bottom:25.6px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    display:block;
    margin-top:23.04px; // 2304x.010=23.04
    margin-bottom:23.04px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    display:block;
    margin-top:21.60px; // 2160x.010=21.60
    margin-bottom:21.60px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Horizontal Smartphone Display
  @media screen and (max-height: 1440px){
    display:block;
    margin-top:14.4px; // 1440x.010=14.4
    margin-bottom:14.4px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    display:none;
  }
}
////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    display:none;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    display:block;
    max-width: 920.46px; //1334x0.69=920.46
    margin-top:10px; // 750x.010=7.5
    margin-bottom:10px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    display:block;
    max-width: 885.96px; //1284x0.69=885.96
    margin-top:27.78px; // 2778x.010=27.78
    margin-bottom:27.78px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      display:none;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      display:none;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      display:none;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    display:block;
    max-width: 856.98px; //1242x0.69=856.98
    margin-top:26.88px; // 2688x.010=26.88
    margin-bottom:26.88px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    display:block;
    max-width: 828px; //1200x0.69=828
    margin-top:19.2px; // 1920x.010=19.2
    margin-bottom:19.2px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    display:block;
    max-width: 828px; //1200x0.69=828
    margin-top:16px; // 1600x.010=16
    margin-bottom:16px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    display:block;
    max-width: 807.3px; //1170x0.69=807.3
    margin-top:25.32px; // 2532x.010=25.32
    margin-bottom:25.32px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    display:block;
    max-width: 783.84px; //1136x0.69=783.84
    margin-top:10px; // 640x.010=6.4
    margin-bottom:10px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    display:block;
    max-width: 776.25px; //1125x0.69=776.25
    margin-top:24.36px; // 2436x.010=24.36
    margin-bottom:24.36px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    display: block;
    max-width: 745.2px; //1080x0.69=745.2
    margin-top:24px; // 2400x.010=24
    margin-bottom:24px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    display: block;
    max-width: 745.2px; //1080x0.69=745.2
    margin-top:23.4px; // 2340x.010=23.4
    margin-bottom:23.4px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    display: block;
    max-width: 745.2px; //1080x0.69=745.2
    margin-top:23.1px; // 2310x.010=23.1
    margin-bottom:23.1px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    display: block;
    max-width: 745.2px; //1080x0.69=745.2
    margin-top:22.8px; // 2280x.010=22.8
    margin-bottom:22.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    display: block;
    max-width: 745.2px; //1080x0.69=745.2
    margin-top:19.21px; // 1921x.010=19.21
    margin-bottom:19.21px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    display: block;
    max-width: 745.2px; //1080x0.69=745.2
    margin-top:19.21px; // 1921x.010=19.21
    margin-bottom:19.21px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    display:block;
    max-width: 724.5px; //1050x0.69=724.5
    margin-top:16.8px; // 1680x.010=16.8
    margin-bottom:16.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    display:none;
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    display:none;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    display:block;
    max-width: 700.8px; //960x0.73=700.8
    margin-top:10px; // 640x.010=6.4
    margin-bottom:10px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    display:block;
    max-width: 700.8px; //960x0.73=700.8
    margin-top:10px; // 540x.010=5.4
    margin-bottom:10px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
      display:block;
      max-width: 657px; //900x0.73=657
      margin-top:16px; // 1600x.010=16
      margin-bottom:16px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    display:block;
    max-width: 657px; //900x0.73=657
    margin-top:14.4px; // 1440x.010=14.4
    margin-bottom:14.4px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    display:block;
    max-width: 623.42px; //854x0.73=623.42
    margin-top:4.8px; // 480x.010=4.8
    margin-bottom:4.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    display:block;
    max-width: 604.44px; //828x0.73=604.44
    margin-top:17.92px; // 1792x.010=17.92
    margin-bottom:17.92px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      display:block;
      max-width: 584px; //800x0.73=584
      margin-top:12.8px; // 1280x.010=12.8
      margin-bottom:12.8px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      display: block;
      max-width: 584px; //800x0.73=584
      margin-top:6px; // 600x.010=6
      margin-bottom:6px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      display: block;
      max-width: 584px; //800x0.73=584
      margin-top:4.8px; // 480x.010=1.8
      margin-bottom:4.8px;
      align-self: center;
      justify-self: center;
      justify-content: center;
      line-height: 1.0 !important;
      letter-spacing: -1.1px;
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    display:block;
    max-width: 529.92px; //768x0.69=529.92
    margin-top:7.68px; // 768x.010=7.68
    margin-bottom:7.68px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    display:block;
    max-width: 529.92px; //768x0.69=529.92
    margin-top:7.68px; // 768x.010=7.68
    margin-bottom:7.68px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    display:block;
    max-width: 529.92px; //768x0.69=529.92
    margin-top:7.68px; // 768x.010=7.68
    margin-bottom:7.68px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    display:block;
    max-width: 517.5px; //750x0.69=517.5
    margin-top:7.5px; // 750x.010=7.5
    margin-bottom:7.5px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    display:block;
    max-width: 496.8px; //720x0.69=496.8
    margin-top:12.8px; // 1280x.010=12.8
    margin-bottom:12.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    display:block;
    max-width: 614.4px; //640x0.69=614.4
    margin-top:11.36px; // 1136x.010=11.36
    margin-bottom:11.36px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    display:block;
    max-width: 614.4px; //640x0.69=614.4
    margin-top:9.6px; // 960x.010=9.6
    margin-bottom:9.6px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    display:block;
    max-width: 414px; //600x0.69=414
    margin-top:10.24px; // 1024x.010=10.24
    margin-bottom:10.24px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    display:block;
    max-width: 414px; //600x0.69=414
    margin-top:8px; // 800x.010=8
    margin-bottom:8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    display:block;
    max-width: 372.6px; //540x0.69=372.6
    margin-top:9px; // 960x.010=9.6
    margin-bottom:9px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    display:block;
    max-width: 350.4px; //480x0.69=350.4
    margin-top:9px; // 854x.010=8.54
    margin-bottom:9px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    display: block;
    max-width: 350.4px; //480x0.69=350.4
    margin-top:9px; // 854x.010=8.54
    margin-bottom:9px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    display: block;
    max-width: 350.4px; //480x0.69=350.4
    margin-top:9px; // 854x.010=8.54
    margin-bottom:9px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    display: block;
    max-width: 350.4px; //480x0.69=350.4
    margin-top:9px; // 854x.010=8.54
    margin-bottom:9px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    display:block;
    max-width: 262.8px; //360x0.73=262.8
    margin-top:4.8px; // 480x.010=4.8
    margin-bottom:4.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    display:block;
    max-width: 233.6px; //320x0.73=233.6
    margin-top:4.8px; // 480x.010=4.8
    margin-bottom:4.8px;
    align-self: center;
    justify-self: center;
    justify-content: center;
    line-height: 1.0 !important;
    letter-spacing: -1.1px;
  }	
}
//////////////////////////////////////////////////////////////////
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

text-align: center;
color: black;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
  // Horizontal Monitor Display	
  @media screen and (max-width: 3000px),and (max-height: 2000px){
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2960px),and (max-height: 1440px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }

  @media screen and (max-width: 2880px){

    // Vertical Monitor Display
    @media screen and (max-height: 5120px){
      padding-top:1px; //1440x.0010=1px
      font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1800px){
    }
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2778px),and (max-height: 1284px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
  // Horizontal Tablet Display
  @media screen and (max-width: 2736px),and (max-height: 1824px){
  }	
  // Horizontal Tablet Display
  @media screen and (max-width: 2732px),and (max-height: 2048px){
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2688px),and (max-height: 1242px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
  @media screen and (max-width: 2560px){

    // Horizontal Monitor Display
    @media screen and (max-height: 1700px){
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1600px){
    }	
    // Horizontal Smartphone Display
    @media screen and (max-height: 1440px){
      padding-top:1px; //1440x.0010=1px
      font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    }	
  }

  // Horizontal Smartphone Display
  @media screen and (max-width: 2532px),and (max-height: 1170px){
    padding-top:1px; //1170x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    padding-top:1px; //1125x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    padding-top:1px; //1080x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){}
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){}	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    padding-top:1px;
    font-size: clamp(3.96rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    padding-top:1px;
    font-size: clamp(3.96rem, 1.9vw, 1.1rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      padding-top:3.2px; //3200x.0010=3.2px
      font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){}	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    padding-top:3.2px; //3200x.0010=3.2px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){}

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      padding-top:4.09px; //4096x.0010=4.09px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      padding-top:3.84px; //3840x.0010=3.84px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){}
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){}	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      padding-top:3.84px; //3840x.0010=3.84px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    padding-top:3.84px; //3840x.0010=3.84px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    padding-top:2.73px; //2736x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    padding-top:2.88px; //2880x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    padding-top:2.04px; //828x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    padding-top:2.04px; //828x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){}
	
	@media screen and (max-width: 1668px){

		// Vertical Tablet Display
		@media screen and (max-height: 2388px){
      padding-top:2.04px; //828x.0010=
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
		// Vertical Tablet Display	
		@media screen and (max-height: 2224px){
      padding-top:2.04px; //828x.0010=
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
	}
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    padding-top:2.04px; //828x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    padding-top:2.04px; //828x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	
	@media screen and (max-width: 1600px){

		// Vertical Monitor Display
		@media screen and (max-height: 2560px){
      padding-top:2.04px; //828x.0010=
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1200px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 900px){}
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    padding-top:2.04px; //2048x.0010=2.04px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    padding-top:3.2px; //3200x.0010=3.2px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    padding-top:3px; //3088x.0010=3px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    padding-top:2.96px; //2.960x.0010=2.96px
    font-size: clamp(3.71rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    padding-top:2.56px; //2560x.0010=2.56px
    font-size: clamp(3.06rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    padding-top:2.30px; //2304x.0010=2.30px
    font-size: clamp(2.96rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    padding-top:2.16px; //2160x.0010=2.16px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    padding-top:1.44px; //1440x.0010=1.44px
    font-size: clamp(2.6rem, 1.9vw, 1.1rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){}
}
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    padding-top:2px; //750x.0010=
    font-size: clamp(2.6rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    padding-top:2.77px; //2778x.0010=2.77px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){}	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){}
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    padding-top:2.68px; //2688x.0010=2.68px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    padding-top:1px; //1920x.0010=1px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    padding-top:1px; //1920x.0010=1px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    padding-top:2.53px; //2532x.0010=2.53px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    padding-top:1.136px; //1136x.0010=1.136px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    padding-top:1.125px; //1125x.0010=1.125px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    padding-top:2.4px; //2400x.0010=2.4px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    padding-top:2.34px; //2340x.0010=2.34px
    font-size: clamp(2.85rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    padding-top:2.31px; //2310x.0010=2.31px
    font-size: clamp(2.78rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    padding-top:2.28px; //2280x.0010=2.28px
    font-size: clamp(2.73rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    padding-top:1.921px; //1921x.0010=1.921px
    font-size: clamp(2.64rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    padding-top:1.92px; //1920x.0010=1.92px
    font-size: clamp(2.64rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    padding-top:1.68px; //1680x.0010=1.68px
    font-size: clamp(2.33rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(2.25rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(2.25rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(2.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.15rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(2.15rem, 1.9vw, 1.1rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    padding-top:1.36px; //1366x.0010=1.36px
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    padding-top:1.28px; //1280x.0010=1.28px
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    padding-top:1.02px; //1024x.0010=1.02px
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    padding-top:1.33px; //1334x.0010=1.33px
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    padding-top:1.28px; //1280x.0010=1.28px
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    padding-top:1.13px; //1136x.0010=1.13px
    font-size: clamp(1.60rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    padding-top:1px; //960x.0010=0.96px
    font-size: clamp(1.60rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.51rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.51rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.46rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    padding-top:2px; //360x.0010=2px
    font-size: clamp(1rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    padding-top:2px; //320x.0010=2px
    font-size: clamp(1rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
`

const InviteSpecific2 = styled.div`
// padding-top:0.2rem;
// font-size: 1.15rem;
text-align: center;
color: #ff1010;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
  // Horizontal Monitor Display	
  @media screen and (max-width: 3000px),and (max-height: 2000px){
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2960px),and (max-height: 1440px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }

  @media screen and (max-width: 2880px){

    // Vertical Monitor Display
    @media screen and (max-height: 5120px){
      padding-top:1px; //1440x.0010=1px
      font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1800px){
    }
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2778px),and (max-height: 1284px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
  // Horizontal Tablet Display
  @media screen and (max-width: 2736px),and (max-height: 1824px){
  }	
  // Horizontal Tablet Display
  @media screen and (max-width: 2732px),and (max-height: 2048px){
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2688px),and (max-height: 1242px){
    padding-top:1px; //1440x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
  @media screen and (max-width: 2560px){

    // Horizontal Monitor Display
    @media screen and (max-height: 1700px){
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1600px){
    }	
    // Horizontal Smartphone Display
    @media screen and (max-height: 1440px){
      padding-top:1px; //1440x.0010=1px
      font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    }	
  }

  // Horizontal Smartphone Display
  @media screen and (max-width: 2532px),and (max-height: 1170px){
    padding-top:1px; //1170x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    padding-top:1px; //1125x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    padding-top:1px; //1080x.0010=1px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){}
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){}	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    padding-top:1px;
    font-size: clamp(3.96rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    padding-top:1px;
    font-size: clamp(3.96rem, 1.9vw, 1.1rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){}	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    padding-top:3.2px; //3200x.0010=3.2px
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){}

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      padding-top:4.09px; //4096x.0010=4.09px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      padding-top:3.84px; //3840x.0010=3.84px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){}
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){}	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    padding-top:2.04px; //828x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    padding-top:2.04px; //828x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){}
	
	@media screen and (max-width: 1668px){

		// Vertical Tablet Display
		@media screen and (max-height: 2388px){
      padding-top:2.04px; //828x.0010=
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
		// Vertical Tablet Display	
		@media screen and (max-height: 2224px){
      padding-top:2.04px; //828x.0010=
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
	}
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    padding-top:2.04px; //828x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    padding-top:2.04px; //828x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	
	@media screen and (max-width: 1600px){

		// Vertical Monitor Display
		@media screen and (max-height: 2560px){
      padding-top:2.04px; //828x.0010=
      font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1200px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 900px){}
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      padding-top:3.84px; //3840x.0010=3.84px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    padding-top:3.84px; //3840x.0010=3.84px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
    // font-size: 1.28rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    padding-top:2.73px; //2736x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    padding-top:2.88px; //2880x.0010=
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    padding-top:2.04px; //2048x.0010=2.04px
    font-size: clamp(3.15rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(3.91rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(3.71rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(3.06rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.96rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.6rem, 1.9vw, 1.1rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){}
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    padding-top:2px; //750x.0010=
    font-size: clamp(2.6rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    padding-top:2.77px; //2778x.0010=2.77px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){}	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){}
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    padding-top:2.68px; //2688x.0010=2.68px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }		
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    padding-top:1px; //1920x.0010=1px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    padding-top:1px; //1920x.0010=1px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    padding-top:2.53px; //2532x.0010=2.53px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    padding-top:1.136px; //1136x.0010=1.136px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    padding-top:1.125px; //1125x.0010=1.125px
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
  @media screen and (max-height: 2400px){
    font-size: clamp(2.87rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(2.85rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(2.78rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(2.73rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(2.64rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(2.64rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(2.33rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(2.25rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(2.25rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(2.15rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.15rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(2.15rem, 1.9vw, 1.1rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    padding-top:1.36px; //1366x.0010=1.36px
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    padding-top:1.28px; //1280x.0010=1.28px
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    padding-top:1.02px; //1024x.0010=1.02px
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    padding-top:1.33px; //1334x.0010=1.33px
    font-size: clamp(1.73rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    padding-top:1.28px; //1280x.0010=1.28px
    font-size: clamp(1.69rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    font-size: clamp(1.60rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.60rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.51rem, 1.9vw, 1.1rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.51rem, 1.9vw, 1.1rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.46rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
  // Vertical Smartphone Display
	@media screen and (max-height: 480px){
    padding-top:2px; //360x.0010=2px
    font-size: clamp(1rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    padding-top:2px; //320x.0010=2px
    font-size: clamp(1rem, 1.9vw, 1.1rem);
  }		
}
//////////////////////////////////////////////////////////////////
`

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
display: flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
`

const Email2 = styled.div`
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

-o-object-fit: cover;
object-fit: cover;
position: relative;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    max-width: 37%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
      max-width: 37%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
  // Horizontal Monitor Display	
  @media screen and (max-width: 3000px),and (max-height: 2000px){
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2960px),and (max-height: 1440px){
    max-width: 37%;
  }

  @media screen and (max-width: 2880px){

    // Vertical Monitor Display
    @media screen and (max-height: 5120px){
      max-width: 37%;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1800px){
    }
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2778px),and (max-height: 1284px){
    max-width: 37%;
  }
  // Horizontal Tablet Display
  @media screen and (max-width: 2736px),and (max-height: 1824px){
  }	
  // Horizontal Tablet Display
  @media screen and (max-width: 2732px),and (max-height: 2048px){
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2688px),and (max-height: 1242px){
    max-width: 37%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
  @media screen and (max-width: 2560px){

    // Horizontal Monitor Display
    @media screen and (max-height: 1700px){
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 1600px){
    }	
    // Horizontal Smartphone Display
    @media screen and (max-height: 1440px){
      max-width: 37%;
    }	
  }

  // Horizontal Smartphone Display
  @media screen and (max-width: 2532px),and (max-height: 1170px){
    max-width: 37%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    max-width: 37%;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    max-width: 37%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){}
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){}	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    max-width: 33%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    max-width: 33%;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      max-width: 37%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){}	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){}
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){}

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      max-width: 33%;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      max-width: 33%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){}
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){}	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      max-width: 33%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    max-width: 33%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    max-width: 37%;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    max-width: 37%;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    max-width: 37%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    max-width: 37%;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){}
	
	@media screen and (max-width: 1668px){

		// Vertical Tablet Display
		@media screen and (max-height: 2388px){
      max-width: 37%;
    }
		// Vertical Tablet Display	
		@media screen and (max-height: 2224px){
      max-width: 37%;
    }
	}
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    max-width: 37%;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    max-width: 37%;
  }
	
	@media screen and (max-width: 1600px){

		// Vertical Monitor Display
		@media screen and (max-height: 2560px){
      max-width: 37%;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1200px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 900px){}
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    max-width: 37%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    max-width: 37%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    max-width: 37%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    max-width: 33%;
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    max-width: 31%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    max-width: 29%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    max-width: 27%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    max-width: 24%;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){}
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    max-width: 24%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    max-width: 24%;
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){}
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){}	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){}
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    max-width: 24%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    max-width: 24%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    max-width: 24%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    max-width: 24%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    max-width: 24%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    max-width: 24%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    max-width: 24%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    max-width: 24%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    max-width: 24%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    max-width: 24%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    max-width: 24%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    max-width: 24%;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    max-width: 24%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    max-width: 24%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    max-width: 24%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    max-width: 24%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    max-width: 24%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    max-width: 24%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    max-width: 24%;
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      max-width: 24%;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      max-width: 24%;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      max-width: 24%;
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    max-width: 24%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    max-width: 24%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    max-width: 42%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    max-width: 42%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    max-width: 42%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    max-width: 42%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    max-width: 42%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    max-width: 42%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    max-width: 42%;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    max-width: 42%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    max-width: 42%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    max-width: 42%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    max-width: 42%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    max-width: 42%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    max-width: 60%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    max-width: 60%;
  }	
}
//////////////////////////////////////////////////////////////////
`

const ContactImage = styled(GatsbyImage)`
border-radius: 51%;
`
const ClimateChangeTemperatureOutter = styled.div`
position: relative;
display:flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{ 
  margin-right: 512px; //5120x.10=512
  margin-left: 512px;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    margin-right: 409.6px; //4096x.10=409.6
    margin-left: 409.6px;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    margin-right: 409.6px; //4096x.10=409.6
    margin-left: 409.6px;
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  margin-right: 384px; //3840x.10=384
  margin-left: 384px;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    margin-right: 3.2px; //3200x.0010=3.2
    margin-left: 3.2px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    margin-right: 3px; //3088x.0010=3
    margin-left: 3px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    margin-right: 300px; //3000x.10=300
    margin-left: 300px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    margin-right: 2.96px; //2960x.0010=2.96
    margin-left: 2.96px;
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      margin-right: 2.88px; //2880x.0010=2.88
      margin-left: 2.88px;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      margin-right: 288px; //2880x.10=288
      margin-left: 288px;
    }
	}	
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    margin-right: 2.778px; //2778x.0010=2.778
    margin-left: 2.778px;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    margin-right: 273.6px; //2736x.10=273.6
    margin-left: 273.6px;
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    margin-right: 273.2px; //2732x.10=273.2
    margin-left: 273.2px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    margin-right: 2.688px; //2688x.0010=2.688
    margin-left: 2.688px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      margin-right: 256px; //2560x.10=256
      margin-left: 256px;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      margin-right: 256px; //2560x.10=256
      margin-left: 256px;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      margin-right: 2.560px; //2560x.0010=2.560
      margin-left: 2.560px;
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    margin-right: 2.532px; //2532x.0010=2.532
    margin-left: 2.532px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    margin-right: 2.436px; //2436x.0010=2.436
    margin-left: 2.436px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    margin-right: 2.436px; //2436x.0010=2.436
    margin-left: 2.436px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    margin-right: 238.8px; //2388x.10=238.8
    margin-left: 238.8px
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    margin-right: 236px; //2360x.10=236
    margin-left: 236px;
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    margin-right: 2.34px; //2340x.0010=2.34
    margin-left: 2.34px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    margin-right: 2.31px; //2310x.0010=2.31
    margin-left: 2.31px;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      margin-right: 2.304px; //2304x.0010=2.304
      margin-left: 2.304px;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      margin-right: 230.4px; //2304x.10=230.4
      margin-left: 230.4px;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    margin-right: 2.28px; //2280x.0010=2.28
    margin-left: 2.28px;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    margin-right: 22.24px; //2224x.10=22.24
    margin-left: 22.24px;
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      margin-right: 2.16px; //2160x.0010=2.16
      margin-left: 2.16px;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      margin-right: 2.16px; //2160x.0010=2.16
      margin-left: 2.16px;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      margin-right: 216px; //2160x.10=216
      margin-left: 216px;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      margin-right: 216px; //2160x.10=216
      margin-left: 216px;
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      margin-right: 20.48px; //2048x.010=20.48
      margin-left: 20.48px;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      margin-right: 2.048px; //2048x.0010=2.048
      margin-left: 2.048px;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    margin-right: 20px; //2000x.010=20
    margin-left: 20px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    margin-right: 192.1px; //1921x.10=192.1
    margin-left: 192.1px;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      margin-right: 192.1px; //1921x.10=192.1
      margin-left: 192.1px;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      margin-right: 192.1px; //1921x.10=192.1
      margin-left: 192.1px;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    margin-right: 18.24px; //1824x.010=18.24
    margin-left: 18.24px;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    margin-right: 18px; //1800x.010=18
    margin-left: 18px;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    margin-right: 17.92px; //1792x.010=17.92
    margin-left: 17.92px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    // background:gray;
    margin-right: 17px; //1700x.010=17
    margin-left: 17px;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    margin-right: 16.8px; //1680x.010=16.8
    margin-left: 16.8px;
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      margin-right: 16.68px; //1668x.010=16.68
      margin-left: 16.68px;
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      margin-right: 16.68px; //1668x.010=16.68
      margin-left: 16.68px;
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    margin-right: 16.40px; //1640x.010=16.40
    margin-left: 16.40px;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    margin-right: 16.20px; //1620x.010=16.20
    margin-left: 16.20px;
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      margin-right: 16.00px; //1600x.010=16.00
      margin-left: 16.00px;
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      margin-right: 16.00px; //1600x.010=16.00
      margin-left: 16.00px;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      margin-right: 16.00px; //1600x.010=16.00
      margin-left: 16.00px;
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    margin-right: 15.36px; //1536x.010=15.36
    margin-left: 15.36px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
  // Vertical Smartphone Display
	@media screen and (max-width: 1440px),and (max-height: 3200px){
    margin-right: 1.44px; //1440x.0010=1.44
    margin-left: 1.44px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1440px),and (max-height: 3088px){
    margin-right: 1.44px; //1440x.0010=1.44
    margin-left: 1.44px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1440px),and (max-height: 2960px){
    margin-right: 1.44px; //1440x.0010=1.44
    margin-left: 1.44px;
  }
	// Vertical Smartphone Display	
	@media screen and (max-width: 1440px),and (max-height: 2560px){
    margin-right: 1.44px; //1440x.0010=1.44
    margin-left: 1.44px;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1440px),and (max-height: 2304px){
    margin-right: 1.44px; //1440x.0010=1.44
    margin-left: 1.44px;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1440px),and (max-height: 2160px){
    margin-right: 1.44px; //1440x.0010=1.44
    margin-left: 1.44px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1440px),and (max-height: 1440px){
    margin-right: 1.44px; //1440x.0010=1.44
    margin-left: 1.44px;
  }
  // Horizontal Monitor Display
	@media screen and (max-width: 1440px),and (max-height: 900px){
    margin-right: 14.40px; //1440x.010=14.40
    margin-left: 14.40px;
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    // background: gray;
    margin-right: 136.6px; //1366x.10=136.6
    margin-left: 136.6px;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    // background: gray;
    margin-right: 1.3px; //1334x.00010=1.3
    margin-left: 1.3px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    margin-right: 1.284px; //1284x.10=1.284
    margin-left: 1.284px;
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      margin-right: 128px; //1280x.10=128
      margin-left: 128px;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      margin-right: 128px; //1280x.10=128
      margin-left: 128px;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      margin-right: 128px; //1280x.10=128
      margin-left: 128px;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    margin-right: 1.242px; //1242x.10=124.2
    margin-left: 1.242px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    margin-right: 120px; //1200x.10=120
    margin-left: 120px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    margin-right: 120px; //1200x.10=120
    margin-left: 120px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    margin-right: 117px; //1170x.10=117
    margin-left: 117px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    margin-right: 113.6px; //1136x.10=113.6
    margin-left: 113.6px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    margin-right: 112.5px; //1125x.10=112.5
    margin-left: 112.5px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    margin-right: 1.08px; //1080x.0010=1.08
    margin-left: 1.08px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    margin-right: 1.08px; //1080x.0010=1.08
    margin-left: 1.08px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    margin-right: 1.08px; //1080x.0010=1.08
    margin-left: 1.08px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    margin-right: 1.08px; //1080x.0010=1.08
    margin-left: 1.08px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    margin-right: 1.08px; //1080x.0010=1.08
    margin-left: 1.08px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    margin-right: 1.08px; //1080x.0010=1.08
    margin-left: 1.08px;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    margin-right: 1.05px; //1050x.0010=1.05
    margin-left: 1.05px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    margin-right: 51.2px; //1024x.05=51.2
    margin-left: 51.2px;
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    margin-right: 51.2px; //1024x.05=51.2
    margin-left: 51.2px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    min-width: 921.6px;//960x0.96=921.6
    margin-left: 19.2px; //960x0.02=19.2
    margin-right: 19.2px;
    margin-top: 6.4px; //640x0.010=6.4
    margin-bottom: 37px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    min-width: 921.6px;//960x0.96=921.6
    margin-left: 19.2px; //960x0.02=19.2
    margin-right: 19.2px;
    margin-top: 5.4px; //540x0.010=5.4
    margin-bottom: 37px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    margin-right: 6px; //900x.0010=0.854
    margin-left: 6px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    margin-right: 6px; //900x.0010=0.854
    margin-left: 6px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    margin-right: 6px; //854x.0010=0.854
    margin-left: 6px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    margin-right: 6px; //828x.0010=0.828
    margin-left: 6px;
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      margin-right: 6px; //800x.0010=0.8
      margin-left: 6px;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      margin-right: 6px; //800x.0010=0.800
      margin-left: 6px;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      margin-right: 6px; //800x.0010=0.800
      margin-left: 6px;
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    margin-right: 0.768px; //768x.0010=0.768
    margin-left: 0.768px;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    margin-right: 0.768px; //768x.0010=0.768
    margin-left: 0.768px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    margin-right: 0.768px; //768x.0010=0.768
    margin-left: 0.768px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    margin-right: 0.750px; //750x.0010=0.750
    margin-left: 0.750px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    margin-right: 2px;
    margin-left: 2px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    margin-right: 2px;
    margin-left: 2px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    margin-right: 2px;
    margin-left: 2px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    margin-right: 2px;
    margin-left: 2px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    margin-right: 2px;
    margin-left: 2px;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    margin-right: 2px;
    margin-left: 2px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    margin-right: 2px;
    margin-left: 2px;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    margin-right: 2px;
    margin-left: 2px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    margin-right: 1px;
    margin-left: 1px;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    margin-right: 1px;
    margin-left: 1px;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    margin-right: 4px; //360x.0010=0.800
    margin-left: 4px;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    margin-right: 4px; //320x.0010=0.800
    margin-left: 4px;
  }	
}
//////////////////////////////////////////////////////////////////
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
color: white;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  text-align: left;
  min-width: 4096px; //5120x0.8=4096
  // proof and contact is 11.5rem right
  padding-left: 512px; //5120x0.10=512
  font-size: clamp(2.96rem, 1.9vw, 0.60rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    text-align: left;
    min-width: 3276.8px; //4096x0.8=3276.8
    // proof and contact is 11.5rem right
    padding-left: 409.6px; //4096x0.10=409.6
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    text-align: left;
    min-width: 3276.8px; //4096x0.8=3276.8
    // proof and contact is 11.5rem right
    padding-left: 409.6px; //4096x0.10=409.6
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  text-align: left;
  min-width: 3072px; //3840x0.8=3072
  // proof and contact is 11.5rem right
  padding-left: 384px; //3840x0.10=384
  font-size: clamp(2.4rem, 1.9vw, 0.60rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2880px; //3200x0.9=2880
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2779.2px; //3088x0.9=2779.2
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    text-align: left;
    min-width: 2400px; //3000x0.8=2400
    // proof and contact is 11.5rem right
    padding-left: 300px; //3000x0.10=300
    font-size: clamp(1.73rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2664px; //2960x0.9=2664
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      text-align: center;
      padding-left: 0.1rem;
      min-width: 2592px; //2880x0.9=2592
      font-size: clamp(3.4rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      text-align: left;
      min-width: 2304px; //2880x0.8=2304
      // proof and contact is 11.5rem right
      padding-left: 288px; //2880x0.10=288
      font-size: clamp(1.73rem, 1.9vw, 0.60rem);
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2500.2px; //2778x0.9=2500.2
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    text-align: left;
    min-width: 2188.8px; //2736x0.8=2188.8
    // proof and contact is 11.5rem right
    padding-left: 273.6px; //2736x0.10=273.6
    font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    text-align: left;
    min-width: 2185.6px; //2732x0.8=2185.6
    // proof and contact is 11.5rem right
    padding-left: 273.2px; //2732x0.10=273.2
    font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2419.2px; //2688x0.9=2419.2
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      text-align: left;
      min-width: 2048px; //2560x0.8=2048
      // proof and contact is 11.5rem right
      padding-left: 256px; //2560x0.10=256
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      text-align: left;
      min-width: 2048px; //2560x0.8=2048
      // proof and contact is 11.5rem right
      padding-left: 256px; //2560x0.10=256
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      text-align: center;
      padding-left: 0.1rem;
      min-width: 2304px; //2560x0.9=2304
      font-size: clamp(3.4rem, 1.9vw, 0.60rem);
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2278.8px; //2532x0.9=2278.8
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2192.4px; //2436x0.9=2192.4
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2160px; //2400x0.8=2160
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    // background:green;
    text-align: left;
    min-width: 1910.4px; //2388x0.8=1910.4
    // proof and contact is 11.5rem right
    padding-left: 119.4px; //2388x0.05=119.4
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    // background:green;
    text-align: left;
    min-width: 1888px; //2360x0.8=1888
    // proof and contact is 11.5rem right
    padding-left: 118px; //2360x0.05=118
    font-size: clamp(1.82rem, 1.9vw, 0.60rem);
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    min-width: 2106px; //2340x0.9=2106
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(3.15rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    min-width: 2079px; //2310x0.9=2079
    // proof and contact is 11.5rem right
    padding-left: 0.1rem
    font-size: clamp(3.55rem, 1.9vw, 0.60rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      min-width: 1843.2px; //2304x0.8=1843.2
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(3.01rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      // background:green;
      text-align: left;
      min-width: 1843.2px; //2304x0.8=1843.2
      // proof and contact is 11.5rem right
      padding-left: 230.4px; //2304x0.1=230.4
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    text-align: center;
      min-width: 1824px; //2280x0.8=1824
      // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    text-align: left;
      min-width: 1779.2px; //2224x0.8=1779.2
      // proof and contact is 11.5rem right
      padding-left: 222.4px; //2224x0.1=222.4
      font-size: clamp(1.78rem, 1.9vw, 0.60rem);
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      min-width: 1728px; //2160x0.8=1728
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      text-align: center;
      min-width: 1728px; //2160x0.8=1728
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      text-align: left;
      min-width: 1728px; //2160x0.8=1728
      // proof and contact is 11.5rem right
      padding-left: 324px; //2160x0.15=324
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      text-align: left;
      min-width: 1728px; //2160x0.8=1728
      // proof and contact is 11.5rem right
      padding-left: 324px; //2160x0.15=324
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      text-align: center;
      min-width: 1638.4px; //2048x0.8=1638.4
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      text-align: left;
      min-width: 1638.4px; //2048x0.8=1638.4
      // proof and contact is 11.5rem right
      padding-left: 204.8px; //2048x0.1=204.8
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    text-align: center;
    min-width: 1638.4px; //2048x0.8=1638.4
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    text-align: left;
    min-width: 1536.8px; //1921x0.8=1536.8
    // proof and contact is 11.5rem right
    padding-left: 288.15px; //1921x0.15=288.15
    font-size: clamp(1rem, 1.9vw, 0.60rem);
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      text-align: left;
      min-width: 1536.8px; //1921x0.8=1536.8
      // proof and contact is 11.5rem right
      padding-left: 288.15px; //1921x0.15=288.15
      font-size: clamp(1rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      text-align: left;
      min-width: 1536.8px; //1921x0.8=1536.8
      // proof and contact is 11.5rem right
      padding-left: 288.15px; //1921x0.15=288.15
      font-size: clamp(1rem, 1.9vw, 0.60rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    text-align: center;
    min-width: 1459.2px; //1824x0.8=1459.2
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    text-align: center;
    min-width: 1440px; //1800x0.8=1440
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    text-align: center;
    min-width: 1433.6px; //1792x0.8=1433.6
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
  // Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    text-align: center;
    min-width: 1360px; //1700x0.8=1360
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    // background:green;
    text-align: left;
    min-width: 1008px; //1680x0.6=1008
    // proof and contact is 11.5rem right
    padding-left: 84px; //1680x0.05=84
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      text-align: center;
      min-width: 1360px; //1700x0.8=1360
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      text-align: center;
      min-width: 1360px; //1700x0.8=1360
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    text-align: center;
    min-width: 1312px; //1640x0.8=1312
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    text-align: center;
    min-width: 1296px; //1620x0.8=1296
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1600px){

    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      text-align: center;
      min-width: 1280px; //1600x0.8=1280
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      // background:green;
      text-align: left;
      min-width: 1280px; //1600x0.8=1280
      // proof and contact is 11.5rem right
      padding-left: 80px; //1600x0.05=80
      font-size: clamp(1.19rem, 1.9vw, 0.60rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      text-align: left;
      min-width: 1280px; //1600x0.8=1280
      // proof and contact is 11.5rem right
      padding-left: 240px; //1600x0.15=240
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    text-align: center;
    min-width: 1228.8px; //1536x0.8=1228.8
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.10rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.9rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.7rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.5rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    text-align: left;
    min-width: 960px; //1440x0.6=864
    // proof and contact is 11.5rem right
    padding-left: 45px; //900x0.05=45
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    text-align: left;
    min-width: 1092.8px; //1366x0.8=1092.8
    // proof and contact is 11.5rem right
    padding-left: 136.6px; //1366x0.1=136.6
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    text-align: center;
    min-width: 1067.2px; //1334x0.8=1067.2
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    text-align: center;
    min-width: 1027.2px; //1284x0.8=1027.2
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      text-align: left;
      min-width: 896px; //1280x0.7=896
      // proof and contact is 11.5rem right
      padding-left: 64px; //1280x0.05=64
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      text-align: left;
      min-width: 896px; //1280x0.7=896
      // proof and contact is 11.5rem right
      padding-left: 64px; //1280x0.05=64
      font-size: clamp(0.90rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      text-align: left;
      min-width: 896px; //1280x0.7=896
      // proof and contact is 11.5rem right
      padding-left: 64px; //1280x0.05=64
      font-size: clamp(0.87rem, 1.9vw, 0.60rem);
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    text-align: center;
    min-width: 993.6px; //1242x0.8=993.6
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align: center;
    min-width: 960px; //1200x0.8=960
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    text-align: center;
    min-width: 960px; //1200x0.8=960
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    text-align: center;
    min-width: 936px; //1170x0.8=936
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    text-align: center;
    min-width: 908.8px; //1136x0.8=908.8
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    text-align: center;
    min-width: 900px; //1125x0.8=900
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    text-align: center;
    min-width: 840px; //1050x0.8=840
    // proof and contact is 11.5rem right
    padding-left: 52.5px; //1050x0.05=52.5
    font-size: clamp(1.5rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    text-align: left;
    min-width: 921.6px; //1024x0.9=921.6
    // proof and contact is 11.5rem right
    padding-left: 153.6px; //1024x0.15=153.6
    font-size: clamp(0.82rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    text-align: left;
    min-width: 921.6px; //1024x0.9=921.6
    // proof and contact is 11.5rem right
    padding-left: 102.4px; //1024x0.1=102.4
    font-size: clamp(0.82rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    text-align: center;
    min-width: 768px; //960x0.8=768
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.42rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    text-align: center;
    min-width: 768px; //960x0.8=768
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.42rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    text-align: center;
    min-width: 720px; //900x0.8=720
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.36rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    text-align: center;
    min-width: 720px; //900x0.8=720
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.36rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    text-align: center;
    min-width: 683.2px; //854x0.8=683.2
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    text-align: center;
    min-width: 662.4px; //828x0.8=662.4
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      text-align: center;
      min-width: 640px; //800x0.8=640
      // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      text-align: center;
      min-width: 640px; //800x0.8=640
      // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      text-align: center;
      min-width: 640px; //800x0.8=640
      // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    padding-left: 0.1rem;
    min-width: 614.4px; //768x0.8=614.4
    text-align: center;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    padding-left: 0.1rem;
    min-width: 614.4px; //768x0.8=614.4
    text-align: center;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    padding-left: 0.1rem;
    min-width: 614.4px; //768x0.8=614.4
    text-align: center;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    padding-left: 0.1rem;
    min-width: 600px; //750x0.8=600
    text-align: center;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    min-width: 655.2px; //720x0.91=655.2
    text-align: center;
    font-size: clamp(1.15rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    min-width: 582.4px; //640x0.91=582.4
    text-align: center;
    font-size: clamp(0.99rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    min-width: 582.4px; //640x0.91=582.4
    text-align: center;
    font-size: clamp(0.99rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    min-width: 546px; //600x0.91=546
    text-align: center;
    font-size: clamp(0.94rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    min-width: 546px; //600x0.91=546
    text-align: center;
    font-size: clamp(0.94rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    min-width: 540.91px; //540x0.91=540.91
    text-align: center;
    font-size: clamp(0.90rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    padding-left: 0.1rem;
    min-width: 436.8px; //480x0.91=436.8
    text-align: center;
    font-size: clamp(0.87rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    padding-left: 0.1rem;
    min-width: 436.8px; //480x0.91=436.8
    text-align: center;
    font-size: clamp(0.87rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    padding-left: 0.1rem;
    min-width: 436.8px; //480x0.91=436.8
    text-align: center;
    font-size: clamp(0.78rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    padding-left: 0.1rem;
  min-width: 436.8px; //480x0.91=436.8
  text-align: center;
  font-size: clamp(0.78rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    padding-left: 0.1rem;
    min-width: 324px; //360x0.9=324
    text-align: center;
    font-size: clamp(0.51rem, 1.9vw, 0.51rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    padding-left: 0.1rem;
    min-width: 288px; //320x0.9=288
    text-align: center;
    font-size: clamp(0.51rem, 1.9vw, 0.51rem);
  }	
}
//////////////////////////////////////////////////////////////////
`

const TemperatureChangeVideo = styled.video`
width: 100%;
-o-object-fit: cover;
object-fit: cover;
// #ff1010
// #1227DC
box-shadow: /* ie */
                 0px -4px 4px -2px  white, /* top - THE BLUE SHADOW */
                 0px  4px  4px  0px  white, /* bottom */
                 4px  0px  4px  0px  white, /* right */
                -4px  0px  4px  0px  white; /* left */
-webkit-box-shadow:
                0px -4px 4px -2px  white, /* top - THE BLUE SHADOW */
                0px  4px  4px  0px  white, /* bottom */
                4px  0px  4px  0px  white, /* right */
                -4px  0px  4px  0px  white; /* left */
-moz-box-shadow:
                0px -4px 4px -2px  white, /* top - THE BLUE SHADOW */
                 0px  4px  4px  0px  white, /* bottom */
                 4px  0px  4px  0px  white, /* right */
                -4px  0px  4px  0px  white; /* left */

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  max-width:64%;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    min-width:64%;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    min-width:61%;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  min-width:64%;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    min-width:100%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    min-width:79%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    min-width:100%;
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      min-width:100%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      min-width:64%;
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    min-width:100%;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    min-width:79%;
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    min-width:79%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      min-width:76%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      min-width:76%;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      min-width:100%;
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    min-width:100%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    min-width:76%;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    min-width:76%;
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    min-width:100%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    min-width:100%;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      min-width:100%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      min-width:70%;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    min-width:100%;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    min-width:78%;
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      min-width:100%;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      min-width:100%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      min-width:79%;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      min-width:78%;
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      min-width:100%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      min-width:79%;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    min-width:69%;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      min-width:76%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      min-width:69%;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    min-width:100%;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    min-width:100%;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    min-width:100%;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    min-width:81%;
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      min-width:100%;
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      min-width:100%;
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    min-width:100%;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    min-width:100%;
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      min-width:100%;
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      min-width:79%;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      min-width:60%;
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
  // Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    min-width:100%;
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    min-width:100%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    min-width:100%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    min-width:100%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    min-width:100%;
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    min-width:71%;
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{ 
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    min-width:61%;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    min-width:100%;
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      min-width:64%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      min-width:63%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      min-width:60%;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    min-width:100%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    min-width:100%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    min-width:100%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    min-width:100%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    min-width:100%;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    min-width:79%;
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    min-width:60%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    min-width:100%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    min-width:100%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    min-width:100%;
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      min-width:100%;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      min-width:100%;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      min-width:100%;
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    min-width:100%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    min-width:100%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    min-width:100%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    min-width:100%;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    min-width:100%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    min-width:100%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    min-width:100%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    min-width:100%;
  }	
}
//////////////////////////////////////////////////////////////////
`

const DataInfo = styled.div`
color:white;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{

  text-align: left;
  font-size: clamp(2.96rem, 1.9vw, 0.60rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    text-align: left;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    text-align: left;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  text-align: left;
  font-size: clamp(2.4rem, 1.9vw, 0.60rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
      text-align: left;
      font-size: clamp(1.73rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      text-align: center;
      padding-left: 0.1rem;
      font-size: clamp(3.4rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
        text-align: left;
        font-size: clamp(1.73rem, 1.9vw, 0.60rem);
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    text-align: left;
    font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    text-align: left;
    font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      text-align: left;
      // proof and contact is 11.5rem right
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      text-align: left;
      // proof and contact is 11.5rem right
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      text-align: center;
      padding-left: 0.1rem;
      font-size: clamp(3.4rem, 1.9vw, 0.60rem);
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    // background:green;
    text-align: left;
    // proof and contact is 11.5rem right
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    // background:green;
    text-align: left;
    // proof and contact is 11.5rem right
    font-size: clamp(1.82rem, 1.9vw, 0.60rem);
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    padding-left: 0.1rem;
    // proof and contact is 11.5rem right
    font-size: clamp(3.15rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(3.15rem, 1.9vw, 0.60rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(3.01rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      // background:green;
      text-align: left;
      // proof and contact is 11.5rem right
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    text-align: center;
    padding-left: 0.1rem;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    text-align: left;
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      padding-left: 0.1rem;

      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      text-align: center;
      padding-left: 0.1rem;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    text-align: left;
    font-size: clamp(1rem, 1.9vw, 0.60rem);
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      text-align: left;
      font-size: clamp(1rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      text-align: left;
      font-size: clamp(1rem, 1.9vw, 0.60rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    text-align:center;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    text-align:left;
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      text-align:left;
      font-size: clamp(1.19rem, 1.9vw, 0.60rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      text-align:left;
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.10rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.9rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.7rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.5rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    text-align:left;
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    text-align:left;
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    text-align:center;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      text-align:left;
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      text-align:left;
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      text-align:left;
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.5rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    text-align:left;
    font-size: clamp(0.82rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    text-align:left;
    font-size: clamp(0.82rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.42rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.42rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.36rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.36rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      text-align:center;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }	
    
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(1.15rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.99rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.99rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.94rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.94rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.90rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.87rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.87rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.78rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
  text-align: center;
  padding-left: 0.1rem;
  font-size: clamp(0.78rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(0.51rem, 1.9vw, 0.51rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(0.51rem, 1.9vw, 0.51rem);
  }	
}
//////////////////////////////////////////////////////////////////
`

const CreditInfo = styled.div`
color:white;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{

  text-align: left;
  font-size: clamp(2.96rem, 1.9vw, 0.60rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    text-align: left;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    text-align: left;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  text-align: left;
  font-size: clamp(2.4rem, 1.9vw, 0.60rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
      text-align: left;
      font-size: clamp(1.73rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      text-align: center;
      padding-left: 0.1rem;
      font-size: clamp(3.4rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
        text-align: left;
        font-size: clamp(1.73rem, 1.9vw, 0.60rem);
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    text-align: left;
    font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    text-align: left;
    font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      text-align: left;
      // proof and contact is 11.5rem right
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      text-align: left;
      // proof and contact is 11.5rem right
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      text-align: center;
      padding-left: 0.1rem;
      font-size: clamp(3.4rem, 1.9vw, 0.60rem);
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    // background:green;
    text-align: left;
    // proof and contact is 11.5rem right
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    // background:green;
    text-align: left;
    // proof and contact is 11.5rem right
    font-size: clamp(1.82rem, 1.9vw, 0.60rem);
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    padding-left: 0.1rem;
    // proof and contact is 11.5rem right
    font-size: clamp(3.15rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    padding-left: 0.1rem;
    // proof and contact is 11.5rem right
    font-size: clamp(3.15rem, 1.9vw, 0.60rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(3.01rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      // background:green;
      text-align: left;
      // proof and contact is 11.5rem right
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    text-align:center;
    padding-left: 0.1rem;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    text-align: left;
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      padding-left: 0.1rem;
      // proof and contact is 11.5rem right
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      text-align: center;
      padding-left: 0.1rem;
      // proof and contact is 11.5rem right
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    text-align: left;
    font-size: clamp(1rem, 1.9vw, 0.60rem);
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      text-align: left;
      font-size: clamp(1rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      text-align: left;
      font-size: clamp(1rem, 1.9vw, 0.60rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    text-align:left;
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      text-align:left;
      font-size: clamp(1.19rem, 1.9vw, 0.60rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      text-align:left;
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.10rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.9rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.7rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.5rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    text-align:left;
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    text-align:left;
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      text-align:left;
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      text-align:left;
      font-size: clamp(0.90rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      text-align:left;
      font-size: clamp(0.87rem, 1.9vw, 0.60rem);
    }
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.5rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    text-align:left;
    font-size: clamp(0.82rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    text-align:left;
    font-size: clamp(0.82rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.42rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.42rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.36rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.36rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      text-align:center;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      text-align:center;
      padding-left: 0.1rem;
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(1.15rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.99rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.99rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.94rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.94rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.90rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.87rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.87rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(0.78rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
  text-align: center;
  padding-left: 0.1rem;
  font-size: clamp(0.78rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(0.51rem, 1.9vw, 0.51rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    text-align:center;
    padding-left: 0.1rem;
    font-size: clamp(0.51rem, 1.9vw, 0.51rem);
  }	
}
//////////////////////////////////////////////////////////////////
`

const VideoInfo = styled.div`
line-height: 1.2 !important;
// letter-spacing: -1.1px;
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  min-width: 4096px; //5120x0.8=4096
  // proof and contact is 11.5rem right
  padding-left: 512px; //5120x0.10=512
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    text-align: left;
    min-width: 3276.8px; //4096x0.8=3276.8
    // proof and contact is 11.5rem right
    padding-left: 409.6px; //4096x0.10=409.6
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    text-align: left;
    min-width: 3276.8px; //4096x0.8=3276.8
    // proof and contact is 11.5rem right
    padding-left: 409.6px; //4096x0.10=409.6
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  text-align: left;
  min-width: 3072px; //3840x0.8=3072
  // proof and contact is 11.5rem right
  padding-left: 384px; //3840x0.10=384
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2880px; //3200x0.9=2880
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2779.2px; //3088x0.9=2779.2
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    text-align: left;
    min-width: 2400px; //3000x0.8=2400
    // proof and contact is 11.5rem right
    padding-left: 300px; //3000x0.10=300
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2664px; //2960x0.9=2664
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      text-align: center;
      padding-left: 0.1rem;
      min-width: 2592px; //2880x0.9=2592
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      text-align: left;
      min-width: 2304px; //2880x0.8=2304
      // proof and contact is 11.5rem right
      padding-left: 288px; //2880x0.10=288
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2500.2px; //2778x0.9=2500.2
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    text-align: left;
    min-width: 2188.8px; //2736x0.8=2188.8
    // proof and contact is 11.5rem right
    padding-left: 273.6px; //2736x0.10=273.6
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    text-align: left;
    min-width: 2185.6px; //2732x0.8=2185.6
    // proof and contact is 11.5rem right
    padding-left: 273.2px; //2732x0.10=273.2
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2419.2px; //2688x0.9=2419.2
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      text-align: left;
      min-width: 2048px; //2560x0.8=2048
      // proof and contact is 11.5rem right
      padding-left: 256px; //2560x0.10=256
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      text-align: left;
      min-width: 2048px; //2560x0.8=2048
      // proof and contact is 11.5rem right
      padding-left: 256px; //2560x0.10=256
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      text-align: center;
      padding-left: 0.1rem;
      min-width: 2048px; //2560x0.8=2048
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2025.6px; //2532x0.8=2025.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2192.4px; //2436x0.8=2192.4
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 2160px; //2400x0.9=2160
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    // background:green;
    text-align: left;
    min-width: 1910.4px; //2388x0.8=1910.4
    // proof and contact is 11.5rem right
    padding-left: 119.4px; //2388x0.05=119.4
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    // background:green;
    text-align: left;
    min-width: 1888px; //2360x0.8=1888
    // proof and contact is 11.5rem right
    padding-left: 118px; //2360x0.05=118
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    min-width: 2106px; //2340x0.9=2106
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    min-width: 2079px; //2310x0.9=2079
    // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      min-width: 1843.2px; //2304x0.8=1843.2
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      // background:green;
      text-align: left;
      min-width: 1843.2px; //2304x0.8=1843.2
      // proof and contact is 11.5rem right
      padding-left: 230.4px; //2304x0.1=230.4
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    text-align: center;
      min-width: 1824px; //2280x0.8=1824
      // proof and contact is 11.5rem right
      padding-left: 0.1rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    text-align: left;
      min-width: 1779.2px; //2224x0.8=1779.2
      // proof and contact is 11.5rem right
      padding-left: 222.4px; //2224x0.1=222.4
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      min-width: 1728px; //2160x0.8=1728
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      text-align: center;
      min-width: 1728px; //2160x0.8=1728
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      text-align: left;
      min-width: 1728px; //2160x0.8=1728
      // proof and contact is 11.5rem right
      padding-left: 324px; //2160x0.15=324
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      text-align: left;
      min-width: 1728px; //2160x0.8=1728
      // proof and contact is 11.5rem right
      padding-left: 324px; //2160x0.15=324
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      text-align: center;
      min-width: 1638.4px; //2048x0.8=1638.4
      padding-left: 0.1rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      text-align: left;
      min-width: 1638.4px; //2048x0.8=1638.4
      // proof and contact is 11.5rem right
      padding-left: 204.8px; //2048x0.1=204.8
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    text-align: center;
    min-width: 1600px; //2000x0.8=1600
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    text-align: left;
    min-width: 1536.8px; //1921x0.8=1536.8
    // proof and contact is 11.5rem right
    padding-left: 288.15px; //1921x0.15=288.15
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      text-align: left;
      min-width: 1536px; //1920x0.8=1536
      // proof and contact is 11.5rem right
      padding-left: 288.15px; //1921x0.15=288.15
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      text-align: left;
      min-width: 1536px; //1920x0.8=1536
      // proof and contact is 11.5rem right
      padding-left: 288.15px; //1921x0.15=288.15
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    text-align: center;
    min-width: 1459.2px; //1824x0.8=1459.2
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    text-align: center;
    min-width: 1440px; //1800x0.8=1440
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    text-align: center;
    min-width: 1433.6px; //1792x0.8=1433.6
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    text-align: center;
    min-width: 1360px; //1700x0.8=1360
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    // background:green;
    text-align: left;
    min-width: 1008px; //1680x0.6=1008
    // proof and contact is 11.5rem right
    padding-left: 84px; //1680x0.05=84
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      text-align: center;
      min-width: 1334.4px; //1668x0.8=1334.4
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      text-align: center;
      min-width: 1334.4px; //1668x0.8=1334.4
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    text-align: center;
    min-width: 1312px; //1640x0.8=1312
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    text-align: center;
    min-width: 1296px; //1620x0.8=1296
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      text-align: center;
      min-width: 1280px; //1600x0.8=1280
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      // background:green;
      text-align: left;
      min-width: 1280px; //1600x0.8=1280
      // proof and contact is 11.5rem right
      padding-left: 80px; //1600x0.05=80
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      text-align: left;
      min-width: 1280px; //1600x0.8=1280
      // proof and contact is 11.5rem right
      padding-left: 240px; //1600x0.15=240
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    text-align: center;
    min-width: 1228.8px; //1536x0.8=1228.8
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;

  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    text-align: center;
    min-width: 1152px; //1440x0.8=1152
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    text-align: center;
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    text-align: left;
    min-width: 960px; //1440x0.6=864
    // proof and contact is 11.5rem right
    padding-left: 45px; //900x0.05=45
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    text-align: left;
    min-width: 1092.8px; //1366x0.8=1092.8
    // proof and contact is 11.5rem right
    padding-left: 136.6px; //1366x0.1=136.6

  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    // background:green;
    text-align: center;
    // proof and contact is 11.5rem right
    min-width: 1200.6px; //1334x0.9=1200.6
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    text-align: center;
    min-width: 1027.2px; //1284x0.8=1027.2
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      text-align: left;
      min-width: 896px; //1280x0.7=896
      // proof and contact is 11.5rem right
      padding-left: 64px; //1280x0.05=64
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      text-align: left;
      min-width: 896px; //1280x0.7=896
      // proof and contact is 11.5rem right
      padding-left: 64px; //1280x0.05=64
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      text-align: left;
      min-width: 896px; //1280x0.7=896
      // proof and contact is 11.5rem right
      padding-left: 64px; //1280x0.05=64
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    text-align: center;
    min-width: 993.6px; //1242x0.8=993.6
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align: center;
    min-width: 1032px; //1200x0.8=1032
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    text-align: center;
    min-width: 1032px; //1200x0.8=1032
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    text-align: center;
    min-width: 936px; //1170x0.8=936
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    text-align: center;
    min-width: 908.8px; //1136x0.8=908.8
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    text-align: center;
    min-width: 900px; //1125x0.8=900
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align: center;
    min-width: 864px; //1080x0.8=864
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    text-align: center;
    min-width: 840px; //1050x0.8=840
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    text-align: left;
    min-width: 921.6px; //1024x0.9=921.6
    // proof and contact is 11.5rem right
    padding-left: 153.6px; //1024x0.15=153.6
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    text-align: left;
    min-width: 921.6px; //1024x0.9=921.6
    // proof and contact is 11.5rem right
    padding-left: 102.4px; //1024x0.1=102.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 864px; //960x0.9=864
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 864px; //960x0.9=864
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 810px; //900x0.9=810
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 810px; //900x0.9=810
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 768.6px; //854x0.9=768.6
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 745.2px; //828x0.9=745.2
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      text-align: center;
      padding-left: 0.1rem;
      min-width: 720px; //800x0.9=720
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      text-align: left;
      padding-left: 0.1rem;
      min-width: 720px; //800x0.9=720
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      text-align: center;
      padding-left: 0.1rem;
      min-width: 720px; //800x0.9=720
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    text-align: center;
    min-width: 537.6px; //768x0.7=537.6
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    text-align: center;
    min-width: 537.6px; //768x0.7=537.6
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    text-align: center;
    min-width: 537.6px; //768x0.7=537.6
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    text-align: center;
    min-width: 525px; //750x0.7=525
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 655.2px; //720x0.91=655.2
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 614.4px; //640x0.91=614.4
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 614.4px; //640x0.91=614.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 546px; //600x0.91=546
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 546px; //600x0.91=546
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 491.4px; //540x0.91=491.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 436.8px; //480x0.91=436.8
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 436.8px; //480x0.91=436.8
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    text-align: center;
    padding-left: 0.1rem;
    min-width: 436.8px; //480x0.91=436.8
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    text-align: center;
    padding-left: 0.1rem;
  min-width: 436.8px; //480x0.91=436.8
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    min-width: 324px; //360x0.9=324
    text-align: center;
    padding-left: 0.1rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    min-width: 288px; //320x0.9=288
    text-align: center;
    padding-left: 0.1rem;
  }	
}
//////////////////////////////////////////////////////////////////
`
const LinkedInIcon = styled(AiFillLinkedin)`

text-align: justify;
color:#1227DC;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(2.4rem, 1.9vw, 0.60rem); 
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.9rem, 1.4vw, 0.2rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.9rem, 1.4vw, 0.2rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(2.9rem, 1.4vw, 0.2rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(2.4rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(2.4rem, 1.4vw, 0.2rem);
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(2.1rem, 1.4vw, 0.2rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(2rem, 1.4vw, 0.2rem);
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.9rem, 1.9vw, 0.60rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(3.9rem, 1.4vw, 0.2rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.9rem, 1.4vw, 0.2rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      font-size: clamp(3.6rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      font-size: clamp(2.6rem, 1.9vw, 0.60rem); 
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem); 
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem); 
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(2.9rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem);
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(2.9rem, 1.9vw, 0.60rem);  
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(2.9rem, 1.9vw, 0.60rem); 
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(2.9rem, 1.9vw, 0.60rem); 
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(2.9rem, 1.9vw, 0.60rem); 
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(2.9rem, 1.9vw, 0.60rem); 
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(1.4rem, 1.4vw, 0.2rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(1.5rem, 1.4vw, 0.2rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem); 
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(3.5rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem); 

  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    font-size: clamp(2.7rem, 1.4vw, 0.2rem); 

  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(3.2rem, 1.4vw, 0.2rem); 
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(3.5rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(3.4rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(3.4rem, 1.4vw, 0.2rem); 
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(3.1rem, 1.4vw, 0.2rem); 
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(3.1rem, 1.4vw, 0.2rem); 
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(2.9rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(2.6rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(2.6rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(2.1rem, 1.4vw, 0.2rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.1rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(1.7rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.5rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    font-size: clamp(1.2rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    font-size: clamp(1.2rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
`
const PhoneIcon = styled(MdPhoneInTalk)`
text-align: justify;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(2.1rem, 1.9vw, 0.60rem); 
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.7rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.7rem, 1.4vw, 0.2rem); 
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(2.7rem, 1.4vw, 0.2rem); 
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(2.5rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(2.5rem, 1.4vw, 0.2rem); 
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem); 
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(2.1rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem); 
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(3.5rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(3.5rem, 1.4vw, 0.2rem); 
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(4.1rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      font-size: clamp(3.3rem, 1.4vw, 0.2rem); 
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      font-size: clamp(2.4rem, 1.9vw, 0.60rem);  
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(2.6rem, 1.9vw, 0.60rem); 
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(2.6rem, 1.9vw, 0.60rem);
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(2.6rem, 1.9vw, 0.60rem);
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(1.5rem, 1.4vw, 0.2rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(3.5rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.5rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(1.2rem, 1.4vw, 0.2rem);
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    font-size: clamp(2rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      font-size: clamp(0.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(0.9rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(0.9rem, 1.4vw, 0.2rem);
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    font-size: clamp(3.7rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(3.3rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(3.1rem, 1.4vw, 0.2rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(2.8rem, 1.4vw, 0.2rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(2.8rem, 1.4vw, 0.2rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(2.4rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(0.9rem, 1.4vw, 0.2rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(0.9rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(2.2rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(2.2rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(1.9rem, 1.9vw, 1.1rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(1.5rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(1.5rem, 1.4vw, 0.2rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.5rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(1.4rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
`
const EmailIcon = styled(MdEmail)`

text-align: justify;
color:#ff1010; 

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(2.1rem, 1.9vw, 0.60rem); 
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.9rem, 1.4vw, 0.2rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.9rem, 1.4vw, 0.2rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(2.9rem, 1.4vw, 0.2rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(2.6rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(2.6rem, 1.4vw, 0.2rem);
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(2.1rem, 1.4vw, 0.2rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(2rem, 1.4vw, 0.2rem);
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(3.6rem, 1.4vw, 0.2rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(4.4rem, 1.9vw, 0.60rem); 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(4.4rem, 1.4vw, 0.2rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.9rem, 1.4vw, 0.2rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      font-size: clamp(3.6rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      font-size: clamp(2.4rem, 1.9vw, 0.60rem);  
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem); 
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(3.4rem, 1.9vw, 0.60rem); 
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(3.1rem, 1.9vw, 0.60rem); 
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(2.9rem, 1.9vw, 0.60rem); 
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(2.4rem, 1.9vw, 0.60rem);
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(1.5rem, 1.4vw, 0.2rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    font-size: clamp(2.5rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(4.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(3.5rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.6rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(1.2rem, 1.4vw, 0.2rem);
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem); 
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    font-size: clamp(2rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      font-size: clamp(1.2rem, 1.4vw, 0.2rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(1.2rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(1.2rem, 1.4vw, 0.2rem);
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    font-size: clamp(4.1rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    font-size: clamp(3.6rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    font-size: clamp(3.3rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    font-size: clamp(3.5rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    font-size: clamp(3.3rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    font-size: clamp(3.4rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(3.4rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(3.3rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(3.2rem, 1.4vw, 0.2rem); 
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(2.9rem, 1.4vw, 0.2rem); 
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(2.9rem, 1.4vw, 0.2rem); 
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(2.6rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(1rem, 1.4vw, 0.2rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(1rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(2.35rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(2.35rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(2.1rem, 1.4vw, 0.2rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(2.1rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(1.5rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(1.9rem, 1.4vw, 0.2rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(1.9rem, 1.4vw, 0.2rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(1.6rem, 1.4vw, 0.2rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(1.5rem, 1.4vw, 0.2rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem); 
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem); 
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    font-size: clamp(1.7rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.69rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    font-size: clamp(1.68rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.68rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.64rem, 1.4vw, 0.2rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.64rem, 1.4vw, 0.2rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.6rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(1.5rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.5rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(1.5rem, 1.4vw, 0.2rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(1.5rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    font-size: clamp(1.1rem, 1.4vw, 0.2rem);
  }	
}
//////////////////////////////////////////////////////////////////
`

const Description = styled.p`
text-align: justify;
padding: 0.1rem;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(1.96rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(1.96rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(1.64rem, 1.4vw, 0.2rem); 
  padding-top:0.1rem;
  padding-bottom:0.2rem;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;  
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(1.46rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;  
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(1.46rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem; 
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(1.24rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(1.22rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(2.99rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(2.99rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(3.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.06rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      font-size: clamp(2.9rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.14rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;  
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(1.06rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(0.82rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(0.82rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(2.99rem, 1.9vw, 0.60rem); 
    padding-top:6.4px; //3200x.002=6.4
    // padding-bottom:0.2rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(2.99rem, 1.9vw, 0.60rem); 
    padding-top:6.176px; //3088x.002=6.176
    // padding-bottom:0.2rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(2.79rem, 1.9vw, 0.60rem); 
    padding-top:6.176px; //3088x.002=6.176
    // padding-bottom:0.2rem;
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(2.64rem, 1.9vw, 0.60rem); 
    padding-top:2.560px; //2560x.001=2.560
    // padding-bottom:0.2rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.60rem, 1.9vw, 0.60rem); 
    padding-top:2.304px; //2304x.001=2.304
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:2.160px; //2160x.001=2.160
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(1.9rem, 1.5vw, 1.2rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(0.78rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(0.70rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    font-size: clamp(1.82rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:2.7px; //2778x.001=2.7
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
    padding-top:1px;
    padding-bottom:1px;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
      padding-top:1px;
      padding-bottom:1px;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
      padding-top:1px;
      padding-bottom:1px;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:2.6px; //2688x.001=2.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:1px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:1px; 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:2.160px; //2400x.001=2.4
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(2.51rem, 1.9vw, 0.60rem); 
    padding-top:2.34px; //2340x.001=2.34
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(2.46rem, 1.9vw, 0.60rem); 
    padding-top:2.31px; //2310x.001=2.31
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(2.42rem, 1.9vw, 0.60rem); 
    padding-top:2.28px; //2280x.001=2.28
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(2.24rem, 1.9vw, 0.60rem); 
    padding-top:1.92px; //1921x.001=1.92
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(2.24rem, 1.9vw, 0.60rem); 
    padding-top:1.92px; //1921x.001=1.92
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(2.06rem, 1.9vw, 0.60rem); 
    padding-top:1.68px; //1680x.001=1.68
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(0.64rem, 1.4vw, 0.2rem); 

  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    padding-top:1px; //640x.001=6.4
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    padding-top:1px; //640x.001=6.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(1.87rem, 1.9vw, 1.1rem);
    padding-top:1.6px; //1600x.001=1.6
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(1.87rem, 1.9vw, 1.1rem);
    padding-top:1.6px; //1600x.001=1.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(1.51rem, 1.9vw, 1.1rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(1.42rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(1.42rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(1.42rem, 1.9vw, 1.1rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem); 
    padding-top:1.36px; //1366x.001=1.36
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem); 
    padding-top:1.28px; //1280x.001=1.28
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem); 
    padding-top:1.02px; //1024x.001=1.02
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem); 
    padding-top:1.33px; //1334x.001=1.33
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.19rem, 1.9vw, 0.60rem); 
    padding-top:1px; //1136x.001=1.024
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    font-size: clamp(1.18rem, 1.9vw, 0.60rem); 
    padding-top:1px; //1136x.001=1.024
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.18rem, 1.9vw, 0.60rem); 
    padding-top:1px; //960x.001=9.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.15rem, 1.9vw, 0.60rem); 
    padding-top:1px; //1024x.001=1.024
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.15rem, 1.9vw, 0.60rem); 
    padding-top:1px; //800x.001=0.8
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.1rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(0.99rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(0.99rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(0.99rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(0.99rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }	
}
//////////////////////////////////////////////////////////////////
`

const ProfileLink = styled.a`
text-align: justify;

&:hover{
  color:#ff1010;
  text-decoration: underline;
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
  padding: 0.1rem;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(1.96rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    font-size: clamp(1.96rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  font-size: clamp(1.64rem, 1.4vw, 0.2rem); 
  padding-top:0.1rem;
  padding-bottom:0.2rem;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;  
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    font-size: clamp(1.46rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem; 
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      font-size: clamp(1.46rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem; 
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
  // Horizontal Smartphone Display
  @media screen and (max-width: 2436px),and (max-height: 1125px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 2400px),and (max-height: 1080px){
    font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    font-size: clamp(1.24rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    font-size: clamp(1.22rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    font-size: clamp(2.99rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    font-size: clamp(2.99rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.15rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    font-size: clamp(3.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      font-size: clamp(3.06rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      font-size: clamp(2.9rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      font-size: clamp(1.15rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      font-size: clamp(1.14rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;  
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      font-size: clamp(1.06rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    font-size: clamp(1rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      font-size: clamp(1rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      font-size: clamp(1rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem; 
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(1.96rem, 1.9vw, 0.60rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(0.82rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(0.82rem, 1.4vw, 0.2rem); 
      padding-top:0.1rem;
      padding-bottom:0.2rem;
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    font-size: clamp(1.87rem, 1.9vw, 0.60rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(2.99rem, 1.9vw, 0.60rem); 
    // font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(2.99rem, 1.9vw, 0.60rem); 
    // font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(2.79rem, 1.9vw, 0.60rem); 
    // font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(2.64rem, 1.9vw, 0.60rem); 
    // font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.60rem, 1.9vw, 0.60rem); 
    // font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    // font-size: clamp(3.91rem, 1.9vw, 1.1rem);
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(1.9rem, 1.5vw, 1.2rem);
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(0.78rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    font-size: clamp(0.70rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }
  // Horizontal Smartphone Display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    font-size: clamp(1.82rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:2.7px; //2778x.001=2.7
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
    padding-top:0.1rem;
    padding-bottom:0.2rem;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:2.60px; //2688x.001=2.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:1px;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:1px; 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    font-size: clamp(2.55rem, 1.9vw, 0.60rem); 
    padding-top:2.160px; //2400x.001=2.4
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(2.51rem, 1.9vw, 0.60rem); 
    padding-top:2.34px; //2340x.001=2.34
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(2.46rem, 1.9vw, 0.60rem); 
    padding-top:2.31px; //2310x.001=2.31
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(2.42rem, 1.9vw, 0.60rem); 
    padding-top:2.28px; //2280x.001=2.28
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(2.24rem, 1.9vw, 0.60rem); 
    padding-top:1.92px; //1921x.001=1.92
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(2.24rem, 1.9vw, 0.60rem); 
    padding-top:1.92px; //1921x.001=1.92
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(2.06rem, 1.9vw, 0.60rem); 
    padding-top:1.68px; //1680x.001=1.68
  }		
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    font-size: clamp(0.64rem, 1.4vw, 0.2rem); 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    padding-top:1px; //640x.001=.64
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    font-size: clamp(1.96rem, 1.9vw, 1.1rem);
    padding-top:1px; //540x.001=.64
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(1.87rem, 1.9vw, 1.1rem);
    padding-top:1.6px; //1600x.001=1.6
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(1.87rem, 1.9vw, 1.1rem);
    padding-top:1.6px; //1600x.001=1.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(1.42rem, 1.9vw, 1.1rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(1.51rem, 1.9vw, 1.1rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(1.42rem, 1.9vw, 1.1rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(1.42rem, 1.9vw, 1.1rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(1.42rem, 1.9vw, 1.1rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem); 
    padding-top:1.36px; //1366x.001=1.36
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem); 
    padding-top:1.28px; //1280x.001=1.28
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem); 
    padding-top:1.02px; //1024x.001=1.02
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem); 
    padding-top:1.33px; //1334x.001=1.33
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    font-size: clamp(1.19rem, 1.9vw, 0.60rem); 
    padding-top:1px; //1136x.001=1.024
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    font-size: clamp(1.18rem, 1.9vw, 0.60rem); 
    padding-top:1px; //1136x.001=1.024
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.18rem, 1.9vw, 0.60rem); 
    padding-top:1px; //960x.001=9.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    font-size: clamp(1.15rem, 1.9vw, 0.60rem); 
    padding-top:1px; //1024x.001=1.024
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    font-size: clamp(1.15rem, 1.9vw, 0.60rem); 
    padding-top:1px; //800x.001=0.8
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    font-size: clamp(1.1rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    font-size: clamp(0.99rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    font-size: clamp(0.99rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    font-size: clamp(0.99rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    font-size: clamp(0.99rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    font-size: clamp(0.82rem, 1.9vw, 0.60rem); 
    padding-top:1px; //480x.001=1.33
  }	
}
//////////////////////////////////////////////////////////////////
`

const NavLink = styled.a`
display:absolute;
cursor: pointer;
// text-decoration:none;
border: 0;
margin: 0;
padding: 0;
color:white;

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  text-align: left;
  font-size: clamp(2.96rem, 1.9vw, 0.60rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    text-align: left;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    text-align: left;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  text-align: left;
  font-size: clamp(2.4rem, 1.9vw, 0.60rem);
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    text-align: left;
    font-size: clamp(1.73rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      text-align: center;
      padding-left: 0.1rem;
      font-size: clamp(3.4rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      text-align: left;
      font-size: clamp(1.73rem, 1.9vw, 0.60rem);
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    text-align: left;
    font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    text-align: left;
    font-size: clamp(1.60rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      text-align: left;
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      text-align: left;
      font-size: clamp(1.60rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      text-align: center;
      padding-left: 0.1rem;
      font-size: clamp(3.4rem, 1.9vw, 0.60rem);
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(3.4rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    // background:green;
    text-align: left;
    min-width: 1432.8px; //2388x0.6=1432.8
    // proof and contact is 11.5rem right
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    // background:green;
    text-align: left;
    min-width: 1416px; //2360x0.6=1416
    // proof and contact is 11.5rem right
    font-size: clamp(1.82rem, 1.9vw, 0.60rem);
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    min-width: 2106px; //2340x0.9=2106
    // proof and contact is 11.5rem right
    font-size: clamp(3.15rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    // background:green;
    text-align: center;
    min-width: 2079px; //2310x0.9=2079
    // proof and contact is 11.5rem right
    font-size: clamp(3.15rem, 1.9vw, 0.60rem);
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(3.01rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      // background:green;
      text-align: left;
      min-width: 1382.4px; //2304x0.6=1382.4
      // proof and contact is 11.5rem right
      font-size: clamp(1.6rem, 1.9vw, 0.60rem);
    }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    text-align: center;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    text-align: left;
      font-size: clamp(1.78rem, 1.9vw, 0.60rem);
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      text-align: center;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      text-align: center;
      font-size: clamp(2.96rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }	
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2048px)
{
	@media screen and (max-width: 2048px){

		// Vertical Tablet Display
		@media screen and (max-height: 2732px){
      text-align: left;
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      text-align: left;
      font-size: clamp(1.42rem, 1.9vw, 0.60rem);
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    text-align: left;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    text-align: left;
    font-size: clamp(1rem, 1.9vw, 0.60rem);
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      text-align: left;
      font-size: clamp(1rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      text-align: left;
      font-size: clamp(1rem, 1.9vw, 0.60rem);
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    text-align: center;
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    text-align: center;
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    font-size: clamp(2.33rem, 1.9vw, 0.60rem);
  }
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      font-size: clamp(2.33rem, 1.9vw, 0.60rem);
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      font-size: clamp(1.19rem, 1.9vw, 0.60rem);
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    font-size: clamp(2.10rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    font-size: clamp(2.9rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    font-size: clamp(2.7rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    font-size: clamp(2.5rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    font-size: clamp(2.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 900px){
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    text-align: left;
    font-size: clamp(0.91rem, 1.9vw, 0.60rem);
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    text-align: center;
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    text-align: center;
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.4rem, 1.9vw, 0.60rem);
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      text-align: center;
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(0.91rem, 1.9vw, 0.60rem);
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      text-align: center;
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(0.90rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      text-align: center;
      // // proof and contact is 11.5rem right
      padding-left: 0.1rem;
      font-size: clamp(0.87rem, 1.9vw, 0.60rem);
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    text-align: center;
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }		
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    text-align: center;
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    text-align: center;
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    text-align: center;
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    text-align: center;
    // // proof and contact is 11.5rem right
    padding-left: 0.1rem;
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    font-size: clamp(2.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    font-size: clamp(2.1rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    font-size: clamp(2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    font-size: clamp(1.9rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    font-size: clamp(1.5rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    text-align:left;
    font-size: clamp(0.82rem, 1.9vw, 0.60rem);
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    text-align:left;
    font-size: clamp(0.82rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    font-size: clamp(1.42rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    padding-left: 0.1rem;
    font-size: clamp(1.42rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    font-size: clamp(1.36rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    font-size: clamp(1.36rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    font-size: clamp(1.2rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    font-size: clamp(1.6rem, 1.9vw, 0.60rem);
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      font-size: clamp(1.2rem, 1.9vw, 0.60rem);
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    text-align: center;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    text-align: center;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    text-align: center;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    text-align: center;
    font-size: clamp(1.18rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    text-align: center;
    font-size: clamp(1.15rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    text-align: center;
    font-size: clamp(0.99rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    text-align: center;
    font-size: clamp(0.99rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    text-align: center;
    font-size: clamp(0.94rem, 1.9vw, 0.60rem);
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    text-align: center;
    font-size: clamp(0.94rem, 1.9vw, 0.60rem);
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    text-align: center;
    font-size: clamp(0.90rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    // padding-left: 0.1rem;
    text-align: center;
    font-size: clamp(0.87rem, 1.9vw, 0.60rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    text-align: center;
    font-size: clamp(0.87rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    text-align: center;
    font-size: clamp(0.78rem, 1.9vw, 0.60rem);
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
  text-align: center;
  font-size: clamp(0.78rem, 1.9vw, 0.60rem);
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    font-size: clamp(0.51rem, 1.9vw, 0.51rem);
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    font-size: clamp(0.51rem, 1.9vw, 0.51rem);
  }	
}
//////////////////////////////////////////////////////////////////
background: none;
text-align: center;
color: white;

line-height: 1.4 !important;
margin: 0;
position: relative;
text-shadow: 0 1px white;
z-index: 600;
&:hover{
    color: #FEB729;
    text-decoration: underline;}

`