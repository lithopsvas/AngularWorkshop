class ContactDetailController {
    constructor($stateParams, contactsService, contact, $state) {
        this._id = $stateParams.id;
        this._contactsService = contactsService;
        this.contact = contact.data;
        this.state = $state;
    }

    onFormSubmit() {
        this._contactsService.updateUser(this.contact)
            .then(newContact => {
                this.contact = newContact.data;
                this.state.go('^.contactList');
            });

    }
}

export default [
    '$stateParams', 'contactsService', 'contact', '$state',
    ContactDetailController
];
