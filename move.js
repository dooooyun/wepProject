const players = document.querySelectorAll('.player');

players.forEach(player => {
    player.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });

    player.addEventListener('dragend', () => {
        player.classList.remove('dragging');
    });
});

const field = document.getElementById('field');

field.addEventListener('dragover', (e) => {
    e.preventDefault();
});

field.addEventListener('drop', (e) => {
    e.preventDefault();
    const playerId = e.dataTransfer.getData('text/plain');
    const player = document.getElementById(playerId);

    // 선수 위치 조정
    const rect = field.getBoundingClientRect();
    const x = e.clientX - rect.left - 15; // 중앙 정렬
    const y = e.clientY - rect.top - 15; // 중앙 정렬

    player.style.left = `${x}px`;
    player.style.top = `${y}px`;
});