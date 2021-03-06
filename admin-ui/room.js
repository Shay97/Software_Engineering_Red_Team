// Room Items
var roomItems = document.getElementsByClassName("room-item");
var i;
for (i = 0; i < roomItems.length; i++) {
  var div = document.createElement("DIV");
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  div.className = "room-item-options";
  span.className = "close";
  span.appendChild(txt);
  div.appendChild(span);

  roomItems[i].appendChild(div);
}

// Close Room Item On Click
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var optionsDiv = this.parentElement;
    var roomItemDiv = optionsDiv.parentElement;
    roomItemDiv.style.display = "none";
  };
}

// Room Form
function openForm() {
  document.getElementById("roomForm").style.display = "block";
}

function closeForm() {
  document.getElementById("room-input").value = "";
  document.getElementById("capacity-input").value = "";
  document.getElementById("roomForm").style.display = "none";
}

function addRoom() {
  // Create div to hold new room item
  var roomDiv = document.createElement("div");
  roomDiv.classList.add("room-item");

  // Create div to hold new room info
  var div = document.createElement("div");
  div.classList.add("room-item-info");

  // Create Room Number Info
  var roomInput = document.getElementById("room-input").value;
  var roomText = document.createTextNode("Room #: " + roomInput);
  var roomNumber = document.createElement("h3");
  roomNumber.appendChild(roomText);

  // Create Room Capacity Info
  var capacityInput = document.getElementById("capacity-input").value;
  var capacityText = document.createTextNode("Capacity: " + capacityInput);
  var roomCapacity = document.createElement("p");
  roomCapacity.appendChild(capacityText);

  // Append details to room info div
  div.appendChild(roomNumber);
  div.appendChild(roomCapacity);

  // Create room options div
  var optionsDiv = document.createElement("DIV");
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");

  optionsDiv.className = "room-item-options";
  span.className = "close";
  span.appendChild(txt);
  optionsDiv.appendChild(span);

  roomDiv.appendChild(div);
  roomDiv.appendChild(optionsDiv);

  document.getElementById("room-list").appendChild(roomDiv);

  // Add Close on click
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var optionsDiv = this.parentElement;
      var roomItemDiv = optionsDiv.parentElement;
      roomItemDiv.style.display = "none";
    };
  }
  closeForm();
}
