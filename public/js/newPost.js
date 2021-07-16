
const postFormHandler = async (event) => {
    const content = document.querySelector('#new-post').value.trim()
    const title = document.querySelector('#title-post').value.trim()
    const user = document.querySelector('#user-id').textContent
    console.log(JSON.stringify({title, content, user}))

    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        body: JSON.stringify({ title, content, user}),
        headers: {'Content-Type': 'application/json',},
    })
    console.log(response)
    if (response.ok) {
        document.location.reload()
    } else {
        alert('could not post')
    }
}


document.querySelector('.post-form').addEventListener('submit', postFormHandler);