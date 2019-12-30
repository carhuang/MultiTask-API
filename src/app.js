const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user_router')
const taskRouter = require('./routers/task_router')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app