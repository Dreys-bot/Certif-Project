var countId;
class Horloge extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      break_length: 5,
      session_length: 25,
      minutes_session: 25,
      secondes_session : 60,
      nom : 'Session', 
      timeToString: ' 25 : 00', 
      on: false, 
      minutes_break: 5,
      secondes_break:60, 
      MINUT_session: 24,
      MINUT_break:5
    }
    this.increment = this.increment.bind(this);
    this.increment_break = this.increment_break.bind(this);
    this.decrement_break = this.decrement_break.bind(this);
    this.decrement = this.decrement.bind(this);
    this.Count = this.Count.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  increment() {
    if(!this.state.on){
      let newtime = this.state.minutes_session + 1;
      if(this.state.session_length < 60){
        this.setState(state => ({
          minutes_session: newtime,
          timeToString: newtime + ': 00',
          session_length: newtime,
          MINUT_session:newtime
        }));
      }
  }
  }
  
  increment_break() {
    if(!this.state.on)
      if(this.state.session_length <60){
        this.setState(state => ({
          break_length: state.break_length + 1,
          minutes_break: state.break_length +1,
          MINUT_break: state.break_length +1
        }));
      }
  }
  
 decrement() {
   if(!this.state.on){
     let newtime = this.state.minutes_session - 1; 
      if(this.state.session_length >1){
        this.setState(state => ({
          session_length: newtime,
           minutes_session: newtime,
           MINUT_session: newtime,
           timeToString: newtime + ': 00'
        }));
      }
   }
  }
  
  decrement_break() {
    if(!this.state.on)
      if(this.state.break_length >1){
        this.setState(state => ({
          break_length: state.break_length - 1,
          minutes_break: state.break_length -1,
          MINUT_break:state.break_length -1
        }));
      }
  }
  
  //***CountDown***//
  
  Count = () => {
       
        let {minutes_session, secondes_session, MINUT_break,secondes_break,MINUT_session, minutes_break, timeToString, on, nom} = this.state;
    
        const that = this;
     
        on = (on === false) ? true : false;
        
        if(on){
         
           countId = setInterval(function() {
             if(nom == 'Session'){
              
               
              secondes_session =((secondes_session === 0)? 59: secondes_session - 1);

              minutes_session -= (secondes_session == 59) ? 1 :0; 
              timeToString = ((minutes_session<10) ? '0' + minutes_session : minutes_session) + ':' + ((secondes_session<10) ? '0' + secondes_session : secondes_session);
               
                minutes_break = MINUT_break;
                nom = (minutes_session == 0 && secondes_session == 0)? 'Break' : 'Session';
             
             }
             else{
               secondes_break =((secondes_break === 0)? 59: secondes_break - 1);

              minutes_break -= (secondes_break == 59) ? 1 :0; 
              timeToString = ((minutes_break<10) ? '0' + minutes_break : minutes_break) + ':' + ((secondes_break<10) ? '0' + secondes_break : secondes_break);
                
                  minutes_session = MINUT_session;  
                  nom = (minutes_break == 0 && secondes_break == 0)? 'Session' : 'Break';
                
             }
             
              that.setState({minutes_break, minutes_session, secondes_session, secondes_break, timeToString, on});
             if((minutes_break == 0 && secondes_break == 0) || (minutes_session == 0 && secondes_session == 0))
               that.setState({nom})
            }, 1000);
        }
         
      else{
        clearInterval(countId);
        this.setState({on});
        }
  }
  
 ///*****reset***/////
  
  reset = () => {
    clearInterval(countId);
    this.setState(state => ({
      break_length: 5,
      session_length: 25,
      minutes_session: 25,
      secondes_session : 60,
      nom : 'Session', 
      timeToString: ' 25 : 00', 
      on: false, 
      minutes_break: 5,
      secondes_break:60
  }));
  }
  
  
  
  
  render(){
    return(
          
     <div className="container">
        <h1>25 + 5 Clock </h1>
        
        <div class="row">
          <div className="break col-sm-6">
            <h2 id="break-label">Break Length</h2>

            <div className="fleche_break">
                  <i id="break-decrement" className="bi bi-arrow-down" 
                    onClick={this.decrement_break} 
                    />
              
                  <span id="break-length">{this.state.break_length}</span>
              
                  <i id="break-increment" className="bi bi-arrow-up" 
                    onClick={this.increment_break}
                    />
              
            </div>
           </div>

           <div className="session col-sm-6">
              <h2 id="session-label" className="titre">Session Length</h2>
             
              <div className="fleche_session ">
                 <i id="session-decrement" className="bi bi-arrow-down" 
                   onClick={this.decrement} 
                   />
                
                <span id="session-length">{this.state.session_length}</span>
                
                <i id="session-increment" className="bi bi-arrow-up" 
                  onClick={this.increment} 
                  />
                
               </div>  
            </div>
        </div>

       <div className="bocal">
           <h2 id="timer-label">{this.state.nom}</h2>
         <span id="time-left">{this.state.timeToString}</span>
       </div>

       <div className="boutton">
         <span id="start_stop">
             <i className="bi bi-caret-right-fill" onClick={this.Count}/>
             <i className="bi bi-pause-fill" onClick = {this.Count}/>
          </span>    
             <i className="bi bi-arrow-clockwise" id="reset" onClick={this.reset}/>
          
       </div>

     
         </div>   
    );  
  }
}
 
ReactDOM.render(<Horloge />, document.getElementById('minuteur'));
