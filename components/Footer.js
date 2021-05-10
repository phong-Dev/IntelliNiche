// import styles from '../styles/footerstyles.css'

const Footer = () => {
    return (
        
        <div className="footercontainer">
            <div className="row">
                <div className="col-md-4 footer4" >
                    <div className="row">
                        <div className="col-md-6" >
                            <br/>
                        <img id="footerlogo" src="/picture/IntelliNiche_logo1.svg"></img>
                        </div>
                        <div className="col-md-6">
                            <br/>
                            <div><h5><a href="#">Home</a></h5></div>
                            <div><h5><a href="#">Services</a></h5></div>
                            <div><h5><a href="#">About </a></h5></div>
                            <div><h5><a href="#">Carrers</a></h5></div>
                        </div>
                    </div>
                </div>
                
                

                <div className="col-md-8 verticalLine footer8">
                    <br/>
                    <h5><b>ABOUT US</b></h5>
                    <br/>
                    <p>We're A Global Team<br/>
                    IntelliNiche Is Headquartered In The VietNam, With Regional
                    Operations In Europe And Asia. Our Primary Focus Is The Agile
                    Development Of Cloud-Connected Web And Mobile Apps.</p>
                    
                </div>
            </div>
            
            <div className=""><span>Copyright 2020 All rights reserved. Designed by IntelliNiche</span> 
            <span classNameName='iconthree'>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fab fa-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fab fa-facebook-square"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fab fa-linkedin"></i></span>
            </div>
        </div>
    )
}

export default Footer
