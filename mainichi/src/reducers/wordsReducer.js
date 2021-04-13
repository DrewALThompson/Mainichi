export default function wordsReducer (state = { user: null, words: null, message: null, index: 0, userIndex: 0}, action){
    switch (action.type){
        case 'SET_USERWORDS':
            return {...state, userwords: action.payload}
        case 'SET_WORDS':
            return {...state, words: action.payload}
        case 'ADD_WORD':
            return {...state, message: action.payload.message, user: {...state.user, userwords: action.payload.userwords}}
        case 'SET_INDEX':
            return {...state, index: action.payload}
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'RESET_WORDS':
            return {...state, user: {...state.user, userwords: action.payload.userwords}}
        default:
            return state
    }
}