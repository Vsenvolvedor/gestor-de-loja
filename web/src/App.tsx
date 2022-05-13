import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Content/Home"
import GlobalStyles from "./theme/globalStyles"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
