// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
function myFunc(){
    
}


let data = JSON.parse(localStorage.getItem("movie"))||[];
console.log(data)
let mainDiv = document.getElementById("movie");

data.map(function(e,i){
    let main = document.createElement("div");

    let image = document.createElement("img")
    image.src=e.Poster;
    
    let title = document.createElement("h3");
    title.innerText=e.Title;

    main.append(image,title);
    mainDiv.append(main)

})
