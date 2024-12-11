document.addEventListener('DOMContentLoaded', () => {
    const saveTacticsButton = document.getElementById('saveTactics');
    const loadTacticsButton = document.getElementById('loadTactics');
    const deleteTacticsButton = document.getElementById('deleteTactics'); // 삭제 버튼
    const fieldElement = document.getElementById('field');

    let savedTactics = JSON.parse(localStorage.getItem('tacticsList')) || [];

    function clearField() {
        document.querySelectorAll('.line').forEach(line => line.remove());
        document.querySelectorAll('.arrow').forEach(arrow => arrow.remove());
        document.querySelectorAll('.player').forEach(player => {
            player.style.left = '';
            player.style.top = '';
        });
    }

    function getLines() {
        const lines = [];
        document.querySelectorAll('.line').forEach(line => {
            const arrow = line.nextElementSibling;
            const rect = line.getBoundingClientRect();
            const parentRect = fieldElement.getBoundingClientRect();

            const arrowRect = arrow?.getBoundingClientRect();
            const arrowParentRect = fieldElement.getBoundingClientRect();

            lines.push({
                x1: rect.left - parentRect.left,
                y1: rect.top - parentRect.top,
                width: parseFloat(line.style.width),
                transform: line.style.transform,
                className: line.className,
                color: line.style.backgroundColor,
                arrow: arrow ? {
                    x: arrowRect.left - arrowParentRect.left,
                    y: arrowRect.top - arrowParentRect.top,
                    color: arrow.style.borderColor,
                } : null,
            });
        });
        return lines;
    }

    function renderLines(lines) {
        lines.forEach(({ x1, y1, width, transform, className, color, arrow }) => {
            const line = document.createElement('div');
            line.className = className;
            line.style.width = `${width}px`;
            line.style.height = '2px';
            line.style.position = 'absolute';
            line.style.left = `${x1}px`;
            line.style.top = `${y1}px`;
            line.style.transform = transform;
            line.style.backgroundColor = color;

            const arrowElement = document.createElement('div');
            arrowElement.className = 'arrow';
            arrowElement.style.position = 'absolute';
            arrowElement.style.left = `${arrow.x}px`;
            arrowElement.style.top = `${arrow.y}px`;
            arrowElement.style.border = 'solid';
            arrowElement.style.borderWidth = '3px 3px 0 0';
            arrowElement.style.borderColor = arrow.color;

            fieldElement.appendChild(line);
            fieldElement.appendChild(arrowElement);
        });
    }

    saveTacticsButton.addEventListener('click', () => {
        const players = [];
        document.querySelectorAll('.player').forEach(player => {
            players.push({
                id: player.id,
                left: player.style.left,
                top: player.style.top,
                content: player.innerHTML,
            });
        });

        const lines = getLines();

        const tacticName = prompt('저장할 전술의 이름을 입력하세요:');
        if (!tacticName) {
            alert('전술 이름을 입력하지 않아 저장이 취소되었습니다.');
            return;
        }

        savedTactics.push({ name: tacticName, players, lines });
        localStorage.setItem('tacticsList', JSON.stringify(savedTactics));

        alert(`"${tacticName}" 전술이 저장되었습니다.`);
    });

    loadTacticsButton.addEventListener('click', () => {
        if (savedTactics.length === 0) {
            alert('저장된 전술이 없습니다.');
            return;
        }

        const tacticNames = savedTactics.map((tactic, index) => `${index}: ${tactic.name}`).join('\n');
        const selectedTacticIndex = prompt(
            `불러올 전술을 선택하세요:\n${tacticNames}`
        );

        if (
            selectedTacticIndex === null ||
            isNaN(selectedTacticIndex) ||
            selectedTacticIndex < 0 ||
            selectedTacticIndex >= savedTactics.length
        ) {
            alert('올바른 번호를 입력하지 않아 불러오기가 취소되었습니다.');
            return;
        }

        const { players, lines } = savedTactics[selectedTacticIndex];

        clearField();

        players.forEach(({ id, left, top, content }) => {
            const player = document.getElementById(id);
            if (player) {
                player.style.left = left;
                player.style.top = top;
                player.innerHTML = content;
            }
        });

        renderLines(lines);

        alert('전술이 성공적으로 불러와졌습니다.');
    });

    deleteTacticsButton.addEventListener('click', () => {
        if (savedTactics.length === 0) {
            alert('저장된 전술이 없습니다.');
            return;
        }

        const tacticNames = savedTactics.map((tactic, index) => `${index}: ${tactic.name}`).join('\n');
        const selectedTacticIndex = prompt(
            `삭제할 전술을 선택하세요:\n${tacticNames}`
        );

        if (
            selectedTacticIndex === null ||
            isNaN(selectedTacticIndex) ||
            selectedTacticIndex < 0 ||
            selectedTacticIndex >= savedTactics.length
        ) {
            alert('올바른 번호를 입력하지 않아 삭제가 취소되었습니다.');
            return;
        }

        const deletedTactic = savedTactics.splice(selectedTacticIndex, 1);
        localStorage.setItem('tacticsList', JSON.stringify(savedTactics));

        alert(`"${deletedTactic[0].name}" 전술이 삭제되었습니다.`);
    });
});