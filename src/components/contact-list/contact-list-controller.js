class ContactListController {
    constructor(contacts) {
        this.contacts = contacts.data;
    }
}

export default ['contacts', ContactListController];
