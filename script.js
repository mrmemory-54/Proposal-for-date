let yesScale = 1;
let selectedActivity = "Surprise Me";

const noMessages = [
  "Are you sure?",
  "Better say yes!",
  "Babe please :(",
  "Don't do this...",
  "I'm gonna cry...",
  "Heart broken... 💔"
];
let msgIndex = 0;

function handleNoClick() {
  // Increase Yes button size
  yesScale += 0.3;
  const yesBtn = document.getElementById('yesBtn');
  yesBtn.style.transform = `scale(${yesScale})`;

  // Update text under buttons
  const noMsg = document.getElementById('noMsg');
  noMsg.innerText = noMessages[msgIndex];
  msgIndex = (msgIndex + 1) % noMessages.length;
}

function goToScreen2() {
  document.getElementById('screen1').classList.add('hidden');
  document.getElementById('screen2').classList.remove('hidden');
}

function goToScreen3() {
  const dateValue = document.getElementById('dateInput').value;
  if (!dateValue) {
    alert("Please select a date first! 💕");
    return;
  }
  document.getElementById('screen2').classList.add('hidden');
  document.getElementById('screen3').classList.remove('hidden');
}

function selectActivity(btn) {
  const buttons = document.querySelectorAll('.opt-btn');
  buttons.forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedActivity = btn.innerText;
}

function showFinalScreen() {
  const dateValue = document.getElementById('dateInput').value;
  document.getElementById('screen3').classList.add('hidden');
  document.getElementById('screen4').classList.remove('hidden');
  
  document.getElementById('summaryText').innerHTML = `
    <b>DATE:</b> ${dateValue}<br><br>
    <b>ACTIVITY:</b> ${selectedActivity}
  `;
}

