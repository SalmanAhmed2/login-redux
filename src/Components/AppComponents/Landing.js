import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from "@material-ui/core";

function Landing() {
    const history=useHistory();
    return (
        <div className="landing">
            <h1>Landing Page</h1>
            <p>Please Login first!</p>
            <Button variant="contained"
                color="primary" onClick={()=>{
                history.push('/login')
            }}>Login</Button>
        </div>
    )
}

export default Landing
