let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    console.log('Olá ' + order.order.delivery['deliveryPerson'] + ', entrega para: ' + order.name + ', telefone: ' + order.phoneNumber + ', endereço: ' + order.address.street + ", " + order.address.number + ", " + order.address.apartment)
  }
  
  customerInfo(order);

  //Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.order.payment = 50.00
    let sabor1 = Object.keys(order.order.pizza);    
    console.log('Olá, ' + order.name + ', o valor total de seu pedido de ' + sabor1 + ' e ' + order.order.drinks.coke.type + ' é R$ ' + order.order.payment)
  }
  
  orderModifier(order);