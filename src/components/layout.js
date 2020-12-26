import React from "react"
import styled from "styled-components"
import Header from "./header"
import { GlobalStyle } from "./Styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <Webtemplate>
    <GlobalStyle />
      <Header/>
        <main>{children}</main>
    </Webtemplate>
  )
}


export default Layout

const Webtemplate = styled.div`
box-shadow: 0 0 0 1px black;
border-radius: 4px 4px;
`