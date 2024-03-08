const FakeApiRequest = {
    baseUrl: "https://fakestoreapi.com",
    headers: {
      "Content-Type": "application/json"
    }
  };

class FakeApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _request(url, reqObj, errMsg) {
        return fetch(url, reqObj).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((err) => {
                    return Promise.reject(`${errMsg} ${err.message}`);
                })                
            }    
        })
    }

    //------------- Products part -------------------

    getProducts() {
        return this._request(`${this._baseUrl}/products`, {
            headers: this._headers,
            method: "GET"
        }, 'Error loading products from server.');
    }

    //------------- Users part -------------------

    getUsers() {
        return this._request(`${this._baseUrl}/users`, {
            headers: this._headers,
            method: "GET"
        }, 'Error loading users from server.');
    }
}

export const fakeApi = new FakeApi(FakeApiRequest);