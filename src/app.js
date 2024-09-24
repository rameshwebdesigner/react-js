import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client"
import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ResturantMenu } from "./components/ResturantMenu";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>),
            },
            {
                path: "/restaurants/:resId",
                element: <ResturantMenu />,
            }
        ]
    }

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

