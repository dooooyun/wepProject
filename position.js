// 선수들을 새로운 포지션으로 이동시키는 함수
function movePlayers(positions, names) {
    for (const [id, position] of Object.entries(positions)) {
        const player = document.getElementById(id);
        if (player) {
            player.style.left = position.left;
            player.style.top = position.top;
            player.textContent = names[id]; // 선수 이름 변경
        }
    }
}
function op_movePlayers(positions, names) {
    for (const [id, position] of Object.entries(positions)) {
        const player = document.getElementById(id);
        if (player) {
            player.style.right = position.right;
            player.style.top = position.top;
            player.textContent = names[id]; // 선수 이름 변경
        }
    }
}
// 433 버튼 클릭 시 실행
document.getElementById('formation433').addEventListener('click', () => {
    const positions = {
        player1: { left: '5%', top: '45%' }, // GK
        player2: { left: '15%', top: '10%' }, // LB
        player3: { left: '15%', top: '30%' }, // CB
        player4: { left: '15%', top: '60%' }, // CB
        player5: { left: '15%', top: '80%' }, // RB
        player6: { left: '27%', top: '20%' }, // LCM
        player7: { left: '27%', top: '70%' }, // RCM
        player8: { left: '27%', top: '45%' }, // CM
        player9: { left: '40%', top: '20%' }, // LW
        player10: { left: '40%', top: '45%' }, // ST
        player11: { left: '40%', top: '70%' }, // RW
    };
    const names = {
        player1: 'GK',
        player2: 'LB',
        player3: 'CB',
        player4: 'CB',
        player5: 'RB',
        player6: 'LCM',
        player7: 'RCM',
        player8: 'CM',
        player9: 'LW',
        player10: 'ST',
        player11: 'RW',
    }
    movePlayers(positions, names);
});
// 4231 버튼 클릭 시 실행
document.getElementById('formation4231').addEventListener('click', () => {
    const positions = {
        player1: { left: '5%', top: '45%' }, // GK
        player2: { left: '15%', top: '10%' }, // LB
        player3: { left: '15%', top: '30%' }, // CB
        player4: { left: '15%', top: '60%' }, // CB
        player5: { left: '15%', top: '80%' }, // RB
        player6: { left: '25%', top: '30%' }, // CDM
        player7: { left: '25%', top: '60%' }, // CDM
        player8: { left: '35%', top: '45%' }, // CAM
        player9: { left: '35%', top: '10%' }, // LM
        player10: { left: '45%', top: '45%' }, // ST
        player11: { left: '35%', top: '80%' }, // RM
    };
    const names = {
        player1: 'GK',
        player2: 'LB',
        player3: 'CB',
        player4: 'CB',
        player5: 'RB',
        player6: 'CDM',
        player7: 'CDM',
        player8: 'CAM',
        player9: 'LM',
        player10: 'ST',
        player11: 'RM',
    }
    movePlayers(positions, names);
});

// 포메이션 3 버튼 클릭 시 실행
document.getElementById('formation4123').addEventListener('click', () => {
    const positions = {
        player1: { left: '5%', top: '45%' }, // GK
        player2: { left: '15%', top: '10%' }, // LB
        player3: { left: '15%', top: '30%' }, // CB
        player4: { left: '15%', top: '60%' }, // CB
        player5: { left: '15%', top: '80%' }, // RB
        player6: { left: '23%', top: '45%' }, // CDM
        player7: { left: '30%', top: '60%' }, // RCM
        player8: { left: '30%', top: '30%' }, // LCM
        player9: { left: '37%', top: '10%' }, // LW
        player10: { left: '45%', top: '45%' }, // ST
        player11: { left: '37%', top: '80%' }, // RW
    };
    const names = {
        player1: 'GK',
        player2: 'LB',
        player3: 'CB',
        player4: 'CB',
        player5: 'RB',
        player6: 'CDM',
        player7: 'RCM',
        player8: 'LCM',
        player9: 'LW',
        player10: 'ST',
        player11: 'RW',
    }
    movePlayers(positions, names);
});

