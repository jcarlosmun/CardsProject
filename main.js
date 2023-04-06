console.log('Hello, world!');

function generateMessage1() {
    const messages1 = [
      'The Pope',
      'White people',
      'The devil himself'
    ];
  
    const randomIndex = Math.floor(Math.random() * messages1.length);
  
    const message1 = messages1[randomIndex];
    document.getElementById("button1").value = message1;
  
    const messageContainer1 = document.getElementById("i1");
    messageContainer1.value = message1;
  }
  
  const button1 = document.getElementById("button1");
  button1.addEventListener("click", generateMessage1);