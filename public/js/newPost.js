
const postFormHandler = async (event) => {
    event.preventDefault()
    const content = document.querySelector('#new-post').value.trim()
    const title = document.querySelector('#title-post').value.trim()
    const user = document.querySelector('#user-post').value.trim()
    console.log(JSON.stringify({title, content}))

    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        body: JSON.stringify({ title, content, }),
        headers: {'Content-Type': 'application/json',},
    })
    console.log(response)
    if (response.ok) {
        console.log('it works')
    } else {
        alert('could not post')
    }
}


document.querySelector('.post-form').addEventListener('submit', postFormHandler);