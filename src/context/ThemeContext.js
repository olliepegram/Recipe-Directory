import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload };
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload };
        default:
            return state;
    }
};

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#e5989b',
        mode: 'light',
    });

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color });
    };

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode });
    };

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Provider allows us to declare the data that we want available throughout our component tree.
// Consumer allows any component win the component tree that needs the data to be able to subscribe to it.
