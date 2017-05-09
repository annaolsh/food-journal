$(document).ready(function() {
  $('#submitButton').on('click', function(e){
    e.preventDefault();
      // console.log("happy")
    const userName = $('#user_name').val()
    const date = $('#date').val()
    const food_item = $('#food_item').val()
    const calories = $('#calories').val()
    //const url = 'http://localhost:3000/api/v1/journals'

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/journals',
      data: {
        food_name: food_item,
        calories: calories,
        date: date,
        user_id: userName
      }
    }).then(function(data) {
      console.log(data)
      $('#showResults').append(`<li>${data.food_name} with ${data.calories} calories</li>`)
    })
  })
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
