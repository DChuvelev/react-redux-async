const initStore = {
    data: [],
    loading: false,
    error: false
}

export const itemsReducer = (state = {...initStore, storeType: 'products', searchString: '' }, action) => {
    switch (action.type) {
        case 'items/get':
            return {...state, loading: true}
        case 'items/getSucceeded':
            return {...state, data: action.payload, loading: false};
        case 'items/getFailed':
            return {...state, loading: false, error: true};
        case 'items/setSearchString':
            return {...state, searchString: action.payload};
        default:
            return state;
    }
    
}

export const usersReducer = (state = {...initStore, storeType: 'users' }, action) => {
    switch (action.type) {
        case 'users/get':
            return {...state, loading: true};
        case 'users/getSucceeded':
            return {...state, data: action.payload, loading: false};
        case 'users/getFailed':
            return {...state, loading: false, error: true};   
        default:
            return state;
    }
}