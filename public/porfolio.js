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


// changing themes
//dark mode
const darkMode= document.getElementById('darkMode').addEventListener('click', (e)=>{
    document.body.style.background = 'rgb(8, 6, 27)';
    let selfDiscription= document.getElementById('selfDiscription');
    selfDiscription.style.color= 'rgba(219, 212, 212, 0.815)';
    let strong=document.getElementById('strong');
    strong.style.color = 'rgb(35, 107, 13)';
    let contactDetails=document.getElementById('contact-details');
    contactDetails.style.color= 'rgba(219, 212, 212, 0.815)';
    let lightMode=document.getElementById('lightMode').style.display= 'block';
    e.target.style.display= 'none';
    const myProjects=document.getElementById('my-projectsText').style.color= 'white';
})

// light mode
const lightMode=document.getElementById('lightMode').addEventListener('click', (e)=>{
    document.body.style.background = 'white';
    let selfDiscription= document.getElementById('selfDiscription');
    selfDiscription.style.color= 'black';
    let contactDetails=document.getElementById('contact-details');
    contactDetails.style.color= 'black';
    const darkMode= document.getElementById('darkMode').style.display= 'block';
    e.target.style.display= 'none';
})