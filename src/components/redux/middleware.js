import { fakeApi } from "../utils/FakeApi";
import { GET_ITEMS, GET_USERS, INIT_ALL } from './actionNames';
import { getItemsSucceeded, getItemsFailed, getUsersSucceeded, getUsersFailed, getItems, getUsers } from './actions';

export const apiMiddleware = (store) => (next) => (action) => {
    if (action.type === GET_ITEMS) {
        fakeApi.getProducts().then((res) => {
            store.dispatch(getItemsSucceeded(res));
        }).catch(err => {
            store.dispatch(getItemsFailed(err));
        })
    }
    if (action.type === GET_USERS) {
        fakeApi.getUsers().then((res) => {
            store.dispatch(getUsersSucceeded(res));
        }).catch(err => {
            store.dispatch(getUsersFailed(err));
        })
    }
    if (action.type === INIT_ALL) {
        store.dispatch(getItems());
        store.dispatch(getUsers());
    }
    return next(action);
}