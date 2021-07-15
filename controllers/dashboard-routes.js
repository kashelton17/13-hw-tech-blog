const router = require('express').Router();
const { Post, User } = require('../models')

router.get('/', async (req, res) => {
    console.log('user info', req.session.user_id)
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login')
        }
        ///const userID = req.session.userid
        const postData = await Post.findAll({
            where: {user_id: req.session.user_id},
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = postData.map((post => 
            post.get({ plain: true}))
        )
        if (!posts) {
            res.render('dashboard', {
                loggedIn: req.session.loggedIn,
                userID: req.session.userid
            })
        }
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            userID: req.session.userid
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router