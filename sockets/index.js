const io = require('socket.io')(8800, {
    cors: {
        origin: "http://localhost:3000"
    }
})

console.log("Listening")

let activeUsers = []

io.on("connection", (socket) => {
    // add a new user

    //  we on when we have to take something from other side
    socket.on('new-user-add', (newUserId) => {

        // if user is not added previously
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
            })
        }

        // we write emit when we have to give something to other side
        io.emit('get-users', activeUsers)
    })

    // send message 
    socket.on('send-message', (data) => {

        const { recieverId } = data
        const user = activeUsers.find((user) => user.userId === recieverId)

        if (user) {
            io.to(user.socketId).emit('recieve-message', data)
        }
    })

    socket.on('disconnect', () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
        io.emit('get-users', activeUsers)
    })
})