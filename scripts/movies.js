// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

  let moviesDiv = document.getElementById("movies");
  
   let id ;
  
   async function searchMovies(){
     
    
      try{
   const search = document.getElementById("search").value;
  
  //  const res =await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`);
   const res =await fetch(` https://www.omdbapi.com/?s=${search}&apikey=fa1a44c3`);
   
   
   const data = await res.json();
   console.log("data:",data);
  
   const movies = data.Search;
  
   return movies;
  appendMovies(movies);
  console.log("data:",data);
  }catch (err){
  console.log("err:",err)
  
  }
  }
  function appendMovies(data){
      // if(data==undefined){
      //     return false;
      // }
      moviesDiv.innerHTML=null;
      data.forEach(function(el){
        let div =document.createElement("div");
         let img = document.createElement("img")
         img.src =el.Poster;
        

         let title= document.createElement("h3");
         title.innerText= el.Title;
         
         let bookBtn= document.createElement("button");
         bookBtn.innerText="Book Now";
         bookBtn.setAttribute("class","book_now")

         div.append(img,title,bookBtn);
          moviesDiv.append(div);


        
      });
  }
  
  async function main(){
      let data = await searchMovies();
       if (data==undefined){
           return false;
       }
        appendMovies(data)
  }
  
  // Debouncing

  function debounce (func,delay){
      if(id){
          clearTimeout(id);
      }
      id = setTimeout(function(){
          func()
      },delay);
  }
  let dataArr = JSON.parse(localStorage.getItem("search"))||[];


function book(e,i){
    dataArr.push(e);
    localStorage.setItem("search",JSON.stringify(dataArr));
    // window.location.reload();

}
  
  
  
  
  
  
  