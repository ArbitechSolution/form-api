import React from 'react'

function GetprivateKey() {
  return (
    <>
      <div className="contact1">
                <div className="container-contact1" >
                    <div className="contact1-pic js-tilt" data-tilt>
                        <img src="/Images/Key.png" alt="IMG" />
                    </div>
                    <div>
                        <span className="contact1-form-title">
                            Generate Private Key
                        </span>
                        <div className="wrap-input1 validate-input" >
                            <input className="input1" type="number" placeholder="Public Key" min={1} required />
                            <span className="shadow-input1" />
                        </div>
                        <div className="container-contact1-form-btn">
                            <button className="contact1-form-btn">
                                <span>
                                  Show Key
                                    <i className="fa-solid fa-key" aria-hidden="true" />
                                </span>
                            </button>
                            {/* {
                                setShow ? (<div className='col-md-12 mt-5 d-flex justify-content-center'>
                                    <button className="contact1-form-btn  btn-outline-success" onclick="">
                                        <span>
                                            Download
                                            <i className="fa-solid fa-download" aria-hidden="true" />
                                        </span>
                                    </button>
                                </div>)
                                    : <></>
                            } */}

                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default GetprivateKey