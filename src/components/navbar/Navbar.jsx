import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"

const Navbar=() => {
    return(
        <div className="navbar">
            {/*Sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <span>Pardheev Krishna </span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt=""/></a>
                    <a href="#"><img src="/instagram.png" alt=""/></a>
                    <a href="#"><img src="/youtube.png" alt=""/></a>
                    <a href="#"><img src="/dribbble.png" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;