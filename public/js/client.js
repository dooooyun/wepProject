let screenStream = null; // 화면 공유 스트림을 관리하는 변수
const socket = io('http://localhost:3000');
let peerConnection;

async function startScreenShare() {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    const video = document.getElementById('localVideo');
    video.srcObject = stream;

    peerConnection = new RTCPeerConnection();
    stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            socket.emit('candidate', { target: 'viewer', candidate: event.candidate });
        }
    };

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit('offer', { target: 'viewer', sdp: offer });
}


function stopScreenShare() {
    if (screenStream) {
        // 스트림의 모든 트랙 중지
        screenStream.getTracks().forEach(track => track.stop());
        screenStream = null;

        // WebRTC 연결 닫기
        if (peerConnection) {
            peerConnection.close();
            peerConnection = null;
        }

        const video = document.getElementById('localVideo');
        video.srcObject = null;

        console.log('Screen sharing stopped');
    } else {
        console.warn('No screen sharing to stop');
    }
}

socket.on('answer', async (data) => {
    const remoteDesc = new RTCSessionDescription(data.sdp);
    await peerConnection.setRemoteDescription(remoteDesc);
});

socket.on('candidate', async (data) => {
    const candidate = new RTCIceCandidate(data.candidate);
    await peerConnection.addIceCandidate(candidate);
});