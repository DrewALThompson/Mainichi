export function fetchUser(json){
    return (dispatch) => {
        fetch('http://localhost:3000')
        .then(res => res.json())
        .then(user => dispatch({
            type: 'FETCH_USER',
            payload: user
        }))
    }
}