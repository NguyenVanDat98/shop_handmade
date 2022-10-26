import React from 'react';
import { useState } from 'react';


const TestUpload = props => {
   const [fileSelect, setFile] = useState("")
   const [isfileSelect, setIsFile] = useState(false)

   const changFile = (e) => {
      setFile(e.target.files[0])
      setIsFile(true)
   }
   const fetchFile = () => {
      const formData = new FormData()
      formData.append("File", fileSelect)
      //    console.log(fileSelect);
      fetch("https://handmader.herokuapp.com/api/listEarning", {
         method: "POST",
         body: formData,
      }).then(_ => console.log("s")).catch(err => console.log(err))
   }
   return (
      <div>
         <input type="file" name="file" id="file" onChange={changFile} />
         <button onClick={fetchFile} >add</button>
      </div>
   );
};



export default TestUpload;