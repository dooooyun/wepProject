document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('playerForm').addEventListener('submit', (e) => {
        e.preventDefault(); // 폼 제출 방지

        const name = document.getElementById('playerName').value;
        const position = document.getElementById('playerPosition').value;
        const stats = [
            document.getElementById('statSpeed').value,
            document.getElementById('statShoot').value,
            document.getElementById('statPass').value,
            document.getElementById('statDribble').value,
            document.getElementById('statDefense').value,
            document.getElementById('statPhysical').value,
        ];

        const imageInput = document.getElementById('playerImage');
        const imageUrl = imageInput && imageInput.files[0]
            ? URL.createObjectURL(imageInput.files[0])
            : 'https://via.placeholder.com/150'; // 기본 이미지

        // 카드 생성
        createPlayerCard(name, position, stats, imageUrl);

        // 폼 초기화
        e.target.reset();
    });
});

function createPlayerCard(name, position, stats, imageUrl) {
    const cardContainer = document.querySelector('.player-cards');
    const card = document.createElement('div');
    card.classList.add('player-card');

    card.innerHTML = `
        <div class="card-header">
            <span class="player-position">${position}</span>
        </div>
        <div class="player-photo">
            <img src="${imageUrl}" alt="Player Photo">
        </div>
        <div class="card-body">
            <h2 class="player-name">${name}</h2>
            <div class="stats">
                <div class="stat"><span>속도</span> <strong>${stats[0]}</strong></div>
                <div class="stat"><span>슛</span> <strong>${stats[1]}</strong></div>
                <div class="stat"><span>패스</span> <strong>${stats[2]}</strong></div>
                <div class="stat"><span>드리블</span> <strong>${stats[3]}</strong></div>
                <div class="stat"><span>수비</span> <strong>${stats[4]}</strong></div>
                <div class="stat"><span>피지컬</span> <strong>${stats[5]}</strong></div>
            </div>
        </div>
    `;

    cardContainer.appendChild(card);
}