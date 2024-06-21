import { Route, Routes, useLocation } from "react-router-dom"
import { Footer, Header, Main } from "./components"
import { LandingPage, SearchPage } from "./pages"

function App() {
  const location = useLocation()

  return (
    <>
      <Header />
      <Main>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
