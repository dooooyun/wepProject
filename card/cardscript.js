document.addEventListener('DOMContentLoaded', () => {
    const playerName = document.querySelector('.player-name');
    const playerPosition = document.querySelector('.player-position');
    const statElements = document.querySelectorAll('.stat strong');

    // 예제 데이터
    const playerData = {
        name: "크리스티아누 호날두",
        position: "LW",
        stats: [91, 93, 81, 89, 35, 78] // 속도, 슛, 패스, 드리블, 수비, 피지컬
    };

    // 이름과 포지션 설정
    playerName.textContent = playerData.name;
    playerPosition.textContent = playerData.position;

    // 능력치 설정
    statElements.forEach((element, index) => {
        element.textContent = playerData.stats[index];
    });
});

