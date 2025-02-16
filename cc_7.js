// TASK 1: FUNCTION DECLARATION - CUSTOMER INVOICE CALCULATION

// Create function to calculate final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    
    // Console log formula output
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}

// Test Data
calculateInvoice(100, 0.08, 5);

calculateInvoice(500, 0.1, 20);

// TASK 2: FUNCTION EXPRESSION - EMPLOYEE HOURLY WAGE CALCULATION

// Create a function expression to calculate hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    
    // Console log formula output
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
}

// Test Data
calculateHourlyWage(52000, 40);

calculateHourlyWage(75000, 35);

// TASK 3: ARROW FUNCTION - CUSTOMER LOYALTY DISCOUNT

// Create arrow function that applies a discount
const calculateLoyaltyDiscount = (amount, years) => {
    
    // Conditional statements to determine discount rate based on years
    if (years >= 5) {discount = 0.15}
    else if (years >= 3) {discount = 0.1}
    else {discount = 0.05};

    // Calculate discounted price
    const discountedPrice = amount * (1 - discount)

    // Console log discounted price
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`)
}

// Test Data
calculateLoyaltyDiscount(100, 6);

calculateLoyaltyDiscount(200, 2);

// TASK 4: PARAMETERS AND ARGUMENTS - PRODUCT SHIPPING COST CALCULATION

// Create function to calculate shipping fees
function calculateShippingCost(weight, location, expedited = false) {    
    let shippingFees = 0;
    
    // Determine shipping cost based on location
    if (location === "USA") {
        shippingFees = 5 + (0.5 * weight)}
    else if (location === "Canada") {
        shippingFees = 10 + (0.7 * weight)}
    
    // Add expedited shipping fee if applicable
    if (expedited) {
        shippingFees += 10};
    
    // Console log final shipping fee
    console.log(`Shipping Cost: $${shippingFees.toFixed(2)}`)
}

// Test Data
calculateShippingCost(10, "USA", true);

calculateShippingCost(5, "Canada", false);
