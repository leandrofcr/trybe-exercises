// ------ PARTE I -------

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let message = `Olá, ${order.order.delivery.deliveryPerson}! Entrega para ${order.name},
Telefone:${order.phoneNumber},
R. ${order.address.street} No ${order.address.number}, AP ${order.address.apartment}.`

  return console.log(message);
}

customerInfo(order);

const newCustomer = {
  name: 'Luiz Silva',
  payment: {
    total: 50
  },
}

const orderModifier = (order) => {
  orderModified = Object.assign(order, newCustomer);
  return console.log(`Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$${order.payment.total},00.`);
}

orderModifier(order);
