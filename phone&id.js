function stringMask(str){
  // var str;
  // 判断是手机号还是身份证
  var len = str.length;
  //alert(len);
  if (len == 11) {
    // 对手机号进行处理
    var phoneFront = str.slice(0, 3);
    var phoneBehind = str.slice(-4);
    var phoneFinal = phoneFront + '****' + phoneBehind;
    return phoneFinal;
  }

  if (len == 18) {
    // 对身份证号进行处理
    var idFront = str.slice(0, 4);
    var idBehind = str.slice(-4);
    var idFinal = idFront + '**********' + idBehind;
    return idFinal;
  }
}

console.log(stringMask('13572234202'));
console.log(stringMask('610524199404144012'));
