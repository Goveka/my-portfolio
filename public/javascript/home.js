const searchBtn=document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e)=>{
    const searchInput=document.getElementById('searchInput').value.toLowerCase().trim();

    if(searchInput === ""){
        alert("The search input can't be empty")
    }else{
        window.location.href= `/search/${encodeURIComponent(searchInput)}`;
    }

})