import { StrictMode } from 'react'
// Import thu vien tao root DOM

import { createRoot } from 'react-dom/client'
// Import thu vien React

// Goi app tu file App.jsx
// import App from './App.jsx'
import BaiTap from './BaiTap'

// Dung chay React
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BaiTap />
  </StrictMode>,
)
