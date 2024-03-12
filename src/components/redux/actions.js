import { GET_ITEMS, SET_SEARCH_STRING_FOR_ITEMS, GET_ITEMS_SUCCEEDED, GET_ITEMS_FAILED, GET_USERS, GET_USERS_SUCCEEDED, GET_USERS_FAILED, INIT_ALL } from './actionNames';

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

export const setSearchString = (searchString) => {
    return {
        type: SET_SEARCH_STRING_FOR_ITEMS,
        payload: searchString
    }
}

export const getItemsSucceeded = (payload) => {
    return {
        type: GET_ITEMS_SUCCEEDED,
        payload
    }
}

export const getItemsFailed = (err) => {
    return {
        type: GET_ITEMS_FAILED,
        payload: err
    }
}

export const getUsers = () => {
    return {
        type: GET_USERS
    }
}

export const getUsersSucceeded = (payload) => {
    return {
        type: GET_USERS_SUCCEEDED,
        payload
    }
}

export const getUsersFailed = (err) => {
    return {
        type: GET_USERS_FAILED,
        payload: err
    }
}

export const initAll = () => {
    return {
        type: INIT_ALL,
    }
}