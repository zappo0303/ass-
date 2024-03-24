import { Route, Routes } from "react-router-dom"
import Vexere from "./Vexere"
import Baselayout from "./layout/Baselayout"
import VexereDetail from "./VexereDetail"
import VexereDone from "./VexereDone"
function App() {
  return <div>
    <Routes>
        <Route path="/" element={<Baselayout />}>
          <Route index element={<Vexere />} />
          <Route path="/detail" element={<VexereDetail />} />
          <Route path="/pay" element={<VexereDone />} />.
        </Route>
        
      </Routes>
  </div>
    
}

export default App
