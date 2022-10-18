import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Style.css';

function Navbar() {
    return (
        <>
            <Container>
                <div className='col-md-12'>
                    <nav className="navbar navbar-expand-lg bg-light background">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                                <div className="navbar-nav menu">
                                <Link to="/SignUp" className='link me-4'>Create Accounts</Link>
                                <Link to="/GetprivateKey" className='link me-4'> Get Private Key </Link>
                                <Link to="/GetprivateKey" className='link me-4'> Download </Link>
                                <Link to="/GetprivateKey" className='link me-4'> Delete </Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </Container>
        </>
    )
}

export default Navbar