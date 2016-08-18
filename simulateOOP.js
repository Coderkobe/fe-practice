// 模拟模块开发

var settleAccount = function() {
  //this.name = name;
  this.init();
};
settleAccount.prototype.init = function() {
  person.sayName();
};

var Person = function(name) {
  this.name = name;
};

//alert(person['name']);
Person.prototype.sayName = function() {
  // var self = this;
  console.log(this.name);
};
var person = new Person('Tomhu');
var n = new settleAccount();
