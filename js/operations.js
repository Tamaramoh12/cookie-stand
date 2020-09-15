'use strict';
//Lab 7 - Constructors

//creating the constructor and include the proprties inside it
function Country (minHourlyCustomers, maxHourlyCustomers, avgCookies){
    //this keyword refers to the object that is calling the constructor . property = value;
    this.minHourlyCustomers = minHourlyCustomers;  
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookies = avgCookies;
}

// each constructor have prototype associated to it, 
//to add the methods to the constructor
Country.prototype.customersPerHour = function(){
    // function to generate a random number for customers per hour
    var random = Math.random(); // 0 - 1
    random = (random * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; // less than or equal max
    random = Math.floor(random); // remove fractions
    console.log(random);
    return random;    
};

Country.prototype.avgCookiesPerCustomer = function(){
    // function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
    var Cookies = Math.floor(this.avgCookies) * this.customersPerHour();
    return Cookies;
};




//creating the objects using constructor
//new keyword calls the constructor
var Seattle = new Country(23,65,6.3);
var Tokyo = new Country(3,24,1.2);
var Dubai = new Country(11,38,3.7);
var Paris = new Country(20,38,2.3);
var Paris = new Country(20,38,2.3);
var Lima = new Country(2,16,4.6);




//Lab 6 - DOM & Objects - Without use of constructor
//Seattle
var Seattle = {
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookies: 6.3,
    total: 0,

    // function to generate a random number for customers per hour
    customersPerHour: function () {
        var random = Math.random(); // 0 - 1
        random = (random * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; // less than or equal max
        random = Math.floor(random); // remove fractions
        // console.log(random);
        return random;
    },
    // function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
    avgCookiesPerCustomer: function(){
        var Cookies = Math.floor(this.avgCookies) * this.customersPerHour();
        return Cookies;
    },
    render: function(){
        var parentElement = document.getElementById('shop');

        var p = document.createElement('p');
        p.textContent = 'Seattle';
        parentElement.appendChild(p);

        var ul = document.createElement('ul');
        p.appendChild(ul);

        var sum1 = 0;
        var random;
        for(var i=6; i<=11; i++){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer();
            li.textContent = i + 'am: ' + random + ' cookies ';
            ul.appendChild(li);
            sum1 = sum1 +random ;
        }
        var sum2 = 0;
        for(var i=12; i>=7; i--){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer() ;
            li.textContent = i + 'pm: ' + random +' cookies ';
            ul.appendChild(li);
            sum2 = sum2 + random ;
        }

        var li = document.createElement('li');
            li.textContent = 'Total:' +  (sum1+sum2) + ' cookies ';
            ul.appendChild(li);
    }

};
//to call the function which is inside the object
Seattle.render();

//Tokyo
var Tokyo = {
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookies: 1.2,

    // function to generate a random number for customers per hour
    customersPerHour: function () {
        var random = Math.random(); // 0 - 1
        random = (random * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; // less than or equal max
        random = Math.floor(random); // remove fractions
        // console.log(random);
        return random;
    },
    // function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
    avgCookiesPerCustomer: function(){
        var Cookies = Math.floor(this.avgCookies) * this.customersPerHour();
        return Cookies;
    },
    render: function(){
        var parentElement = document.getElementById('shop');

        var p = document.createElement('p');
        p.textContent = 'Tokyo';
        parentElement.appendChild(p);

        var ul = document.createElement('ul');
        p.appendChild(ul);

        var sum1 = 0;
        var random;
        for(var i=6; i<=11; i++){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer();
            li.textContent = i + 'am: ' + random + ' cookies ';
            ul.appendChild(li);
            sum1 = sum1 +random ;
        }
        var sum2 = 0;
        for(var i=12; i>=7; i--){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer() ;
            li.textContent = i + 'pm: ' + random +' cookies ';
            ul.appendChild(li);
            sum2 = sum2 + random ;
        }

        var li = document.createElement('li');
            li.textContent = 'Total:' +  (sum1+sum2) + ' cookies ';
            ul.appendChild(li);
    }
};
Tokyo.render();

//Dubai
var Dubai = {
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookies: 3.7,

    // function to generate a random number for customers per hour
    customersPerHour: function () {
        var random = Math.random(); // 0 - 1
        random = (random * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; // less than or equal max
        random = Math.floor(random); // remove fractions
        // console.log(random);
        return random;
    },
    // function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
    avgCookiesPerCustomer: function(){
        var Cookies = Math.floor(this.avgCookies) * this.customersPerHour();
        return Cookies;
    },
    render: function(){
        var parentElement = document.getElementById('shop');

        var p = document.createElement('p');
        p.textContent = 'Dubai';
        parentElement.appendChild(p);

        var ul = document.createElement('ul');
        p.appendChild(ul);

        var sum1 = 0;
        var random;
        for(var i=6; i<=11; i++){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer();
            li.textContent = i + 'am: ' + random + ' cookies ';
            ul.appendChild(li);
            sum1 = sum1 +random ;
        }
        var sum2 = 0;
        for(var i=12; i>=7; i--){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer() ;
            li.textContent = i + 'pm: ' + random +' cookies ';
            ul.appendChild(li);
            sum2 = sum2 + random ;
        }

        var li = document.createElement('li');
            li.textContent = 'Total:' +  (sum1+sum2) + ' cookies ';
            ul.appendChild(li);
    }
};
Dubai.render();

//Paris
var Paris = {
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookies: 2.3,

    // function to generate a random number for customers per hour
    customersPerHour: function () {
        var random = Math.random(); // 0 - 1
        random = (random * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; // less than or equal max
        random = Math.floor(random); // remove fractions
        // console.log(random);
        return random;
    },
    // function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
    avgCookiesPerCustomer: function(){
        var Cookies = Math.floor(this.avgCookies) * this.customersPerHour();
        return Cookies;
    },
    render: function(){
        var parentElement = document.getElementById('shop');

        var p = document.createElement('p');
        p.textContent = 'Paris';
        parentElement.appendChild(p);

        var ul = document.createElement('ul');
        p.appendChild(ul);

        var sum1 = 0;
        var random;
        for(var i=6; i<=11; i++){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer();
            li.textContent = i + 'am: ' + random + ' cookies ';
            ul.appendChild(li);
            sum1 = sum1 +random ;
        }
        var sum2 = 0;
        for(var i=12; i>=7; i--){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer() ;
            li.textContent = i + 'pm: ' + random +' cookies ';
            ul.appendChild(li);
            sum2 = sum2 + random ;
        }

        var li = document.createElement('li');
            li.textContent = 'Total:' +  (sum1+sum2) + ' cookies ';
            ul.appendChild(li);
    }
};
Paris.render();

//Lima
var Lima = {
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookies: 4.6,

    // function to generate a random number for customers per hour
    customersPerHour: function () {
        var random = Math.random(); // 0 - 1
        random = (random * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; // less than or equal max
        random = Math.floor(random); // remove fractions
        // console.log(random);
        return random;
    },
    // function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
    avgCookiesPerCustomer: function(){
        var Cookies = Math.floor(this.avgCookies) * this.customersPerHour();
        return Cookies;
    },
    render: function(){
        var parentElement = document.getElementById('shop');

        var p = document.createElement('p');
        p.textContent = 'Lima';
        parentElement.appendChild(p);

        var ul = document.createElement('ul');
        p.appendChild(ul);

        var sum1 = 0;
        var random;
        for(var i=6; i<=11; i++){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer();
            li.textContent = i + 'am: ' + random + ' cookies ';
            ul.appendChild(li);
            sum1 = sum1 +random ;
        }
        var sum2 = 0;
        for(var i=12; i>=7; i--){
            var li = document.createElement('li');
            random = this.avgCookiesPerCustomer() ;
            li.textContent = i + 'pm: ' + random +' cookies ';
            ul.appendChild(li);
            sum2 = sum2 + random ;
        }

        var li = document.createElement('li');
            li.textContent = 'Total:' +  (sum1+sum2) + ' cookies ';
            ul.appendChild(li);
    }
};
Lima.render();