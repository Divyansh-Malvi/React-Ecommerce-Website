import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
const Layout=()=>{
    return(
        <>
        <Topbar/>
        <Outlet/>
        <Footer/>

        </>
    )
}
export default Layout;