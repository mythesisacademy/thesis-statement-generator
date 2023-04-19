document.getElementById("thesis-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const topic = document.getElementById("topic").value;
    const opinion = document.getElementById("opinion").value;
    const reason = document.getElementById("reason").value;
  
    const thesisStatement = `In this essay, I will argue that ${topic} is ${opinion} due to ${reason}.`;
    document.getElementById("thesis-statement").innerText = thesisStatement;
  });
  