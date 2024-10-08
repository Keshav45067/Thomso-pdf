import React, { useState, useEffect } from "react";
import {
  Document,
  Font,
  Page,
  Image,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import id_logo from "./ID_Logo.png";
import { useLocation, Link,useParams } from "react-router-dom";
import iitr_logo from "./Group 36648.png";
import thomso_logo from "./image 79.png";

import CS_normal from "./COMIC.TTF";

import CS_bold from "./design.graffiti.comicsansmsgras.ttf";

import Data from "../UserData.json"

Font.register({
  family: "Comic Sans MS",
  fonts: [
    {
      src: CS_normal,
    },
    {
      src: CS_bold,
      fontWeight: "bold",
    },
  ],
});
// Font.register({
//   family: "Comic Sans MS",
//   src: CS_normal,
// });

const styles = StyleSheet.create({
  id_page: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  id_header: {
    display: "flex",
    flexDirection: "row",
    marginTop: "30px",
    // justifyContent: "space-between",
    // alignItems: "space-between",
  },
  id_header1: {
    height: "56px",
    width: "56px",
    marginRight: '100px'
  },
  id_header2: {
    fontSize: "20px",
    marginRight: '100px'
  },
  id_header3: {
    height: "56px",
    width: "88px",
  },
  id_container: {
    height: "232px",
    width: "272px",
    // backgroundColor: "#6BDFF8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    fontFamily: "Comic Sans MS",
    border:"2px solid black"
  },
  id_logo: {
    marginTop: "17px",
    height: "50px",
    width: "103px",
  },
  id_border1: {
    marginVertical: "17px",
    height: "232px",
    width: "264px",
    borderRadius: "3px",
    padding: "3px",
    backgroundColor: "white",
  },
  id_border2: {
    height: "100%",
    width: "100%",
    border: "1px dashed black",
    padding: "5px",
  },
  id_box: {
    height: "100%",
    width: "100%",
    border: "1px solid black",
    padding: "6px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  id_box_red: {
    color:"red",
    width:"auto",
    fontWeight:"600",
    fontSize:"20px",
    marginLeft:"auto"
  },

  id_box_left: {
    height: "100%",
    width: "35%",
    display: "flex",
    justifyContent: "space-between",
  },

  id_box_right: {
    height: "100%",
    width: "60%",
    display: "flex",
  },

  id_box_image: {
    objectFit: "cover",
    height: "50%",
    width: "100%",
    border: "1px solid black",
    padding: "1px",
  },

  id_box_qr: {
    height: "40%",
    width: "100%",

    padding: "2px",
  },

  id_box_id: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "2px",
    // fontFamily: "",
  },

  id_box_text1: {
    fontSize: "8px",
    marginTop: "1vh",
  },

  id_box_text2: {
    fontSize: "9px",
    fontWeight: "bold",
    marginTop: "2px",
  },

  id_box_textB: {
    fontSize: "9px",
    fontWeight: "bold",
    marginTop: "1vh",
  },

  id_box_text_split: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  id_bottom: {
    height: "41px",
    width: "100%",
    bottom: "0px",
    // backgroundColor: "#F7B401",
  },
  id_line: {
    width: "95vw",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  id_insdata: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    marginBottom: "20px",
  },
  id_ins: {
    fontSize: "15px",
    fontWeight: "600",
    marginTop: "10px",
    marginLeft: "10px",
  },
  id_data1: {
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "12px",
    marginLeft: "10px",
  },
  id_data: {
    fontSize: "12px",
    marginTop: "12px",
    marginLeft: "10px",
  },
});

const Renderer = ({id}) => {
  
 
 const [items, setItems] = useState();

  // const[user,setUser] = useState({});

  
 

  useEffect(() => {
   
      const items = JSON.parse(localStorage.getItem("dataKey"));
    if (items) {
      setItems(items);
      
    }
  }, [items]);
 
  
  return (
    <Document>
      <Page size="A4" style={styles.id_page}>
        <View style={styles.id_header}>
          <Image src={iitr_logo} style={styles.id_header1} />
          <Text style={styles.id_header2}>Provisional ID card</Text>
          <Image src={thomso_logo} style={styles.id_header3}></Image>
        </View>

        <View style={styles.id_container}>

          <View style={styles.id_border1}>
            <View style={styles.id_border2}>
              <View style={styles.id_box}>
                <View style={styles.id_box_left}>
                   
                    <Image src={Data[id].Avtar===""?id_logo:`https://api2.thomso.in/media/${Data[id].Avtar}`} style={styles.id_box_image} />
                  
                  <Image src={items} style={styles.id_box_qr} />
                </View>

                <View style={styles.id_box_right}>
                  <Text style={styles.id_box_id}>{Data[id]["Thomso Id"]}</Text>

                  <Text style={styles.id_box_text1}>Name</Text>
                  <Text style={styles.id_box_text2}>{Data[id].Name}</Text>

                  <View style={styles.id_box_text_split}>
                    <View>
                      <Text style={styles.id_box_text1}>Contact</Text>
                      <Text style={styles.id_box_text2}>{Data[id]["Contact No."]}</Text>
                    </View>
                    
                    { Data[id].CA !=="None"  && <View>
                        <Text style={styles.id_box_text1}>CA ID</Text>
                        <Text style={styles.id_box_text2}>{Data[id].CA}</Text>

                      </View> }
                    
                  </View>

                  <Text style={styles.id_box_text1}>College</Text>
                  <Text style={styles.id_box_text2}>
                  {Data[id].College}


                  </Text>

                  <Text style={styles.id_box_text1}>CA Referral & Name</Text>
                  {Data[id].Referred_By !=="None" ? (
                    <Text style={styles.id_box_text2}>
                     {Data[id].Referred_By} ({Data[id].CA_Name})
                    </Text>
                  ) : (
                    <Text style={styles.id_box_text2}>None</Text>
                  )}

                  <Text style={styles.id_box_textB}>
                    Accommodation - {Data[id].Accommodation ? "Yes" : "No"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
        <Text style={styles.id_box_red}>
                    Bring Coloured Printed Copy of ID card with you.
                  </Text>
        </View>

        <View style={styles.id_insdata}>
          <View style={styles.id_line}></View>
          <View>
            <Text style={styles.id_ins}>INSTRUCTIONS:</Text>
            <Text style={styles.id_data1}>
              1. This ID card is provisional and does not confer entitlement as a valid identity or participant's pass for Thomso'23. It is mandatory for all participants to bring this ID Card at the registration desk in the Thomso Office at the MAC Building for getting a valid id card.

            </Text>
            <Text style={styles.id_data}>
              2. This provisional ID Card must be in an undamaged condition and it is advised to be carried within a file case to prevent any folding or creasing.

            </Text>
            <Text style={styles.id_data}>
              3. Additionally, participants are required to bring two identical
              passport-sized photographs.
            </Text>
            <Text style={styles.id_data}>
              4. Inner section of id card must be appropriately cut along the dotted lines and presented at the registration desk.

            </Text>
            <Text style={styles.id_data}>
              5. Participants must bring a minimum of two printed copies of this ID Card for the registration process.

            </Text>
            <Text style={styles.id_data}>
              6. Any forgery with the ID Card will lead to the jurisdiction of the Thomso Organizing Committee and the authorities of IIT Roorkee.
            </Text>
          </View>
        </View>

      </Page>
    </Document>
  );
};

export default Renderer;
