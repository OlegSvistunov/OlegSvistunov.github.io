var Human = function(params) {
  this.name = params.name;
  this.age = params.age;
  this.sex = params.sex;
  this.height = params.height;
  this.weight = params.weight;
};

var Worker = function(params) {
  Human.apply(this, arguments);
  this.job = params.job;
  this.salary = params.salary;
};

var Student = function(params) {
  Human.apply(this, arguments);
  this.course = params.course;
  this.grants = params.grants;
};

Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);

Worker.prototype.work = function (how) {
  console.log(this.name + ' works ' + how);
};

Student.prototype.watchTVShows = function (tvShowName) {
  console.log(this.name + ' watch TV show ' + tvShowName);
};

user1 = new Worker({
  name: 'Michael Schumacher',
  age: 30,
  sex: 'male',
  height: 180,
  weight: 70,
  job: 'driver',
  salary: 100});

user2 = new Worker({
  name: 'Elfriede Jelinek',
  age: 55,
  sex: 'female',
  height: 165,
  weight: 70,
  job: 'writer',
  salary: 150});

user3 = new Student({
  name: 'Harry Potter',
  age: 16,
  sex: 'male',
  height: 160,
  weight: 50,
  grants: 20,
  course: 'Gryffindor'});

user4 = new Student({
  name: 'Hermione Granger',
  age: 16,
  sex: 'female',
  height: 155,
  weight: 50,
  grants: 10,
  course: 'Gryffindor'});

console.log(user1);
user1.work('racer');

console.log(user2);
user2.work('writer');

console.log(user3);
user3.watchTVShows('"Top Gear"');

console.log(user4);
user4.watchTVShows('"The Americans"');
