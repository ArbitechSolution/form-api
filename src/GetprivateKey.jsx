import React from 'react'
import axios from 'axios';
import { useState, useRef } from 'react';
import { Modal, ModalFooter } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import copy from "copy-to-clipboard"; 

function GetprivateKey() {

    const [dataInput, setDataInput] = useState()
    const inputRef = useRef(null);
    const [showKey, setShowKey] = useState(false)
    const [isCopy, setIsCopy] = useState("");
    let finalArray = []
    const copyToClipboard = () => {
      copy(dataInput);
    //   toast.success("Address copied!");
      setIsCopy("copy")
   }
    async function Generatekey() {
        // inputRef.current.value;
        try {
            let address = inputRef.current.value
            console.log("value", inputRef.current.value);
            let res = await axios.get(`https://create-bsc-wallet.herokuapp.com/api/wallet/getPrivateKey/${address}`);
            let data = res.data[0]?.privateKey;
            console.log(data);
            setDataInput(data)
            setShowKey(true)
            // return address(true);
        }
        catch (error) {
            console.log("error", error);
        }
    }
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
                            <input className="input1" placeholder="Public Key" ref={inputRef} min={1} required />

                            <span className="shadow-input1" />
                        </div>
                        <div className="container-contact1-form-btn">
                            <button className="contact1-form-btn" onClick={Generatekey}>
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
            {/**************************Model*****************************************************************/}

            {showKey ? (
                <Modal className='model'
                    show={showKey}
                    size="lg"
                    backdrop="static"
                    keyboard={false}
                    onHide={() => setShowKey(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Private Key</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div id="Copy" className='model-display'>
                        {dataInput}
                    </div>
                    <div className='model-display-lg'>  
                    {dataInput?.substring(0, 11) + "..." + dataInput?.substring(dataInput?.length - 11)}
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={()=>copyToClipboard()}>{isCopy == "copy" ? 'Copied' : 'Copy Key'}</Button>
                    </Modal.Footer>
                </Modal>
            ) :
                (
                    <></>
                )}



        </>
    )
}

export default GetprivateKey