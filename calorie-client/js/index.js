$(document).ready(function() {
  $('#submitButton').on('click', function(e){
    e.preventDefault();
    const user_id = $('#name-input').val()
    const date = $('#date').val()
    const food_id = $('#food-input').val()
    const calories = $('#calories').val()

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
      $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/user_foods',
        success: function(dataResponse) {
          console.log("Hello there?")
          console.log(dataResponse) //that one big giant hash
          console.log(data) //that one single lonely object
          var todayDate = new Date().toJSON().slice(0, 10);
          var current_user = data.user_id

          // for(var i = 0; i < dataResponse.length; i++) {
          //   if (dataResponse[i].user_id === current_user && dataResponse[i].date === todayDate){
          //     current_user_food.push(dataResponse[i])
          //   }
          // }

          var current_user_food = dataResponse.filter(function(user_food){
            return user_food.user_id === current_user && user_food.date === todayDate
          })
          console.log(current_user_food)
          // var current_user_food = {}
          // var todayDate = new Date().toJSON().slice(0, 10);
          // for(var i = 0; i < dataResponse.length; i++){
          //   if (dataResponse[i].user_id === current_user && dataResponse[i].date === todayDate){
          //     current_user_food[dataResponse[i].food_name] = dataResponse[i].calories
          //   }
          // }
          // var result = ''
          // for (var key in current_user_food) {
          //   result += `<li>${key + " " + current_user_food[key] + " cal."}</li>`
          // }
          // $('#showResults').html(result)

        }
      })
    })
  })
})
