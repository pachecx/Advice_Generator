import { Container, Button } from "./App";
import icon from './assets/icon-dice.svg';
import divMobile from './assets/pattern-divider-mobile.svg';

export const App = () => {
  return (
    <Container>
      <div className="card">
        <h1>ADVICE <span>#117'</span></h1>

        <p>"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
          it to make a type specimen book."
        </p>
        <div className="line">
          <img 
            src={divMobile}
          /> 
        </div>
        <Button>
          <img
            className="imgIcon"
            src={icon}
          />
        </Button>
      </div>
    </Container>
  )
}
