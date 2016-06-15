class ContactFormController {
    constructor($stateParams) {
        this.name = $stateParams.name;
        this.surname = $stateParams.surname;
    }
}

export default ['$stateParams',ContactFormController];


