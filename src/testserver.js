const axios =require ("axios");
const user={name:"1",email:"2",password:"3"};
axios.post("http://localhost:6969/Register",user )
    .then(res=>console.log(res))