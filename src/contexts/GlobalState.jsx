import { globalContext } from "./globalContext"
import { projects } from "../constants/projects"
import {useState} from "react"

export const GlobalState = ({children}) => {
    const [projectCard] = useState(projects)

    const context = {
        projectCard
    }
    
    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}