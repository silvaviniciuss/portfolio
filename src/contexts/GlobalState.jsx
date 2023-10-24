import { globalContext } from "./globalContext"

export const GlobalState = ({children}) => {
    return (
        <globalContext.Provider>
            {children}
        </globalContext.Provider>
    )
}