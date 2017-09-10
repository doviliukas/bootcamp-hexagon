var text = 'Lietuvoje šiuo metu laipsnių pagal Celsijų',
    temp = 26;



console.log( text.substr( 0, 20) + ((temp - 32) * (5 / 9)).toFixed(1) + text.substr(19));