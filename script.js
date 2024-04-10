function newElement() {
    var li = document.createElement("li");
    var titleValue = document.getElementById("myInput").value;
    var deadlineValue = document.getElementById("deadlineInput").value;
    var priorityValue = document.getElementById("priorityInput").value;
    var labelValue = document.getElementById("labelInput").value;
  
    var titleSpan = document.createElement("span");
    var titleText = document.createTextNode(titleValue);
    titleSpan.appendChild(titleText);
    li.appendChild(titleSpan);
  
    var deadlineSpan = document.createElement("span");
    var deadlineText = document.createTextNode(" Deadline: " + deadlineValue);
    deadlineSpan.appendChild(deadlineText);
    li.appendChild(deadlineSpan);
  
    var prioritySpan = document.createElement("span");
    var priorityText = document.createTextNode(" Priority: " + priorityValue);
    prioritySpan.appendChild(priorityText);
    li.appendChild(prioritySpan);
  
    var labelSpan = document.createElement("span");
    var labelText = document.createTextNode(" Label: " + labelValue);
    labelSpan.appendChild(labelText);
    li.appendChild(labelSpan);
  
    if (titleValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    // Clear input fields after adding the item
    document.getElementById("myInput").value = "";
    document.getElementById("deadlineInput").value = "";
    document.getElementById("priorityInput").value = "low";
    document.getElementById("labelInput").value = "";
  }
  
  // Rest of the JavaScript code for list item functionality
  var myNodelist = document.getElementsByTagName("li");
  for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  