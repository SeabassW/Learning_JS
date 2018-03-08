//Create new module using IIFE

// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Better to store all data in one object than multiple vars
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

})();



// UI CONTROLLER
var UIController = (function() {

    // Central place to store strings from the HTML file.
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {

            type: document.querySelector(DOMstrings.inputType).value,          // will be either 'inc' or 'exp'
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();



// GLOBAL APP CONTROLLER
//Pass arguments/functions into connecting controller function
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };



    var ctrlAddItem = function() {

        //1. Get the field input date
        var input = UICtrl.getInput();

        //2. Add the item to the budget controller

        //3. Add the item to the the UI

        //4. Calculate the budget

        //5. Display the budget on the UI

    };

    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    };


})(budgetController, UIController);

// Sets up the Events Listeners which enable app to work
controller.init();
