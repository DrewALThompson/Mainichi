export function fetchUser(json){
    return (dispatch) => { 
        fetch('http://localhost:3000/sessions', {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(json)
        })
        .then(res => res.json())
        .then(user => dispatch({
            type: 'FETCH_USER',
            payload: user
        }))
    }
}