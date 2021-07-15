const editButtonHandler = async (event) => {
    event.preventDefault()

    var content = document.querySelector('#new-post').value
    var title = document.querySelector('#title-post').value
    const edit = document.querySelector('#update').value
    console.log(edit)
    var response = await fetch(`/post/${edit}`)
    console.log('reponse data',response.json())

}   

document.querySelector('#update').addEventListener('click',editButtonHandler)