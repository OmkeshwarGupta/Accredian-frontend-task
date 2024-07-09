import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Group from './components/Group'
import LearnEarn from './components/LearnEarn'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import GetInTouch from './components/GetInTouch'
import ReferPupup from './components/ReferPupup'

const App = () => {

  const [refer, setRefer]= useState(false);

  const url="https://backend-task-845p.onrender.com/api/referrals"

  return (
    <div>
      {
        refer ? <ReferPupup url={url} refer={refer} setRefer={setRefer} /> :<div></div>
      }
      
      <Header/>
      <Navbar/>
      <Group/>
      <LearnEarn refer={refer} setRefer={setRefer} />
      <Hero refer={refer} setRefer={setRefer} />
      <Hero2 refer={refer}  setRefer={setRefer}/>
      <FAQ/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default App
