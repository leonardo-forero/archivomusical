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
  const track = document.getElementById('teamContainer');
  const wrapper = track.parentElement; // contenedor visible
  const members = track.children;

  const pageWidth = wrapper.offsetWidth;
  const totalPages = Math.ceil(track.scrollWidth / pageWidth);

  teamIndex += direction;

  if (teamIndex < 0) teamIndex = 0;
  if (teamIndex > totalPages - 1) teamIndex = totalPages - 1;

  track.style.transform = `translateX(-${teamIndex * pageWidth}px)`;
}
