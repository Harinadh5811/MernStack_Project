var initialState = [null,0]

function AuthenticationReducer (state=initialState, action) {
    switch(action.type) {
        case 'login':
            state[0] = action.data.un;
            state[1] = action.data.role;
            return state;
        case 'logout':
            state[0] = null;
            state[1] = 0;
            return state;
        default:
            return state;
    }
}

export default AuthenticationReducer