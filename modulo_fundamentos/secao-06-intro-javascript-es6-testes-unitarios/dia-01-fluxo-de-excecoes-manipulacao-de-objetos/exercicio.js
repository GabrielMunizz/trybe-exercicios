const checkValidNumber = (number) => {
  if (typeof number !== 'number') {
    throw new Error (`${number} precisa ser um número válido. Você digitou uma ${typeof number}.`)
  }
}
const checkValidRange = (num1, num2, num3, num4) => {
  try {
    checkValidNumber(num1);
    checkValidNumber(num2);
    checkValidNumber(num3);
    checkValidNumber(num4);

    if((num1 <= 10 && num1 >= 1) && (num2 <= 10 && num2 >= 1) && (num3 <= 10 && num3 >= 1) && (num4 <= 10 && num4 >= 1)) {
      return 'Os números estão dentro do parametro'
    } else {
      return 'Os números precisam estar entre 1 e 10.'
    }
  } catch(erro) {
    return erro.message;
  }
};

console.log(checkValidRange(1, 2, 10, '12'));