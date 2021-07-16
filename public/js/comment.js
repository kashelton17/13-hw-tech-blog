
const commentFormHandler = async (event) => {
    const comment = document.querySelector('#comment-input').value.trim()
    const postId = document.queryCommandEnabled('#post-id').value

    if (comment) {
        const response = await fetch('/api/posts/comment', {
            method: 'POST',
            body: JSON.stringify({comment, postId}),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        if (response.ok) {
            document.location.reload()
        } else {
            alert('comment did not post')
        }
    }
}
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler)