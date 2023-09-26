const express = require('express')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')
const router = express.Router()
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('./db/User')

const app = express()
app.use(cors(), express.json())

app.use(session({
    secret: "appmixo",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new GoogleStrategy({
    clientID: "781453098116-67a404t28kfffhjcnj0v6gvqe2phg2fi.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8080/auth/google/callback",

}, (accessToken, refreshToken, profile, done) => {
    // console.log(profile)
    return done(null, profile);
}
))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: "/" }), async (req, resp) => {
    let { email, name } = req.user._json
    // console.log('user', name, email)
    const log = await User.find({ email: email }).count() > 0
    if (!log) {
        const data = new User({ name: name, email: email })
        const result = await data.save()
        if (result) {
            console.log(result)
            // resp.redirect('http://localhost:3000')

        } else {
            console.log('something went wrong')

        }
    } else {
        console.log('Welcome back ', name)
        // resp.redirect('http://localhost:3000')
    }
    resp.redirect('http://localhost:3000')

})

app.get('/logout', (req, resp) => {
    req.logout((err) => {
        if (err) {
            console.error("Error logging out:", err);
            return resp.status(500).json({ message: "Error logging out" });
        }
        resp.redirect("http://localhost:3000/login");
    });
})


app.listen(8080, () => {
    console.log('Server is running on port 8080')
})