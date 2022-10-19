import React from "react";
import axios from "axios";
import { useRef } from "react";

function Download() {
	const valueRef = useRef(null);

	const downloadFile = async () => {
		try {
			let URL = "";
			if (valueRef.current.value === "only Address") {
				URL = "https://create-bsc-wallet.herokuapp.com/api/wallet/getAddress";
			} else {
				URL = "https://create-bsc-wallet.herokuapp.com/api/wallet/allAccounts";
			}
			let res = await axios.get(URL);
			const data = new Blob([JSON.stringify(res.data, null, 2)], {
				type: "application/json",
			});
			var csvURL = window.URL.createObjectURL(data);
			let tempLink = document.createElement("a");
			tempLink.href = csvURL;
			tempLink.setAttribute("download", "wallets.txt");
			tempLink.click();
		} catch (error) {
			console.log("error", error);
		}
	};
	return (
		<>
			<div className="contact1">
				<div className="container-contact1">
					<div className="contact1-pic js-tilt" data-tilt>
						<img src="/Images/Download.png" alt="IMG" />
					</div>
					<div>
						<span className="contact1-form-title">Download File</span>
						<div className="wrap-input1">
							<div className="optionbox">
								<select ref={valueRef}>
									<option key={1}>only Address</option>
									<option key={2}>Address with privateKey</option>
								</select>
							</div>
							<span className="shadow-input1" />
						</div>
						<div className="container-contact1-form-btn">
							<button className="contact1-form-btn" onClick={downloadFile}>
								<span>
									Download file
									<i className="fa-solid fa-download" aria-hidden="true" />
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
	);
}

export default Download;