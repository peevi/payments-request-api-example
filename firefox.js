var supportedInstruments = [{
 supportedMethods: 'basic-card',
 data: {
   supportedNetworks: ['visa', 'mastercard', 'amex', 'jcb',
                       'diners', 'discover', 'mir', 'unionpay']
 }
}];

var details = {
  total: {label: 'Donation', amount: {currency: 'USD', value: '65.00'}},
  displayItems: [
    {
      label: 'Original donation amount',
      amount: {currency: 'USD', value: '65.00'}
    }
  ],
  shippingOptions: [
    {
      id: 'standard',
      label: 'Standard shipping',
      amount: {currency: 'USD', value: '0.00'},
      selected: true
    }
  ]
};

var options = {requestShipping: true};

try {
  var request = new PaymentRequest(supportedInstruments, details, options);
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  request.show().then(function(instrumentResponse) {
    // Do something with the response from the UI.
  })
  .catch(function(err) {
    // Do something with the error from request.show().
  });
} catch (e) {
  // Catch any other errors.
}
