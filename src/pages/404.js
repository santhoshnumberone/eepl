import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link} from 'gatsby'
import styled from 'styled-components'

const NotFoundPage = () => {
    return(
  
      <Layout>
        <SEO title="ELECTRAANU 404: Not found" />
        <Main class='container'>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>4</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <span class='particle'>0</span>
            <article class='content'>
              <p>Damnit stranger,</p>
              <p>You got lost in the <strong>404</strong> galaxy.</p>
              <p>
                <button><Link to="/">Go back to earth</Link></button>
              </p>
            </article>
      </Main>

      </Layout>
    )
}

export default NotFoundPage

const Main = styled.div`
body {
  margin: 0;
  font-size: 20px;
}

* {
  box-sizing: border-box;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 70vh;
  background: white;
  color: black;
  font-family: arial, sans-serif;
  overflow: hidden;
}

.content {
  position: absolute;
   
  // max-width: 100%;
  margin: 20px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2);
  // background: white;
  opacity: 0;
  animation: apparition 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995) forwards;
  background: #f8f9f5;
  // top: 50%;
  // left: 50%;
  // width:1000px;
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 5120px),and (max-height: 2880px)
{ 
  left: 0%;
  margin-top:512px; //.1*5120 =512
  margin-left: 1024px; //13/2 =.2*5120 =1024
  width:3072px; //0.60x5120=3072
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 4096px)
{
	// Horizontal Monitor Display
	@media screen and (max-height: 2304px){
    left: 0%;
    margin-top:409.6px; //.1*4096 =409.6
    margin-left: 819.2px; //13/2 =.2*4096 =819.2
    width:2457.6px; //0.60x4096=2457.6
  }
	// Horizontal Monitor Display
	@media screen and (max-height: 2160px){
    left: 0%;
    margin-top:409.6px; //.1*4096 =409.6
    margin-left: 819.2px; //13/2 =.2*4096 =819.2
    width:2457.6px; //0.60x4096=2457.6
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Horizontal Monitor Display
@media screen and (max-width: 3840px),and (max-height: 2160px){
  left: 0%;
  margin-top:384px; //.1*3840 =384
  margin-left: 768px; //13/2 =.2*3840 =768
  width:2304px; //0.60x3840=2304
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3200px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 3200px),and (max-height: 1440px){
    left: 0%;
    margin-top: 208px; //13/2 =.065*3200 =208
    margin-left: 208px; //13/2 =.065*3200 =208
    width:2784px; //0.87x3200=2784
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 3088px),and (max-height: 1440px){
    left: 0%;
    margin-top: 200.72px; //13/2 =.065*3088 =200.72
    margin-left: 200.72px; //13/2 =.065*3088 =200.72
    width:2686.56px; //0.87x3088=2686.56
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 3000px)
{
	// Horizontal Monitor Display	
	@media screen and (max-width: 3000px),and (max-height: 2000px){
    left: 0%;
    margin-top:300px; //.1*3000 =300
    margin-left: 600px; //13/2 =.2*3000 =600
    width:1800px; //0.60x3000=1800
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2960px),and (max-height: 1440px){
    left: 0%;
    margin-top: 192.4px; //13/2 =.065*2960 =192.4
    margin-left: 192.4px; //13/2 =.065*2960 =192.4
    width:2575.2px; //0.87x2960=2575.2
  }

	@media screen and (max-width: 2880px){

		// Vertical Monitor Display
		@media screen and (max-height: 5120px){
      left: 0%;
      margin-top: 187.2px; //13/2 =.065*2880 =187.2
      margin-left: 187.2px; //13/2 =.065*2880 =187.2
      width:2505.6px; //0.87x2880=2505.6
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1800px){
      left: 0%;
      margin-top:288px; //.1*2880 =288
      margin-left: 576px; //13/2 =.2*2880 =576
      width:1728px; //0.60x2880=1728
    }
	}	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2778px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2778px),and (max-height: 1284px){
    left: 0%;
    margin-top: 180.57px; //13/2 =.065*2778 =180.57
    margin-left: 180.57px; //13/2 =.065*2778 =180.57
    width:2416.86px; //0.87x2778=2416.86
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2736px),and (max-height: 1824px){
    left: 0%;
    margin-top:256px; //.1*2736 =273.6
    margin-left: 512px; //13/2 =.2*2736 =547.2
    width:1641.6px; //0.60x2736=1641.6
  }	
	// Horizontal Tablet Display
	@media screen and (max-width: 2732px),and (max-height: 2048px){
    left: 0%;
    margin-top:273.2px; //.1*2732 =273.2
    margin-left: 546.4px; //13/2 =.2*2732 =546.4
    width:1639.2px; //0.60x2732=1639.2
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2688px),and (max-height: 1242px){
    left: 0%;
    margin-top: 174.72px; //13/2 =.065*2688 =174.72
    margin-left: 174.72px; //13/2 =.065*2688 =174.72
    width:2338.56px; //0.87x2688=2338.56
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2560px)
{
	@media screen and (max-width: 2560px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1700px){
      left: 0%;
      margin-top:256px; //.1*2560 =256
      margin-left: 512px; //13/2 =.2*2560 =512
      width:1536px; //0.60x2560=1536
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1600px){
      left: 0%;
      margin-top:256px; //.1*2560 =256
      margin-left: 512px; //13/2 =.2*2560 =512
      width:1536px; //0.60x2560=1536
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 1440px){
      left: 0%;
      margin-top: 166.4px; //13/2 =.065*2560 =166.4
      margin-left: 166.4px; //13/2 =.065*2560 =166.4
      width:2227.2px; //0.87x2560=2227.2
    }	
	}

	// Horizontal Smartphone Display
	@media screen and (max-width: 2532px),and (max-height: 1170px){
    left: 0%;
    margin-top: 164.58px; //13/2 =.065*2532 =164.58
    margin-left: 164.58px; //13/2 =.065*2532 =164.58
    width:2202.84px; //0.87x2532=2202.84
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2436px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2436px),and (max-height: 1125px){
    left: 0%;
    margin-top: 158.34px; //13/2 =.065*2436 =158.34
    margin-left: 158.34px; //13/2 =.065*2436 =158.34
    width:2119.32px; //0.87x2436=2119.32
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2400px),and (max-height: 1080px){
    left: 0%;
    margin-top: 156px; //13/2 =.065*2400 =156
    margin-left: 156px; //13/2 =.065*2400 =156
    width:2088px; //0.87x2400=2088
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2388px)
{
	// Horizontal Tablet Display
	@media screen and (max-width: 2388px),and (max-height: 1668px){
    left: 0%;
    margin-top:238.8px; //.1*2388 =238.8
    margin-left: 477.6px; //13/2 =.2*2388 =477.6
    width:1432.8px; //0.60x2388=1432.8
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2360px),and (max-height: 1640px){
    left: 0%;
    margin-top:236px; //.1*2360 =236
    margin-left: 472px; //13/2 =.2*2360 =472
    width:1416px; //0.60x2360=1416
  }	
	// Horizontal Smartphone Display
	@media screen and (max-width: 2340px),and (max-height: 1080px){
    left: 0%;
    margin-top: 152.1px; //13/2 =.065*2340 =152.1
    margin-left: 152.1px; //13/2 =.065*2340 =152.1
    width:2035.8px; //0.87x2340=2035.8
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 2310px),and (max-height: 1080px){
    left: 0%;
    margin-top: 150.15px; //13/2 =.065*2310 =150.15
    margin-left: 150.15px; //13/2 =.065*2310 =150.15
    width:2009.7px; //0.87x2310=2009.7
  }	

	@media screen and (max-width: 2304px){
    
		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      left: 0%;
      margin-top: 149.76px; //13/2 =.065*2304 =149.76
      margin-left: 149.76px; //13/2 =.065*2304 =149.76
      width:2004.48px; //0.87x2304=2004.48
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1440px){
      left: 0%;
      margin-top:230.4px; //.1*2304 =230.4
      margin-left: 460.8px; //13/2 =.2*2304 =460.8
      width:1382.4px; //0.60x2304=1382.4
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 2280px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 2280px),and (max-height: 1080px){
    left: 0%;
    margin-top: 148.2px; //13/2 =.065*2280 =148.2
    margin-left: 148.2px; //13/2 =.065*2280 =148.2
    width:1983.6px; //0.87x2280=1983.6
  }
	// Horizontal Tablet Display
	@media screen and (max-width: 2224px),and (max-height: 1668px){
    left: 0%;
    margin-top:222.4px; //.1*2224 =222.4
    margin-left: 444.8px; //13/2 =.2*2224 =444.8
    width:1334.4px; //0.60x2224=1334.4
  }

	@media screen and (max-width: 2160px){

		// Vertical Monitor Display
		@media screen and (max-height: 4096px){
      left: 0%;
      margin-top: 140.4px; //13/2 =.065*2160 =140.4
      margin-left: 140.4px; //13/2 =.065*2160 =140.4
      width:1879.2px; //0.87x2160=1879.2
    }
		// Vertical Monitor Display
		@media screen and (max-height: 3840px){
      left: 0%;
      margin-top: 140.4px; //13/2 =.065*2160 =140.4
      margin-left: 140.4px; //13/2 =.065*2160 =140.4
      width:1879.2px; //0.87x2160=1879.2
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1620px){
      left: 0%;
      margin-top:216px; //.1*2160 =216
      margin-left: 432px; //13/2 =.2*2160 =432
      width:1296px; //0.60x2160=1296
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 1440px){
      left: 0%;
      margin-top:216px; //.1*2160 =216
      margin-left: 432px; //13/2 =.2*2160 =432
      width:1296px; //0.60x2160=1296
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
      left: 0%;
    margin-top: 133.12px; //13/2 =.065*2048 =133.12
    margin-left: 133.12px; //13/2 =.065*2048 =133.12
    width:1781.76px; //0.87x2048=1781.76
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 1536px){
      left: 0%;
      margin-top:204.8px; //.1*2048 =204.8
      margin-left: 409.6px; //13/2 =.2*2048 =409.6
      width:1228.8px; //0.60x2048=1228.8
    }
	}
	// Vertical Monitor Display
	@media screen and (max-width: 2000px),and (max-height: 3000px){
    left: 0%;
    margin-top: 130px; //13/2 =.065*2000 =130
    margin-left: 130px; //13/2 =.065*2000 =130
    width:1740px; //0.87x2000=1740
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1921px)
{
	// Horizontal Monitor Display
	@media screen and (max-width: 1921px),and (max-height: 1080px){
    left: 0%;
    margin-top:192.1px; //.1*1921 =192.1
    margin-left: 384.2px; //13/2 =.2*1921 =384.2
    width:1152.6px; //0.60x1921=1152.6
  }	
	
	@media screen and (max-width: 1920px){

		// Horizontal Monitor Display
		@media screen and (max-height: 1200px){
      left: 0%;
      margin-top:168px; //.1*1920 =192
      margin-left: 384px; //13/2 =.2*1920 =384
      width:1152px; //0.60x1920=1152
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 1080px){
      left: 0%;
      margin-top:168px; //.1*1920 =192
      margin-left: 384px; //13/2 =.2*1920 =384
      width:1152px; //0.60x1920=1152
    }	
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1824px)
{
	// Vertical Tablet Display	
	@media screen and (max-width: 1824px),and (max-height: 2736px){
    left: 0%;
    margin-top: 118.56px; //13/2 =.065*1824 =118.56
    margin-left: 118.56px; //13/2 =.065*1824 =118.56
    width:1586.88px; //0.87x1824=1586.88     
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1800px),and (max-height: 2880px){
    left: 0%;
    margin-top: 117px; //13/2 =.065*1800 =117
    margin-left: 117px; //13/2 =.065*1800 =117
    width:1566px; //0.87x1800=1566
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1792px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 1792px),and (max-height: 828px){
    left: 0%;
    margin-top: 116.48px; //13/2 =.065*1792 =116.48
    margin-left: 116.48px; //13/2 =.065*1792 =116.48
    width:1559.04px; //0.87x1792=1559.04
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1700px)
{	
	// Vertical Monitor Display
	@media screen and (max-width: 1700px),and (max-height: 2560px){
    left: 0%;
    margin-top: 110.5px; //13/2 =.065*1700 =110.5
    margin-left: 110.5px; //13/2 =.065*1700 =110.5
    width:1479px; //0.87x1700=1479
  }
	// Horizontal Monitor Display
	@media screen and (max-width: 1680px),and (max-height: 1050px){
    left: 0%;
    margin-top:168px; //.1*1680 =168
    margin-left: 336px; //13/2 =.2*1680 =336
    width:1008px; //0.60x1680=1008
  }
  @media screen and (max-width: 1668px){
    // Vertical Tablet Display
    @media screen and (max-height: 2388px){
      left: 0%;
      margin-top: 108.42px; //13/2 =.065*1668 =108.42
      margin-left: 108.42px; //13/2 =.065*1668 =108.42
      width:1451.16px; //0.87x1668=1451.16
    }
    // Vertical Tablet Display	
    @media screen and (max-height: 2224px){
      left: 0%;
      margin-top: 108.42px; //13/2 =.065*1668 =108.42
      margin-left: 108.42px; //13/2 =.065*1668 =108.42
      width:1451.16px; //0.87x1668=1451.16
    }
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1640px),and (max-height: 2360px){
    left: 0%;
    margin-top: 106.6px; //13/2 =.065*1640 =106.6
    margin-left: 106.6px; //13/2 =.065*1640 =106.6
    width:1426.8px; //0.87x1640=1426.8
  }
	// Vertical Tablet Display
	@media screen and (max-width: 1620px),and (max-height: 2160px){
    left: 0%;
    margin-top: 105.3px; //13/2 =.065*1620 =105.3
    margin-left: 105.3px; //13/2 =.065*1620 =105.3
    width:1409.4px; //0.87x1620=1409.4
  }  
  @media screen and (max-width: 1600px){
    // Vertical Monitor Display
    @media screen and (max-height: 2560px){
      left: 0%;
      margin-top: 104px; //13/2 =.065*1600 =104
      margin-left: 104px; //13/2 =.065*1600 =104
      width:1392px; //0.87x1600=1392
    }
    // Horizontal Tablet Display
    @media screen and (max-height: 1200px){
      left: 0%;
      margin-top:160px; //.1*1600 =160
      margin-left: 320px; //13/2 =.2*1600 =320
      width:960px; //0.60x1600=960
    }
    // Horizontal Monitor Display
    @media screen and (max-height: 900px){
      left: 0%;
      margin-top:160px; //.1*1600 =160
      margin-left: 320px; //13/2 =.2*1600 =320
      width:960px; //0.60x1600=960
    }
  }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1536px)
{
	// Vertical Tablet Display
	@media screen and (max-width: 1536px),and (max-height: 2048px){
    left: 0%;
    margin-top: 99.84px; //13/2 =.065*1536 =99.84
    margin-left: 99.84px; //13/2 =.065*1536 =99.84
    width:1336.32px; //0.87x1536=1336.32
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1440px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 3200px){
    left: 0%;
    margin-top: 93.6px; //13/2 =.065*1440 =93.6
    margin-left: 93.6px; //13/2 =.065*1440 =93.6
    width:1252.8px; //0.87x1440=1252.8
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2960px){
    left: 0%;
    margin-top: 93.6px; //13/2 =.065*1440 =93.6
    margin-left: 93.6px; //13/2 =.065*1440 =93.6
    width:1252.8px; //0.87x1440=1252.8
  }
	// Vertical Smartphone Display	
	@media screen and (max-height: 2560px){
    left: 0%;
    margin-top: 93.6px; //13/2 =.065*1440 =93.6
    margin-left: 93.6px; //13/2 =.065*1440 =93.6
    width:1252.8px; //0.87x1440=1252.8
  }
	// Vertical Monitor Display
	@media screen and (max-height: 2304px){
    left: 0%;
    margin-top: 93.6px; //13/2 =.065*1440 =93.6
    margin-left: 93.6px; //13/2 =.065*1440 =93.6
    width:1252.8px; //0.87x1440=1252.8
  }
	// Vertical Tablet Display
	@media screen and (max-height: 2160px){
    left: 0%;
    margin-top: 93.6px; //13/2 =.065*1440 =93.6
    margin-left: 93.6px; //13/2 =.065*1440 =93.6
    width:1252.8px; //0.87x1440=1252.8
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 1440px){
    left: 0%;
    margin-top: 93.6px; //13/2 =.065*1440 =93.6
    margin-left: 93.6px; //13/2 =.065*1440 =93.6
    width:1252.8px; //0.87x1440=1252.8
    
  }
  // Horizontal Monitor Display
	@media screen and (max-height: 900px){
    left: 0%;
    margin-top:144px; //.1*1440 =144
    margin-left: 288px; //13/2 =.2*1440 =288
    width:864px; //0.60x1440=864
  }
}
//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px)
{
  // Horizontal Monitor Display
  @media screen and (max-width: 1366px),and (max-height: 768px){
    left: 0%;
    margin-top:136.6px; //.1*1366 =136.6
    margin-left: 273.2px; //13/2 =.2*1366 =273.2
    width:819.6px; //0.60x1366=819.6
  }
  // Horizontal Smartphone Display
  @media screen and (max-width: 1334px),and (max-height: 750px){
    left: 0%;
    margin-top: 86.71px; //13/2 =.065*1334 =86.71
    margin-left: 86.71px; //13/2 =.065*1334 =86.71
    width:1160.58px; //0.87x1334=1160.58
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1284px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1284px),and (max-height: 2778px){
    left: 0%;
    margin-top: 83.46px; //13/2 =.065*1284 =83.46
    margin-left: 83.46px; //13/2 =.065*1284 =83.46
    width:1117.08px; //0.87x1284=1117.08
  }
	
	@media screen and (max-width: 1280px){

		// Horizontal Monitor Display
		@media screen and (max-height: 800px){
      left: 0%;
      margin-top:128px; //.1*1280 =128
      margin-left: 256px; //13/2 =.2*1280 =256
      width:768px; //0.60x1280=768
    }
		// Horizontal Monitor Display
		@media screen and (max-height: 768px){
      left: 0%;
      margin-top:128px; //.1*1280 =128
      margin-left: 256px; //13/2 =.2*1280 =256
      width:768px; //0.60x1280=768
    }	
		// Horizontal Tablet Display
		@media screen and (max-height: 720px){
      left: 0%;
      margin-top:128px; //.1*1280 =128
      margin-left: 256px; //13/2 =.2*1280 =256
      width:768px; //0.60x1280=768
    }
	}
	// Vertical Smartphone Display
	@media screen and (max-width: 1242px),and (max-height: 2688px){
    left: 0%;
    margin-top: 80.73px; //13/2 =.065*1242 =80.73
    margin-left: 80.73px; //13/2 =.065*1242 =80.73
    width:1080.54px; //0.87x1242=1080.54
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1170px)
{
	// Vertical Smartphone Display
	@media screen and (max-width: 1170px),and (max-height: 2532px){
    left: 0%;
    margin-top: 117px; //40/2 =.1*1170 =117
    margin-left: 117px; //40/2 =1*1170 =117
    width:936px; //0.80x1170=936
  }
	// Horizontal Smartphone Display
	@media screen and (max-width: 1136px),and (max-height: 640px){
    left: 0%;
    margin-top: 113.6px; //40/2 =.1*1136 =113.6
    margin-left: 113.6px; //40/2 =1*1136 =113.6
    width:908.8px; //0.80x1136=908.8
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 1125px),and (max-height: 2436px){
    left: 0%;
    margin-top: 112.5px; //40/2 =.1*1125 =112.5
    margin-left: 112.5px; //40/2 =1*1125 =112.5
    width:900px; //0.80x1125=900
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1080px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 2400px){
    left: 0%;
    margin-top: 108px; //40/2 =.1*1080 =108
    margin-left: 108px; //40/2 =1*1080 =108
    width:864px; //0.80x1080=864
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2340px){
    left: 0%;
    margin-top: 108px; //40/2 =.1*1080 =108
    margin-left: 108px; //40/2 =1*1080 =108
    width:864px; //0.80x1080=864
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2310px){
    left: 0%;
    margin-top: 108px; //40/2 =.1*1080 =108
    margin-left: 108px; //40/2 =1*1080 =108
    width:864px; //0.80x1080=864
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 2280px){
    left: 0%;
    margin-top: 108px; //40/2 =.1*1080 =108
    margin-left: 108px; //40/2 =1*1080 =108
    width:864px; //0.80x1080=864
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1921px){
    left: 0%;
    margin-top: 108px; //40/2 =.1*1080 =108
    margin-left: 108px; //40/2 =1*1080 =108
    width:864px; //0.80x1080=864
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1920px){
    left: 0%;
    margin-top: 108px; //40/2 =.1*1080 =108
    margin-left: 108px; //40/2 =1*1080 =108
    width:864px; //0.80x1080=864
  }
	// Vertical Monitor Display
	@media screen and (max-width: 1050px),and (max-height: 1680px){
    left: 0%;
    margin-top: 105px; //40/2 =.1*1050 =105
    margin-left: 105px; //40/2 =1*1050 =105
    width:840px; //0.80x1050=840
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 1024px)
{
	// Horizontal Tablet Display
	@media screen and (max-height: 768px){
    left: 0%;
    margin-top: 204.8px; //40/2 =.2*1024 =204.8
    margin-left: 204.8px; //40/2 =.2*1024 =204.8
    width:614.4px; //0.60x1024=614.4
  }
	// Horizontal Tablet Display
	@media screen and (max-height: 600px){
    left: 0%;
    margin-top: 204.8px; //40/2 =.2*1024 =204.8
    margin-left: 204.8px; //40/2 =.2*1024 =204.8
    width:614.4px; //0.60x1024=614.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 960px)
{
	// Horizontal Smartphone Display
	@media screen and (max-height: 640px){
    left: 0%;
    margin-left: 62.4px; //13/2 =.065*960 =62.4
    width:835.2px; //0.87x960=835.2
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 540px){
    left: 0%;
    margin-left: 62.4px; //13/2 =.065*960 =62.4
    width:835.2px; //0.87x960=835.2
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 900px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1600px){
    left: 0%;
    margin-left: 58.5px; //13/2 =.065*900 =58.5
    width:783px; //0.87x900=783
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1440px){
    left: 0%;
    margin-left: 58.5px; //13/2 =.065*900 =58.5
    width:783px; //0.87x900=783
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 854px)
{
	// Horizontal Smartphone Display
	@media screen and (max-width: 854px),and (max-height: 480px){
    left: 0%;
    margin-left: 55.51px; //13/2 =.065*854 =55.51
    width:742.98px; //0.87x854=742.98
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 828px),and (max-height: 1792px){
    left: 0%;
    margin-left: 53.82px; //13/2 =.065*828 =53.82
    width:720.36px; //0.87x854=720.36
  }
	@media screen and (max-width: 800px){

		// Vertical Monitor Display
		@media screen and (max-height: 1280px){
      left: 0%;
      margin-left: 52px; //13/2 =.065*800 =52
      width:696px; //0.87x800=696
    }
		// Horizontal Tablet Display
		@media screen and (max-height: 600px){
      left: 0%;
      margin-left: 52px; //13/2 =.065*800 =52
      width:696px; //0.87x800=696
    }	
		// Horizontal Smartphone Display
		@media screen and (max-height: 480px){
      left: 0%;
      margin-left: 52px; //13/2 =.065*800 =52
      width:696px; //0.87x800=696
    }
	}
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px)
{
	// Vertical Monitor Display
	@media screen and (max-height: 1366px){
    left: 0%;
    margin-left: 48.75px; //13/2 =.065*768 =49.92
    width:668.16px; //0.87x768=668.16
  }
	// Vertical Monitor Display
	@media screen and (max-height: 1280px){
    left: 0%;
    margin-left: 48.75px; //13/2 =.065*768 =49.92
    width:668.16px; //0.87x768=668.16
  }
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    left: 0%;
    margin-left: 48.75px; //13/2 =.065*768 =49.92
    width:668.16px; //0.87x768=668.16
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 750px),and (max-height: 1334px){
    left: 0%;
    margin-left: 48.75px; //13/2 =.065*750 =48.75
    width:652.5px; //0.87x750=652.5
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 720px)
{
	// Vertical Tablet Display
	@media screen and (max-height: 1280px){
    left: 0%;
    margin-left: 46.8px; //13/2 =.065*720 =46.8
    width:626.4px; //0.87x720=626.4
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 640px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 1136px){
    left: 0%;
    margin-left: 41.6px; //13/2 =.065*640 =41.6
    width:556.8px; //0.87x640=556.8
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    left: 0%;
    margin-left: 41.6px; //13/2 =.065*640 =41.6
    width:556.8px; //0.87x640=556.8 
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 600px){
	
	// Vertical Tablet Display
	@media screen and (max-height: 1024px){
    left: 0%;
    margin-left: 39px; //13/2 =.065*600 =39
    width:522px; //0.87x600=522 
  }
	// Vertical Tablet Display
	@media screen and (max-height: 800px){
    left: 0%;
    margin-left: 39px; //13/2 =.065*600 =39
    width:522px; //0.87x600=522
  }
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 540px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 960px){
    left: 0%;
    margin-left: 35.1px; //13/2 =.065*540 =35.1
    width:469.8px; //0.87x540=469.8
  }	
}
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 480px)
{
	// Vertical Smartphone Display
	@media screen and (max-height: 854px){
    left: 0%;
    margin-left: 31.2px; //13/2 =.065*480 =31.2
    width:417.6px; //0.87x480=417.6
  }
	// Vertical Smartphone Display
	@media screen and (max-height: 800px){
    left: 0%;
    margin-left: 31.2px; //13/2 =.065*480 =31.2
    width:417.6px; //0.87x480=417.6
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 360px){
    left: 0%;
    margin-left: 31.2px; //13/2 =.065*480 =31.2
    width:417.6px; //0.87x480=417.6
  }
	// Horizontal Smartphone Display
	@media screen and (max-height: 320px){
    left: 0%;
    margin-left: 31.2px; //13/2 =.065*480 =31.2
    width:417.6px; //0.87x480=417.6
  }	
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
@media screen and (max-width: 360px)
{	
	// Vertical Smartphone Display
	@media screen and (max-height: 480px){
    left: 0%;
    margin-left: 23.4px; //13/2 =.065*360 =23.4
    width:313.2px; //0.87x360=313.2
  }
	// Vertical Smartphone Display
	@media screen and (max-width: 320px),and (max-height: 480px){
    left: 0%;
    margin-left: 20.8px; //13/2 =.065*320 =20.8
    width:278.4px; //0.87x320=278.4
  }	
}
//////////////////////////////////////////////////////////////////
  // width: 600px;
}
.content p {
  // font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 0.6rem;
  letter-spacing: 0.1rem;
  color: #595959;
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
}
.content p:last-child {
  margin-bottom: 0;
}

.content button:hover {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: 3px solid #595959;
  background: transparent;
  font-size: 1rem;
  color: white;
  background: gray;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
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
}

.content button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: 3px solid #595959;
  background: transparent;
  font-size: 1rem;
  color: #595959;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
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
}

.particle {
  position: absolute;
   
  pointer-events: none;
}
.particle:nth-child(1) {
  top: 30.5418719212%;
  left: 19.7628458498%;
  font-size: 12px;
  filter: blur(0.02px);
  animation: 26s float infinite;
}
.particle:nth-child(2) {
  top: 0.9685230024%;
  left: 37.037037037%;
  font-size: 26px;
  filter: blur(0.04px);
  animation: 28s floatReverse infinite;
}
.particle:nth-child(3) {
  top: 71.4113389626%;
  left: 77.7453838678%;
  font-size: 29px;
  filter: blur(0.06px);
  animation: 38s float infinite;
}
.particle:nth-child(4) {
  top: 33.8164251208%;
  left: 42.8015564202%;
  font-size: 28px;
  filter: blur(0.08px);
  animation: 36s float2 infinite;
}
.particle:nth-child(5) {
  top: 8.7378640777%;
  left: 93.75%;
  font-size: 24px;
  filter: blur(0.1px);
  animation: 26s floatReverse2 infinite;
}
.particle:nth-child(6) {
  top: 95.421686747%;
  left: 57.2815533981%;
  font-size: 30px;
  filter: blur(0.12px);
  animation: 23s float infinite;
}
.particle:nth-child(7) {
  top: 74.8768472906%;
  left: 84.9802371542%;
  font-size: 12px;
  filter: blur(0.14px);
  animation: 36s float2 infinite;
}
.particle:nth-child(8) {
  top: 57.8313253012%;
  left: 86.4077669903%;
  font-size: 30px;
  filter: blur(0.16px);
  animation: 35s floatReverse infinite;
}
.particle:nth-child(9) {
  top: 4.8721071864%;
  left: 61.7042115573%;
  font-size: 21px;
  filter: blur(0.18px);
  animation: 37s float2 infinite;
}
.particle:nth-child(10) {
  top: 96%;
  left: 26.3414634146%;
  font-size: 25px;
  filter: blur(0.2px);
  animation: 32s float infinite;
}
.particle:nth-child(11) {
  top: 85.6088560886%;
  left: 87.8578479763%;
  font-size: 13px;
  filter: blur(0.22px);
  animation: 30s float2 infinite;
}
.particle:nth-child(12) {
  top: 39.4088669951%;
  left: 69.1699604743%;
  font-size: 12px;
  filter: blur(0.24px);
  animation: 28s float2 infinite;
}
.particle:nth-child(13) {
  top: 49.3946731235%;
  left: 76.0233918129%;
  font-size: 26px;
  filter: blur(0.26px);
  animation: 30s float infinite;
}
.particle:nth-child(14) {
  top: 14.6163215591%;
  left: 84.2311459354%;
  font-size: 21px;
  filter: blur(0.28px);
  animation: 31s floatReverse2 infinite;
}
.particle:nth-child(15) {
  top: 8.7912087912%;
  left: 61.8253189401%;
  font-size: 19px;
  filter: blur(0.3px);
  animation: 25s float infinite;
}
.particle:nth-child(16) {
  top: 54.501216545%;
  left: 10.7632093933%;
  font-size: 22px;
  filter: blur(0.32px);
  animation: 32s floatReverse infinite;
}
.particle:nth-child(17) {
  top: 50.6699147381%;
  left: 47.0127326151%;
  font-size: 21px;
  filter: blur(0.34px);
  animation: 32s float infinite;
}
.particle:nth-child(18) {
  top: 34.8246674728%;
  left: 91.5287244401%;
  font-size: 27px;
  filter: blur(0.36px);
  animation: 32s floatReverse2 infinite;
}
.particle:nth-child(19) {
  top: 5.8394160584%;
  left: 18.5909980431%;
  font-size: 22px;
  filter: blur(0.38px);
  animation: 24s float infinite;
}
.particle:nth-child(20) {
  top: 18.6046511628%;
  left: 84.5624385447%;
  font-size: 17px;
  filter: blur(0.4px);
  animation: 30s float infinite;
}
.particle:nth-child(21) {
  top: 16.4251207729%;
  left: 22.373540856%;
  font-size: 28px;
  filter: blur(0.42px);
  animation: 37s float2 infinite;
}
.particle:nth-child(22) {
  top: 35.6626506024%;
  left: 35.9223300971%;
  font-size: 30px;
  filter: blur(0.44px);
  animation: 39s floatReverse infinite;
}
.particle:nth-child(23) {
  top: 63.768115942%;
  left: 29.1828793774%;
  font-size: 28px;
  filter: blur(0.46px);
  animation: 38s floatReverse infinite;
}
.particle:nth-child(24) {
  top: 86.7235079172%;
  left: 47.9921645446%;
  font-size: 21px;
  filter: blur(0.48px);
  animation: 39s float infinite;
}
.particle:nth-child(25) {
  top: 93.3171324423%;
  left: 85.0439882698%;
  font-size: 23px;
  filter: blur(0.5px);
  animation: 37s floatReverse infinite;
}
.particle:nth-child(26) {
  top: 58.0565805658%;
  left: 57.2556762093%;
  font-size: 13px;
  filter: blur(0.52px);
  animation: 33s floatReverse2 infinite;
}
.particle:nth-child(27) {
  top: 7.7669902913%;
  left: 77.1484375%;
  font-size: 24px;
  filter: blur(0.54px);
  animation: 27s float2 infinite;
}
.particle:nth-child(28) {
  top: 20.2409638554%;
  left: 82.5242718447%;
  font-size: 30px;
  filter: blur(0.56px);
  animation: 38s floatReverse2 infinite;
}
.particle:nth-child(29) {
  top: 64.2335766423%;
  left: 27.397260274%;
  font-size: 22px;
  filter: blur(0.58px);
  animation: 23s float2 infinite;
}
.particle:nth-child(30) {
  top: 32.1951219512%;
  left: 60.7843137255%;
  font-size: 20px;
  filter: blur(0.6px);
  animation: 32s float infinite;
}
.particle:nth-child(31) {
  top: 25.458996328%;
  left: 75.7128810226%;
  font-size: 17px;
  filter: blur(0.62px);
  animation: 37s float2 infinite;
}
.particle:nth-child(32) {
  top: 74.1463414634%;
  left: 45.0980392157%;
  font-size: 20px;
  filter: blur(0.64px);
  animation: 35s floatReverse2 infinite;
}
.particle:nth-child(33) {
  top: 74.4860943168%;
  left: 22.3953261928%;
  font-size: 27px;
  filter: blur(0.66px);
  animation: 24s float infinite;
}
.particle:nth-child(34) {
  top: 96.5018094089%;
  left: 46.6472303207%;
  font-size: 29px;
  filter: blur(0.68px);
  animation: 25s floatReverse2 infinite;
}
.particle:nth-child(35) {
  top: 42.4607961399%;
  left: 25.267249757%;
  font-size: 29px;
  filter: blur(0.7px);
  animation: 21s floatReverse2 infinite;
}
.particle:nth-child(36) {
  top: 11.7359413203%;
  left: 13.7524557957%;
  font-size: 18px;
  filter: blur(0.72px);
  animation: 24s float infinite;
}
.particle:nth-child(37) {
  top: 44.9877750611%;
  left: 11.7878192534%;
  font-size: 18px;
  filter: blur(0.74px);
  animation: 24s float infinite;
}
.particle:nth-child(38) {
  top: 75.9556103576%;
  left: 60.3363006924%;
  font-size: 11px;
  filter: blur(0.76px);
  animation: 24s float infinite;
}
.particle:nth-child(39) {
  top: 94.2331288344%;
  left: 61.0837438424%;
  font-size: 15px;
  filter: blur(0.78px);
  animation: 23s float infinite;
}
.particle:nth-child(40) {
  top: 96.0784313725%;
  left: 27.5590551181%;
  font-size: 16px;
  filter: blur(0.8px);
  animation: 24s float infinite;
}
.particle:nth-child(41) {
  top: 98.1595092025%;
  left: 59.1133004926%;
  font-size: 15px;
  filter: blur(0.82px);
  animation: 22s floatReverse infinite;
}
.particle:nth-child(42) {
  top: 43.1901840491%;
  left: 34.4827586207%;
  font-size: 15px;
  filter: blur(0.84px);
  animation: 34s float infinite;
}
.particle:nth-child(43) {
  top: 1.9464720195%;
  left: 17.6125244618%;
  font-size: 22px;
  filter: blur(0.86px);
  animation: 30s floatReverse2 infinite;
}
.particle:nth-child(44) {
  top: 66.3414634146%;
  left: 22.5490196078%;
  font-size: 20px;
  filter: blur(0.88px);
  animation: 30s floatReverse2 infinite;
}
.particle:nth-child(45) {
  top: 47.8632478632%;
  left: 23.5525024534%;
  font-size: 19px;
  filter: blur(0.9px);
  animation: 26s floatReverse infinite;
}
.particle:nth-child(46) {
  top: 64.0776699029%;
  left: 18.5546875%;
  font-size: 24px;
  filter: blur(0.92px);
  animation: 22s float2 infinite;
}
.particle:nth-child(47) {
  top: 61.7647058824%;
  left: 13.7795275591%;
  font-size: 16px;
  filter: blur(0.94px);
  animation: 34s floatReverse infinite;
}
.particle:nth-child(48) {
  top: 27.0531400966%;
  left: 97.2762645914%;
  font-size: 28px;
  filter: blur(0.96px);
  animation: 37s float infinite;
}
.particle:nth-child(49) {
  top: 85.8866103739%;
  left: 81.6326530612%;
  font-size: 29px;
  filter: blur(0.98px);
  animation: 23s float infinite;
}
.particle:nth-child(50) {
  top: 45.7978075518%;
  left: 37.2184133203%;
  font-size: 21px;
  filter: blur(1px);
  animation: 36s float2 infinite;
}
.particle:nth-child(51) {
  top: 6.7796610169%;
  left: 93.567251462%;
  font-size: 26px;
  filter: blur(1.02px);
  animation: 36s float2 infinite;
}
.particle:nth-child(52) {
  top: 80.7785888078%;
  left: 26.4187866928%;
  font-size: 22px;
  filter: blur(1.04px);
  animation: 22s floatReverse2 infinite;
}
.particle:nth-child(53) {
  top: 18.401937046%;
  left: 57.5048732943%;
  font-size: 26px;
  filter: blur(1.06px);
  animation: 28s float infinite;
}
.particle:nth-child(54) {
  top: 20.6388206388%;
  left: 92.7021696252%;
  font-size: 14px;
  filter: blur(1.08px);
  animation: 30s float2 infinite;
}
.particle:nth-child(55) {
  top: 61.6891064871%;
  left: 16.7158308751%;
  font-size: 17px;
  filter: blur(1.1px);
  animation: 32s float2 infinite;
}
.particle:nth-child(56) {
  top: 93.4809348093%;
  left: 86.8706811451%;
  font-size: 13px;
  filter: blur(1.12px);
  animation: 22s float2 infinite;
}
.particle:nth-child(57) {
  top: 18.5365853659%;
  left: 62.7450980392%;
  font-size: 20px;
  filter: blur(1.14px);
  animation: 22s float2 infinite;
}
.particle:nth-child(58) {
  top: 28.3618581907%;
  left: 66.7976424361%;
  font-size: 18px;
  filter: blur(1.16px);
  animation: 28s floatReverse infinite;
}
.particle:nth-child(59) {
  top: 38.3763837638%;
  left: 48.3711747285%;
  font-size: 13px;
  filter: blur(1.18px);
  animation: 33s floatReverse2 infinite;
}
.particle:nth-child(60) {
  top: 65.7799274486%;
  left: 51.6066212269%;
  font-size: 27px;
  filter: blur(1.2px);
  animation: 38s float2 infinite;
}
.particle:nth-child(61) {
  top: 93.6067551267%;
  left: 96.2099125364%;
  font-size: 29px;
  filter: blur(1.22px);
  animation: 37s floatReverse2 infinite;
}
.particle:nth-child(62) {
  top: 40.6779661017%;
  left: 2.9239766082%;
  font-size: 26px;
  filter: blur(1.24px);
  animation: 39s floatReverse infinite;
}
.particle:nth-child(63) {
  top: 7.7481840194%;
  left: 34.1130604288%;
  font-size: 26px;
  filter: blur(1.26px);
  animation: 26s floatReverse2 infinite;
}
.particle:nth-child(64) {
  top: 32.7710843373%;
  left: 5.8252427184%;
  font-size: 30px;
  filter: blur(1.28px);
  animation: 28s floatReverse infinite;
}
.particle:nth-child(65) {
  top: 45.6310679612%;
  left: 9.765625%;
  font-size: 24px;
  filter: blur(1.3px);
  animation: 31s floatReverse infinite;
}
.particle:nth-child(66) {
  top: 8.7697929354%;
  left: 30.3623898139%;
  font-size: 21px;
  filter: blur(1.32px);
  animation: 33s float2 infinite;
}
.particle:nth-child(67) {
  top: 5.8608058608%;
  left: 29.4406280667%;
  font-size: 19px;
  filter: blur(1.34px);
  animation: 27s floatReverse infinite;
}
.particle:nth-child(68) {
  top: 76.6584766585%;
  left: 1.9723865878%;
  font-size: 14px;
  filter: blur(1.36px);
  animation: 40s float infinite;
}
.particle:nth-child(69) {
  top: 5.8394160584%;
  left: 33.2681017613%;
  font-size: 22px;
  filter: blur(1.38px);
  animation: 33s floatReverse2 infinite;
}
.particle:nth-child(70) {
  top: 20.7151664612%;
  left: 80.118694362%;
  font-size: 11px;
  filter: blur(1.4px);
  animation: 28s floatReverse2 infinite;
}
.particle:nth-child(71) {
  top: 24.154589372%;
  left: 59.3385214008%;
  font-size: 28px;
  filter: blur(1.42px);
  animation: 30s float infinite;
}
.particle:nth-child(72) {
  top: 72.5490196078%;
  left: 82.6771653543%;
  font-size: 16px;
  filter: blur(1.44px);
  animation: 39s float infinite;
}
.particle:nth-child(73) {
  top: 6.7632850242%;
  left: 22.373540856%;
  font-size: 28px;
  filter: blur(1.46px);
  animation: 26s float2 infinite;
}
.particle:nth-child(74) {
  top: 65.8476658477%;
  left: 5.9171597633%;
  font-size: 14px;
  filter: blur(1.48px);
  animation: 29s float2 infinite;
}
.particle:nth-child(75) {
  top: 74.6928746929%;
  left: 98.6193293886%;
  font-size: 14px;
  filter: blur(1.5px);
  animation: 39s float infinite;
}
.particle:nth-child(76) {
  top: 39.2156862745%;
  left: 34.4488188976%;
  font-size: 16px;
  filter: blur(1.52px);
  animation: 36s float infinite;
}
.particle:nth-child(77) {
  top: 37.3006134969%;
  left: 31.5270935961%;
  font-size: 15px;
  filter: blur(1.54px);
  animation: 39s float infinite;
}
.particle:nth-child(78) {
  top: 93.6067551267%;
  left: 86.491739553%;
  font-size: 29px;
  filter: blur(1.56px);
  animation: 29s floatReverse infinite;
}
.particle:nth-child(79) {
  top: 6.8126520681%;
  left: 52.8375733855%;
  font-size: 22px;
  filter: blur(1.58px);
  animation: 29s floatReverse infinite;
}
.particle:nth-child(80) {
  top: 9.6735187424%;
  left: 57.4488802337%;
  font-size: 27px;
  filter: blur(1.6px);
  animation: 25s floatReverse2 infinite;
}

@keyframes apparition {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(180px);
  }
}
@keyframes floatReverse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-180px);
  }
}
@keyframes float2 {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(28px);
  }
}
@keyframes floatReverse2 {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-28px);
  }
}
`