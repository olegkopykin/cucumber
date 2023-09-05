const {Then} = require("@cucumber/cucumber");
const axios = require("axios");
const {assert} = require("chai");

Then(/^Send a delete request by (.*) after test$/, async function (id) {
    const result = await axios({
        method: 'delete',
        url: `https://petstore3.swagger.io/api/v3/store/order/${id}`,
    });
    assert.strictEqual(result.status, 200);
    assert.strictEqual(result.statusText, 'OK');
});