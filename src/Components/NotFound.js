import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() 
{
return(
<div  > 
    <img src={require("../assets/sunset.jpg" )}  height={725} width={1530} />
    <div className="content">
        <h1>NOT FOUND</h1>
        <Link to="/weather" className="link">Go back to  home </Link>  
            </div>
    </div>
)
}

export default NotFound;