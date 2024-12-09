// 이미지 파일을 Base64로 변환하는 함수
function convertImageToBase64(file, callback) {
    if (!file) {
        console.error("이미지 파일이 선택되지 않았습니다.");
        return;
    }
    const reader = new FileReader();
    reader.onload = () => callback(reader.result); // Base64 문자열 반환
    reader.onerror = (error) => console.error("이미지 변환 실패:", error);
    reader.readAsDataURL(file);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('playerForm');
    const cardContainer = document.getElementById('playerCardsContainer');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

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
        if (imageInput && imageInput.files[0]) {
            convertImageToBase64(imageInput.files[0], (base64Image) => {
                const playerCard = { name, position, stats, imageUrl: base64Image };
                savePlayerCard(playerCard);
                renderPlayerCards();
            });
        } else {
            const playerCard = {
                name,
                position,
                stats,
                imageUrl: 'https://via.placeholder.com/150',
            };
            savePlayerCard(playerCard);
            renderPlayerCards();
        }

        e.target.reset();
    });

    renderPlayerCards();
});

function savePlayerCard(card) {
    const cards = JSON.parse(localStorage.getItem('playerCards')) || [];
    cards.push(card);
    localStorage.setItem('playerCards', JSON.stringify(cards));
    alert('선수 카드가 저장되었습니다!');
}

function renderPlayerCards() {
    const cards = JSON.parse(localStorage.getItem('playerCards')) || [];
    const cardContainer = document.getElementById('playerCardsContainer');
    cardContainer.innerHTML = ''; // 기존 카드 초기화

    cards.forEach((card, index) => {
        // 카드 생성
        const playerCardWrapper = document.createElement('div');
        playerCardWrapper.classList.add('player-card-wrapper');

        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');

        playerCard.innerHTML = `
            <div class="card-header">
                <span class="player-position">${card.position}</span>
            </div>
            <div class="player-photo">
                <img src="${card.imageUrl}" alt="Player Photo">
            </div>
            <div class="card-body">
                <h2 class="player-name">${card.name}</h2>
                <div class="stats">
                    <div class="stat"><span>속도</span> <strong>${card.stats[0]}</strong></div>
                    <div class="stat"><span>슛</span> <strong>${card.stats[1]}</strong></div>
                    <div class="stat"><span>패스</span> <strong>${card.stats[2]}</strong></div>
                    <div class="stat"><span>드리블</span> <strong>${card.stats[3]}</strong></div>
                    <div class="stat"><span>수비</span> <strong>${card.stats[4]}</strong></div>
                    <div class="stat"><span>피지컬</span> <strong>${card.stats[5]}</strong></div>
                </div>
            </div>
        `;

        // 삭제 버튼 생성
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-card');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = () => deletePlayerCard(index);

        playerCardWrapper.appendChild(playerCard);
        playerCardWrapper.appendChild(deleteButton);

        cardContainer.appendChild(playerCardWrapper);
    });
}

function deletePlayerCard(index) {
    let cards = JSON.parse(localStorage.getItem('playerCards')) || [];
    cards.splice(index, 1);
    localStorage.setItem('playerCards', JSON.stringify(cards));
    renderPlayerCards();
    alert('선수 카드가 삭제되었습니다!');
}

function convertImageToBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result);
    reader.readAsDataURL(file);
}