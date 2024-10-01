import React, { useState, useEffect } from "react";

const Image = () => {

    const [items,setItems] = useState();
  
   useEffect(() => {

      const items = JSON.parse(localStorage.getItem("dataKey"));
    if (items) {
      setItems(items);
      console.log("items",items);
        };
  }, []);
  return (
    <div>
      <img src={items} alt=""/>
    </div>
  )
}

export default Image
