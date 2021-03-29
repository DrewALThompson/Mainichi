export function fetchWords(json){
    return (dispatch) => {
        fetch('http://localhost:3000/words')
        .then(res => res.json())
        .then(json => dispatch({
            type: 'SET_WORDS',
            payload: json
        }))
    }
}