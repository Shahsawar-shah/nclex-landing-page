import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

import Home from './Pages/Home'
import Pricing from './Pages/Pricing'
import Reviews from './Pages/Reviews'
import Educators from './Pages/Educators'
import SuccessStories from './Pages/SuccessStories'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ForgotPassword from './Pages/ForgotPassword'

function LayoutWrapper() {
  const location = useLocation()

  // Routes where Navbar & Footer should be hidden
  const hideLayoutRoutes = ['/login', '/signup', '/forgot-password']
  const hideLayout = hideLayoutRoutes.includes(location.pathname)

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/educators" element={<Educators />} />
        <Route path="/success-stories" element={<SuccessStories />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>

      {!hideLayout && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  )
}

export default App
