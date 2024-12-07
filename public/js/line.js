const fieldElement = document.getElementById('field');
const passButton = document.getElementById('passButton');
const dribbleButton = document.getElementById('dribbleButton');
const shootButton = document.getElementById('shootButton');

let startX = null, startY = null;
let currentMode = null; // 'pass', 'dribble', 'shoot'

// 버튼 클릭 이벤트
passButton.addEventListener('click', () => {
    currentMode = 'pass';
    console.log("패스 모드 활성화");
});
dribbleButton.addEventListener('click', () => {
    currentMode = 'dribble';
    console.log("드리블 모드 활성화");
});
shootButton.addEventListener('click', () => {
    currentMode = 'shoot';
    console.log("슈팅 모드 활성화");
});

// 필드 클릭 이벤트
fieldElement.addEventListener('click', (e) => {
    if (!currentMode) {
        alert("패스, 드리블, 또는 슈팅 모드를 선택해주세요.");
        return;
    }

    const rect = fieldElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (startX === null && startY === null) {
        // 시작점 설정
        startX = x;
        startY = y;
        console.log(`시작점 설정: (${startX}, ${startY})`);
    } else {
        // 종료점 설정 후 선 그리기
        console.log(`종료점 설정: (${x}, ${y})`);
        if (currentMode === 'pass') {
            drawLine(startX, startY, x, y, 'line-pass'); // 패스 경로
        } else if (currentMode === 'dribble') {
            drawLine(startX, startY, x, y, 'line-dribble'); // 드리블 경로
        } else if (currentMode === 'shoot') {
            drawLine(startX, startY, x, y, 'line-shooting'); // 슈팅 경로
        }
        startX = null;
        startY = null; // 초기화
    }
});

// 선 그리기 함수
function drawLine(x1, y1, x2, y2, styleClass) {
    const line = document.createElement('div');
    line.className = `line ${styleClass}`;
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

    line.style.width = `${length}px`;
    line.style.height = '2px';
    line.style.position = 'absolute';
    line.style.top = `${y1}px`;
    line.style.left = `${x1}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.transformOrigin = '0 0';

    // 스타일 설정 (패스, 드리블, 슈팅에 따라 변경)
    if (styleClass === 'line-pass') {
        line.style.backgroundColor = '#ef4836';
        line.style.setProperty('--arrow-color', '#ef4836');
    } else if (styleClass === 'line-dribble') {
        line.style.backgroundColor = '#f9bf3b';
        line.style.setProperty('--arrow-color', '#f9bf3b');
    } else if (styleClass === 'line-shooting') {
        line.style.backgroundColor = '#59abe3'; // 슈팅은 주황색
        line.style.setProperty('--arrow-color', '#59abe3');
    }

    // 화살표 추가
    const arrow = document.createElement('div');
    arrow.style.width = '10px';
    arrow.style.height = '10px';
    arrow.style.position = 'absolute';
    arrow.style.top = `${y2}px`;
    arrow.style.left = `${x2}px`;
    arrow.style.transform = `translate(-50%, -50%) rotate(${angle + 45}deg)`;
    arrow.style.border = 'solid';
    arrow.style.borderWidth = '3px 3px 0 0';
    arrow.style.borderColor = line.style.backgroundColor;

    fieldElement.appendChild(line);
}

document.getElementById('deleteLines').addEventListener('click', deleteLines);

function deleteLines() {
    // SVG로 그린 선 삭제
    const svg = document.getElementById('curveCanvas');
    if (svg) {
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
    }

    // HTML div로 그린 선 삭제
    const lines = document.querySelectorAll('.line');
    lines.forEach(line => line.remove());

    alert("모든 선이 삭제되었습니다.");
}

document.getElementById('enableLineSelection').addEventListener('click', () => {
    isLineSelectionMode = true;
    enableLineSelection();
    alert("선 선택 삭제 모드가 활성화되었습니다.");
});

document.getElementById('disableLineSelection').addEventListener('click', () => {
    isLineSelectionMode = false;
    alert("선 선택 삭제 모드가 비활성화되었습니다.");
});

function enableLineSelection() {
    if (!isLineSelectionMode) return;

    const lines = document.querySelectorAll('.line');
    lines.forEach(line => {
        line.removeEventListener('click', handleLineClick); // 기존 이벤트 제거
        line.addEventListener('click', handleLineClick); // 새로운 이벤트 연결
    });
}

function handleLineClick(e) {
    if (isLineSelectionMode) {
        e.stopPropagation();
        this.remove();
        alert("선이 삭제되었습니다.");
    }
}