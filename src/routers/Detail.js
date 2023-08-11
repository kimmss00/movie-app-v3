import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Detail(){
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    useEffect(()=>{
        if(location.state === null){
            navigate("/");
        }
    })
    if(location.state){
        return (
            <div>Hello: {location.state.title}</div>
        );
    }
    
}

export default Detail;