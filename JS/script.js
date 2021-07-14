let xhr = new XMLHttpRequest;
let HTMLQuote = document.getElementById('quote');
let photo = document.getElementById('photo');
let author = document.getElementById('author');
let id = document.getElementById('id');
let permalink = document.getElementById('permalink');


    xhr.open('GET', 'https://thatsthespir.it/api');
   

 xhr.onload = function (){
     
    if (this.status === 200){
           let ContenuBody = JSON.parse(this.responseText);
           HTMLQuote.innerHTML ='"'+ ContenuBody.quote + '"';
           author.innerHTML = ContenuBody.author;
           let imgAuthor = document.createElement ("img");
           imgAuthor.setAttribute("src", ContenuBody.photo);
           imgAuthor.setAttribute("id", "imgAuthor");
           imgAuthor.setAttribute("alt", "Author photo");
           photo.appendChild(imgAuthor);
           id.innerHTML = "id:" + " " + ContenuBody.id;
           permalink.innerHTML = ContenuBody.permalink;
           total_quotes.innerHTML = "total quote:" + " " + ContenuBody.total_quotes;

         }else {
             alert('ERROR');
         }
     }
 
xhr.send();