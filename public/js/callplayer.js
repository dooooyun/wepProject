document.addEventListener('DOMContentLoaded', () => {
    const playerElements = document.querySelectorAll('.team .player');
    const viewDetailsButton = document.getElementById('viewDetailsButton');
    const detailsBox = document.getElementById('playerDetails');
    const detailsContent = document.getElementById('detailsContent');
    const addSubstituteButton = document.getElementById('addSubstituteButton');
    const substituteList = document.getElementById('substituteList');
    let isDetailsMode = false; // 세부사항 보기 모드 활성화 여부

    // 후보 선수 리스트
    const substitutes = [];
    const selectedPlayers = new Set(); // 이미 선택된 선수 저장

    // 세부사항 보기 버튼 클릭 이벤트
    viewDetailsButton.addEventListener('click', () => {
        isDetailsMode = !isDetailsMode; // 모드 토글
        detailsBox.style.display = isDetailsMode ? 'block' : 'none';
        viewDetailsButton.textContent = isDetailsMode ? '세부사항 보기 종료' : '세부사항 보기';
        if (!isDetailsMode) {
            detailsContent.innerHTML = '<p>선수를 클릭하여 세부사항을 확인하세요.</p>';
        }
    });

    // 카드를 생성하는 함수
    function createPlayerCardHTML(player) {
        return `
            <div class="player-card">
                <div class="card-header">
                    <div class="player-position" style="font-size: 18px;">${player.position}</div>
                </div>
                <div class="player-photo">
                    <img src="${player.imageUrl}" alt="Player Photo">
                </div>
                <div class="card-body">
                    <div class="player-name">${player.name}</div>
                    <div class="stats">
                        <div class="stat">${player.stats[0]} <span>PAC</span></div>
                        <div class="stat">${player.stats[1]} <span>SHO</span></div>
                        <div class="stat">${player.stats[2]} <span>PAS</span></div>
                        <div class="stat">${player.stats[3]} <span>DRI</span></div>
                        <div class="stat">${player.stats[4]} <span>DEF</span></div>
                        <div class="stat">${player.stats[5]} <span>PHY</span></div>
                    </div>
                </div>
            </div>
        `;
    }

    // 일반 선수 클릭 이벤트
    playerElements.forEach(playerElement => {
        playerElement.addEventListener('click', () => {
            if (isDetailsMode) {
                const players = JSON.parse(localStorage.getItem('playerCards')) || [];
                const playerName = playerElement.querySelector('.player-name')?.textContent;

                const selectedPlayer = players.find(player => player.name === playerName);

                if (selectedPlayer) {
                    detailsContent.innerHTML = createPlayerCardHTML(selectedPlayer);
                } else {
                    detailsContent.innerHTML = '<p>선수 정보를 찾을 수 없습니다.</p>';
                }
            } else {
                const players = JSON.parse(localStorage.getItem('playerCards')) || [];

                // "선수 없음" 옵션 추가
                const playerOptions = [
                    ...players
                        .map((player, index) => {
                            if (!selectedPlayers.has(player.name)) {
                                return `${index}: ${player.name} (${player.position})`;
                            }
                            return null; // 이미 선택된 선수는 제외
                        })
                        .filter(option => option !== null),
                    `${players.length}: 선수 없음`,
                ];

                const selectedPlayerIndex = prompt(
                    `선수 카드를 선택하세요 (0 ~ ${players.length})\n${playerOptions.join('\n')}`
                );

                if (selectedPlayerIndex !== null && !isNaN(selectedPlayerIndex)) {
                    const index = parseInt(selectedPlayerIndex, 10);
                    if (index === players.length) {
                        // "선수 없음"이 선택된 경우
                        playerElement.innerHTML = `
                            <span class="player-name" style="color: black; border: none;"></span>
                            <span class="player-position" style="color: black; border: none;"></span>
                        `;
                    } else if (players[index] && !selectedPlayers.has(players[index].name)) {
                        // 선수 카드 선택
                        const selectedPlayer = players[index];
                        playerElement.innerHTML = `
                            <div class="player-name" style="color: black; width:50px; border: none;">${selectedPlayer.name}</div>
                            <div class="player-position" style="height: 20px; width:50px; line-height: 20px; color: black; border: none;">${selectedPlayer.position}</div>
                        `;
                        selectedPlayers.add(selectedPlayer.name); // 선택된 선수 추가
                    } else {
                        alert('이미 선택된 선수이거나 올바른 번호를 입력해주세요.');
                    }
                }
            }
        });
    });

    // 후보 선수 등록 버튼 클릭 이벤트
    addSubstituteButton.addEventListener('click', () => {
        const players = JSON.parse(localStorage.getItem('playerCards')) || [];
        if (players.length === 0) {
            alert('저장된 선수 카드가 없습니다.');
            return;
        }

        const playerOptions = players
            .map((player, index) => {
                if (!selectedPlayers.has(player.name)) {
                    return `${index}: ${player.name} (${player.position})`;
                }
                return null; // 이미 선택된 선수는 제외
            })
            .filter(option => option !== null);

        const selectedPlayerIndex = prompt(
            `후보로 등록할 선수를 선택하세요 (0 ~ ${players.length - 1})\n${playerOptions.join('\n')}`
        );

        if (selectedPlayerIndex !== null && !isNaN(selectedPlayerIndex)) {
            const selectedPlayer = players[parseInt(selectedPlayerIndex, 10)];
            if (selectedPlayer && !substitutes.includes(selectedPlayer)) {
                substitutes.push(selectedPlayer);

                // 후보 선수 텍스트로 생성
                const substitutePlayer = document.createElement('div');
                substitutePlayer.classList.add('substitute-player');
                substitutePlayer.textContent = `${selectedPlayer.name} (${selectedPlayer.position})`;
                substituteList.appendChild(substitutePlayer);

                // 삭제 버튼 추가
                const deleteButton = document.createElement('button');
                deleteButton.textContent = '삭제';
                deleteButton.classList.add('delete-substitute');
                substitutePlayer.appendChild(deleteButton);

                deleteButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // 부모 클릭 이벤트 방지
                    substitutePlayer.remove();
                    const index = substitutes.indexOf(selectedPlayer);
                    if (index > -1) substitutes.splice(index, 1);
                    selectedPlayers.delete(selectedPlayer.name); // 선택된 선수 제거
                });

                // 후보 선수 클릭 이벤트
                substitutePlayer.addEventListener('click', () => {
                    if (isDetailsMode) {
                        detailsContent.innerHTML = createPlayerCardHTML(selectedPlayer);
                    } else {
                        alert('세부사항 보기 모드를 활성화해주세요.');
                    }
                });

                selectedPlayers.add(selectedPlayer.name); // 선택된 선수 추가
            } else {
                alert('이미 등록된 선수이거나 올바르지 않은 번호입니다.');
            }
        }
    });
});