import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="Home" element={<Home/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;