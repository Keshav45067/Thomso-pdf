import React, { useEffect, useState } from 'react'
import { PDFDownloadLink,PDFViewer } from "@react-pdf/renderer";
import Renderer from "./Renderer"
import { useLocation, Link,useParams } from "react-router-dom";

import "./Pdfcss.css"
 const PdfDownload =()=> {
  const params = useParams();
  const id = params.num;
  return (
    <>
    <div className = "laptop">
      <PDFViewer style={{width:"100vw", height:"100vh"}}>
    <Renderer id={id}/>
  </PDFViewer>
  </div> 
  <div className="mobile">
    <div>
      <PDFDownloadLink document={<Renderer id ={id}/>} fileName='Id Card'>
 {({loading})=>
    loading? (
        <button>Loading document..</button>
    ): (<button>Download</button>)
 }

      </PDFDownloadLink></div>
      </div>
      </>
  )
}
// const mapStateToProps = (state) => {
//   let userDetails = state.user.user;
//   let loading = state.user.loading;

//   return {
//     userDetails,
//     loading,
//   };
// };
export default PdfDownload;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: (params) => dispatch(fetchUser(params)),
//     logouts: (params) => dispatch(logout(params)),
//   };
// };

// export default connect(mapStateToProps)(PdfDownload);
