const editButtonHandler = async (event) => {
    event.preventDefault()

    var content = document.querySelector('#post-content').textContent
    var oldElement = document.querySelector('#post-content')
    var newInput = document.createElement('input')
    var parentEl = document.querySelector('#post-details')
    var buttonEl = document.querySelector('#update-btn')
    var newButtonEl = document.createElement('button')
    newButtonEl.setAttribute("id", "submit-update")
    newButtonEl.textContent = 'Submit Updates'
    console.log('new Input ', newInput, 'old text', oldElement)
    
    newInput.setAttribute("id", "updated-post")
    newInput.value = content
    parentEl.replaceChild(newInput, oldElement)
    parentEl.appendChild(newButtonEl)
    buttonEl.remove()
    
    newButtonEl.addEventListener('click', updateContentHandler)
    // const edit = document.querySelector('#update').value
    // var response = await fetch(`/post/${edit}`)
    // console.log('reponse data',response.json())

}   

const updateContentHandler = async (event) => {
    event.preventDefault()
    const postId = document.querySelector('#post-id').value
    const updateBtn = document.querySelector('#submit-update')
    const newContent = document.querySelector('#updated-post').value.trim()
    console.log('loggin post id',postId)


    if (newContent) {
        const response = await fetch(`/post/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ newContent }),
            headers: {'Content-type': 'application/json'}
        })
        if (response.ok) {
            console.log('worked')
            document.location.reload()
        } else {
            alert('Failed to update post')
        }
    }

}

document.querySelector('#update-btn').addEventListener('click',editButtonHandler)