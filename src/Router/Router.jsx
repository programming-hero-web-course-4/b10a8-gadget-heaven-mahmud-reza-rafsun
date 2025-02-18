import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

let router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>
    }
])

export default router;