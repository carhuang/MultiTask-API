const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setupDB } = require('./fixtures/db')

beforeEach(setupDB)

test('Should signup a new user', async() => {
    const response = await request(app).post('/users').send({
        name: 'Carly',
        email: process.env.USER_EMAIL,
        password: 'harrypotter'
    }).expect(201)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
    expect(response.body).toMatchObject({
        user: {
            name: 'Carly',
            email: process.env.USER_EMAIL
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('harrypotter')
})

test('Should login existing user', async() => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(user).not.toBeNull()
    expect(user.tokens[1].token).toBe(response.body.token)
})

test('Should not login wrong password', async() => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'pasword123'
    }).expect(400)
})

test('Should not login nonexistent user', async() => {
    await request(app).post('/users/login').send({
        email: 'quack@example.com',
        password: 'hi123hi!'
    }).expect(400)
})

test('Should get profile for user', async() => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async() => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar image', async() => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should delete avatar image', async() => {
    await request(app)
        .delete('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toBeUndefined()
})

test('Should update valid user fields', async() => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Carly Huang'
        }).expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toBe('Carly Huang')
})

test('Should not update invalid user fields', async() => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Columbia'
        }).expect(403)
})

test('Should not delete account for unauthenticated user', async() => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async() => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})