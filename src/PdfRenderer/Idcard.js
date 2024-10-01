import React, { useState, useEffect } from "react";
import { useLocation, Link,useParams } from "react-router-dom";

import id_card_bg from "../assets/idback.webp";

import "./Idcard.css";
import { useNavigate } from "react-router-dom";
import QRcode from 'qrcode.react'
import Data from "../UserData.json"

const Idcard = () => {
  const params = useParams();
  const id = params.id;
  const locator = useLocation();
  
  const [qr, setQr] = useState("");
  const [vall,setVall] = useState("");
  const [visible ,setVisible] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    console.log(vall,"sdlkch");
    localStorage.setItem('dataKey', JSON.stringify(vall));
  }, [vall]);

  const Navigte = ()=>{
    navigate(`/user/${id}`);
  }
 
  // console.log(Data[id]Details);
  
  const Verify = ()=>{
    // console.log("sajclx");
    setQr(Data[id]["Thomso Id"]);
    setVisible(true);
    setTimeout(() => {
      const canvas =   document.getElementById("myqr");
    // console.log(canvas,"sdkcjanh")
    const pngUrl =   canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
    
    setVall(pngUrl);
    console.log(pngUrl);
    }, 1000);
   

    
  };


  return (
    <div className="id_card_main_div">
      <div className="id_card_div">
        <img src={id_card_bg} className="id_card_bg1" alt="" />
        <div className="contain1_id">
          <div className="left_id">
            <div className="profile_id_pic">
               <img src={""} className="profile_pic_image" alt="" />
            </div>
            <div className="id_qr">
              {/* <img src={qrcode} className="qr_image" alt="" /> */}
             {!visible && (<button
          style={{cursor:"pointer",zIndex:"100"}}
            onClick={Verify}
            
          >
            verify
          </button> )}
            {visible && (<QRcode 
              style={{marginTop:"3vh",}}
                        id="myqr"
                        value={qr} 
                        size={100}
                        
                    /> 
                     )}
            </div>
          </div>
          { Data[id] && <div className="right_id">
            <div className="thomso_card_id">{Data[id].ThomsoId}</div>
            <div className="id_card_name">
              <div>Name :</div>
              <div className="dataSize">{Data[id].Name}</div>
            </div>
            <div className="contain2_id">
              <div className="id_contactno">
                <div>Contact</div>
                <div className="dataSize">{Data[id].ContactNo}</div>
              </div>
              {/* {" "} */}
              {!Data[id].CA === "None" &&
              (<div className="id_ca_id">
                <div>CA-ID :</div>
                <div className="dataSize">{Data[id].CA}</div>
              </div>)
              }
            </div>
            <div className="id_college">
              <div>College</div>
              <div className="dataSize">{Data[id].College}</div>
            </div>
            {/* {" "} */}
          
            (<div className="id_ca_referral">
              <div>CA-Referral and Name</div>
              <div className="dataSize">
                {Data[id].Referred_By} ({Data[id].CA_Name})
              </div>
            </div>)
            <div className="id_accomodation">
              <div>Accomodation:</div>
              <div className="dataSize">
                {" "}
                {Data[id].Accommodation ? "Yes" : "No"}
              </div>
            </div>
          </div>}
        </div>
      </div>
      {visible && <button style={{cursor:"pointer",zIndex:"100"}}
            onClick={Navigte}>Download</button>}
    </div>
  );
};



export default Idcard;