import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './Home'
import Compte from './Compte'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/compte' element={<Compte />} />

    </Routes>
  )
}

export default index