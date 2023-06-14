const url = 'https://payments.braintree-api.com/graphql';
const headers = {
  'Accept': '*/*',
  'Authorization': 'Bearer <BEARER_VALUE>',
  'Braintree-Version': '2018-05-10',
  'Connection': 'keep-alive',
  'Content-Type': 'application/json',
  'Host': 'payments.braintree-api.com',
  'Origin': 'https://assets.braintreegateway.com',
  'Referer': 'https://assets.braintreegateway.com/',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site'
};

const data = {
  clientSdkMetadata: {
    source: 'client',
    integration: 'custom',
    sessionId: '<SESSION ID>'
  },
  query: `mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {
    tokenizeCreditCard(input: $input) {
      token
      creditCard {
        bin
        brandCode
        last4
        expirationMonth
        expirationYear
        binData {
          prepaid
          healthcare
          debit
          durbinRegulated
          commercial
          payroll
          issuingBank
          countryOfIssuance
          productId
        }
      }
    }
  }`,
  variables: {
    input: {
      creditCard: {
        number: cardNumber,
        expirationMonth: expmm,
        expirationYear: expyyyy,
        cvv: cvv
      },
      options: {
        validate: false
      }
    }
  },
  operationName: 'TokenizeCreditCard'
};

fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    // Process the result here
  })
  .catch(error => {
    // Handle any errors here
  });
