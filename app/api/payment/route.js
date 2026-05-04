import Razorpay from "razorpay";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const order = await razorpay.orders.create({
        amount: 100, // ₹1 (paise)      
        currency: "INR",
    });

    return Response.json(order);
  } catch (err) {
    console.error("Payment Error:", err);
    return new Response("Error creating order", { status: 500 });
  }
}