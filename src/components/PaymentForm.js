import React, { useState } from 'react'
import { CardElemnt, useElements, useStripe} from "@stripe/react-stripe-js"
import axios from "axios";
import "./PaymentForm.css";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}
export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handelSubmit = async (e) =>{
        e.preventDefault()

        const [error, paymentMethod] = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElemnt)
        })
        if(!error) {
            try{
                const {id} = paymentMethod
                const response = await axios.post("https:http://localhost:4000/payment" ,{
                    amount:10000,
                    id
                })

                if(response.data.success){
                    console.log("Saccusfaul.payment")
                    setSuccess(true)
                }
            } catch (error){
                console.log("Error".error)
            }
        }
    }
    return (
        <>
           {!success ? 
        <form onSubmit={handelSubmit}>
        <fieldset className="FormGroup">
            <div className="FormRow">
                <CardElemnt options={CARD_OPTIONS} />
            </div>
        </fieldset>
        <button>CHOOSE PLAN</button>
        </form>
        :
        <div className="payment-mathod">
            <h2>YOU HAVE CHOOSE THIS PLAN</h2>
        </div>
        } 
        </>
    )
}

