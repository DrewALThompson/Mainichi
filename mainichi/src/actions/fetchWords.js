export function fetchWords(json){
    return (dispatch) => {
        fetch('http://localhost:3000')
        .then(res => res.json())
        .then(json => dispatch({
            type: 'FETCH_WORDS',
            payload: json
        }))
    }
}