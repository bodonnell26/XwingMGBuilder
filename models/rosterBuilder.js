$(document).ready(function() {

	function pilot(name, value) {
    var self = this;
    self.pilot = ko.observable(name);
    self.value = ko.observable(value);
  }
  
  function ship() {
    var self = this;
    self.shipName = ko.observable('');
    self.pilotInfo = ko.observable(new pilot('', 0));
  }

  function MainView() {
    var self = this;
    self.shipRoster = ko.observableArray([new ship]);
    self.counter = ko.observable(self.shipRoster().length);
    self.availableShips = ko.observableArray(["", "B-Wing", "A-Wing", "X-Wing"]);
    self.availablePilots = ko.observableArray([new pilot("Wedge Antillies", 32), new pilot("Luke Skywalker", 35)]);
    self.totalPoints = ko.observable(0);
    
    self.addNewShip = function() {
      self.shipRoster.push(new ship);
    };
    
    self.removeShip = function(shipToRemove){
    	self.shipRoster.remove(shipToRemove);
    };
    
    self.shipRoster.subscribe(function(){
    	var temp = 0;
      for(var i = 0; i<self.shipRoster().length; i++){
      	temp += self.shipRoster()[i].pilotInfo().value();
      }
      self.totalPoints(temp);
    });

  }
  var binding = new MainView();
  ko.applyBindings(binding);

});