import { Component } from "react";
import Button from './Components/Button/Button'
import Card from './Components/Card/Card'
import Wrapper from "./Ui/Wrapper/Wrapper";
import classes from './Ui/Global.module.css'



class App extends Component{




render(){
    return (
      <Card>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>

      </Card>
    )
}

}
export default App