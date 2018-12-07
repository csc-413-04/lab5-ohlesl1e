const initialState = {
    test: 'test value',
    messages:['']
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_MESSAGES':
            return Object.assign({}, state, {
                messages: action.messages,
            });
            break;
        case 'IMPORT_MESSAGE':
            const newMessages = state.messages.slice(0);
            newMessages.unshift(action.message);
            return Object.assign({}, state,{
                messages: newMessages,
            })
            break;
        default:
            return state;
    }
};

export default testReducer;
