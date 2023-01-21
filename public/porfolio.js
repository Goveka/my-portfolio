const id= "63cac530ec7d9e5bab64828c";
const request= new XMLHttpRequest();
request.open('Post', '/viewedSite');
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.send(`id=${id}`)


const sourceCode = document.querySelectorAll('.source-code').forEach(function(codeBtn){
    codeBtn.addEventListener('click',()=>{
        const id= "63cac530ec7d9e5bab64828c";
const request= new XMLHttpRequest();
request.open('Post', '/viewedProjectCode');
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.send(`id=${id}`)
    })
})

const viewProject = document.querySelectorAll('.viewProject').forEach(function(codeBtn){
    codeBtn.addEventListener('click',()=>{
        const id= "63cac530ec7d9e5bab64828c";
const request= new XMLHttpRequest();
request.open('Post', '/viewedProject');
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.send(`id=${id}`)
    })
})


const githubProfile= document.getElementById('github-profile').addEventListener('click',()=>{
    const id= "63cac530ec7d9e5bab64828c";
    const request= new XMLHttpRequest();
    request.open('Post', '/viewedGITHUB');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(`id=${id}`)
})

const downloadedCV= document.getElementById('download-cv').addEventListener('click', ()=>{
    const id= "63cac530ec7d9e5bab64828c";
    const request= new XMLHttpRequest();
    request.open('Post', '/downloadedCV');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(`id=${id}`) 
})