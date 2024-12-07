const formations = {
    '433': {
        positions: {
            player1: { left: '5%', top: '48%' },
            player2: { left: '15%', top: '13%' },
            player3: { left: '15%', top: '33%' },
            player4: { left: '15%', top: '63%' },
            player5: { left: '15%', top: '83%' },
            player6: { left: '27%', top: '23%' },
            player7: { left: '27%', top: '73%' },
            player8: { left: '27%', top: '48%' },
            player9: { left: '40%', top: '23%' },
            player10: { left: '40%', top: '48%' },
            player11: { left: '40%', top: '73%' },
        },
        names: {
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
        },
    },
    '4231': {
        positions: {
            player1: { left: '5%', top: '48%' }, // GK
            player2: { left: '15%', top: '13%' }, // LB
            player3: { left: '15%', top: '33%' }, // CB
            player4: { left: '15%', top: '63%' }, // CB
            player5: { left: '15%', top: '83%' }, // RB
            player6: { left: '25%', top: '33%' }, // CDM
            player7: { left: '25%', top: '63%' }, // CDM
            player8: { left: '35%', top: '48%' }, // CAM
            player9: { left: '35%', top: '13%' }, // LM
            player10: { left: '45%', top: '48%' }, // ST
            player11: { left: '35%', top: '83%' }, // RM
        },
        names: {
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
        },
    },
    '4123': {
            positions: {
            player1: { left: '5%', top: '48%' }, // GK
            player2: { left: '15%', top: '13%' }, // LB
            player3: { left: '15%', top: '33%' }, // CB
            player4: { left: '15%', top: '63%' }, // CB
            player5: { left: '15%', top: '83%' }, // RB
            player6: { left: '23%', top: '48%' }, // CDM
            player7: { left: '30%', top: '63%' }, // RCM
            player8: { left: '30%', top: '33%' }, // LCM
            player9: { left: '37%', top: '13%' }, // LW
            player10: { left: '45%', top: '48%' }, // ST
            player11: { left: '37%', top: '83%' }, // RW
        },
        names: {
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
    },
    '442': {
        positions: {
            player1: { left: '5%', top: '48%' }, // GK
            player2: { left: '15%', top: '13%' }, // LB
            player3: { left: '15%', top: '33%' }, // CB
            player4: { left: '15%', top: '63%' }, // CB
            player5: { left: '15%', top: '83%' }, // RB
            player6: { left: '27%', top: '33%' }, // LCM
            player7: { left: '27%', top: '63%' }, // RCM
            player8: { left: '40%', top: '33%' }, // LS
            player9: { left: '27%', top: '13%' }, // LM
            player10: { left: '40%', top: '63%' }, // RS
            player11: { left: '27%', top: '83%' }, // RM
        },
        names: {
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
        },
    },
    '523': {
        positions: {
            player1: { left: '5%', top: '48%' }, // GK
            player2: { left: '18%', top: '13%' }, // LB
            player3: { left: '15%', top: '28%' }, // CB
            player4: { left: '15%', top: '68%' }, // CB
            player5: { left: '18%', top: '83%' }, // RB
            player6: { left: '15%', top: '48%' }, // CDM
            player7: { left: '30%', top: '63%' }, // RCM
            player8: { left: '30%', top: '33%' }, // LCM
            player9: { left: '37%', top: '13%' }, // LW
            player10: { left: '45%', top: '48%' }, // ST
            player11: { left: '37%', top: '83%' }, // RW
        },
        names: {
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
        },
    },


    //op


    'op_433': {
        positions: {
            player12: { right: '5%', top: '48%' }, // GK
            player13: { right: '15%', top: '13%' }, // LB
            player14: { right: '15%', top: '33%' }, // CB
            player15: { right: '15%', top: '63%' }, // CB
            player16: { right: '15%', top: '83%' }, // RB
            player17: { right: '27%', top: '23%' }, // LCM
            player18: { right: '27%', top: '73%' }, // RCM
            player19: { right: '27%', top: '48%' }, // CM
            player20: { right: '40%', top: '23%' }, // LW
            player21: { right: '40%', top: '48%' }, // ST
            player22: { right: '40%', top: '73%' }, // RW
        },
        names: {
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
        },
    },
    'op_4231': {
        positions: {
            player12: { right: '5%', top: '48%' }, // GK
            player13: { right: '15%', top: '13%' }, // LB
            player14: { right: '15%', top: '33%' }, // CB
            player15: { right: '15%', top: '63%' }, // CB
            player16: { right: '15%', top: '83%' }, // RB
            player17: { right: '25%', top: '33%' }, // CDM
            player18: { right: '25%', top: '63%' }, // CDM
            player19: { right: '35%', top: '48%' }, // CAM
            player20: { right: '35%', top: '13%' }, // LM
            player21: { right: '45%', top: '48%' }, // ST
            player22: { right: '35%', top: '83%' }, // RM
        },
        names: {
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
        },
    },
    'op_4123': {
        positions: {
            player12: { right: '5%', top: '48%' }, // GK
            player13: { right: '15%', top: '13%' }, // LB
            player14: { right: '15%', top: '33%' }, // CB
            player15: { right: '15%', top: '63%' }, // CB
            player16: { right: '15%', top: '83%' }, // RB
            player17: { right: '23%', top: '48%' }, // CDM
            player18: { right: '30%', top: '63%' }, // RCM
            player19: { right: '30%', top: '33%' }, // LCM
            player20: { right: '37%', top: '13%' }, // LW
            player21: { right: '45%', top: '48%' }, // ST
            player22: { right: '37%', top: '83%' }, // RW
        },
        names: {
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
        },
    },
    'op_442': {
        positions: {
            player12: { right: '5%', top: '48%' }, // GK
            player13: { right: '15%', top: '13%' }, // LB
            player14: { right: '15%', top: '33%' }, // CB
            player15: { right: '15%', top: '63%' }, // CB
            player16: { right: '15%', top: '83%' }, // RB
            player17: { right: '27%', top: '33%' }, // LCM
            player18: { right: '27%', top: '63%' }, // RCM
            player19: { right: '40%', top: '33%' }, // LS
            player20: { right: '27%', top: '13%' }, // LM
            player21: { right: '40%', top: '63%' }, // RS
            player22: { right: '27%', top: '83%' }, // RM
        },
        names: {
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
        },
    },
    'op_523': {
        positions: {
            player12: { right: '5%', top: '48%' }, // GK
            player13: { right: '18%', top: '13%' }, // LB
            player14: { right: '15%', top: '28%' }, // CB
            player15: { right: '15%', top: '68%' }, // CB
            player16: { right: '18%', top: '83%' }, // RB
            player17: { right: '15%', top: '48%' }, // CDM
            player18: { right: '30%', top: '63%' }, // RCM
            player19: { right: '30%', top: '33%' }, // LCM
            player20: { right: '37%', top: '13%' }, // LW
            player21: { right: '45%', top: '48%' }, // ST
            player22: { right: '37%', top: '83%' }, // RW
        },
        names: {
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
        },
    },
}

function movePlayers(positions, names) {
    for (const [id, position] of Object.entries(positions)) {
        const player = document.getElementById(id);
        if (player) {
            player.style.left = position.left;
            player.style.top = position.top;
            player.textContent = names[id];
        }
    }
}

function op_movePlayers(positions, names) {
    for (const [id, position] of Object.entries(positions)) {
        const player = document.getElementById(id);
        if (player) {
            player.style.right = position.right;
            player.style.top = position.top;
            player.textContent = names[id];
        }
    }
}

document.getElementById('changeFormation').addEventListener('click', () => {
    const selector = document.getElementById('formationSelector');
    selector.style.display = selector.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('formationSelector').addEventListener('change', (event) => {
    const formation = event.target.value;
    if (formations[formation]) {
        movePlayers(formations[formation].positions, formations[formation].names);
    }
});

document.getElementById('op_changeFormation').addEventListener('click', () => {
    const selector = document.getElementById('op_formationSelector');
    selector.style.display = selector.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('op_formationSelector').addEventListener('change', (event) => {
    const formation = event.target.value;
    if (formations[formation]) {
        op_movePlayers(formations[formation].positions, formations[formation].names);
    }
});