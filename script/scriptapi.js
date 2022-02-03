
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

function tab(){
   document.getElementById("tablea").className = "dropdown-item active bg-success";
   document.getElementById("tableau").style.display = "block";
   document.getElementById("grill").className = "dropdown-item ";
   document.getElementById("grille").style.display = "none";
   
}
function gri(){
   document.getElementById("grill").className = "dropdown-item active bg-success";
   document.getElementById("grille").style.display = "block";
   document.getElementById("tablea").className = "dropdown-item ";
   document.getElementById("tableau").style.display = "none";
}


   function load() {
         fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
         .then(response => response.json())
         .then(data => {
            console.log(data.meals[0])
         })
      

      for(let i = 52767; i < 52875; i++){

         
         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=`+ i)
         .then(response => response.json())
         .then(data => {
            document.getElementById("in").innerHTML +=`
            <div class="card  shadow border-0" style=" margin: 1rem; border-radius: 25px; width: 300px; " >
                  <div class="card-body cartin">
                     <div class="img card border-0" >
                     <img src="${data.meals['0'].strMealThumb}">
                     </div>
                     <div class="txt ">
                        <h3> ${data.meals['0'].strMeal}</h3>
                        <button id="${i}" onclick="modal(this.id)" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Recette
                        </button>
                        </div>
                  </div>  
               </div>
            `;
            document.getElementById("tab").innerHTML +=`
             <tr>
                <td style="width: 11%;"></td>
                <td class="titre">${data.meals['0'].strMeal}</td>
                <td>${data.meals['0'].strArea}</td>
                <td>${data.meals['0'].strCategory}</td>
                <td><button id="${i}" onclick="modal(this.id)" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Recette</button></td>
             </tr>
              
            `;
             })


      }
   
   }



   function modal(clicked_id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=`+ clicked_id)
         .then(response => response.json())
         .then(data => {
            document.getElementById("titr").innerHTML = ` ${data.meals['0'].strMeal } `;
            document.getElementById("rec").innerHTML = ` 
            <h5>Recette: </h5> 
            <h4>${data.meals['0'].strInstructions }</h4> 
            `;
      })
    }
         
         
        