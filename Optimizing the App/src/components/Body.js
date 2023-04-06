import HeaderSection from "./Header/Header"
import RestaurantCardsContainer from "./Main Cards/CardsContainer"
import { createBrowserRouter } from "react-router-dom"
import Contact from "../components/Contact/Contact"
import Error from "../components/Error/Error"
import { Outlet } from "react-router-dom"
import { Suspense, lazy } from "react"
import ShimmerUI from "./Main Cards/ShimmerUI"

const Body = () => (
    <>
    <HeaderSection></HeaderSection>
    <Outlet></Outlet>
    </>
)

const About = lazy(() => import("../components/About/About") )
const RestaurantMenu = lazy(() => import("./Restaurant Menu/RestaurantMenu") )


const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <Body/> ,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element : <RestaurantCardsContainer/>
            },
            {
                path: "/about",
                element : (
                    <Suspense fallback={<ShimmerUI/>}>
                        <About/>
                    </Suspense>
                )
            },
            {
                path: "/contact",
                element : <Contact/>
            },
            {
                path: "/restaurant/:resid",
                element: (
                    <Suspense fallback={<h1>Loading Menu...</h1>}>
                        <RestaurantMenu/>
                    </Suspense>
                )
            }
        ]
    }
])

export default appRouter