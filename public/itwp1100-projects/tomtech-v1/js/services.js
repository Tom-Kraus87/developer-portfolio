

// Get all services in the serviceItem class
let serviceItems = document.getElementsByClassName('serviceItem');

// Loop through serviceItems and attach and event listener to each service
for (let i = 0; i < serviceItems.length; i++) {

    // Add an event listener that runs calcTotal() when an service is clicked
    serviceItems[i].addEventListener('click', calcTotal);
}

// Function to calculate the total services cost
function calcTotal() {
    let serviceTotal = 0; // set initial value of service total to 0
    let selectedServices = []; // array to track selected services

    // Loop through the contents of the serviceItems collection
    for (let i = 0; i < serviceItems.length; i++) {
        // check if service is checked
        if (serviceItems[i].checked ) {
            // add service value to service total
            serviceTotal += Number(serviceItems[i].value);
            // add selected service id to selectedServices array
            selectedServices.push(serviceItems[i].id);
        }
    }

    // Apply package discounts based on selected services
    if (selectedServices.includes('service2') && selectedServices.includes('service8') && selectedServices.includes('service9')) {
       // Small Business Startup IT Package - $4,500 (10% discount)
       serviceTotal -= 500; // Apply discount of $500
       window.alert("Small Business Startup IT Package Applied: You saved $500!"); // Notify customer of package and discount applied
    } else if (selectedServices.includes('service3') && selectedServices.includes('service4') && selectedServices.includes('service9')) {
        // IT Infrastructure Setup & Management Package - $6000 (20% discount)
        serviceTotal -= 1500; // Apply discount of $1,500
        window.alert("IT Infrastructure Setup & Management Package Applied: You saved $1,500!"); // Notify customer of package and discount applied
    } else if (selectedServices.includes('service2') && selectedServices.includes('service5') && selectedServices.includes('service11')) {
        // Business Productivity & Cloud Solutions Package - $4,500 (10% discount)
        serviceTotal -= 500; // Apply discount of $500
        window.alert("Business Productivity & Cloud Solutions Package Applied: You saved $500!"); // Notify customer of package and discount applied
    } else if (selectedServices.includes('service6') && selectedServices.includes('service9') && selectedServices.includes('service10')) {
        // Comprehensive IT Security Package - $6,375 (25% discount)
        serviceTotal -= 2125; // Apply discount of $2125
        window.alert("Comprehensive IT Security Package Applied: You saved $2125!"); // Notify customer of package and discount applied
    } else if (selectedServices.includes('service3') && selectedServices.includes('service7')) {
        // Virtualization & Server Efficiency Package - $5,000 (10% discount)
        serviceTotal -= 500; // Apply discount of $500
        window.alert("Virtualization & Server Efficiency Package Applied: You saved $500!"); // Notify customer of package and discount applied
    } else if (selectedServices.includes('service1') && selectedServices.includes('service3') && selectedServices.includes('service4') && selectedServices.includes('service11')) {
        // All-Inclusive IT Support & Maintenance Package - $6,400 (20% discount)
        serviceTotal -= 1600; // Apply discount of $1600
        window.alert("All-Inclusive IT Support & Maintenance Package Applied: You saved $1600!"); // Notify customer of package and discount applied
    } else if (selectedServices.includes('service2') && selectedServices.includes('service5') && selectedServices.includes('service8')) {
        // Web Development & Cloud Integration Package - $3,800 (10% discount)
        serviceTotal -= 400; // Apply discount of $400
        window.alert("Web Development & Cloud Integration Package Applied: You saved $400!"); // Notify customer of package and discount applied
    }

    // update 'serviceTotal' element with formatCurrency() & orderTotal
    document.getElementById('serviceTotal').innerHTML = formatCurrency(serviceTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }