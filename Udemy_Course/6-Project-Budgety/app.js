//Create new module using IIFE
//Can only access x and add via usage of publicTest function

var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x+a;
    }

    return {
        publicTest : function(b) {
            return add(b);
        }
    }
})();

var UIController = (function() {
    // some code


})();

//Pass arguments/functions into connecting controller function
var controller = (function(budgetCtrl, UICtrl) {
    //some code

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic : function() {
            console.log(z);
        }
    }

})(budgetController, UIController);

