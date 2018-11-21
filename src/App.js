
import React from "react";


import './App.css';
import Hourtime from "./components/hour";
import Mintime from "./components/min";
import Secondetime from "./components/seconde";
import Chifftime from "./components/hourchiff";
import Start from "./components/bouton/bouton";
import Reset from "./components/bouton/reset";
const convert=(time)=>{
 let hour=parseInt(time/3600000);
  let minute=parseInt(time/60000)-parseInt(time/3600000)*60;
 let seconde=parseInt(time/1000)-parseInt(time/60000)*60;
var converted={
  h:hour,
  m:minute,
  s:seconde,
}
 return(converted)
  
 }
 const timer=0
 
class App extends React.Component {
 
  constructor() {
    super()
    this.state = {
    time:timer,
    startButton:false,
    }
  setInterval(
    () => {
      if (this.state.startButton===true)
            this.setState({
        time: this.state.time + 1000
      })
    },
    1000
    )
  
  }

  buttonStart=()=>{
    this.setState({startButton: !this.state.startButton})
}
buttonReset=()=>{
  this.setState({time: timer,
    startButton:false
 })
}


  render(){
    
    var conv=convert(this.state.time)
    return (
      <div className="card bg-dark">
      <h1 className="boutons">Sabri's Timer</h1>
      <div className="contain">
            <div className="contenu">
                <Hourtime aff={conv} />      
                <Mintime aff={conv}/>      
                <Secondetime aff={conv}/>      
            </div>
            
            <Chifftime/>
            </div>
            <div className="boutons">
        <Start click={this.buttonStart}/>
        <Reset click={this.buttonReset}/>
        </div>
          
     
      
       
      </div>
    )

      
     
};
}

export default App;

        
