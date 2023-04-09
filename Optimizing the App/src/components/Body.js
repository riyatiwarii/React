import React, {useState, useContext} from "react"
import HeaderSection from "./Header/Header"
import RestaurantCardsContainer from "./Main Cards/CardsContainer"
import { createBrowserRouter } from "react-router-dom"
import Contact from "../components/Contact/Contact"
import Error from "../components/Error/Error"
import { Outlet } from "react-router-dom"
import { Suspense, lazy } from "react"
import ShimmerUI from "./Main Cards/ShimmerUI"
import AccordianContainer from "../components/AccordianContainer/AccordianContainer"
import userContext from "../helpers/userContext"

const Body = () => {

    const {user} = useContext(userContext)
    const [user1, setUser1] = useState(user)
    
    return (
    <>
    <userContext.Provider value={{user1: user1, setUser1: setUser1}}>
    <HeaderSection></HeaderSection>
    <Outlet></Outlet>
    </userContext.Provider>
    </>
    )

}

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
            },
            {
                path: "/offers",
                element : <AccordianContainer/>
            },
        ]
    }
])

export default appRouter