import React, { useEffect, useState } from "react";

export default function Loader(){
    const [token , setToken ] = useState("");
    useEffect(()=>{
        setToken(localStorage.getItem("token"));
    }, []);
    return <>
            {token ? 
            false
            : <div className="loader">
                <div></div>
            </div>}
        </>;
}