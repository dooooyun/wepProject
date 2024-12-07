const players = document.querySelectorAll('.player');
const ball = document.querySelector('.ball');
const field = document.getElementById('field');

// 선수 드래그 이벤트
players.forEach(player => {
    player.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('type', 'player');
        e.dataTransfer.setData('id', e.target.id);
    });
});

// 공 드래그 이벤트
ball.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('type', 'ball');
    e.dataTransfer.setData('id', e.target.id);
});

field.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// 드롭 이벤트
field.addEventListener('drop', (e) => {
    e.preventDefault();

    const type = e.dataTransfer.getData('type');
    const id = e.dataTransfer.getData('id');
    const rect = field.getBoundingClientRect();
    const x = e.clientX - rect.left - 20;
    const y = e.clientY - rect.top - 20;

    if (type === 'player') {
        const player = document.getElementById(id);
        player.style.left = `${x}px`;
        player.style.top = `${y}px`;
    } else if (type === 'ball') {
        const ballElement = document.getElementById(id);
        ballElement.style.left = `${x+20}px`;
        ballElement.style.top = `${y+20}px`;
    }
});