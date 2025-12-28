import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BaiTap from './BaiTapSua.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BaiTap />
  </StrictMode>,
)
