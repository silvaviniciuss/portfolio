import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Header } from "../components/Header/Header"


export const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}