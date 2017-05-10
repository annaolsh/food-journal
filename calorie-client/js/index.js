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
      console.log(data)
      $('#showResults').append(`<li>${data.food_name} (${data.calories} cal.) </li>`)
    })
  })

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/user_foods',
    success: function(data){
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      var present_day = `${yyyy}-0${mm}-${dd}`
      var newArray = [];

      data.forEach(function(food) {
        if (food.date === present_day) {
          newArray.push(`<li> ${food.food_name} (${food.calories} cal.) </li>`)
        }
      })
      $('#todayDate').append(present_day)
      $('#showResults').append(newArray)
    }
  })
})
