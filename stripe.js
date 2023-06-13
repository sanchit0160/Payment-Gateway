const url = 'https://api.stripe.com/v1/tokens';
const params = new URLSearchParams({
  time_on_page: timeOnPage,
  pasted_fields: 'number',
  guid,
  muid,
  sid,
  key: pkLive,
  payment_user_agent: 'stripe.js/78ef418',
  'card[number]': cardn,
  'card[cvc]': cvv,
  'card[exp_month]': expmm,
  'card[exp_year]': expyy
});

try {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Origin': 'https://js.stripe.com',
      'Referer': 'https://js.stripe.com/'
    },
    body: params
  });

  const data = await response.json();
} 
catch (error) {
}
