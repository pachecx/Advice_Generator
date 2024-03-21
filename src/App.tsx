import { Container, Button } from "./App";
import icon from './assets/icon-dice.svg';
import divMobile from './assets/pattern-divider-mobile.svg';
import { api } from "./service/api.service";
import { useState, useEffect } from "react";


export const App = () => {

  const [advice, setAdvice] = useState<any>({});

  const Refresh = async() =>{
    try {
      const response = await api.get(`/advice`)
      
      const data = response.data.slip;
      console.log(data);
      setAdvice(data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
    Refresh()
  }, [])

  return (
    <Container>
      <div className="card">
        <h1>ADVICE <span>#{advice.id}</span></h1>
        {!advice.advice ? (
          <p>Loading...</p>
        ):(
          <p>
            {advice.advice}
          </p>
        )}
        
        <div className="line">
          <img
            className="imgLine" 
            src={divMobile}
          /> 
        </div>
        <Button onClick={Refresh}>
          <img
            className="imgIcon"
            src={icon}
          />
        </Button>
      </div>
    </Container>
  )
}
