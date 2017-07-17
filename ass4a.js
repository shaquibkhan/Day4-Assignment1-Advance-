var world;
(function (world) {
    var god = (function () {
        function god(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        god.prototype.getHumanInfo = function () {
            console.log("name is " + this.name + " age is " + this.age + " & sex is " + this.sex);
        };
        return god;
    }());
    world.god = god;
})(world || (world = {}));
var obj = new world.god('raju', 23, 'male');
obj.getHumanInfo();
