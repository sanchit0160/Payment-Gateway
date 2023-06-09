$ch = curl_init(''.$ciurl.'');
curl_setopt($ch, CURLOPT_PROXY, ''.$cproxy.'');
curl_setopt($ch, CURLOPT_PROXYUSERPWD, ''.$cpp.'');
curl_setopt($ch, CURLOPT_URL, 'https://api.stripe.com/v1/tokens');
curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept: application/json',
    'Content-Type: application/x-www-form-urlencoded',
    'Origin: https://js.stripe.com',
    'Referer: https://js.stripe.com/'));
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_POSTFIELDS, 'time_on_page='.$timeOnPage.'&pasted_fields=number&guid='.$guid.'&muid='.$muid.'&sid='.$sid.'&key='.$pkLive.'&payment_user_agent=stripe.js%2F78ef418&card[number]='.$cardn.'&card[cvc]='.$cvv.'&card[exp_month]='.$expmm.'&card[exp_year]='.$expyy.'');
$result = curl_exec($ch);
curl_close($ch);
