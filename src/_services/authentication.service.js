import handleResponse from "../helpers/handle-response";

const ENDPOINT = "https://localhost:5001/api";

export const authenticationService = {
    login
}
function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password })
    }

    return fetch(`${ENDPOINT}/Users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        });
}