// CC 5

// task 1
const inventory = [
  { name: 'Espresso', price: 3, quantity: 10 },
  { name: 'Latte', price: 4, quantity: 5 },
  { name: 'Cappuccino', price: 4, quantity: 6 },
  { name: 'Mocha', price: 5, quantity: 4 }
];

// task 2
const orders = [];

// task 3
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
  orders[orders.length] = newOrder;
}

// task 4
function calculateOrderTotal(order) {
  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    let item = order.items[i];
    for (let j = 0; j < inventory.length; j++) {
      if (inventory[j].name === item.name) {
        total += inventory[j].price * item.quantity;
        break;
      }
    }
  }
  return total;
}

// task 5
function completeOrder(customerName) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].customerName === customerName) {
      orders[i].status = 'Completed';
      return;
    }
  }
  console.log('Order for ' + customerName + ' not found.');
}

// task 6
function checkPendingOrders() {
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].status === 'Pending') {
      console.log('Pending Order for ' + orders[i].customerName + ':');
      var items = orders[i].items;
      for (var j = 0; j < items.length; j++) {
        console.log(items[j].quantity + items[j].name);
      }
    }
  }
}

// test functions
placeOrder('Alice', [
  { name: 'Espresso', quantity: 2 },
  { name: 'Latte', quantity: 1 }
]);

var aliceOrder;
for (var i = 0; i < orders.length; i++) {
  if (orders[i].customerName === 'Alice') {
    aliceOrder = orders[i];
    break;
  }
}
const total = calculateOrderTotal(aliceOrder);
console.log("Total for Alice's order: $" + total);

checkPendingOrders();

completeOrder('Alice');

checkPendingOrders();