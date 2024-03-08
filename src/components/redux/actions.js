export const getItems = () => {
    return {
        type: 'items/get'
    }
}

export const setSearchString = (searchString) => {
    return {
        type: 'items/setSearchString',
        payload: searchString
    }
}

export const getItemsSucceeded = (payload) => {
    return {
        type: 'items/getSucceeded',
        payload
    }
}

export const getItemsFailed = (err) => {
    return {
        type: 'items/getFailed',
        payload: err
    }
}

export const getUsers = () => {
    return {
        type: 'users/get'
    }
}

export const getUsersSucceeded = (payload) => {
    return {
        type: 'users/getSucceeded',
        payload
    }
}

export const getUsersFailed = (err) => {
    return {
        type: 'users/getFailed',
        payload: err
    }
}