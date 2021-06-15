import React from 'react'
import Settings from './components/Settings'

if (typeof window !== 'undefined') {
    require('./app.scss')
}

const App = () => {
  return (
    <>
      <Settings />
    </>
  )
}

export default App
