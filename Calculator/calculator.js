class Calcul extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expression: [],
      expToDisplay : '0'
    }
    this.setExpression =  this.setExpression.bind(this);
    this.clear = this.clear.bind(this);
    this.calculate = this.calculate.bind(this);
  
  } 
  
  setExpression(event){
    var tab = [...this.state.expression];
    
    if( (tab[ tab.length - 1 ] === '.' && event.target.value !== '.') ||
        (tab[ tab.length - 1 ] !== '.')||(this.state.expToDisplay.test( /^\d+\.\d+\./g) == false)
      )
      tab.push(event.target.value);
    
    this.setState({
        expression: tab,
        expToDisplay: tab.join('')
    }); 
  }
  
   calculate() {
     try{
         const result = eval(this.state.expToDisplay);
         this.setState({
           expToDisplay: result,
           expression : [result]
         });
     }
     catch(e){
           this.setState({
                expToDisplay: "error"
            });
         }                  
     
   }
    
  
  clear(){
    this.setState({
      expToDisplay: '0',
      expression: []
    });
  }
  
  
  render(){
    return(
      <div className="calculatrice">
        <input type="text" id="display" value={this.state.expToDisplay} />
        
        <button id="clear" onClick={this.clear}>AC</button>
        <button id="divide" class="couleur1" onClick={this.setExpression} value="/">/</button>
        <button id="multiply" class="couleur1" onClick={this.setExpression} value="*">*</button>
        <button id="seven" class="couleur" onClick={this.setExpression} value="7">7</button>
        <button id="eight" class="couleur"  onClick={this.setExpression} value="8">8</button>
        <button id="nine" class="couleur"  onClick={this.setExpression} value="9">9</button>
        <button id="subtract" class="couleur1"  onClick={this.setExpression} value="-">-</button>
        <button id="four" class="couleur"  onClick={this.setExpression} value="4">4</button>
        <button id="five" class="couleur"  onClick={this.setExpression} value="5">5</button>
        <button id="six" class="couleur"  onClick={this.setExpression} value="6">6</button>
        <button id="add" class="couleur1"  onClick={this.setExpression} value="+">+</button>
        <button  id="one" class="couleur"  onClick={this.setExpression} value="1">1</button>
        <button id="two" class="couleur"  onClick={this.setExpression} value="2">2</button>
        <button id="three" class="couleur"  onClick={this.setExpression} value="3">3</button>
        <button id="equals" class="couleur1"  onClick={this.calculate} value="=">=</button>
        <button id="zero" class="couleur"  onClick={this.setExpression} value="0">0</button>
        <button id="decimal" class="couleur"  onClick={this.setExpression} value=".">.</button>

      </div>
    );
  }
};


ReactDOM.render(<Calcul />, document.getElementById('calculatrice'));
