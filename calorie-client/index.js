$(document).ready(function() {
  $('#submitButton').on('click', function(e){
    e.preventDefault();
    const user_id = $('#user_id').val()
    const date = $('#date').val()
    const food_id = $('#food_id').val()
    const calories = $('#calories').val()
    //const url = 'http://localhost:3000/api/v1/journals'

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/user_foods',
      data: {
        food_id: food_id,
        calories: calories,
        user_id: user_id,
        date: date
      }
    }).then(function(data) {
      console.log(data)
      $('#showResults').append(`<li id=${data.food_id} class="food-item">${data.food_id} with ${data.calories} calories</li>`)
    })
  })

  // $('body').on('click', '.food-item', function(){
  //   alert($(this).attributes("id"))
  // })
})

// $.ajax({
//       method: 'POST',
//       url: 'http://localhost:3000/api/v1/cities',
//       data: {
//         state_name: stateName,
//         city_name: cityName
//       } //:state_name is from params, stateName is the input value
//      }).then(function(data) {
//       //  console.log(data)
//        $('#success').append(`
//         <div>${data.name}</div>
//          `)
//
//     }); //line 22
