const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arrMorse = [];
    
    let len = expr.length / 10;
    for (i = 0; i < len; i++) {
      let letMorse = [];
      for (k = 0; k < 10; k += 2) {
        letMorse.push(expr.slice(i*10+k, i*10+k + 2));
      }
      arrMorse.push(letMorse);
    }

    arrMorse = arrMorse.map(function(item) {
        return item.map(function(item2) {
            switch (item2) {
                case '00' : return ''
                case '10' : return '.'
                case '11' : return '-'
                case '**' : return '**'
                default: return item2
            }
        })
    })

    arrMorse = arrMorse.map(item => item.join(''));
    let str = arrMorse.map(item => (item === '**********') ? ' ': MORSE_TABLE[item]).join('');

    return str;
}

module.exports = {
    decode
}

/* 
n = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
console.log(n);
//res = module.exports(n);
res = decode(n);
console.log(res);
 */