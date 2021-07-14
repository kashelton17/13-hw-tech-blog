const router = require('express').Router();
const { Post, User, Comment } = require('../../models')

router.post('/', async (req, res) => {
    try {
      console.log('Console logging the request body',req.body)
      const newPostData = await Post.create({
          title: req.body.title,
          content: req.body.content,
          user_id: 1
      });
      res.status(200).json(newPostData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/comment', async (req, res) =>{
    try {
        console.log(req.body)
        const newComment = await Comment.create({
            content: req.body.comment,
            user_id: 1,
            post_id: 1
        })
        res.status(200).json(newComment)
    } catch (err) {
        res.status(500).json(err)
    }

}) 

module.exports = router;
