
const axios =require ("axios");
const user={email:"a",password:"3"};
axios.post("http://localhost:6969/Register",user )
    .then(res=>console.log(res))
