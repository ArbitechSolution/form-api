import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import './Style.css';

function Iform() {
    const [setShow, isSetShow] = useState(false)
    const handleClick = () => {
        isSetShow(true)
        console.log("hhhhh");

    }
    return (
        <>
            <div className="contact1">
                <div className="container-contact1" >
                    <div className="contact1-pic js-tilt" data-tilt>
                        <img src="/Images/img-01.png" alt="IMG" />
                    </div>
                    <div>
                        <span className="contact1-form-title">
                            Get in touch
                        </span>
                        <div className="wrap-input1 validate-input" >
                            <input className="input1" type="number" placeholder="Number" min={1} required />
                            <span className="shadow-input1" />
                        </div>
                        <div className="container-contact1-form-btn">
                            <button className="contact1-form-btn" onClick={handleClick}>
                                <span>
                                    Submit
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                </span>
                            </button>
                            {
                                setShow ? (<div className='col-md-12 mt-5 d-flex justify-content-center'>
                                    <button className="contact1-form-btn  btn-outline-success" onclick="">
                                        <span>
                                            Download
                                            <i className="fa-solid fa-download" aria-hidden="true" />
                                        </span>
                                    </button>
                                </div>)
                                    : <></>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Iform