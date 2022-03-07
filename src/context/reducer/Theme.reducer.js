import * as ActionTypes from '../ActionType';

const ThemeRaducer = (state , action) => {
    console.log(state)
    switch (action.type) {
        case ActionTypes.TOGGLE_THEME :
            return {
                ...state,
                theme: action.payload
            }
        }
}

export default ThemeRaducer;