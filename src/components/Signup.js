import React from "react";


const Signup = () => {

    return(
        <div className="Signup-card">
            <p>Welcome back! 👋</p>
<form onSubmit={""}>
            <p>Your email</p>

        <input type="email"></input>
        
          <p>Your Password</p>
          <input type="password"></input>
          <button type="submit" id="btn">Submit</button>
            </form>



    </div>
    )
}

export default Signup;