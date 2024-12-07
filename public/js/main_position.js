const formations = {
    '433': {
        positions: {
            player1: { bottom: '10%', left: '47%' },
            player2: { bottom: '30%', left: '17%' },
            player3: { bottom: '30%', left: '37%' },
            player4: { bottom: '30%', left: '57%' },
            player5: { bottom: '30%', left: '77%' },
            player6: { bottom: '55%', left: '27%' },
            player7: { bottom: '55%', left: '47%' },
            player8: { bottom: '55%', left: '67%' },
            player9: { bottom: '80%', left: '27%' },
            player10: { bottom: '80%', left: '47%' },
            player11: { bottom: '80%', left: '67%' },
        },
        names: {
            player1: 'GK',
            player2: 'LB',
            player3: 'CB',
            player4: 'CB',
            player5: 'RB',
            player6: 'LCM',
            player7: 'CM',
            player8: 'RCM',
            player9: 'LW',
            player10: 'ST',
            player11: 'RW',
        },
    },
    '4231': {
        positions: {
            player1: { bottom: '10%', left: '47%' }, // GK
            player2: { bottom: '30%', left: '17%' }, // LB
            player3: { bottom: '30%', left: '37%' }, // CB
            player4: { bottom: '30%', left: '57%' }, // CB
            player5: { bottom: '30%', left: '77%' }, // RB
            player6: { bottom: '45%', left: '32%' }, // CDM
            player7: { bottom: '45%', left: '62%' }, // CDM
            player8: { bottom: '62%', left: '47%' }, // CAM
            player9: { bottom: '62%', left: '17%' }, // LM
            player10: { bottom: '80%', left: '47%' }, // ST
            player11: { bottom: '62%', left: '77%' }, // RM
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
            player1: { bottom: '10%', left: '47%' }, // GK
            player2: { bottom: '30%', left: '17%' }, // LB
            player3: { bottom: '30%', left: '37%' }, // CB
            player4: { bottom: '30%', left: '57%' }, // CB
            player5: { bottom: '30%', left: '77%' }, // RB
            player6: { bottom: '45%', left: '47%' }, // CDM
            player7: { bottom: '60%', left: '62%' }, // RCM
            player8: { bottom: '60%', left: '32%' }, // LCM
            player9: { bottom: '70%', left: '17%' }, // LW
            player10: { bottom: '80%', left: '47%' }, // ST
            player11: { bottom: '70%', left: '77%' }, // RW
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
            player1: { bottom: '10%', left: '47%' },
            player2: { bottom: '30%', left: '17%' },
            player3: { bottom: '30%', left: '37%' },
            player4: { bottom: '30%', left: '57%' },
            player5: { bottom: '30%', left: '77%' },
            player6: { bottom: '55%', left: '17%' },
            player7: { bottom: '55%', left: '37%' },
            player8: { bottom: '55%', left: '57%' },
            player9: { bottom: '55%', left: '77%' },
            player10: { bottom: '80%', left: '37%' },
            player11: { bottom: '80%', left: '57%' },
        },
        names: {
            player1: 'GK',
            player2: 'LB',
            player3: 'CB',
            player4: 'CB',
            player5: 'RB',
            player6: 'LM',
            player7: 'LCM',
            player8: 'RCM',
            player9: 'RM',
            player10: 'LS',
            player11: 'RS',
        },
    },
    '523': {
        positions: {
            player1: { bottom: '10%', left: '47%' }, // GK
            player2: { bottom: '35%', left: '17%' }, // LB
            player3: { bottom: '30%', left: '32%' }, // LCB
            player4: { bottom: '30%', left: '62%' }, // RCB
            player5: { bottom: '35%', left: '77%' }, // RB
            player6: { bottom: '30%', left: '47%' }, // CB
            player7: { bottom: '50%', left: '62%' }, // RCM
            player8: { bottom: '50%', left: '32%' }, // LCM
            player9: { bottom: '70%', left: '17%' }, // LW
            player10: { bottom: '80%', left: '47%' }, // ST
            player11: { bottom: '70%', left: '77%' }, // RW
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
}

function movePlayers(positions, names) {
    for (const [id, position] of Object.entries(positions)) {
        const player = document.getElementById(id);
        if (player) {
            player.style.bottom = position.bottom;
            player.style.left = position.left;
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