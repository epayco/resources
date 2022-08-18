import React, {Fragment} from 'react';
import Succes from './components/Succes';

function App(){
    return (
      <Fragment>
        <div style={{textAlign:"center"}} >
            <h1>
                Welcome to ePayco!
            </h1>
            <img width="200" alt="Epayco Logo" src="https://multimedia.epayco.co/epayco-landing/btns/epayco-logo-fondo-oscuro.png" />
        </div>
          < Succes/>
      </Fragment>
    )
}

export default App;
