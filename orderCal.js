const itemPrice = document.getElementById("priceInput");
const itemQuantity = document.getElementById("quantityInput");

function calTotal(){
    let subTotal = (Number(itemPrice.value) * Number(itemQuantity.value));
    if (subTotal >= 50) {
        let discount = (subTotal*0.1);
        let total = (subTotal - discount);
        document.getElementById("finalPrice").textContent = (`Prince: $${Number(itemPrice.value)}.00 and quantity: ${Number(itemQuantity.value)} 
        Subtotal: $${subTotal}.00   Discount: $${discount}.00  Total: $${total}.00`);
    } else {
        document.getElementById("finalPrice").textContent = (`Prince: $${Number(itemPrice.value)}.00 and quantity: ${Number(itemQuantity.value)}        
        Subtotal: $${subTotal}.00   Discount: $0.00  Total:  $${subTotal}.00`);
    };
};