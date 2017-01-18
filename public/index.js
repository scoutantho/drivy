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


function getNbrDay(rentalsID) { //did at exercice 3  so not change for exercice 2 

    var day_rentals = 0;
    rentals.forEach(function (rent) {
        if(rent.id==rentalsID){
        var pickupDate = new Date(rent.pickupDate);
        var returnDate = new Date(rent.returnDate);
        var differenceMillisecond = returnDate - pickupDate;
        day_rentals = differenceMillisecond / (24 * 60 * 60 * 1000);}
    })
    return day_rentals;
}

function price() {
    //    for(var cars in Element )
    rentals.forEach( //see all rentals 
        function getPrice(element) {

           
            var carID = element.carId;
            var distance = element.distance;
           

            var price = 0;

            var priceperday = 0;
            var priceperkm = 0;
            var price_time = 0;
            var price_km = 0;
            var day_rentals = 0;
           
           
           
            //get price per day and price per km 
            cars.forEach(function getPricePerDay(car) { //see all cars 
                if (carID == car.id) { //if carID = car.id === same car 
                    priceperday= car.pricePerDay;
                    priceperkm = car.pricePerKm;
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
            
          
        }
        )
}

function exercice3() {
    var commission = 0;
    var owner = 0;
    var Driver
    var pourcent_insurance = 0.50;
    var insurance = 0;
    var roadside_assistance = 0;
    var drivy=0;
    var nbDay = 1;

    rentals.forEach( //get price and nbrday
        function (rent) {
            commission = rent.price * 0.30; //30 pourcent of price
            Driver = rent.price;
            owner = rent.price - commission;
            if (getNbrDay(rent.id) != 0) { nbDay = getNbrDay(rent.id); }

            
            roadside_assistance = nbDay;
            insurance = commission * pourcent_insurance; //50 % of commission 
            drivy = commission - (insurance + roadside_assistance); //drivy rest 
            

            actors.forEach(

            
        function (acto) {
            if (rent.id == acto.rentalId) {//if same id, put insurance ect inside 
                acto.payment.forEach(
                    function (paymentActor) {
                        if (paymentActor.who == "insurance") { paymentActor.amount = insurance;  }
                        else if (paymentActor.who == "assistance") { paymentActor.amount = roadside_assistance;  }
                        else if (paymentActor.who == "drivy") { paymentActor.amount = drivy; }
                        else if (paymentActor.who == "owner") { paymentActor.amount = owner; }
                        else if (paymentActor.who == "driver") { paymentActor.amount = Driver; }
                      }
                    )
            }
                //get id, modify amount
        }
        )


        }
        )
  

   
    }

function exercice4() {
    var amount_option = 4;

    rentals.forEach(function (rent) {
        var nbrDay = getNbrDay(rent.id);
        if (nbrDay != 0) { amount_option = amount_option * nbrDay; }

        if (rent.options.deductibleReduction) { //if assurance modify amount of driver and drivy 

            actors.forEach(function (acto) {
                if (rent.id == acto.rentalId) {//if same id, put insurance ect inside 
                    acto.payment.forEach(
                        function (paymentActor) {
                            if (paymentActor.who == "driver") { paymentActor.amount = paymentActor.amount + amount_option; }
                            else if (paymentActor.who == "drivy") { paymentActor.amount = paymentActor.amount + amount_option; }
                        }
                        )
                }
            })
        }




        })
    
}

function exercice5() {
    //because i do the things by ohter way, i modify actor before commission in rentals object. so i just put value from actors in rentals
    rentals.forEach( 
        function (rent) {
            actors.forEach(


                    function (acto) {
                        if (rent.id == acto.rentalId) {//if same id, put insurance ect inside 
                            acto.payment.forEach(
                                function (paymentActor) {
                                    if (paymentActor.who == "insurance") { rent.commission.insurance = paymentActor.amount; }
                                    else if (paymentActor.who == "assistance") { rent.commission.assistance = paymentActor.amount; }
                                    else if (paymentActor.who == "drivy") { rent.commission.drivy = paymentActor.amount; }
                                   
                                }
                                )
                        }
                        //get id, modify amount
                    }
                    )


        }
        )



    }

function affichage(element) {
    document.write("<p>");
    var name_vehicle = element.carId;
    cars.forEach(function(car){  if (car.vehicule != null && car.id==element.carId) { name_vehicle = car.vehicule; }})
    document.write("car  : ".fontcolor("red") + name_vehicle + " driver firstname : ".fontcolor("red") + element.driver.firstName + " lastname : ".fontcolor("red") + element.driver.lastName + " pickupDate : ".fontcolor("red") + element.pickupDate + " returnDate : ".fontcolor("red") + element.returnDate + " Distance : ".fontcolor("red") + element.distance + " Price : ".fontcolor("red") + element.price + " commission : ".fontcolor("green")+" assistance :".fontcolor("red") + element.commission.assistance + " drivy : ".fontcolor("red") + element.commission.drivy + " insurance : ".fontcolor("red") + element.commission.insurance);


    document.write("</p>");

}
//execution of function for exercices 

function RentModification(rentID, newDate, newDistance) {
    var newprice;
    var deltaOwner, deltaInsurance, deltaAssistance, deltaDrivy, deltaDriver;
    var firstOwner, firstInsurance, firstAssistance, firstDrivy, firstDriver; //get precedent
    var newOwner, newInsurance, newAssistance, newDrivy, newDriver;
    var commission = 0; var pourcent_insurance = 0.50; var nbDay = 1;

    rentals.forEach(function (rent) {

        if (rent.id == rentID) {
        actors.forEach(function(acto){
            if( rent.id==acto.rentalId){
                acto.payment.forEach(function (paymentActors) {
                    if (paymentActor.who == "insurance") { firstInsurance = paymentActor.amount; }
                    else if (paymentActor.who == "assistance") { firstAssistance = paymentActor.amount; }
                    else if (paymentActor.who == "drivy") { firstDrivy = paymentActor.amount; }
                    else if (paymentActor.who == "driver") { firstDriver = paymentActor.amount; }
                    else if (paymentActor.who == "owner") { firstOwner = paymentActor.amount; }
                }
                )
            }
            
        }
        ) // get actors amoun
      //region get new price possible put into one function 
        var carID = rent.carId;
        var distance =newDistance;
           
        var priceperday = 0;
        var priceperkm = 0;
        var price_time = 0;
        var price_km = 0;
        var day_rentals = 0;
           
           
           
        //get price per day and price per km 
        cars.forEach(function getPricePerDay(car) { //see all cars 
            if (carID == car.id) { //if carID = car.id === same car 
                priceperday= car.pricePerDay;
                priceperkm = car.pricePerKm;
            }
        })

        // region price per day 
        var precedentDate = new Date(rent.returnDate);
        var newDateReturn = new Date(newDate);
        var differenceMillisecond = newDateReturn - precedentDate;
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
    
        newprice = price_km + price_time;
        
            //---------------------------------------------------------
       
        commission = newprice * 0.30; //30 pourcent of price
        newDriver = newprice;
        newOwner = newprice - commission;
        newInsurance = commission * pourcent_insurance;
        newDrivy = commission - (newInsurance + day_rentals);

        deltaOwner = newOwner - firstOwner;
        deltaInsurance = newInsurance - firstInsurance;
        deltaAssistance = newAssistance - firstAssistance;
        deltaDriver = newDriver - firstDriver;
        deltaDrivy = newDrivy - firstDrivy;

    }
        
    }
        )

    }
    



price();
exercice3();
exercice4();
exercice5();

rentals.forEach(affichage);

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);




//rentals.forEach(function(element){console.log(element);}) //get each elements of rentals and print them on log console 
