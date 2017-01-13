'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4

var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5

var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [
    {
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}
];


function price() {
    //    for(var cars in Element )
    rentals.forEach( //see all rentals 
        function getPrice(element) {

            document.write("<p>");
            var carID = element.carId;
            var distance = element.distance;
           

            var price = 0;

            var priceperday = 0;
            var priceperkm = 0;
            var price_time = 0;
            var price_km = 0;
            var day_rentals = 0;
            var name_vehicle=element.carId;
           
           
            //get price per day and price per km 
            cars.forEach(function getPricePerDay(car) { //see all cars 
                if (carID == car.id) { //if carID = car.id === same car 
                    priceperday= car.pricePerDay;
                    priceperkm = car.pricePerKm;
                    if(car.vehicule!=null){name_vehicle = car.vehicule;}
                }
            })

            // region price per day 
            var pickupDate = new Date(element.pickupDate);
            var returnDate = new Date(element.returnDate);
            var differenceMillisecond = returnDate - pickupDate;
            day_rentals = differenceMillisecond / (24 * 60 * 60 * 1000);
            if (day_rentals == 0) { price_time = priceperday; } //if one day location, one day price
            else { price_time = day_rentals * priceperday; }

            //price per day exe 2 

            if (day_rentals > 1 && day_rentals < 5) { price_time = (price_time - (price_time * 0.10));}
            else if (day_rentals > 4 && day_rentals < 11) { price_time = (price_time - (price_time * 0.30)); }
            else if (day_rentals > 10) { price_time = (price_time - (price_time * 0.50)); }

            // ------------------------

            //region price per km 

            price_km = distance * priceperkm;

            //----------------------------

            
            price = price_km + price_time;
            element.price = price;

            // console.log(price);
            
            document.write("car  : "+name_vehicle+" driver firstname : " + element.driver.firstName + " lastname : " + element.driver.lastName + " pickupDate : " + element.pickupDate + " returnDate : " + element.returnDate + " Distance :" + element.distance + " Price : " + element.price + " commission : " + element.commission);


            document.write("</p>");
        }
        )
}

function exercice3() {
    var price = 0;
    var part_insurance = 0.50;
    var insurance = 0;
    var roadside_assistance = 0;
    var nbDay = 1;

    rentals.forEach( //get price and nbrday
        function (rent) {
            price = rent.price;
            if (getNbrDay(rent.id) != 0) { nbDay = getNbrDay(rent.id);}
        }
        )
    console.log(price);
    roadside_assistance = nbDay; 
    insurance = price * part_insurance;
    price = price - (insurance + roadside_assistance);

    actors.forEach(
        function(acto){
                //get id, modify amount
        }
        )
    }



function getNbrDay(rentalsID) { //did at exercice 3  so not change for exercice 2 

    var day_rentals = 0;
    rentals.forEach(function (rent) {
        var pickupDate = new Date(rent.pickupDate);
        var returnDate = new Date(rent.returnDate);
        var differenceMillisecond = returnDate - pickupDate;
        day_rentals = differenceMillisecond / (24 * 60 * 60 * 1000);
    })
    return day_rentals;
}

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
//console.log(price);
price();
exercice3();
//cars.forEach(price);

//rentals.forEach(function(element){console.log(element);}) //get each elements of rentals and print them on log console 
