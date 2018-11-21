import React from "react";

const Hourtime=({aff})=>{
    return (<div>{aff.h<10? '0'+aff.h+' :' : aff.h+' :'}</div>)
}
export default Hourtime;