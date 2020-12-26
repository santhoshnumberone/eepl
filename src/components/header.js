import React from "react"
import styled from 'styled-components'

const Header = () => {
  return (
    <CompanyNameHeader>
      <CompanyName>ELECTRAANU ENERGY PRIVATE LIMITED</CompanyName>
    </CompanyNameHeader>
  )

}
export default Header

const CompanyName = styled.p`
  color: white;
  height: 100%;
  width: 100%;
  dispay: Flex;
  font-family: Gotu;
  margin-left: 2rem;
  padding: 0.1rem calc((100vw - 1300px)/2);
  position: relative;
  font-size: clamp(1.15rem, 3.1vw, 1.6rem);
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  `
  const CompanyNameHeader = styled.div`
  align-items: center;
  // background: #4CAF50;
  background: #1227DC; //Good  
  opacity: 1.0;
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  text-align: left;
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
