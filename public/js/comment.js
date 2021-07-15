
const commentFormHandler = async (event) => {
    const comment = document.querySelector('#comment-input').value.trim()

    if (comment) {
        const response = await fetch('/api/posts/comment', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        if (response.ok) {
            console.log(
                'it worked'
            )
        } else {
            alert('comment did not post')
        }
    }
}
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler)