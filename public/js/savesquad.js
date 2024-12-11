document.addEventListener('DOMContentLoaded', () => {
    const playerElements = document.querySelectorAll('.team .player');
    const saveSquadButton = document.getElementById('saveSquadButton');
    const loadSquadButton = document.getElementById('loadSquadButton');
    const deleteSquadButton = document.getElementById('deleteSquadButton');
    const formationSelector = document.getElementById('formationSelector');
    const substitutes = [];
    const substituteList = document.getElementById('substituteList');
    const selectedPlayers = new Set(); // 선택된 선수 관리

    const SQUADS_KEY = 'mainSquads'; // LocalStorage 키

    // 스쿼드 저장
    saveSquadButton.addEventListener('click', () => {
        const squadName = prompt('스쿼드 이름을 입력하세요:');
        if (!squadName) {
            alert('스쿼드 이름을 입력해야 저장할 수 있습니다.');
            return;
        }

        const squadData = {
            name: squadName,
            formation: formationSelector.value,
            players: Array.from(playerElements).map(playerElement => {
                const name = playerElement.querySelector('.player-name')?.textContent;
                const position = playerElement.querySelector('.player-position')?.textContent;
                if (name && name !== '선수 없음') {
                    return { name, position };
                }
                return null; // 선수 없음 처리
            }),
            substitutes: substitutes.slice(), // 후보 선수 복사 저장
        };

        const existingSquads = JSON.parse(localStorage.getItem(SQUADS_KEY)) || [];
        existingSquads.push(squadData);

        localStorage.setItem(SQUADS_KEY, JSON.stringify(existingSquads));
        alert(`스쿼드 "${squadName}"가 저장되었습니다!`);
    });

    // 스쿼드 불러오기
    loadSquadButton.addEventListener('click', () => {
        const existingSquads = JSON.parse(localStorage.getItem(SQUADS_KEY)) || [];
        if (existingSquads.length === 0) {
            alert('저장된 스쿼드가 없습니다.');
            return;
        }

        const squadOptions = existingSquads.map((squad, index) => `${index}: ${squad.name}`).join('\n');
        const selectedSquadIndex = prompt(`불러올 스쿼드를 선택하세요:\n${squadOptions}`);

        if (selectedSquadIndex === null || isNaN(selectedSquadIndex)) {
            alert('올바른 번호를 입력해주세요.');
            return;
        }

        const squadData = existingSquads[parseInt(selectedSquadIndex, 10)];
        if (!squadData) {
            alert('올바른 번호를 입력해주세요.');
            return;
        }

        // 포메이션 복원
        applyFormation(squadData.formation);

        // 일반 선수 복원
        squadData.players.forEach((playerData, index) => {
            const playerElement = playerElements[index];
            if (playerData) {
                playerElement.innerHTML = `
                    <span class="player-name" style="color: black; width:50px; border: none;">${playerData.name}</span>
                    <span class="player-position" style="height: 20px; width:50px; line-height: 20px; color: black; border: none;">${playerData.position}</span>
                `;
                selectedPlayers.add(playerData.name);
            } else {
                playerElement.innerHTML = `
                    <div class="player-name" style="color: black; width:50px; border: none;"></div>
                    <div class="player-position" style="height: 20px; width:50px; line-height: 20px; color: black; border: none;"></div>
                `;
            }
        });

        // 후보 선수 복원
        substitutes.length = 0; // 기존 후보 초기화
        substituteList.innerHTML = ''; // 화면 초기화
        squadData.substitutes.forEach(sub => {
            substitutes.push(sub); // 후보 선수 데이터 복원
            selectedPlayers.add(sub.name); // 중복 방지 업데이트

            const substitutePlayer = document.createElement('div');
            substitutePlayer.classList.add('substitute-player');
            substitutePlayer.textContent = `${sub.name} (${sub.position})`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.classList.add('delete-substitute');
            substitutePlayer.appendChild(deleteButton);

            substituteList.appendChild(substitutePlayer);

            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                substitutePlayer.remove();
                const index = substitutes.indexOf(sub);
                if (index > -1) substitutes.splice(index, 1);
                selectedPlayers.delete(sub.name); // 중복 방지 업데이트
            });
        });

        alert(`스쿼드 "${squadData.name}"가 불러와졌습니다!`);
    });

    // 스쿼드 삭제
    deleteSquadButton.addEventListener('click', () => {
        const existingSquads = JSON.parse(localStorage.getItem(SQUADS_KEY)) || [];
        if (existingSquads.length === 0) {
            alert('저장된 스쿼드가 없습니다.');
            return;
        }

        const squadOptions = existingSquads.map((squad, index) => `${index}: ${squad.name}`).join('\n');
        const selectedSquadIndex = prompt(`삭제할 스쿼드를 선택하세요:\n${squadOptions}`);

        if (selectedSquadIndex === null || isNaN(selectedSquadIndex)) {
            alert('올바른 번호를 입력해주세요.');
            return;
        }

        const indexToDelete = parseInt(selectedSquadIndex, 10);
        if (indexToDelete >= 0 && indexToDelete < existingSquads.length) {
            const deletedSquad = existingSquads.splice(indexToDelete, 1);
            localStorage.setItem(SQUADS_KEY, JSON.stringify(existingSquads));
            alert(`스쿼드 "${deletedSquad[0].name}"가 삭제되었습니다!`);
        } else {
            alert('올바른 번호를 입력해주세요.');
        }
    });

    // 포메이션 적용
    function applyFormation(formation) {
        const positions = formations[formation]?.positions || {};
        for (const [id, pos] of Object.entries(positions)) {
            const player = document.getElementById(id);
            if (player) {
                player.style.bottom = pos.bottom;
                player.style.left = pos.left;
            }
        }
    }
});