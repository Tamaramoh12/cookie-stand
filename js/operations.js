'use strict';
// function to generate a random number for customers per hour
function customersPerHour(maxHourlyCustomers, minHourlyCustomers) {
    var random = Math.random(); // 0 - 1
    random = (random * (maxHourlyCustomers - minHourlyCustomers + 1)) + minHourlyCustomers; // less than or equal max
    random = Math.floor(random); // remove fractions
    return random;
}

// function to multiply the avgCookies by customersPerHour to get the avgCookiesPerCustomer
function avgCookiesPerCustomer(customersPerHour,avgCookies){
    avgCookiesPerCustomer = avgCookies * customersPerHour;
    return avgCookiesPerCustomer;
}


var Seattle = {
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookies: 6.3,
    customersPerHour: function () {
        customersPerHour(65, 23);
        console.log('test');
        return customersPerHour(65, 23);
    },
    avgCookiesPerCustomer: function(){
        avgCookiesPerCustomer(customersPerHour,this.avgCookies);
        console.log('hi');
        return avgCookiesPerCustomer(customersPerHour,this.avgCookies);
    },
    render: function(){
        this.avgCookiesPerCustomer();
        var parentElement = document.getElementById('shop');

        var p = document.createElement('p');
        p.textContent = 'Seattle';
        parentElement.appendChild(p);

        var ul = document.createElement('ul');
        p.appendChild(ul);

        for(var i=6; i<=11; i++){
            var li = document.createElement('li');
            li.textContent = i + 'am:' + '.......' + ' cookies ';
            ul.appendChild(li);
        }

        for(var i=12; i>=7; i--){
            var li = document.createElement('li');
            li.textContent = i + 'pm:' + '......' +' cookies ';
            ul.appendChild(li);
        }

        var li = document.createElement('li');
            li.textContent = 'Total:' +   ' cookies ';
            ul.appendChild(li);
    }

};

//to call the function which is inside the object
Seattle.customersPerHour(); 
Seattle.avgCookiesPerCustomer(); 
Seattle.render();


