// write a function that takes two equal length buffers and produces their XOR combination
// will need to use that hex decode function from c1

const input = '1c0111001f010100061a024b53535009181c';
const XOR_KEY = '686974207468652062756c6c277320657965';
const target = '746865206b696420646f6e277420706c6179';

function fixedXOR(inputStr) {

  //hex decode the input
  let asciiString = '';
  for (var i = 0; i < inputStr.length; i += 2) {
    asciiString += String.fromCharCode(parseInt(inputStr.substr(i, 2), 16));
  }
  console.log(asciiString);

  return asciiString;

}

function _test_fixedXOR() {

}


fixedXOR(input);

//meh https://github.com/wrauner/cryptopals/blob/master/src/XorUtils.js