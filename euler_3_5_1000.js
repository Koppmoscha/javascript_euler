var count = 0;
var size = 1000;
for (i = 0; i < size; i++) {
    if(i%3===0||i%5===0){
      count = count + i;
    }
}
console.log(count)
