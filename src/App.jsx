import React from 'react'
import { GlobalStyle } from './components/Header.jsx/header_styled'
import Header from './components/Header.jsx/Header'
import Main from './components/Main.jsx/Main'

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </>
  )
}
