//BubbleSort crescente
  let array = [22, 7, 83, 34, 4, 7, 1, 56, 73, 125]
  let array2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  const bubbleSortUp = (numbers) => {
      for (let i = 1; i < numbers.length; i += 1) {
      for (let j = 0; j <numbers.length; j += 1) {
          if (numbers[i] < numbers[j]) {
                let swap = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = swap;
            }
        }
      }
      return numbers
  }
//BubbleSort decrescente
  const bubbleSortDown = (numbers) => {
    for (let i = 1; i < numbers.length; i += 1) {
        for (let j = 0; j <numbers.length; j += 1) {
            if (numbers[i] > numbers[j]) {
              let swap = numbers[i];
              numbers[i] = numbers[j];
              numbers[j] = swap;
          }
      }
    }
    return numbers
}
//BubbleSort que multiplica pelo seguinte
let array3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const bubbleSortMultiplier = (numbers) => {
    let copyOfNumbers = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if(numbers[i] === numbers[numbers.length - 1]) {
            copyOfNumbers.push(numbers[i] * 2)
            break;
        }
        copyOfNumbers.push(numbers[i] * numbers[i + 1]);
    };
    return copyOfNumbers    
};
//BubbleSort construindo um triangulo
const bubbleSortTriangle = (n) => {    
    let square = '';
    if(n > 1) {
        for (let i = 1; i <= n; i += 1) {            
            console.log(square += '*');            
        }
    }
}
//bubbleSortTriangle(8)
//BubbleSort construindo um quadrado
const bubbleSortSquare = (n) => {
    let sort = ''
    if (n > 1) {
        for (let i = 1; i <= n; i += 1) {
            for (let j = 1; j <= n; j += 1) {                
                sort += '*';
            }
            console.log(sort);
            sort = '';                                       
        }                        
    }        
}
//bubbleSortSquare(6)
//BubbleSort inverta o lado do trianguloa
const BubbleInvertTriangle = (n) => {

}
BubbleInvertTriangle(6)