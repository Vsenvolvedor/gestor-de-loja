import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Content/Home"
import Error404 from "./components/Error404"
import Store from "./components/Store/Store"
import GlobalStyles from "./theme/globalStyles"

function App() {
  
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home/>} />
            <Route path="/store/*" element={<Store/>} />
            <Route path="*" element={<Error404 />}/>
          </Routes>
          <GlobalStyles />
      </BrowserRouter>
  )
}

export default App
