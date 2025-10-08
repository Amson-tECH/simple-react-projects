import React, { useState } from 'react'
import './ToogleBg.css'

const ToogleBg = () => {


    const [isDark, setIsDark] = useState(false)

    const handleClick = () => {
        setIsDark(!isDark)
    }

  return (
    
    <section style={{ background: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black'}}>

        <button onClick={handleClick} style={{background: isDark ? 'black' : 'white', color : isDark ? 'white' : 'black', border:`2px solid ${isDark ? 'white' : 'black'}`}}> {isDark ? 'White Theme' : 'Dark Theme'} </button>


        <section className='content'>
            <h1>Welcome to a <br /> React World </h1>
        </section>
    </section>
  )
}

export default ToogleBg
