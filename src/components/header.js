import React from "react"
import styled from 'styled-components'

import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql,  useStaticQuery } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    query {
      image1: file(relativePath: { eq: "CWNT15.png" }) {
        ...servicesImage
      }
    }
  `)
  return (
    <CompanyNameHeader>
              <CompanyLogo image={data.image1.childImageSharp.gatsbyImageData} alt="Company logo"/>
    </CompanyNameHeader>
  )

}
export default Header

const CompanyLogo = styled(GatsbyImage)`
// margin: 0 auto;
//Horizontal display
border-radius:0.1rem;
border: 0.1rem white;
// left:50%;
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{
  margin-top: 4.32px; //0.0015x 2880=4.32
  margin-bottom: 4.32px; 
  width: 20%;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    margin-top: 3.456px; //0.0015x 2304=3.456
    margin-bottom: 3.456px; 
    width: 20%;
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    margin-top: 3.24px; //0.0015x 2160=3.24
    margin-bottom: 3.24px; 
    width: 20%;
  }
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  margin-top: 3.24px; //0.0015x 2160=3.24
  margin-bottom: 3.24px; 
  width: 20%;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    margin-top: 2.16px; //0.0015x 1440=2.16
    margin-bottom: 2.16px; 
    width: 46%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    margin-top: 2.16px; //0.0015x 1440=2.16
    margin-bottom: 2.16px; 
    width: 46%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    margin-top: 4.5px; //0.0015x 2000=4.5
    margin-bottom: 4.5px; 
    width: 20%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    margin-top: 2.16px; //0.0015x 1440=2.16
    margin-bottom: 2.16px; 
    width: 46%;
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      margin-top: 7.68px; //0.0015x 5120=7.68
      margin-bottom: 7.68px; 
      width: 46%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      margin-top: 2.7px; //0.0015x 1800=2.7
      margin-bottom: 2.7px; 
      width: 20%;
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    margin-top: 1.926px; //0.0015x 1284=1.926
    margin-bottom: 1.926px; 
    width: 46%;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    margin-top: 2.736px; //0.0015x 1824=2.736
    margin-bottom: 2.736px; 
    width: 20%;
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    margin-top: 3.072px; //0.0015x 2048=3.072
    margin-bottom: 3.072px; 
    width: 20%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    margin-top: 1.863px; //0.0015x 1242=1.863
    margin-bottom: 1.863px; 
    width: 46%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      margin-top: 3.84px; //0.0015x 2560=3.84
      margin-bottom: 3.84px; 
      width: 20%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      margin-top: 3.84px; //0.0015x 2560=3.84
      margin-bottom: 3.84px; 
      width: 20%;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      margin-top: 3.84px; //0.0015x 2560=3.84
      margin-bottom: 3.84px; 
      width: 46%;
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    margin-top: 3.798px; //0.0015x 1668=3.798
    margin-bottom: 3.798px; 
    width: 46%;
  }	
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    margin-top: 1.6875px; //0.0015x 1668=1.6875
    margin-bottom: 1.6875px; 
    width: 46%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    margin-top: 1.62px; //0.0015x 1668=1.62
    margin-bottom: 1.62px; 
    width: 46%;
  }	
	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    margin-top: 1.668px; //0.0015x 1668=1.668
    margin-bottom: 1.668px; 
    width: 20%;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    margin-top: 1.640px; //0.0015x 1640=1.640
    margin-bottom: 1.640px; 
    width: 20%;
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    margin-top: 1.08px; //0.0015x 1080=1.08
    margin-bottom: 1.08px; 
    width: 51%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    margin-top: 1.08px; //0.0015x 1080=1.08
    margin-bottom: 1.08px; 
    width: 51%;
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      margin-top: 4.096px; //0.0015x 4096=4.096
      margin-bottom: 4.096px; 
      width: 73%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      margin-top: 1.44px; //0.0015x 1440=1.44
      margin-bottom: 1.44px; 
      width: 20%;
    }	
	}
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    margin-top: 1.62px; //0.0015x 1080=1.62
      margin-bottom: 1.62px; 
      width: 51%;
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    margin-top: 2.502px; //0.0015x 1668=2.502
      margin-bottom: 2.502px; 
      width: 20%;
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      margin-top: 4.096px; //0.0015x 4096=4.096
      margin-bottom: 4.096px; 
      width: 73%;
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      margin-top: 5.76px; //0.0015x 3840=5.76
      margin-bottom: 5.76px; 
      width: 73%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      margin-top: 2.43px; //0.0015x 1620=2.43
      margin-bottom: 2.43px; 
      width: 20%;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      margin-top: 2.16px; //0.0015x 1440=2.16
      margin-bottom: 2.16px; 
      width: 20%;
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
      margin-top: 4.098px; //0.0015x 2732=4.098
      margin-bottom: 4.098px; 
      width: 60%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      margin-top: 2.3px; //0.0015x 1536=2.304
      margin-bottom: 2.3px; 
      width: 24%;
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    margin-top: 4.5px; //0.0015x 3000=4.5
    margin-bottom: 4.5px; 
    width: 60%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    margin-top: 1.62px; //0.0015x 1080=1.62
    margin-bottom: 1.62px; 
    width: 20%;
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      margin-top: 1.8px; //0.0015x 1200=1.8
      margin-bottom: 1.8px; 
      width: 20%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      margin-top: 1.62px; //0.0015x 1080=1.62
      margin-bottom: 1.62px; 
      width: 20%;
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    margin-top: 2.7px; //0.0015x 1824=2.7
    margin-bottom: 2.7px; 
    width: 60%;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    margin-top: 2.7px; //0.0015x 1800=2.7
    margin-bottom: 2.7px; 
    width: 55%;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    margin-top: 2.688px; //0.0015x 1792=2.688
    margin-bottom: 2.688px; 
    width: 55%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    margin-top: 3.84px; //0.0015x 2560=3.84
    margin-bottom: 3.84px; 
    width: 60%;
  }
  // Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    margin-top: 1.575px; //0.0015x 1050=1.575
    margin-bottom: 1.575px; 
    width: 20%;
  }
  // Vertical Tablet Display
	@media screen and (max-width: 1668px),and (max-height: 2388px){
    margin-top: 3.582px; //0.0015x 2388=3.582
    margin-bottom: 3.582px; 
    width: 60%;
  }
  // Vertical Tablet Display	
	@media screen and (max-width: 1668px),and (max-height: 2224px){
    margin-top: 3.336px; //0.0015x 2224=3.336
    margin-bottom: 3.336px; 
    width: 60%;
  }
  // Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    margin-top: 3.54px; //0.0015x 2360=3.54
    margin-bottom: 3.54px; 
    width: 60%;
  }
  // Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    margin-top: 3.24px; //0.0015x 2160=3.24
    margin-bottom: 3.24px; 
    width: 60%;
  }
  @media screen and (max-width: 1600px)
  {
    // Vertical Monitor Display
    @media screen and (max-height: 2560px)
    {
      margin-top: 3.84px; //0.0015x 2560=3.84
      margin-bottom: 3.84px; 
      width: 60%;
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px)
    {
      margin-top: 1.8px; //0.0015x 1200=1.8
      margin-bottom: 1.8px; 
      width: 20%;
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px)
    {
      margin-top: 1.35px; //0.0015x 900=1.35
      margin-bottom: 1.35px; 
      width: 20%;
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    margin-top: 3.072px; //0.0015x 2048=3.072
    margin-bottom: 3.072px; 
    width: 60%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    margin-top: 4.8px; //0.0015x 3200=4.8
    margin-bottom: 4.8px; 
    width: 73%;
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 3088px){
    margin-top: 4.632px; //0.0015x 3088=4.632
    margin-bottom: 4.632px; 
    width: 73%;
  }
  // Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    margin-top: 4.44px; //0.0015x 2960=4.44
    margin-bottom: 4.44px; 
    width: 73%;
  }
  // Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    margin-top: 3.84px; //0.0015x 2560=3.84
    margin-bottom: 3.84px; 
    width: 73%;
  }
  // Vertical Monitor Display
	@media screen and (max-height: 2304px){
    margin-top: 3.456px; //0.0015x 2304=3.456
    margin-bottom: 3.456px; 
    width: 73%;
  }
  // Vertical Tablet Display
	@media screen and (max-height: 2160px){
    margin-top: 3.24px; //0.0015x 2160=3.24
    margin-bottom: 3.24px; 
    width: 73%;
  }
  // Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    margin-top: 2.16px; //0.0015x 1440=2.16
    margin-bottom: 2.16px; 
    width: 46%;
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    margin-top: 2.16px; //0.0015x 1440=2.16
    margin-bottom: 2.16px; 
    width: 20%;
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  //Horizontal display
	@media screen and (max-width: 1366px),and (max-height: 768px){
    margin-top: 1.152px; //0.0015x768=1.152
    margin-bottom: 1.152px;
    width: 20%;
  }
  //Horizontal display
	@media screen and (max-width: 1334px),and (max-height: 750px){
    margin-top: 1.125px; //0.0015x750=1.125
    margin-bottom: 1.125px;
    width: 60%;
  }	
  
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    margin-top: 4.16px; //0.0015x2778=4.16
    margin-bottom: 4.16px; 
    width: 78%;
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      margin-top: 1.2px; //0.0015x800=1.2
    margin-bottom: 1.2px; 
    width: 20%;
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      margin-top: 1.152px; //0.0015x768=1.152
    margin-bottom: 1.152px; 
    width: 20%;
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      margin-top: 1.08px; //0.0015x720=1.08
    margin-bottom: 1.08px; 
    width: 20%;
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    margin-top: 4px; //0.0015x2668=4
    margin-bottom: 4px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1200px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    margin-top: 2.88px; //0.0015x1920=2.88
    margin-bottom: 2.88px; 
    width: 78%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1600px){
    margin-top: 2.4px; //0.0015x1600=2.4
    margin-bottom: 2.4px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    margin-top: 3.798px; //0.0015x 2532=3.798
    margin-bottom: 3.798px; 
    width: 78%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    margin-top: 1px; //0.0015x 640=
    margin-bottom: 1px; 
    width: 64%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    margin-top: 3.654px; //0.0015x 2436=3.654
    margin-bottom: 3.654px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    margin-top: 3.6px; //0.0015x 2400=3.6
    margin-bottom: 3.6px; 
    width: 78%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    margin-top: 3.51px; //0.0015x 2340=3.51
    margin-bottom: 3.51px; 
    width: 78%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    margin-top: 3.465px; //0.0015x 2310=3.465
    margin-bottom: 3.465px; 
    width: 78%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    margin-top: 3.42px; //0.0015x 2340=3.42
    margin-bottom: 3.42px; 
    width: 78%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    margin-top: 2.88px; //0.0015x 1921=2.88
    margin-bottom: 2.88px; 
    width: 78%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    margin-top: 2.88px; //0.0015x 1920=2.88
    margin-bottom: 2.88px; 
    width: 78%;
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    margin-top: 2.52px; //0.0015x 1680=2.52
    margin-bottom: 2.52px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    margin-top: 2px; //0.0015x 768=1.152
    margin-bottom: 2px; 
    width: 20%;
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    margin-top: 2px; //0.0015x 600=0.9
    margin-bottom: 2px; 
    width: 20%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    margin-top: 2px; //0.0015x 640=2
    margin-bottom: 2px; 
    width: 60%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    margin-top: 2px; //0.0015x 540=2
    margin-bottom: 2px; 
    width: 60%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    @media screen and (max-width: 854px),and (max-height: 480px){
      margin-top: 2.4px; //0.0015x 1600=2.4
      margin-bottom: 2.4px; 
      width: 60%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    margin-top: 2.16px; //0.0015x 1440=2.16
    margin-bottom: 2.16px; 
    width: 60%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    margin-top: 1px; //0.0015x 480=0.72
    margin-bottom: 1px; 
    width: 60%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    margin-top: 2.688px; //0.0015x 1792=2.688
    margin-bottom: 2.688px; 
    width: 73%;
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      margin-top: 1.92px; //0.0015x 1280=1.92
      margin-bottom: 1.92px; 
      width: 60%;
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      margin-top: 1px; //0.0015x 600=0.9
      margin-bottom: 1px; 
      width: 60%;
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      margin-top: 1px; //0.0015x 480=0.72
      margin-bottom: 1px; 
      width: 60%;
    }
	}
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    margin-top: 2.049px; //0.0015x 1366=2.049
    margin-bottom: 2.049px; 
    width: 78%;
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    margin-top: 1.92px; //0.0015x 1280=1.92
    margin-bottom: 1.92px; 
    width: 78%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    margin-top: 1.536px; //0.0015x 1024=1.536
    margin-bottom: 1.536px; 
    width: 78%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    margin-top: 2px; //0.0015x 1334=2
    margin-bottom: 2px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    margin-top: 2px; //0.0015x 1280=1.2
    margin-bottom: 2px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    margin-top: 2px; //0.0015x 1136=1.7
    margin-bottom: 2px; 
    width: 78%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    margin-top: 2px; //0.0015x 960=1.4
    margin-bottom: 2px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    margin-top: 2px; //0.0015x 1024=1.5
    margin-bottom: 2px; 
    width: 78%;
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    margin-top: 2px; //0.0015x 1024=1.5
    margin-bottom: 2px; 
    width: 78%;
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    margin-top: 2px; //0.0015x 960=1.44
    margin-bottom: 2px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    margin-top: 1px; //0.0015x 854=1.2
    margin-bottom: 1px; 
    width: 78%;
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    margin-top: 1px; //0.0015x 800=1.2
    margin-bottom: 1px; 
    width: 78%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    margin-top: 1px; //0.0015x 360=0.54
    margin-bottom: 1px; 
    width: 78%;
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    margin-top: 1px; //0.0015x 320=0.48
    margin-bottom: 1px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    margin-top: 1px; //0.0015x 480=2
    margin-bottom: 1px; 
    width: 78%;
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    margin-top: 1px; //0.0015x 480=2
    margin-bottom: 1px; 
    width: 78%;
  }	
}
//////////////////////////////////////////////////////////////////
box-shadow: /* ie */
                 0px -4px 4px -2px  #E18A07, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #E18A07, /* bottom */
                 4px  0px  4px  0px  #E18A07, /* right */
                -4px  0px  4px  0px  #E18A07; /* left */
-webkit-box-shadow:
                0px -4px 4px -2px  #E18A07, /* top - THE BLUE SHADOW */
                0px  2px  2px  0px  #E18A07, /* bottom */
                4px  0px  4px  0px  #E18A07, /* right */
                -4px  0px  4px  0px  #E18A07; /* left */
-moz-box-shadow:
                0px -4px 4px -2px  #E18A07, /* top - THE BLUE SHADOW */
                 0px  2px  2px  0px  #E18A07, /* bottom */
                 4px  0px  4px  0px  #E18A07, /* right */
                -4px  0px  4px  0px  #E18A07; /* left */

`

  const CompanyNameHeader = styled.div`
  
  // background: #1227DC; //Good  
  opacity: 1.0
  width: 100%;
  background: black;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
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
  z-index: 600;
  animation: fadeIn ease-in 1.5s;
    -webkit-animation: fadeIn ease-in 1.5s;
    -moz-animation: fadeIn ease-in 1.5s;
    -o-animation: fadeIn ease-in 1.5s;
    -ms-animation: fadeIn ease-in 1.5s;
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
