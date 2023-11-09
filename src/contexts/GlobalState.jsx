import { useState } from "react"
import {globalContext} from "./globalContext"

export const GlobalState = ({children}) => {
    const [hiddenMenu, setHiddenMenu] = useState(false)

    const context = {
        hiddenMenu,
        setHiddenMenu
    }
    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}