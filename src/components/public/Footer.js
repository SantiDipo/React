import React, { useState } from 'react'

export const Footer = () => {

    const [clicks, setClicks] = useState(0);
    const year =new Date().getFullYear();
    const companyName= "Santiago D'Ippolito";
    
    const handleClick = () =>{
        setClicks(clicks+1);
    }
    return (
        <div>
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <span
                        className="cpl-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark" 
                        onClick = {handleClick}>
                        
                        <img className="App-logo" height="52" src="rick3.png" alt="" />
                    </span>

                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">&copy; {year} {companyName} Clicks={clicks}</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
