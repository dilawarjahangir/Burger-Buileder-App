import React from 'react'
import Header from '../components/Layout/Header'
import BurgerMaking from '../components/Layout/BurgerMaking.jsx'
import BurgerAnimation from '../components/Layout/BurgerAnimation.jsx'

const HomePage = () => {
  return (
    <div  >
       <Header active={1}/>
       <BurgerAnimation/>
       <BurgerMaking/>
    </div>
  )
}

export default HomePage