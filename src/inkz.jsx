import React from 'react'
import {createRoot} from 'react-dom/client'

import InkzAuth from './javascript/components/inkz/InkzAuth.jsx'
import InkzData from './javascript/components/inkz/InkzData.jsx'

function rendeInkzPage() {
  const container = document.getElementById('reactInkz')

  if (container) {
    const root = createRoot(container)
    root.render(<InkzPage />)
  }
}

function InkzPage() {
  return (
    <div className="space-y-20">
      <InkzAuth />
      <InkzData />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', rendeInkzPage)