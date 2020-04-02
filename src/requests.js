const hostName = 'http://192.168.0.155:2222';

function formRequestOptions(authenticatedRequest, method = 'GET', body) {
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    };

    if (authenticatedRequest === true) {
        requestOptions.headers['x-access-token'] = localStorage.getItem('uniqueToken');
    }

    if (body) {
        requestOptions.body = JSON.stringify(body);
    }
    
    return requestOptions;
}

export const loginRequest = (username, password) => {
    return fetch(hostName + '/authenticate', formRequestOptions(false, 'POST', {
        mail: username,
        password: password
    })).then(response => response.json());
}

export const getPostsRequest = () => {
    return fetch(hostName + '/api/posts', formRequestOptions(true)).then(response => response.json());
}

export const getUserRequest = () => {
    return fetch(hostName + '/api/user', formRequestOptions(true)).then(response => response.json());
}

export const getPostRequest = (x) => {
    return fetch(hostName + '/api/posts/' + x, formRequestOptions(true)).then(response => response.json());
} 

export const addPostRequest = (title, description, image) => {
    return fetch(hostName + '/api/posts', formRequestOptions(true, 'POST', {
        title: title,
        description: description,
        image: image
    }))
    .then(response => response.json());
}