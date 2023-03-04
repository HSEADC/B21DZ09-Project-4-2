import './index.css'

import React from 'react'
import {createRoot} from 'react-dom/client'

import Shortcuts from './javascript/components/Shortcuts.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentShortcuts')
  const root = createRoot(container)
  root.render(<Shortcuts />)
})
