const {Then} = require("@cucumber/cucumber");
const {assert} = require("chai");

Then(/^Input data (.*), (.*), (.*) are equal to the response data from the server$/, function (id, quantity, complete) {
    const responseFromServer = this.context;
    assert.equal(responseFromServer.id, id);
    assert.equal(responseFromServer.quantity, quantity);
    const orderStatusFromServer = responseFromServer.complete.toString().toLowerCase();
    const orderStatusToString = complete.toLowerCase();
    assert.strictEqual(orderStatusToString, orderStatusFromServer);
});