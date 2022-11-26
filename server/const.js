let data = [
    { actionCodes :{
     NA : 4,
     QC : 6,
     NA : 4,
    },date : 
    "2022-04-14 T 09 "
 },
    { actionCodes :{
     NA : 4,
     CU : 3,
     NA : 4,
    },date : 
    "2022-04-14 T 09 "
 },
    { actionCodes :{
     NA : 4,
     QC : 4,
     CUU : 4,
    },date : 
    "2022-04-14 T 09 "
 },
    { actionCodes :{
     NA : 4,
     CU : 4,
     QCC : 4,
    },date : 
    "2022-04-14 T 09 "
 },
 ]
 
 
 let keyyy =[]
 data.map((_)=>{
     for (const key in _.actionCodes) {
         if (Object.hasOwnProperty.call(_.actionCodes, key)  && !keyyy.includes(key)) {
             keyyy.push(key)            
         }
     }
 })
 
 
 
 let arr =  keyyy.map((el,_i)=>{
     let temp = { [el] : [] }
     data.forEach((e,i)=>{
         for (const key in e.actionCodes) {
             if (Object.hasOwnProperty.call(e.actionCodes, key) &&  key === el) {
                 temp[el].push(e.actionCodes[key])
             }
         }
         if(!e.actionCodes.hasOwnProperty(el)){
             temp[el].push(0)
         }
     })
     return temp
 })
 console.log(arr);  