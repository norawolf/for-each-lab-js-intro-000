function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  let array = ['dog', 'cat', 'horse'];
  array.forEach(callback);
  return(array);
  debugger;
}
