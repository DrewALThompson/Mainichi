export default function wordsReducer (state = { user: null, words: null, index: 0, userIndex: 0}, action){
    switch (action.type){
        case 'SET_USERWORDS':
            return {...state, userwords: action.payload}
        case 'SET_WORDS':
            return {...state, words: action.payload}
        case 'ADD_WORD':
            return {...state, user: action.payload}
        case 'SET_INDEX':
            return {...state, index: action.payload}
        case 'SET_USER':
            return {...state, user: action.payload}
        default:
            return state
    }
}