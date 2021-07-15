const router = require('express').Router();
const { Post, User, Comment } = require('../models')

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
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
            res.render('homepage')
        }
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User, 
                    attributes: [
                        'username', 
                    ],
                },
                {
                    model: Comment, 
                    attributes: [
                        'content', 'user_id', 'date_time'
                    ],
                },
            ]
        })
        const post = postData.get({ plain: true })
        res.render('single-post', { post, loggedIn: req.session.loggedIn})
        console.log(post)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.delete('/post/:id', async (req, res) => {
    try {
        Post.destroy({
            where: {
                id: req.params.id,
            },
        })
            .then((deletedPost) => {
                res.status(200).json(deletedPost)
        })  
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/post/:id', async (req, res) => {
    try {
        const updatePost = await Post.update({
            title: req.body.title,
            content: req.body.content,
            date_time: new Date().toString()
        },
        {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatePost)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });


module.exports = router