'use strict';
// Lab 9 - Forms & Events
var form = document.getElementById('cookisCountryForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.name.value;
    var min = event.target.min.value;
    var max = event.target.max.value;
    var avg = event.target.avg.value;
    var location = new Country(name, min, max, avg);
    location.renderContent();
    location.renderLastRow();
});


//Lab 7 - Constructors
var obj = [];
var allCountries = [0, 0, 0, 0, 0]; //array to store all locations in.
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var coloumnTotal = [];
var totalOfTotals = 0; //array to store the total of columns total inside it. 
//creating the constructor and include the proprties inside it
function Country(name, minHourlyCustomers, maxHourlyCustomers, avgCookies) {
    //this keyword refers to the object that is calling the constructor . property = value;
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookies = avgCookies;
    allCountries.push(this.name);
    this.cookies = []; //array to store the avgcookiespercustomer
    obj.push(this); //array to store all the objects in
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
    // function to multiply the avgCookies by customersPerHour to get the avgCookiesPer Customer
    this.cookies.push(Math.ceil(this.avgCookies) * this.customersPerHour());
};

//creating the table
var parentElement = document.getElementById('table-result');
var table = document.createElement('table');
parentElement.appendChild(table);

//function to add the first row
Country.prototype.renderFirstRow = function () {
    var firstRow = document.createElement('tr');
    table.appendChild(firstRow);
    // var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
    for (var i = 0; i < 16; i++) { //i refers to number of columns or tds
        var column = document.createElement('td');
        firstRow.appendChild(column);
        if (i == 0) {
            column.textContent = 'Country Name';
        } else if (i == 15) {
            column.textContent = 'Daily Location Total';
        } else {
            column.textContent = hours[i - 1];
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
    for (var r = 0; r < 14; r++) {
        this.customersPerHour();
        this.avgCookiesPerCustomer();
        var column = document.createElement('td');
        row.appendChild(column);
        var random = this.cookies[r]; //function to store the random variable for the cookies sold in this hour
        column.textContent = random;
        sum = sum + random;
    }
    //create last column , column #16
    var column = document.createElement('td');
    row.appendChild(column);
    column.textContent = sum;
};

//function to create the last row
Country.prototype.renderLastRow = function () {
    //create row  #1
    var lastRow = document.createElement('tr');
    table.appendChild(lastRow);
    var column = document.createElement('td');
    lastRow.appendChild(column);
    column.textContent = 'Total';
    //create rows 2-15
    for (var i = 0; i < 14; i++) { //i refers to number of columns or tds
        var column = document.createElement('td');
        lastRow.appendChild(column);
        column.textContent = coloumnTotal[i];
    }
    //create last column , column #16
    var column = document.createElement('td');
    lastRow.appendChild(column);
    column.textContent = totalOfTotals;
};

//creating the objects using constructor
//new keyword calls the constructor
new Country('Seattle', 23, 65, 6.3);
new Country('Tokyo', 3, 24, 1.2);
new Country('Dubai', 11, 38, 3.7);
new Country('Paris', 20, 38, 2.3);
new Country('Lima', 2, 16, 4.6);

//Calling the functions
//call row #1
obj[0].renderFirstRow();

//call the content rows
for (var i = 0; i < obj.length; i++) {
    obj[i].renderContent();
}
totalOfTotal();
// obj[0].renderLastRow();


//call the last row
function totalOfTotal() {
    var temp = 0;
    for (var t = 0; t < hours.length; t++) {
        for (var o = 0; o < obj.length; o++) {
            temp += obj[o].cookies[t]
        }
        coloumnTotal.push(temp);
        totalOfTotals += temp;
        temp = 0;
    }
}
