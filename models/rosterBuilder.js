$(document).ready(function() {

    function pilot(name, skill, value) {
        var self = this;
        self.pilotName = ko.observable(name);
        self.skill = ko.observable(skill)
        self.value = ko.observable(value);
    }
  
    function starShip(name) {
      var self = this;
      self.shipName = ko.observable(name);
    }
    function upgrades(){

    }
    function shipAndPilots(ship, pilots){
          var self = this;
      self.ship = ko.observable(ship)
      self.pilots = ko.observableArray(pilots);
    }
    function rosterSlot(){
          var self = this;
      self.selectedShip = ko.observable('');
      self.selectedPilot = ko.observable('');
    }

    function MainView() {
      var self = this;
      self.shipRoster = ko.observableArray([]);
      self.counter = ko.observable(self.shipRoster().length);
      //self.availableShips = ko.observableArray(["", "B-Wing", "A-Wing", "X-Wing"]);
      self.inventory = ko.observableArray([new shipAndPilots(
      new starShip("X-Wing"),
      [new pilot("Wedge Antilles", 9, 29), 
      new pilot("Luke Skywalker", 8, 28)]),
      new shipAndPilots(new starShip("B-Wing"),
      [new pilot("Ten Numb", 8, 31)]),
      new shipAndPilots(new starShip("A-Wing"),
      [new pilot("Tycho Celchu", 8, 26),
      new pilot("Jake Farrell", 7, 24)])]);
      self.totalPoints = ko.observable(0);

      self.addNewShip = function() {
        self.shipRoster.push(new rosterSlot);
      };

      self.removeShip = function(shipToRemove){
          self.shipRoster.remove(shipToRemove);
      };

      self.updateTotal = function(){
          var temp = 0;
        for(var i = 0; i<self.shipRoster().length; i++){
          temp += self.shipRoster()[i].selectedPilot().value();
        }
        self.totalPoints(temp);
      };

      self.getPilots = function(selectedShip){
          var temp = -2;
        for(var i = 0; i<self.inventory().length; i++){      	
          if(self.inventory()[i].ship() == selectedShip()){
                  temp = i;
          }
        }
        return self.inventory()[temp].pilots();
      }

    }
    var binding = new MainView();
    ko.applyBindings(binding);

});
