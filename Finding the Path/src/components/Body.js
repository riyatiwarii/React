import HeaderSection from "./Header/Header"
import RestaurantCardsContainer from "./Main Cards/CardsContainer"
import { createBrowserRouter } from "react-router-dom"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Error from "../components/Error/Error"
import { Outlet } from "react-router-dom"
import MenuCard from "../components/Menu Card/MenuCard"

const Body = () => (
    <>
    <HeaderSection></HeaderSection>
    <Outlet></Outlet>
    </>
)

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
                element : <About/>
            },
            {
                path: "/contact",
                element : <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <MenuCard/>
            }
        ]
    }
])

export default appRouter