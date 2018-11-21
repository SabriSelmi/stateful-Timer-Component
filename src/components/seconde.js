import React from "react";


    const Secondetime=({aff})=>{
        return (<div>{aff.s<10? '0'+aff.s : aff.s}</div>)
    }

export default Secondetime;