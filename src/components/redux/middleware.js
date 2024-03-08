import { fakeApi } from "../utils/FakeApi";
import { getItemsSucceeded, getItemsFailed, getUsersSucceeded, getUsersFailed } from './actions';

export const apiMiddleware = (store) => (next) => (action) => {
    if (action.type === 'items/get') {
        fakeApi.getProducts().then((res) => {
            store.dispatch(getItemsSucceeded(res));
        }).catch(err => {
            store.dispatch(getItemsFailed(err));
        })
    }
    if (action.type === 'users/get') {
        fakeApi.getUsers().then((res) => {
            store.dispatch(getUsersSucceeded(res));
        }).catch(err => {
            store.dispatch(getUsersFailed(err));
        })
    }
    return next(action);
}