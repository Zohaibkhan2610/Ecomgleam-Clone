import React from 'react'
import Hero from './section/Hero'
import Services from './section/Services'
import Work from './Workspace/Work.jsx'
import Connection from './Workspace/Connection.jsx'
export default function Home() {
  return (
    <>
      <div className='Home'>
      <Hero/>
      <Services/>
      <Work/>
      <Connection/>
      </div>
      
    </>
  )
}
