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


  



render(){
    return (
      <Wrapper>
        <Card className={classes.firstcard}>
          <Card className={classes.inputCard}></Card>
          <Card className={classes.numberCard}>
            <Card className={classes.firstNumberCard}>
            <Button className={classes.clickNumber}>1</Button>
            <Button className={classes.clickNumber}>2</Button>
            <Button className={classes.clickNumber}>3</Button>
            <Button className={classes.clickNumber}>4</Button>
            <Button className={classes.clickNumber}>5</Button>
            <Button className={classes.clickNumber}>6</Button>
            <Button className={classes.clickNumber}>7</Button>
            <Button className={classes.clickNumber}>8</Button>
            <Button className={classes.clickNumber}>9</Button>
            <Button className={classes.clickNumber}>0</Button>
            <Button className={classes.clickNumber}>00</Button>
            <Button className={classes.clickNumber}>.</Button>
            </Card>
            <Card className={classes.secondNumberCard}>
            <Button className={classes.clickplas} >*</Button>
            <Button className={classes.clickplas} >/</Button>
            <Button className={classes.clickplas} >+</Button>
            <Button className={classes.clickplas} >-</Button>
            <Button className={classes.clickplas} >Del</Button>
            <Button className={classes.clickplas} >CC</Button>
            <Button className={classes.clickres} >=</Button>
            </Card>
            </Card>
       </Card>
      </Wrapper>
    
    )
}

}
export default App