// use the imgBB api to upload an image and save the returned image url in the url input
const addImg=document.getElementById('addImage');

addImg.addEventListener('change', addImage)
async function addImage(){
const addImageInput= document.getElementById("addImage");
const file= addImageInput.files[0];

 // Create a new form data object
 const formData = new FormData();
 formData.append('image', file);

 // Use Axios to upload the image to ImgBB
 const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
   headers: {
     'content-type': 'multipart/form-data'
   },
   params: {
     key: '6ec3827f4865e3031a08d0cabde77286'
   }
 });

 // Get the image URL from the ImgBB API response
 const imgSrcInput= document.getElementById("contentImage");
 const imageUrl = response.data.data.url;
 imgSrcInput.value=imageUrl;
 alert("added")
}

// adding date for the initial post
 async function addDate(){
    const dateInput=document.getElementById('date');
    let date= new Date();
    let day=date.getDate();
    let month=date.getMonth();
    let year = date.getFullYear();
    let hours= date.getHours();
    let minutes= date.getMinutes();

    //format the day, month and year to have a zero if neccessary
    if(day < 10){
        day= '0'+ day;
    }
    if(month <10){
        month= '0'+ month
    }
    hours= (hours <10)? '0'+hours:hours;
    minutes=(minutes<10)? '0'+ minutes:minutes

    const formattedDate= day+ '/'+ month + '/'+ year +"/"+ hours+':'+minutes;
    dateInput.value=formattedDate;

}