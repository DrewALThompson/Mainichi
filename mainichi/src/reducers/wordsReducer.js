export default function wordsReducer (state = { user: {}, words: []}, action){
    switch (action.type){
        case 'FETCH_USERWORDS':
            return {...state, userwords: action.payload}
        case 'FETCH_WORDS':
            return {...state, words: action.payload}
        case 'ADD_WORD':
            return state
        default:
            return state
    }
}