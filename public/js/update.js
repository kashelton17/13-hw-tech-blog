const editButtonHandler = async (event) => {
    event.preventDefault()

    var content = document.querySelector('#new-post').value
    var title = document.querySelector('#title-post').value
    const edit = document.querySelector('#update').value
    
    const response = await fetch(`/api/${edit}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    
    console.log(response)
    
}