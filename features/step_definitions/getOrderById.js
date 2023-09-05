const {Then} = require("@cucumber/cucumber");
const axios = require("axios");
const {assert} = require("chai");

Then(/^Get the order by (.*)$/, async function (id) {
    const result = await axios({
        method: 'get',
        url: `https://petstore3.swagger.io/api/v3/store/order/${id}`,
    });
    assert.strictEqual(result.status, 200);
    assert.strictEqual(result.statusText, 'OK');
    this.context = result.data;
});