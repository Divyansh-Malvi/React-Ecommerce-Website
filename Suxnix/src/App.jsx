import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index="Home" element={<Home/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Cart" element={<Cart/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;