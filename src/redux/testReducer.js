const initialState = {
    test: 'test value',
    messages:['something']
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEST':
            return Object.assign({}, state, {
                test: action.test
            });
        default:
            return state;
    }
};

export default testReducer;
