'use strict';
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
// Seattle.customersPerHour();
// Seattle.avgCookiesPerCustomer(); 
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