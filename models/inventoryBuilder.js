$(document).ready(function() {
	//dummy data
  var shipList = ["X-Wing", "B-Wing", "A-Wing", "Y-Wing"];
  var pilotList = [["Wedge Antilles", "9","29","1"],["Luke Skywalker", "8", "28", "2"]];
  var upgradeList = [["R2-D2", "Astromech", "1"],["Proton Torpedoes", "Torpedoes", "2"]]
	
  /*might not need this. just add expansion field to ships, pilots, and upgrades
	function expansion(name){
  	var self = this;
    self.expansionName = name;
    self.ships = ko.observableArray();
    self.pilots = ko.observableArray();
    self.upgrades = ko.observableArray();
  }*/
  function pilot(name, skill, value, id) {
    var self = this;
    self.pilotName = ko.observable(name);
    self.skill = ko.observable(skill);
    self.cost = ko.observable(value);
    self.pilotID = ko.observable(id);
    self.pilotQty = ko.observable(1);
  }
  function upgrade(name, type, id){
  	var self = this;
    self.upgradeName = ko.observable(name);
    self.upgradeType = ko.observable(type);
    self.upgradeID = ko.observable(id);
    self.upgradeQty = ko.observable(1);
    //maybe typeID instead?
    //self.upgradeDescription to be added for info button
  }
  function starShip(name) {
    var self = this;
    self.shipName = ko.observable(name);
    self.shipQty = ko.observable(1);
  }
  function list(){
  	var self = this;
    self.ships = ko.observableArray([]);
    self.pilots = ko.observableArray([]);
    self.upgrades = ko.observableArray([]);
  }
  function populateCatalog(model){
    var temp = [];
    for(var i = 0; i<shipList.length; i++){
    	temp.push(new starShip(shipList[i]));
    }
    model.fullCatalog().ships(temp);
    temp = [];
    for(i = 0; i<pilotList.length; i++){
    	temp.push(new pilot(pilotList[i][0],pilotList[i][1],pilotList[i][2],pilotList[i][3]));
    }
    model.fullCatalog().pilots(temp);
    temp = [];
    for(i = 0; i<upgradeList.length; i++){
    	temp.push(new upgrade(upgradeList[i][0],upgradeList[i][1],upgradeList[i][2]));
    }
    model.fullCatalog().upgrades(temp);
  }
  

	function MainView(){
		var self = this;
  	self.myInventory = ko.observable(new list());
  	self.fullCatalog = ko.observable(new list());

    self.magic = function(){
    	console.log(self.myInventory());
    };
	}
  
  var model = new MainView();
  populateCatalog(model);
  ko.applyBindings(model);


});