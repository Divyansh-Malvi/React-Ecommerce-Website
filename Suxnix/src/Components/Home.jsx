import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Home=()=>{
    return(
        <>
        <div className="HomeAll">
         <button className="homebutton"> Featured Ingredients <span style={{ paddingTop:"50px" , marginLeft:70}}><FontAwesomeIcon  icon={faChevronRight }/> </span></button>
        </div>
        </>
    )
}
export default Home;