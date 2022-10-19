import React from 'react'
import { useState } from 'react';
import "./Style.css";
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';

function DeleteKey() {
    const [post,setPost]=useState()
    async function DeleteAllKey() {
        try{
            setPost(true)
            console.log(setPost);
        let res = await axios.delete('https://create-bsc-wallet.herokuapp.com/api/wallet/');
        console.log(res.status);
        setPost(false)
        toast.success('Successfully Deleted All Accounts!')
        
        }
        catch(error){
console.log("error", error);
        }
    }
    
  return (
    <>
        <div className="contact1">
                <div className="container-contact1" >
                    <div className="contact1-pic js-tilt" data-tilt>
                        <img src="/Images/Delete.png" alt="IMG" />
                    </div>
                    <div>
                        <span className="contact1-form-title">
                            Delete All Accounts
                        </span>
                        {/* <div className="wrap-input1 validate-input" >
                            <input className="input1" type="number" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="No Of Accounts" min={1} required />
                            <span className="shadow-input1" />
                        </div> */}
                        <div className="container-contact1-form-btn">
                        {
                            !post && (
                                <button className="contact1-form-btn" onClick={DeleteAllKey}>
                                <span>
                                Delete Accounts
                                    <i className="fa-solid fa-trash" aria-hidden="true" />
                                </span>
                            </button>

                            )
                        }
                        {
                            post &&
                            (<button className="contact1-form-btn" onClick={DeleteAllKey}>
                                <span>
                                <ClipLoader  size={15} color={"while"}/>
                                
                                    {/* <i className="fa-solid fa-key" disabled /> */}
                                </span>
                            </button>)
                        }
                            
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
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>
  )
}

export default DeleteKey