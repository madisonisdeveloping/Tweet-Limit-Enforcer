document.getElementById("tweetForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var message = document.getElementById("tweet").value;
  var messageSliced = message.slice(0, 280);
  var remainingCharacters = 280 - messageSliced.length;
  var result = document.getElementById("result");
  
  result.innerHTML = "You have written " + messageSliced.length + " characters, you have " + remainingCharacters + " characters left.<br>";
  if (message.length > 280) {
    result.innerHTML += "Your tweet will be cut off here: <br>" + messageSliced;
  }
  result.style.display = "block";
});