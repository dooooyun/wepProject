const socket = io('http://localhost:3000');
let peerConnection;

async function initViewer() {
    peerConnection = new RTCPeerConnection();

    // 받은 트랙을 비디오 태그에 추가
    peerConnection.ontrack = (event) => {
        const remoteVideo = document.getElementById('remoteVideo');
        if (remoteVideo.srcObject !== event.streams[0]) {
            remoteVideo.srcObject = event.streams[0];
        }
    };

    // ICE 후보 처리
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            socket.emit('candidate', { target: 'broadcaster', candidate: event.candidate });
        }
    };

    // WebSocket 이벤트 처리
    socket.on('offer', async (data) => {
        console.log('Offer received:', data);
        await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.emit('answer', { target: 'broadcaster', sdp: answer });
    });

    socket.on('candidate', async (data) => {
        try {
            const candidate = new RTCIceCandidate(data.candidate);
            await peerConnection.addIceCandidate(candidate);
        } catch (err) {
            console.error('Error adding received ice candidate', err);
        }
    });

    console.log('Viewer ready and waiting for offer...');
}

initViewer();