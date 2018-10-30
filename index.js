function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  let array = ['pizza', 'velvet', 'blood'];
  array.forEach(callback);
  return(array);
}
