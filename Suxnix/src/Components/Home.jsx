import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Home=()=>{
    return(
        <>
        <div className="HomeAll">
           <div className="head"><h1>SUPEX INCREASE YOUR ENERGY</h1></div>
           
           <div className="homebut"> <button id="btn">Featured Ingredients <span style={{marginLeft:'50px' , alignContent:'center'}}><FontAwesomeIcon  icon={faChevronRight }/></span></button></div>
        </div>
        <div className="sec">
           <h5>PERFECT BRAND IS FEATURED ON</h5>
        <div className="imgl">
            <img src="src\images\brand-02.png" alt="" style={{color:'red'}}/>
            <img src="src\images\brand-03.png" alt="" />
            <img src="src\images\brand-04.png" alt="" />
            <img src="src\images\brand-05.png" alt="" />
            <img src="src\images\brand-06.png" alt="" />
            <img src="src\images\brand-01.png" alt="" />
            </div>   
            <div className="bigbox">
                <div className="leftside">
                    <img src="src\images\about-01.png" alt="" />
                </div>
                <div className="rightside">
                    <h3>Supplement Formulas Features of the most favorite Flavor</h3>
                    <p>Our supplements are meticulously formulated with a focus on quality, efficacy, and innovation, ensuring that you receive the best possible results.</p>
                    <div className="feat">
                    <div className="lestlist">
                    <ul>
                    <li><span><FontAwesomeIcon icon={faCheck} /></span>Natural Ingredients</li> 
                    <li><span><FontAwesomeIcon icon={faCheck} /></span>Flower Formula</li> 
                    </ul>    
                    </div>    
                    <div className="rightlist">
                    <ul>
                    <li><span><FontAwesomeIcon icon={faCheck} /></span>Fishbone Diagram</li>
                    <li><span><FontAwesomeIcon icon={faCheck} /></span>Increased Energy</li>
                    </ul>
                    </div>
                    </div>  
                    <p style={{color:'black'}}>Our supplements are meticulously formulated with a focus on quality, efficacy, and innovation.</p>
                    <div className="secbut">
                        <div className="leftbut">
                            <button>Shop Now <span><FontAwesomeIcon  icon={faChevronRight }/></span></button>
                        </div>
                        <div className="rightbut">
                        <button>Contact Us <span><FontAwesomeIcon  icon={faChevronRight }/></span></button>

                        </div>
                        </div> 
                </div>
            </div>

    
        </div>
        </>
    )
}
export default Home;