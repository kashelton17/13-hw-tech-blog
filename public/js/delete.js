const deletePost = async (event) => {
    event.preventDefault()

    const postId = document.querySelector('#post-id').value

    const response = await fetch(`/post/${postId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    if (response.ok) {
        await document.location.replace('/')
        alert('post was deleted')
    } else {
        alert('post could not be deleted')
    }
}

document.querySelector('#delete-btn').addEventListener('click', deletePost)