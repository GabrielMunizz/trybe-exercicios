const sum = (...numbers) => {
  const allNumber = [...numbers];
  const total = allNumber.reduce((acc, number) => {
   return acc += number;
  }, 0);
  return total;
} 
console.log(sum(10.5, 30, 45.5, 2));