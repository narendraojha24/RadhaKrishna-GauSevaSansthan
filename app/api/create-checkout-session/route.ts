import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
})

export async function POST(req: Request) {
  const { amount, name, email, phone } = await req.json()

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "upi"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Donation",
              description: `Donation by ${name}`,
            },
            unit_amount: Number(amount) * 100, // Stripe expects amount in paise
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      metadata: { name, phone },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-success`,
cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-cancel`,
    })

    return NextResponse.json({ id: session.id })
  } catch (err) {
    return NextResponse.json({ error: (err as any).message }, { status: 500 })
  }
}