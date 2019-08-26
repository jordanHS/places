// Business Logic for Places ---------
function Places() {
  this.cities = [],
  this.currentId = 0
}

Places.prototype.addCity = function(city) {
  city.id=this.assignId();
  this.cities.push(city);
}

Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Cities ---------
function City(location, landMarks, timeOfYear) {
  this.location = location,
  this.landMarks = landMarks,
  this.timeOfYear = timeOfYear
}

City.prototype.fullCityDetails = function() {
  var btn = document.createElement("BUTTON");   // Create a <button> element
  btn.innerHTML = this.location;
  btn.setAttribute("id", this.location);        // Insert text
  document.body.appendChild(btn);               // Append <button> to <body>
  return "Location is " + this.location + "Landmarks here are " + this.landMarks + "Time of Year Visited ";
}

Places.prototype.findCity = function(id) {
  for (var i=0; i< this.cities.length; i++) {
     if (this.cities[i]) {
      if (this.cities[i].id == id) {
        return this.cities[i];
      }
    }
  };
  return false;
}

Places.prototype.deleteCity = function(id) {
  for (var i=0; i< this.cities.length; i++) {
   if (this.cities[i]) {
    if (this.cities[i].id == id) {
      delete this.cities[i];
      return true;
    }
   }
  };
  return false;
}

// front end
$(document).ready(function(){
  //.on( events [, selector ] [, data ], handler )
    $("#btn").on(click, function() {
        console.log("btn, i am in the btn click event fxn!", btn);
        // $( this ).slideUp(); //css feature
        event.PreventDefault();
    });
  // );
});
//$(".container").
