//coding challenge 5

//task 1

const inventory = [
  { name: 'Espresso', price: 3, quantity: 10 },
  { name: 'Latte', price: 4, quantity: 5 },
  { name: 'Cappuccino', price: 4, quantity: 6 },
  { name: 'Mocha', price: 5, quantity: 4 }
];

//task 2

const orders = [];

//task 3

function placeOrder(customerName, orderedItems) {
  for (var i = 0; i < orderedItems.length; i++) {
    var item = orderedItems[i];
    var productFound = false;

    for (var j = 0; j < inventory.length; j++) {
      if (inventory[j].name === item.name) {
        productFound = true;
        if (inventory[j].quantity < item.quantity) {
          console.log('Insufficient stock for ' + item.name + '.');
          return;
        }
        break;
      }
    }

    if (!productFound) {
      console.log('Product ' + item.name + ' does not exist.');
      return;
    }
  }

  for (var i = 0; i < orderedItems.length; i++) {
    var item = orderedItems[i];
    for (var j = 0; j < inventory.length; j++) {
      if (inventory[j].name === item.name) {
        inventory[j].quantity -= item.quantity;
        break;
      }
    }
  }

  var newOrder = {
    customerName: customerName,
    items: orderedItems,
    status: 'Pending'
  };
}

//task 4

function calculateOrderTotal(order) {
  let total = 0;
  for (let item of order.items) {
    const product = inventory.find(product => product.name === item.name);
    if (product) {
      total += product.price * item.quantity;
    }
  }
  return total;
}

//task 5

function completeOrder(customerName) {
  const order = orders.find(order => order.customerName === customerName);
  if (order) {
    order.status = 'Completed';
  } else {
    console.log(`Order for ${customerName} not found.`);
  }
}


