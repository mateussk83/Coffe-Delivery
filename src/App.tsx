import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Router } from './Router'

export function App() {
  return (
    <div className="App">
      <Router />
    </div>
  )
}

