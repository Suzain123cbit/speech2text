function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    addTask(transcript);
  };

  recognition.onerror = function (event) {
    alert("Error occurred in recognition: " + event.error);
  };
}

function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => li.style.textDecoration = li.style.textDecoration === "line-through" ? "" : "line-through";
  document.getElementById("taskList").appendChild(li);
}
