const btn = document.getElementById('chatbot-btn');
const chatbot = document.getElementById('chatbot');
const input = document.getElementById('chat-input');
const body = document.getElementById('chat-body');

btn.addEventListener('click', () => {
  chatbot.classList.toggle('hidden');
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value.trim() !== '') {
    const userMsg = document.createElement('div');
    userMsg.textContent = '👤 ' + input.value;
    body.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.textContent = '🤖 Gracias por tu mensaje. Pronto tendremos un asistente más completo.';
    body.appendChild(botMsg);

    input.value = '';
    body.scrollTop = body.scrollHeight;
  }
});

let teamIndex = 0;

function moveTeam(direction) {
  const container = document.getElementById('teamContainer');
  const memberWidth = 240 * 3; // ancho + gap
  const maxIndex = Math.ceil(container.children.length / 3) - 1;
  
  teamIndex += direction;

  if (teamIndex < 0) teamIndex = 0;
  if (teamIndex > maxIndex) teamIndex = maxIndex;

  container.style.transform = `translateX(-${teamIndex * memberWidth}px)`;
}
