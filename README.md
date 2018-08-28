# sns-topic-message-publisher

## Still work in progress (do not use)

Publish messages into amazon simple notification service topic.

This is basically a wrapper to aws-sns-publish where we limit only to a pub/sub messages and not mobile notifications, emails etc.

When using you must configured environment parameters for the SNS
SNS_REGION - for the topic region
SNS_ACCOUNT_ID - to use your account ID

