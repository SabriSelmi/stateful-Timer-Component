import React from "react";

const Mintime =({aff})=>{
    return (<div>{aff.m<10? '0'+aff.m+' :' : aff.m+' :'}</div>)
}
export default Mintime;