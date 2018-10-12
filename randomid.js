


function rand128old() {
  function rand16() {
    return Math.floor(0x10000 | Math.random() * 0x10000).toString(16).substring(1);
  }
  let strRandom = rand16() + rand16() + rand16() + rand16() + rand16() + rand16() + rand16() + rand16();
  return strRandom;
}


function rand16() {
  return Math.floor(0x10000 | Math.random() * 0x10000).toString(16).substring(1);
}



function rand128(sets = 8) {
  let strRandom='';
  for (let i=0; i < sets; i++){
    strRandom = strRandom + rand16();
  }
  return strRandom;
}


//console.log("bits", rString.length * 16 / 4);
console.log(rand128(8));