// 포메이션 4 버튼 클릭 시 실행
document.getElementById('formation442').addEventListener('click', () => {
    const positions = {
        player1: { left: '5%', top: '45%' }, // GK
        player2: { left: '15%', top: '10%' }, // LB
        player3: { left: '15%', top: '30%' }, // CB
        player4: { left: '15%', top: '60%' }, // CB
        player5: { left: '15%', top: '80%' }, // RB
        player6: { left: '27%', top: '30%' }, // LCM
        player7: { left: '27%', top: '60%' }, // RCM
        player8: { left: '40%', top: '30%' }, // LS
        player9: { left: '27%', top: '10%' }, // LM
        player10: { left: '40%', top: '60%' }, // RS
        player11: { left: '27%', top: '80%' }, // RM
    };
    const names = {
        player1: 'GK',
        player2: 'LB',
        player3: 'CB',
        player4: 'CB',
        player5: 'RB',
        player6: 'LCM',
        player7: 'RCM',
        player8: 'LS',
        player9: 'LM',
        player10: 'RS',
        player11: 'RM',
    }
    movePlayers(positions, names);
});

// 포메이션 5 버튼 클릭 시 실행
document.getElementById('formation523').addEventListener('click', () => {
    const positions = {
        player1: { left: '5%', top: '45%' }, // GK
        player2: { left: '18%', top: '10%' }, // LB
        player3: { left: '15%', top: '25%' }, // CB
        player4: { left: '15%', top: '65%' }, // CB
        player5: { left: '18%', top: '80%' }, // RB
        player6: { left: '15%', top: '45%' }, // CDM
        player7: { left: '30%', top: '60%' }, // RCM
        player8: { left: '30%', top: '30%' }, // LCM
        player9: { left: '37%', top: '10%' }, // LW
        player10: { left: '45%', top: '45%' }, // ST
        player11: { left: '37%', top: '80%' }, // RW
    };
    const names = {
        player1: 'GK',
        player2: 'LB',
        player3: 'LCB',
        player4: 'RCB',
        player5: 'RB',
        player6: 'CB',
        player7: 'RCM',
        player8: 'LCM',
        player9: 'LW',
        player10: 'ST',
        player11: 'RW',
    }
    movePlayers(positions, names);
});

//-----------------------------------------------------------------------------



//상대팀
// 433 버튼 클릭 시 실행
document.getElementById('op_formation433').addEventListener('click', () => {
    const positions = {
        player12: { right: '5%', top: '45%' }, // GK
        player13: { right: '15%', top: '10%' }, // LB
        player14: { right: '15%', top: '30%' }, // CB
        player15: { right: '15%', top: '60%' }, // CB
        player16: { right: '15%', top: '80%' }, // RB
        player17: { right: '27%', top: '20%' }, // LCM
        player18: { right: '27%', top: '70%' }, // RCM
        player19: { right: '27%', top: '45%' }, // CM
        player20: { right: '40%', top: '20%' }, // LW
        player21: { right: '40%', top: '45%' }, // ST
        player22: { right: '40%', top: '70%' }, // RW
    };
    const names = {
        player12: 'GK',
        player13: 'RB',
        player14: 'CB',
        player15: 'CB',
        player16: 'LB',
        player17: 'RCM',
        player18: 'LCM',
        player19: 'CM',
        player20: 'RW',
        player21: 'ST',
        player22: 'LW',
    }
    op_movePlayers(positions, names);
});

