class RoboController {
    constructor() {
        //this.url = 'https://robohash.org/' + this.email;
    }

    image() {
        console.log("this.email");
        console.log(this.email);

        return 'https://robohash.org/' + this.email;
    }

    get url() {
        return 'https://robohash.org/' + this.email;
    }
}
export default [RoboController]
