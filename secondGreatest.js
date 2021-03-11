let nums = [10, 26, 81, 81, 3, 81, 1];
// Función que retorna el segúndo número más grande. 

function getSecondLargest(nums) {
  let order = nums.sort((a, b) => b - a);
  if (order[0] === order[1]) {
    console.log(order[2]);
  } else {
    console.log(order[1]);
  }
}

getSecondLargest(nums);
