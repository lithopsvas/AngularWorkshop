class HelloService {
    constructor($http, contactsUrl) {
        this._url = contactsUrl;
        this._http = $http;
    }

    fetchContacts() {
        return this._http.get(this._url);
    }

    getUser(id) {
        return this._http.get(this._url + '/' + id);
    }

    updateUser(contact) {
        if (contact.id) {
            console.log("Update");
            return this._http.put(`${this._url}/${contact.id}`, contact);
        }
        else {
            console.log("New contact");
            console.log(contact);
            return this._http.post(this._url, contact);
        }

    }
}
export default ['$http', 'contactsUrl', HelloService];
