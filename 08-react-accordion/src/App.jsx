import React from 'react'
import {  accordionData } from './utils/content'
import Accordion from './Components/Accordion'

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title}  content={content} key={Math.random()}/>
        ))}
      </div>
    </div>
  )
}

export default App
