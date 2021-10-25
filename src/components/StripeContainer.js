import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Jmu9oGk4psfKihojPzmrkCyuNg4vyftKL8P1WAYs8lCoY5Tbxpy7rIITX8vLXzy1mEZMqYg02kZQfR0eCVJPRKD005UtA15uk"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
    }
