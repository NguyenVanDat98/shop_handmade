import {makeId} from  "./common.js"
console.log(makeId(3));
function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "shynend@gmail.com",
    Password : "A6F2290E28E82A96082B3C1E0EB745BBF17F",
    To : 'nguyenvom98@gmail.com',
    From : "shynend@gmail.com",
    Subject : "This is the subject",
    Body : `<h1> code  : ${makeId(6)}</h1>`
}).then(
message => alert(message)
);
}
document.getElementById("formSend").addEventListener("click", ()=>{
    sendEmail()
    // console.log("asdasd");

})