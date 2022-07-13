import { Component } from "react";
import Button from './Components/Button/Button'
import Card from './Components/Card/Card'
import Wrapper from "./Ui/Wrapper/Wrapper";
import classes from './Ui/Global.module.css'



class App extends Component{
   constructor(props){
    super(props);
    this.state ={
         number: ''
    }
   }


resaltElement = (el) =>{
  this.setState({
    number:  this.state.number + el.target.innerHTML
  })
}

resaltInput = ()=>{
  this.setState({
    number:eval(this.state.number)
  })
}

clearElement = ()=>{
  this.setState({
    number : ''
  })
}

deleteElement = () =>{
  this.setState({
    number:this.state.number.substring(0,this.state.number.length-1)
  })
}



render(){
    return (
      <Wrapper>
        <Card className={classes.firstcard}>
          <Card className={classes.inputCard}>{this.state.number}</Card>
          <Card className={classes.numberCard}>
            <Card className={classes.firstNumberCard}>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>1</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>2</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>3</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>4</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>5</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>6</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>7</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>8</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>9</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>0</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>00</Button>
            <Button onClick={this.resaltElement} className={classes.clickNumber}>.</Button>
            </Card>
            <Card className={classes.secondNumberCard}>
            <Button onClick={this.resaltElement} className={classes.clickplas} >*</Button>
            <Button onClick={this.resaltElement} className={classes.clickplas} >/</Button>
            <Button onClick={this.resaltElement} className={classes.clickplas} >+</Button>
            <Button onClick={this.resaltElement} className={classes.clickplas} >-</Button>
            <Button onClick={this.deleteElement} className={classes.clickplas} >Del</Button>
            <Button onClick={this.clearElement } className={classes.clickplas} >CC</Button>
            <Button onClick={this.resaltInput} className={classes.clickres} >=</Button>
            </Card>
            </Card>
       </Card>
      </Wrapper>
    
    )
}

}
export default App