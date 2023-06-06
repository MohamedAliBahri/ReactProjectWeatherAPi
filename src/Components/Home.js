import React from 'react';
import { Link } from 'react-router-dom';

function Home() 
{
return(
<div  > 
    <img src={require("../assets/nature.jpg" )}  height={725} width={1530} />
    <div className="home-content">
        <p>Welcome to our weather application</p>
        {/* <Link to="/weather" className="link">Go back to  home </Link>   */}
            </div>
    </div>
)
}

export default Home;