const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 정적 파일 제공 설정
app.use('/public', express.static('public')); // CSS 및 기타 정적 파일 제공
app.use('/view', express.static('view'));     // HTML 파일 제공

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/tacticBoard.html'); // 메인 화면
});

// WebSocket 연결 설정
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('offer', (data) => {
        console.log('Offer received:', data);
        socket.to(data.target).emit('offer', data);
    });

    socket.on('answer', (data) => {
        console.log('Answer received:', data);
        socket.to(data.target).emit('answer', data);
    });

    socket.on('candidate', (data) => {
        console.log('Candidate received:', data);
        socket.to(data.target).emit('candidate', data);
    });

    socket.on('disconnect', () => console.log('A user disconnected:', socket.id));
});

// 서버 실행
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});