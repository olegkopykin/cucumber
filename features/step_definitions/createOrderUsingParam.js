const {Given} = require("@cucumber/cucumber");
const requestBody = require('./createOrder.json');
const axios = require("axios");
const {assert} = require("chai");

Given(/^Send a post request from the createOrder.json file using the parameters (.*), (.*)$/,
    async function (id, quantity) {
        const data = {
            ...requestBody,
            id,
            quantity
        };
        const result = await axios({
            method: 'post',
            url: 'https://petstore3.swagger.io/api/v3/store/order',
            data,
        });
        assert.strictEqual(result.status, 200);
        assert.strictEqual(result.statusText, 'OK');
    });