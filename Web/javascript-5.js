var phone = '9118';
var digit1 = phone[0];
var digit4 = phone[3];
var digit2 = phone[1];
var digit3 = phone[2];

if ( (digit1 === '8' || digit1 === '9') && (digit4 === '8' || digit4 === '9') && (digit2 === digit3)) {
    console.log('απόρριψη');
}
else {
    console.log('απάντηση');
}