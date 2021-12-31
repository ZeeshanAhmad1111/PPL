import React, { useState } from 'react';
import Feed from "./Welcome";
import Welcome from './Welcome';

const HomeContentLeft = () => {

    const[isLogin, setIsLogin] = useState(false);

    return (
        <div>   
            {isLogin?<Welcome />:<Feed />}
        </div>
    )
}

export default HomeContentLeft
