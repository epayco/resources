import React, {Component} from 'react';
import '../App.css';


export default class Checkout extends Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = process.env.REACT_APP_API_URL
        script.async = true;
    
        document.body.appendChild(script);
    }
    openchekout = e =>{
        e.preventDefault();
        var handler = window.ePayco.checkout.configure({
            key: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
            test: false
        });
        let data = {
            name: "Vestido Mujer Primavera",
            description: "Vestido Mujer Primavera",
            invoice: "1234",
            currency: "cop",
            amount: '119000',
            tax_base: '100000',
            tax:  '19000',
            country: "co",
            lang: "en",
            external: "false",
            extra1: "extra1",
            extra2: "extra2",
            extra3: "extra3",
            confirmation: "http://confirmacion.php",
            response: "http://payco.co",
            name_billing: 'john doe',
            address_billing: "Carrera 19 numero 14 91",
            type_doc_billing: "cc",
            mobilephone_billing: "3050000000",
            number_doc_billing: "100000000",
            email_billing:'example@mail.co'
        }
        handler.open(data);
    }

    render(){
        return(
            <React.Fragment> 
                <div className="loader-container">
                    <div className="loading"></div>
                </div>
                <p style={{textAlign:"center"}} className="epayco-title">
                    <button id="btn_epayco" href="#" onClick={this.openchekout}>
                        <img className="btn-epayco"    src="https://multimedia.epayco.co/epayco-landing/btns/Boton-epayco-color1.png" alt="botón epayco" />
                    </button>
                </p> 
            </React.Fragment>
        )
    } 
}



