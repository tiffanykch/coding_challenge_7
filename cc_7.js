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

// TASK 5: RETURNING VALUES - BUSINESS LOAN INTEREST CALCULATION

// Create function that returns total interest
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    
    // Console log total interest
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Data
console.log(calculateLoanInterest(1000, 0.05, 3));

console.log(calculateLoanInterest(5000, 0.07, 5));

// TASK 6: HIGHER-ORDER FUNCTIONS - FILTERING HIGH-VALUE TRANSACTIONS

// Declare array containing five amounts (using test data)
let transactions = [500, 1200, 3000, 800, 2200];

// Create higher-order function to filter transactions above $1000
function filterHighValueTransactions(transactions, filterFunction) {
    let filteredTransactions = transactions.filter(filterFunction);
    console.log(filteredTransactions);
}

// Test Case
filterHighValueTransactions(transactions, amount => amount > 1000);

// TASK 7: CLOSURES - BUDGET TRACKER

// Create a function that returns another to add expenses and keep running balance
function createBudgetTracker() {
    let totalExpenses = 0;

    return function(amount) {
        totalExpenses += amount;
        return `Current Balance: -$${totalExpenses}`;
    }
}

// Test Data
let budget = createBudgetTracker()

console.log(budget(300));

console.log(budget(200));

// TASK 8: RECURSION IN JAVASCRIPT - BUSINESS GROWTH PROJECTION

// Create recursive function to project revenue growth
function calculateGrowth(years, revenue) {
    if (years >= 10) return revenue;
    return calculateGrowth(years + 1, revenue * 1.05);
}

// Test Data
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`);

console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`);