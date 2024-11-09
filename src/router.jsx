import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CheckoutPage from "./page/Checkout.page";
import PaymentPage from "./page/Payment.page";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: "/checkout",
                element: <CheckoutPage/>
            },
            {
                path: "/payment",
                element: <PaymentPage/>
            }
        ]
    }
])

export default router