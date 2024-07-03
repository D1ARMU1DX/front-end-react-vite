import {Routes, Route} from 'react-router-dom'

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./Pages/HomePage"
import KelasPage from "./Pages/KelasPage"
import TestimonialPage from "./Pages/TestimonialPage"
import FaqPage from "./Pages/FaqPage"
import SyaratKetenPage from "./Pages/SyaratKetenPage"

function App() {
  return (
    <div>
      <NavbarComponent/>

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App
