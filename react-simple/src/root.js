import { Outlet } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/footer'

import './root.css'

export default function Root() {
  return (
    <div className="clvr-ecommerce">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
