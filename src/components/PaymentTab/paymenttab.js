import React from "react";
import Card from "react-credit-cards";
import './paymenttab.css'
import jwt_decode from 'jwt-decode'

import {
    formatCreditCardNumber,
    formatcvc,
    formatExpirationDate,
    formatFormData
} from "./utils";
import "react-credit-cards/es/styles-compiled.css";

export default class App extends React.Component {

    state = {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        formData: "",
        token: "",
    }

    componentDidMount() {
        // const tok = sessionStorage.getItem("authToken")
        // const decoded = jwt_decode(tok)
        // this.setState({ token: decoded.user })
    }

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatcvc(target.value);
        }

        this.setState({ [target.name]: target.value });
    };


    render() {
        const { name, number, expiry, cvc, focused, issuer, formData, token } = this.state;

        return (
            
                <div className="paym">
                    <div className="row">


                        <div key="Payment">
                            <div className="App-payment cl-1">
                                <p className="pPayment">Enter Credit card details</p>
                                <Card
                                    number={number}
                                    name={name}
                                    expiry={expiry}
                                    cvc={cvc}
                                    focused={focused}
                                    callback={this.handleCallback}
                                />
                                <form className="credit-form" ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="number"
                                            className="frm-ctrl"
                                            placeholder="Card Number"
                                            pattern="[\d| ]{16,22}"
                                            required
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="frm-ctrl"
                                            placeholder="Name"
                                            required
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="expiry"
                                            className="frm-ctrl"
                                            placeholder="Valid Thru"
                                            pattern="\d\d/\d\d"
                                            required
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="cvc"
                                            className="frm-ctrl cvc"
                                            placeholder="cvc"
                                            pattern="\d{3,4}"
                                            required
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                    <input type="hidden" name="issuer" value={issuer} />
                                    <div className="">
                                        <button onClick={e => this.moveToTicketPage(e)} className="btn btn-danger"><a href="http://localhost:3001/final.html">PAY</a></button>

                                      
                        
                                        
 

                                    </div>
                                </form>
                            </div>
                        </div>



                        
                    </div>
                </div>
            


        );
    }
}
