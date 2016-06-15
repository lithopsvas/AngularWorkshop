function filter() {

    // In the return function, we must pass in a single parameter which will be the data we will work on.
    // We have the ability to support multiple other parameters that can be passed into the filter optionally
    return function (myString) {
        if (typeof myString !== 'string')
            return myString;

        return myString.charAt(0).toUpperCase() + myString.substring(1);

    }
}
export default [filter];
