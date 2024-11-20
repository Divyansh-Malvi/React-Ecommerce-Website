import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
const Footer=()=>{
    return(
        <>
        <div className="foot">
            <div className="mid">
                <div className="sub">
                    <h1>Subscribe Newsletters</h1>
                </div>
                <div className="form">
                        <input type="email" placeholder="Enter your email" name="email" />
                        <button>Subcribe Now</button>   
                </div>
            </div>
            <div className="footdown">
                
                <div className="fir">
                    <img src="src\images\logo.png" alt="" />
                    <p>Making beauty especially relating complot especial common questions tend to recur through posts or queries standards vary orem donor command tei.</p>
                    <FaInstagramSquare style={{marginLeft:15 , fontSize:25}} />
                    <FaFacebookSquare style={{marginLeft:15 , fontSize:25}}/>
                    <FaSquareXTwitter style={{marginLeft:15 , fontSize:25}}/>
                    <FaYoutube style={{marginLeft:15 , fontSize:25}}/>
                    <FaSquarePinterest style={{marginLeft:15 , fontSize:25}}/>

                    
                </div>
                <div className="sec">
                    <h3>About Us</h3>
                    <ul style={{listStyle:'none'}}>
                        <li>About Company</li>
                        <li>Affiliate Program</li>
                        <li>Customer Spotlight</li>
                        <li>Our Shop</li>
                        <li>Our Shop</li>
                        <li>Price & Plans</li>
                    </ul>
                </div>
                <div className="trd">
                    <h3>Support</h3>
                    <ul style={{listStyle:'none'}}>
                        <li>Knowledge Base</li>
                        <li>Blog</li>
                        <li>Developer API</li>
                        <li>FAQ</li>
                        <li>Team</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="fort">
                    <h3>Contact Us</h3>
                    
                        <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                        <ul style={{listStyle:'none'}}>
                        <li><span><FaPhone /></span>+1 31-6555-0116</li>
                        <li><span><MdMail /></span>Supex@example.com</li>
                        <li><span><FaGlobe /></span>www.supexdomain.com</li>
                    </ul>
                </div>

            </div>
           
           
        </div>
        </>
    )
}
export default Footer;