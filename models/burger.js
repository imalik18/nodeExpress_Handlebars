var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.allBurgers("burgers", function (res) {
            callback(res)
        });
    },
    create: function(name, callback) {
        orm.create("burgers", [
            "name", "devoured" 
        ], [
            name, false
        ], callback);
    },
    update: function(id, callback) {
        var condition = "id" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, callback);
    }
};

module.exports= burger; 