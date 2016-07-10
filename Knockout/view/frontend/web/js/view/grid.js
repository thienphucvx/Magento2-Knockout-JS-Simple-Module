define(
    [
        'jquery',
        'ko',
        'uiComponent',
    ],
    function ($, ko, component) {
        "use strict";
        function SeatReservation(name, initialMeal) {
            var self = this;
            self.name = name;
            self.meal = ko.observable(initialMeal);

            self.formattedPrice = ko.computed(function() {
                var price = self.meal().price;
                return price ? "$" + price.toFixed(2) : "None";
            });
        }

        return component.extend({


            seats: ko.observableArray([]),
            availableMeals : ko.observableArray([]),

            addSeat : function() {
                var seat = new SeatReservation ("Your Name",this.availableMeals()[0]);
                this.seats.push(seat);
            },
            removeSeat : function(parent,seat) {
                parent.seats.remove(seat);

            },

            addMeal:function(meals){

                for (var i in meals){
                    this.availableMeals.push(meals[i]);
                }

            },


            totalSurcharge : function() {
                var total = 0;
                for (var i = 0; i < this.seats().length; i++)
                    total += this.seats()[i].meal().price;
                return total;
            },

            initialize: function () {

                this._super();
                this._render();

            },
            _render:function(){

                var self = this;
                var meals = [
                    { mealName: "Standard (sandwich)", price: 0 },
                    { mealName: "Premium (lobster)", price: 34.95 },
                    { mealName: "Ultimate (whole zebra)", price: 290 }
                ];
                this.addMeal(meals);
                var init_seats = [
                    new SeatReservation ("Henry",this.availableMeals()[0]),
                    new SeatReservation ("Bert",this.availableMeals()[0]),

                ];
                for(var i in init_seats){
                    this.seats.push(init_seats[i]);
                }
            },
            defaults: {
                template: 'Thienphucvx_Knockout/grid',
            },
        });
    }
);