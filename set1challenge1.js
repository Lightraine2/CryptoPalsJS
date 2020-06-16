
// Set 1:1
// Convert hex to b64

// the string:
// 49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d
// should produce
// SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t
// make utility function with a test case to check answer

var hexString = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'
var targetString = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'

function hexToB64String (hex) {
  let asciiString = '';
  for (var i = 0; i < hex.length; i += 2) {
    asciiString += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  console.log(asciiString);

  let b64string = '';
  b64string = Buffer.from(asciiString).toString('base64');
  return b64string;
}

function _test_hexToB64String() {
  let answer = '';
  answer = hexToB64String(hexString);
  if (answer === targetString) {
    console.log('Checks out. GGWP')
  } else {
    console.log('Wrong')
  }
}

console.log(hexToB64String(hexString));

_test_hexToB64String();