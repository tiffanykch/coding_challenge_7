// TASK 1: FUNCTION DECLARATION - CUSTOMER INVOICE CALCULATION

// Create function to calculate final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    
    // Console log formula output
    console.log(`Total Invoice: $${total.toFixed(2)}`);
    return total;
}

// Test Data
calculateInvoice(100, 0.08, 5);

calculateInvoice(500, 0.1, 20);