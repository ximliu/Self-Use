var obj = JSON.parse($response.body);

obj= {
  "originalTransactionId" : "20000625420102",
  "subscriptionState" : "trial",
  "isInGracePeriod" : false,
  "subscriptionExpirationDate" : "17:48 25/11/2999",
  "isDocuments6User" : true,
  "isEligibleForIntroPeriod" : false,
  "subscriptionAutoRenewStatus" : "autoRenewOff",
  "subscriptionReceiptId" : "1530908572000"
};

$done({body: JSON.stringify(obj)});