import React, { useState, useEffect } from "react";

import axios from "axios";


import { useLocation, Link } from "react-router-dom";


import downloadd from "../../../assests/downloadsign.png";

import line from "../../../assests/line1.svg";


import "./Id_Card.css";
import QRcode from "qrcode.react";
import { useNavigate } from "react-router-dom";



import pic1 from "../../../assests/profile1.png.jpg"
const fileTypes = ["JPG", "PNG", "GIF"];

const Id_Card = () => {
  //   const navigate = useNavigate();
  
  const [userDetails, setuserDetails] = useState({});
  // const [qr, setQr] = useState("");
  const [vall, setVall] = useState("");
  const [visible, setVisible] = useState(false);
  const [download, setDownload] = useState(false);
  const [qrshow,setQrshow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [qr, setQr] = useState({qr : ""})

  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(vall));
  }, [vall]);


  const QrChange = async ()   => {
    navigate("/pdf");
    
   
  };

 

  const Verify = () => {
  
         setQr(userDetails?.thomso_id);
      setVisible(true);
      setQrshow(false);
      setDownload(true);
      setTimeout( async () => {
        const canvas = document.getElementById("myqr");
        // console.log(canvas, "sdkcjanh");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");

        setVall(pngUrl);

                }, 1000);
         
    
  };

  const changeHandler1 = async (file) => {
   
  };

  return (
    <>
  
      <div className="nnp-container">
        
       
        <div className="boxborder">
          <div className="nnp-laphead">
            <div className="nnp-content">
             
              <div className="c-line1">
                <img className="c-line1-img" src={line} alt="line" />
              </div>

              <div
                className="Paycontainer"
                style={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="id_border1">
                  <div className="id_border2">
                    <div className="id_box">
                      <div className="id_box_left">
                        {userDetails?.avtar ? (
                        <img
                          src={userDetails?.avtar}
                          className="id_box_image"
                        />):(<img
                          src={pic1}
                          className="id_box_image"
                        />)}

                        {visible ? (
                          <QRcode id="myqr" value={qr} size={100} />
                        ) : (
                          <div className="id_box_qr">
                            <div className="id_box_qr_text">
                              {" "}
                              Qr code not generated{" "}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="id_box_right">
                        <p className="id_box_id">{userDetails?.thomso_id}</p>

                        <p className="id_box_text1">Name</p>
                        <p className="id_box_text2">{userDetails?.name}</p>

                        <div className="id_box_text_split">
                          <div>
                            <p className="id_box_text1">Contact</p>
                            <p className="id_box_text2">
                              {userDetails?.contact}
                            </p>
                          </div>
                          {userDetails?.is_ca && (
                            <div>
                              <p className="id_box_text1">CA ID</p>
                              <p className="id_box_text2">
                                {" "}
                                {userDetails?.ca_thomso_id}
                              </p>
                            </div>
                          )}
                        </div>

                        <p className="id_box_text1">College</p>
                        <p className="id_box_text2">
                        {userDetails?.college}
                        </p>

                        <p className="id_box_text1">CA Referral & Name</p>
                        {userDetails?.referred_by_id ? (
                          <p className="id_box_text2">
                            {userDetails?.ca_thomso_id} ({userDetails?.ca_name})
                          </p>
                        ) : (
                          <p className="id_box_text2">None</p>
                        )}

                        <p className="id_box_textB">
                          Accommodation -{" "}
                          {userDetails?.accommodation ? "Yes" : "No"}
                        </p>
                        {/* <p style={styles.id_box_text2}>None</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="right_id_card"
                  
                  >
                    <>
                      {!userDetails?.avtar && (
                        <FileUploader
                        type="file"
                        types={fileTypes}
                        handleChange={changeHandler1}
                        accept="image/jpeg, image/png, image/jpg"
                      >
                        <button className="generate1">Upload your profile</button>
                      </FileUploader>
                      )}
                      {(userDetails?.avtar && qrshow) && (
                      <div>
                        {" "}
                        <button
                          className="generate1"
                          disabled={visible}
                          style={{ cursor: "pointer", color: "black", display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                          alignItems: "center", zIndex: "100" }}
                          onClick={Verify}
                        >
                          Generate QR code
                        </button>{" "}
                      </div>)}
                        {download && (
                      <div>
                          <>
                            {" "}
                            <button className="generate" onClick={QrChange}>
                                <img
                                  className="downloadsign"
                                  src={downloadd}
                                  alt=""
                                />{" "}
                                Download ID card
                            </button>{" "}
                          </>
                      </div>
                        )}
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};



export default Id_Card;
