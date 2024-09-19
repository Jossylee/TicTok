 // Initialize an empty cart array
 let cart = [];

 // Function to add a product to the cart
 function addToCart(productName, productPrice) {
     // Add the product to the cart array
     cart.push({ name: productName, price: productPrice });

     // Update the cart display
     updateCartDisplay();
 }

 // Function to update the cart display
 function updateCartDisplay() {
     const cartItemsContainer = document.getElementById('cart-items');
     cartItemsContainer.innerHTML = ''; // Clear the current items

     // Calculate the total price
     let totalPrice = 0;

     // Loop through each item in the cart and display it
     cart.forEach((item, index) => {
         const listItem = document.createElement('li');
         listItem.textContent = `${item.name} - $${item.price}`;
         
         // Add a remove button for each item
         const removeButton = document.createElement('button');
         removeButton.textContent = 'Remove';
         removeButton.onclick = () => removeFromCart(index);

         listItem.appendChild(removeButton);
         cartItemsContainer.appendChild(listItem);

         // Update total price
         totalPrice += item.price;
     });

     // Update the total price display
     document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
 }

 // Function to remove an item from the cart
 function removeFromCart(index) {
     // Remove the item at the given index
     cart.splice(index, 1);

     // Update the cart display
     updateCartDisplay();
 }