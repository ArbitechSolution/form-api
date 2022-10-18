import React, { useEffect, useState } from 'react';
import "./Style.css";
import axios from 'axios';

const [post,setPost]=useState(Null)

function SignUp() {

async function createAccount() {

    let payload = { limit:10, mode:"no-cors"};

    let res = await axios.post('https://create-bsc-wallet.herokuapp.com/api/wallet/create', payload);

    let data = res.data;
    console.log(data.message);
}
useEffect

  return (
    <>
      <div className="contact1">
                <div className="container-contact1" >
                    <div className="contact1-pic js-tilt" data-tilt>
                        <img src="/Images/CreateAccount.png" alt="IMG" />
                    </div>
                    <div>
                        <span className="contact1-form-title">
                            Create Accounts
                        </span>
                        <div className="wrap-input1 validate-input" >
                            <input className="input1" type="number" placeholder="No Of Accounts" min={1} required />
                            <span className="shadow-input1" />
                        </div>
                        <div className="container-contact1-form-btn">
                            <button className="contact1-form-btn" onClick={createAccount}>
                                <span>
                                  Create Account
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

export default SignUp