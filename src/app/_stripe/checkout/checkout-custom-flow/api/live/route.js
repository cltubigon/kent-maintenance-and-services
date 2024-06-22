import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY_LIVE)

export const POST = async (req) => {
  const { intentId } = await req.json()

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(intentId)
    return NextResponse.json({paymentIntent})
  } catch (err) {
    return NextResponse.json({ err })
  }
}