// 4231 버튼 클릭 시 실행
document.getElementById('op_formation4231').addEventListener('click', () => {
    const positions = {
        player12: { right: '5%', top: '45%' }, // GK
        player13: { right: '15%', top: '10%' }, // LB
        player14: { right: '15%', top: '30%' }, // CB
        player15: { right: '15%', top: '60%' }, // CB
        player16: { right: '15%', top: '80%' }, // RB
        player17: { right: '25%', top: '30%' }, // CDM
        player18: { right: '25%', top: '60%' }, // CDM
        player19: { right: '35%', top: '45%' }, // CAM
        player20: { right: '35%', top: '10%' }, // LM
        player21: { right: '45%', top: '45%' }, // ST
        player22: { right: '35%', top: '80%' }, // RM
    };
    const names = {
        player12: 'GK',
        player13: 'RB',
        player14: 'CB',
        player15: 'CB',
        player16: 'LB',
        player17: 'CDM',
        player18: 'CDM',
        player19: 'CAM',
        player20: 'RM',
        player21: 'ST',
        player22: 'LM',
    }
    op_movePlayers(positions, names);
});

// 4123 버튼 클릭 시 실행
document.getElementById('op_formation4123').addEventListener('click', () => {
    const positions = {
        player12: { right: '5%', top: '45%' }, // GK
        player13: { right: '15%', top: '10%' }, // LB
        player14: { right: '15%', top: '30%' }, // CB
        player15: { right: '15%', top: '60%' }, // CB
        player16: { right: '15%', top: '80%' }, // RB
        player17: { right: '23%', top: '45%' }, // CDM
        player18: { right: '30%', top: '60%' }, // RCM
        player19: { right: '30%', top: '30%' }, // LCM
        player20: { right: '37%', top: '10%' }, // LW
        player21: { right: '45%', top: '45%' }, // ST
        player22: { right: '37%', top: '80%' }, // RW
    };
    const names = {
        player12: 'GK',
        player13: 'RB',
        player14: 'CB',
        player15: 'CB',
        player16: 'LB',
        player17: 'CDM',
        player18: 'RCM',
        player19: 'LCM',
        player20: 'RW',
        player21: 'ST',
        player22: 'LW',
    }
    op_movePlayers(positions, names);
});

// 442 버튼 클릭 시 실행
document.getElementById('op_formation442').addEventListener('click', () => {
    const positions = {
        player12: { right: '5%', top: '45%' }, // GK
        player13: { right: '15%', top: '10%' }, // LB
        player14: { right: '15%', top: '30%' }, // CB
        player15: { right: '15%', top: '60%' }, // CB
        player16: { right: '15%', top: '80%' }, // RB
        player17: { right: '27%', top: '30%' }, // LCM
        player18: { right: '27%', top: '60%' }, // RCM
        player19: { right: '40%', top: '30%' }, // LS
        player20: { right: '27%', top: '10%' }, // LM
        player21: { right: '40%', top: '60%' }, // RS
        player22: { right: '27%', top: '80%' }, // RM
    };
    const names = {
        player12: 'GK',
        player13: 'RB',
        player14: 'CB',
        player15: 'CB',
        player16: 'LB',
        player17: 'RCM',
        player18: 'LCM',
        player19: 'RS',
        player20: 'RM',
        player21: 'LS',
        player22: 'LM',
    }
    op_movePlayers(positions, names);
});

// 523 버튼 클릭 시 실행
document.getElementById('op_formation523').addEventListener('click', () => {
    const positions = {
        player12: { right: '5%', top: '45%' }, // GK
        player13: { right: '18%', top: '10%' }, // LB
        player14: { right: '15%', top: '25%' }, // CB
        player15: { right: '15%', top: '65%' }, // CB
        player16: { right: '18%', top: '80%' }, // RB
        player17: { right: '15%', top: '45%' }, // CDM
        player18: { right: '30%', top: '60%' }, // RCM
        player19: { right: '30%', top: '30%' }, // LCM
        player20: { right: '37%', top: '10%' }, // LW
        player21: { right: '45%', top: '45%' }, // ST
        player22: { right: '37%', top: '80%' }, // RW
    };
    const names = {
        player12: 'GK',
        player13: 'RB',
        player14: 'RCB',
        player15: 'LCB',
        player16: 'LB',
        player17: 'CB',
        player18: 'LCM',
        player19: 'RCM',
        player20: 'RW',
        player21: 'ST',
        player22: 'LW',
    }
    op_movePlayers(positions, names);
});