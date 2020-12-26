import { Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
// import {useStaticQuery, graphql} from 'gatsby'
import ClimateChangeVideoSource from '../assets/videos/2018HD_celsius_1080p30.mp4'


const ClimateChange = () => {
    return (
        <ClimateChangeContainer>
            <InitialMessage>

            </InitialMessage>
            <ClimateChangeTemperature>
                <TemperatureChangeVideo src={ClimateChangeVideoSource} type="video/mp4" autoPlay loop muted playsInline/>
            </ClimateChangeTemperature>
            <ClimateChangeWrapper>
                <TemperatureContainer>
                    <HeadLine>
                        Playing an active part in accelerating, <NavLink1 to={"https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-13-climate-action.html"}>Goal 13: Climate Action by UNDP: </NavLink1>To limit warming to 1.5&#8451;, global net CO<sub>2</sub> emissions must drop by 45% between 2010 and 2030, and reach net zero around 2050.
                    </HeadLine>
                    <SourceInfo><strong>Source: </strong>NASA Global Climate Change - <NavLink to={"https://climate.nasa.gov/climate_resources/139/video-global-warming-from-1880-to-2019/"}>Global warming from 1880 to 2019</NavLink></SourceInfo>
                    <ClimateTemperatureData><strong>Data: </strong>
                    Data provided by Robert B. Schmunk (NASA/GSFC GISS).
                    </ClimateTemperatureData>
                    <ClimateTemperatureCredit><strong>Credit: </strong><NavLink to={"https://svs.gsfc.nasa.gov/4787"}>NASA's Scientific Visualization Studio.</NavLink>
                    </ClimateTemperatureCredit>
                </TemperatureContainer>
            </ClimateChangeWrapper>
        </ClimateChangeContainer>
    )
}

export default ClimateChange

const ClimateChangeContainer = styled.div`
// position: relative;
width: 100%;
line-height: 1.0 !important;
// background: #fcfcfc;
color: #000;
padding: 0.1rem calc((100vw - 1800px) / 2);
height: 100%;
`
const InitialMessage = styled.div`
position: absolute;
background:white;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1000;
`


const ClimateChangeTemperature = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
overflow:hidden;
// -o-object-fit: cover;
// object-fit:cover;
`

const TemperatureChangeVideo = styled.video`
width: 101%;
height: 110%;
// top: -100px;
-o-object-fit: cover;
object-fit: cover;
`

const ClimateChangeWrapper = styled.div`
    
    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 1fr;
    // grid-gap:10px;
    max-width: 100%;
    padding: 0 4rem;
    column-fill: balance;

    // @media screen and (max-width: 768px) {
    //     grid-template-columns: 1fr;
    //     max-width: 100%;
    // }

    @media screen and (max-width: 590px) {
        grid-template-columns: 1fr;
        padding: 0 1rem;
    }
`

const HeadLine = styled.div`
/* Negate theme styles */
border: 0;
margin: 0;
// padding: 0;

background: black;
opacity: 0.6;
text-align: center;
color: #fff;

border: 2px solid white;
// padding: 10px;
border-radius: 20px 37px;

font-size: clamp(1.0rem, 2vw, 1.9rem);
// font-size: 1.4rem;
font-weight: bold;
line-height: 1.2 !important;
margin: 0;
position: relative;
text-shadow: 0 1px white;
z-index: 600;
padding: 0.6rem calc((100vw - 1300px) / 2);
@media screen and (max-width: 590px) {
    // padding: 0.6rem calc((100vw - 1300px) / 2);
    // font-size: clamp(1.4rem, 5vw, 0.1rem);
    line-height: 1.2 !important;
    
}
`

const NavLink1 = styled(Link)`
// display:absolute;
cursor: pointer;
/* Negate theme styles */
border: 0;
margin: 0;
padding: 0;

background: none;
text-align: center;
color: green;
font-size: clamp(1.0rem, 2vw, 1.15rem);
font-weight: bold;
line-height: 1.0 !important;
margin: 0;
position: relative;
text-shadow: 0 1px white;
z-index: 600;
&:hover{
    color: red;
}
@media screen and (max-width: 590px) {
    // padding: 0.6rem calc((100vw - 1300px) / 2);
    line-height: 1.2 !important;
}
`




// const ClimateChangeHeader = styled.p`
// text-align: center;
// color: #077bf1;
// font-size: clamp(1.7rem, 5vw, 2rem);
// margin-top: 1.5rem;
// margin-bottom: 0.01rem;
// @media screen and (max-width: 590px) {
//     margin-bottom: 0.1rem;
// }`


const SourceInfo = styled.div`
background: blue;
opacity: 0.9;
color: white;
text-align: start;
font-size: clamp(0.87rem, 4vw, 0.1rem);
line-height: 0.6 !important;
z-index: 700;`


const TemperatureContainer = styled.div`
// display: grid;
// grid-gap: 60px;
// top: 100px;
// border-top: 2px solid #A9A9A9;
@media screen and (max-width: 630px) {
    grid-template-columns: 1fr;
}
`



const ClimateTemperatureData = styled.p`
background: green;
opacity: 0.9;
color: #fff;
text-align: start;
font-size: clamp(0.87rem, 4vw, 0.1rem);
z-index: 600;
`
const ClimateTemperatureCredit = styled.p`
background: red;
opacity: 0.9;
text-align: start;
color: #fff;
font-size: clamp(0.87rem, 4vw, 0.1rem);
z-index: 600;`

const NavLink = styled(Link)`
display:absolute;
cursor: pointer;
/* Negate theme styles */
border: 0;
margin: 0;
padding: 0;

background: none;
text-align: center;
color: green;
// font-family: Georgia, serif;
// font-size: clamp(1.4rem, 5vw, 0.9rem);
// font-style: none;
// font-weight: bold;
line-height: 1.4 !important;
margin: 0;
position: relative;
text-shadow: 0 1px white;
z-index: 600;
&:hover{
    color: red;
}
`