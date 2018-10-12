
//recursive
function rec(val){
  if (val > 10){ return }

  console.log(val)
  rec(val+1)
}

rec(1);
