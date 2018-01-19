$(document).ready(function() {
  function ship() {
    var self = this;
    self.shipName = ko.observable('');
    self.value = ko.observable();
    self.pilot = ko.observable();

  }

  function pilot(name, value) {
    var self = this;
    self.pilot = ko.observable(name);
    self.value = ko.observable(value);

  }

  function populateAvailableShips() {
    var shipList = ["", "A-Wing", "B-Wing", "X-Wing"];
  }

  function MainView() {
    var self = this;
    self.shipRoster = ko.observableArray([new ship]);
    self.counter = ko.observable(self.shipRoster().length);
    self.availableShips = ko.observableArray(["", "B-Wing", "A-Wing", "X-Wing"]);
    self.availablePilots = ko.observableArray([new pilot("Wedge Antillies", 32), new pilot("Luke Skywalker", 35)]);
    self.addNewShip = function() {
      self.shipRoster.push(new ship);
    };

  }
  var binding = new MainView();
  ko.applyBindings(binding);

});