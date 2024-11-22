import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { PiFlowerLotus } from "react-icons/pi";
import { PiTestTubeLight } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { GiHeartOrgan } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
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
        {/* New Sec */}
        <div className="trd">
            <h1>BEST SELLING PRODUCT</h1>
        </div>
        <div className="forth">
            <h1 style={{textAlign:'center', paddingTop:150, color:'white'}}>FORMULAS FEATURES</h1>
            <div className="box">
                <div className="leftb">
                <div className="iconf" ><h3><PiFlowerLotus/><span>NATURAL INGREDIENTS</span></h3></div>
                <div className="icons" ><PiTestTubeLight /><span><h3>FISHBONE FORMULA</h3></span></div>
                <div className="icont" style={{height:'50px', width:'40px' , border:'solid black 1px', borderRadius:20, display:'flex' , justifyContent:"center"}}><GiMedicines /></div>    <span><h3>FLOWER FORMULA</h3></span>

                </div>
                <div className="rightb">
                 <div style={{height:'50px', width:'40px' , border:'solid black 1px', borderRadius:20, display:'flex' , justifyContent:"center"}}><span><h3>FISHBONE FORMULA</h3></span><PiTestTubeLight /></div>
                 <div style={{height:'50px', width:'40px' , border:'solid black 1px', borderRadius:20, display:'flex' , justifyContent:"center"}}> <span><h3>100% FAT BLASTING</h3></span><GiHeartOrgan /></div>
                 <div style={{height:'50px', width:'40px' , border:'solid black 1px', borderRadius:20, display:'flex' , justifyContent:"center"}}><span><h3>INCREASED ENERGY</h3></span><SlEnergy /></div>   
                </div>

                
            </div>
        </div>

        </>
    )
}
export default Home;