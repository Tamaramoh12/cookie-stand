'use strict';
//Lab 7 - Constructors
var allCountries = [0,0,0,0,0]; //array to store all locations in.
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//creating the constructor and include the proprties inside it
function Country(name, minHourlyCustomers, maxHourlyCustomers, avgCookies) {
    //this keyword refers to the object that is calling the constructor . property = value;
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookies = avgCookies;
    allCountries.push(this.name);
}
// each constructor have prototype associated to it, 
//to add the methods to the constructor
Country.prototype.customersPerHour = function () {
    // function to generate a random number for customers per hour
    var random = Math.random(); // 0 - 1
    random = (random * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; // less than or equal max
    random = Math.ceil(random); // remove fractions
    return random;
};

Country.prototype.avgCookiesPerCustomer = function () {
    // function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
    var Cookies = Math.ceil(this.avgCookies) * this.customersPerHour();
    return Cookies;
};

//creating the table
var parentElement = document.getElementById('table-result');
var table = document.createElement('table');
parentElement.appendChild(table);

//function to add the first row
Country.prototype.renderFirstRow = function () {
    var firstRow = document.createElement('th');
    table.appendChild(firstRow);
    // var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
    for (var i = 0; i < 16; i++) { //i refers to number of columns or tds
        var column = document.createElement('td');
        firstRow.appendChild(column);
        if (i == 0) {
            column.textContent = 'Name';
        } else if (i == 15) {
            column.textContent = 'Daily Location Total';
        } else {
            column.textContent = hours[i-1];
        }
    } 
}
//function to render the content of the tabble
Country.prototype.renderContent = function () {
        var sum = 0;
        //create row
        var row = document.createElement('tr');
        table.appendChild(row);
        //create column #1
        var column = document.createElement('td');
        row.appendChild(column);
        column.textContent = this.name;
        //create columns 2-15
        for (var hr = 0; hr < 14; hr++){
            var column = document.createElement('td');
            row.appendChild(column);
            var random = this.avgCookiesPerCustomer(); //function to store the random variable for the cookkies sold in this hour
            column.textContent = random;
            
            sum = sum + random;
        }
        //create last column , column #16
        var column = document.createElement('td');
        row.appendChild(column);
        column.textContent = sum; 
        
        
};

//function to design the last row
Country.prototype.renderLastRow = function () {
    var lastRow = document.createElement('tr');
    table.appendChild(lastRow);
    for (var i = 0; i < 16; i++) { //i refers to number of columns or tds

    }
};

//creating the objects using constructor
//new keyword calls the constructor
var Seattle = new Country('Seattle', 23, 65, 6.3);
var Tokyo = new Country('Tokyo', 3, 24, 1.2);
var Dubai = new Country('Dubai', 11, 38, 3.7);
var Paris = new Country('Paris', 20, 38, 2.3);
var Lima = new Country('Lima', 2, 16, 4.6);

//Calling the functions
Seattle.customersPerHour();
Seattle.avgCookiesPerCustomer();
Seattle.renderFirstRow();
Seattle.renderContent();

Tokyo.customersPerHour();
Tokyo.avgCookiesPerCustomer();
Tokyo.renderContent();

Dubai.customersPerHour();
Dubai.avgCookiesPerCustomer();
Dubai.renderContent();

Paris.customersPerHour();
Paris.avgCookiesPerCustomer();
Paris.renderContent();

Lima.customersPerHour();
Lima.avgCookiesPerCustomer();
Lima.renderContent();
Lima.renderLastRow();












// //Lab 6 - DOM & Objects - Without use of constructor
// //Seattle
// var Seattle = {
//     minHourlyCustomers: 23,
//     maxHourlyCustomers: 65,
//     avgCookies: 6.3,
//     total: 0,

//     // function to generate a random number for customers per hour
//     customersPerHour: function () {
//         var random = Math.random(); // 0 - 1
//         random = (random * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; // less than or equal max
//         random = Math.floor(random); // remove fractions
//         // console.log(random);
//         return random;
//     },
//     // function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
//     avgCookiesPerCustomer: function(){
//         var Cookies = Math.floor(this.avgCookies) * this.customersPerHour();
//         return Cookies;
//     },
//     render: function(){
//         var parentElement = document.getElementById('shop');

//         var p = document.createElement('p');
//         p.textContent = 'Seattle';
//         parentElement.appendChild(p);

//         var ul = document.createElement('ul');
//         p.appendChild(ul);

//         var sum1 = 0;
//         var random;
//         for(var i=6; i<=11; i++){
//             var li = document.createElement('li');
//             random = this.avgCookiesPerCustomer();
//             li.textContent = i + 'am: ' + random + ' cookies ';
//             ul.appendChild(li);
//             sum1 = sum1 +random ;
//         }
//         var sum2 = 0;
//         for(var i=12; i>=7; i--){
//             var li = document.createElement('li');
//             random = this.avgCookiesPerCustomer() ;
//             li.textContent = i + 'pm: ' + random +' cookies ';
//             ul.appendChild(li);
//             sum2 = sum2 + random ;
//         }

//         var li = document.createElement('li');
//             li.textContent = 'Total:' +  (sum1+sum2) + ' cookies ';
//             ul.appendChild(li);
//     }

// };
// //to call the function which is inside the object
// Seattle.render();
