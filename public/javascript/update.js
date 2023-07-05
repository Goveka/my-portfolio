const deleteBlog= document.querySelectorAll('.delete_blog').forEach((deleteBlog)=>{
    deleteBlog.addEventListener('click', async(e)=>{
        const objectId=e.target.parentElement.id;
        alert(`you're about to DELETE the blog (id:${objectId})`)
        fetch(`/remove_blog/${objectId}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data =>{
            location.reload();
        })
        .catch(error =>{
            console.error(error)
        })
    })

})