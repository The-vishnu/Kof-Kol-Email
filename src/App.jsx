import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import ChatSection from './components/ChatSection'
import './App.css'

function App() {


  return (
    <>
      <Sidebar/>
      <ChatSection/>
    </>
  )
}

export default App
