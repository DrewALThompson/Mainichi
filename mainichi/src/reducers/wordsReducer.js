export default function wordsReducer (state = { user: {}, words: ['monkey', 'monkey'], index: 0}, action){
    switch (action.type){
        case 'SET_USERWORDS':
            return {...state, userwords: action.payload}
        case 'SET_WORDS':
            return {...state, words: action.payload}
        case 'ADD_WORD':
            return {...state, words: action.payload }
        case 'SET_INDEX':
            return {...state, index: action.payload}
        default:
            return state
    }
}