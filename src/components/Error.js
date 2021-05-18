import React from 'react';
import Bg from '../images/GitHub-Mark-64px.png'
import "../components/error.css"
function Error() {

    return (
      <>
    <div class="container-fluid">
    <img src={Bg} class="image-fluid text-white hello" alt="" width="10%" height="100px"/>
    <h1 style = {{marginTop :"30px"}}>404 Page Not Found</h1>
    
    </div>
      </>
    );
}

export default Error;