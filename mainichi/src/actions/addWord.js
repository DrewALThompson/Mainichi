export function addWord(json){
    return (dispatch) => { 
        fetch('http://localhost:3000/users/words/new', {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(json)
        })
        .then(res => res.json())
        .then(user => dispatch({
            type: 'ADD_WORD',
            payload: user
        }))
    }
}