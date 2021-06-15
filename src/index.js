import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('wr-admin-app')

    if (typeof element !== 'undefined' && element !== null) {
      ReactDOM.render(<App />, document.getElementById('wr-admin-app'))
    }
  })
}
