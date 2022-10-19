import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import './Style.css';

function Navbar() {
    const [iscolor, setIsColor] = useState("Create Accounts")
    const { pathname } = useLocation()

    const changePath = () => {
        if (pathname) {
            console.log("pathname", pathname);
            if (pathname == "/") {
                setIsColor("Create Accounts")
            } else if (pathname == "/GetprivateKey") {
                setIsColor("Get Private Key")
            }
            else if (pathname == "/Download") {
                setIsColor("Download")
            }
            else if (pathname == "/DeleteKey") {
                setIsColor("Delete")
            }
        }
    }

    useEffect(() => {
        changePath()
    })
    return (
        <>
            <Container>
                <nav className="navbar navbar-expand-lg pt-2 bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse bg-border" id="navbarNavAltMarkup">
                            <div className="navbar-nav menu ">
                                <Link to="/" className={iscolor == "Create Accounts" ? "link-active me-4" : "link me-4"} id="Create Accounts" onClick={() => setIsColor("Create Accounts")}>Create Accounts</Link>
                                <Link to="/GetprivateKey" className={iscolor == "Get Private Key" ? "link-active me-4" : "link me-4"} id="Get Private Key" onClick={() => setIsColor("Get Private Key")}> Get Private Key </Link>
                                <Link to="/Download" className={iscolor == "Download" ? "link-active me-4" : "link me-4"} id="Download" onClick={() => setIsColor("Download")}> Download </Link>
                                <Link to="/DeleteKey" className={iscolor == "Delete" ? "link-active me-4" : "link me-4"} id="Delete" onClick={() => setIsColor("Delete")}> Delete </Link>
                            </div>
                        </div>
                    </div>
                </nav>


                {/* <div className='col-md-12'>
                    <nav className="navbar navbar-expand-lg bg-white background">
                        <div className="container-fluid" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                                <div className="navbar-nav menu">
                                    <Link to="/" className={iscolor == "Create Accounts" ? "link-active me-4" : "link me-4"} id="Create Accounts" onClick={() => setIsColor("Create Accounts")}>Create Accounts</Link>
                                    <Link to="/GetprivateKey" className={iscolor == "Get Private Key" ? "link-active me-4" : "link me-4"} id="Get Private Key" onClick={() => setIsColor("Get Private Key")}> Get Private Key </Link>
                                    <Link to="/Download" className={iscolor == "Download" ? "link-active me-4" : "link me-4"} id="Download" onClick={() => setIsColor("Download")}> Download </Link>
                                    <Link to="/DeleteKey" className={iscolor == "Delete" ? "link-active me-4" : "link me-4"} id="Delete" onClick={() => setIsColor("Delete")}> Delete </Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div> */}
            </Container>
        </>
    )
}

export default Navbar