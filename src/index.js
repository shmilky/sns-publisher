'use strict';

const snsGenericPublish = require('aws-sns-publish');

const {SNS_REGION, SNS_ACCOUNT_ID} = process.env;

module.exports.publishMessage = function (topicName, message) {
    return snsGenericPublish(message, {arn: `arn:aws${SNS_REGION}:${SNS_ACCOUNT_ID}`});
};