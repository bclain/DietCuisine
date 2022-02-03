const mealList = document.getElementById('result');

    function avoir(){
      let ingredi = document.getElementById('search-input').value.trim();
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=` + ingredi)
      .then(response => response.json())
      .then(data => {
         let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class="card  shadow border-0" style=" margin: 1rem; border-radius: 25px; width: 300px; " >
                <div class="card-body cartin">
                   <div class="img card border-0" >
                   <img src="${meal.strMealThumb}">
                   </div>
                   <div class="txt ">
                      <h3> ${meal.strMeal}</h3>
                      <button id="${meal.idMeal}" onclick="modal(this.id)" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Recette
                      </button>
                      </div>
                </div>  
             </div>
             `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Désolé, on a pas trouvé de recette!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });

   
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
        