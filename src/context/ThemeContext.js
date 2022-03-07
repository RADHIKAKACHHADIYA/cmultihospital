import * as ActionType from "./ActionType";
import ThemeRaducer from "./reducer/Theme.reducer";

const { useReducer, createContext} = require("react");

const ThemeContext = createContext();

const intialvalue = {
    theme: "light"
}

export const ThemeProvider = ({children}) => {
    const [state , dispatch] = useReducer(ThemeRaducer , intialvalue)

   console.log(state);
    const toggleTheme = (theme) => {
    let newTheme = theme === 'light' ?  ' drak' : 'light';

    dispatch ({Type:ActionType.TOGGLE_THEME , payload: newTheme})
    }

    return(
        <ThemeContext.Provider
            value={{
                ...state,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
