$(document).ready(function() {
  var todayDate = new Date().toJSON().slice(0, 10);
  $('#todayDate').html(todayDate)

  $('#addFood').hide()

  selectUserAndDisplayInfo() //select an existing user and display info
  signInAgain() //switching to another user
  signInForm() //choose a user
  createNewUser()

  $('#submitButton').on('click', function(e){
    e.preventDefault();
    const user_id = $('#hiddenUserId').val()
    const date = $('#date').val()
    const food_id = $('#food-input').val()
    const new_food_input = $('#new-food-input').val()
    const calories = $('#calories').val()

    //If user enters a new food in input, then store that into the data
    //else, store an existing food from the food.id (and there is empty string in new food input)

    if(){

    } else(){
      
    }
    debugger
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
          //console.log(dataResponse) //that one big giant hash
          //console.log(data) //that one single lonely object

          var current_user = data.user_id

          //selecting all user_food for current user and current date
          var current_user_food = dataResponse.filter(function(user_food){
            return user_food.user_id === current_user && user_food.date === todayDate
          })
          // console.log(current_user_food)
          var result = ""
          total_calories = 0
          for (var i = 0; i < current_user_food.length; i++){
            result += `<li>${current_user_food[i].food_name}: ${current_user_food[i].calories}</li>`
            total_calories += current_user_food[i].calories
          }

          $('#showResults').html(result)
          console.log(total_calories)
          $('#total_calories').html(`Total Calories: ${total_calories}`)

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

var signInForm = function () {
  $.ajax({ //choose a user
    method: 'GET',
    url: "http://localhost:3000/api/v1/users",
    success: function (data) {
      // console.log(data)
      var options = data.map(function(user) {
        return `<option value=${user.id}>${user.name}</option>`
      })
      $('#signInForm').html(`<h2>Select Your Username:</h2><select id="selectUser">${options.join('')}</select>`)
    }
  })
}

var listUserFoods = function (user_foods) {
  var userFoodList = user_foods.map(function(user_food){
    return `<li>${user_food.food_name} with ${user_food.calories} cal.</li>`
  }).join('')
  $('#showResults').html(userFoodList);
  return userFoodList
}

var addForm = function() {
  //pick existing food or add new food into database
  // make ajax to get all foods from db
  $.ajax({
    url: "http://localhost:3000/api/v1/foods",
    success: function(data) {
      //  append option tags with foods to selct tag
      // console.log(data)
      var options = data.map(function(food) {
        return `<option value=${food.id}>${food.name}</option>`
      }).join("")
      $('#food-input').html(options)
      $('#addFood').show()
    }
  })
}

function signInAgain(){
  $('body').on('click', '#signInAgainButton', function(){
    $('#signInSection').show()
    $('#greeting').hide()
    $('#addFood').hide()
    $('#results').hide()
  })
}

function selectUserAndDisplayInfo(){
  $('body').on('change', '#selectUser', function (e) {
    // console.log($(this).val())
    var selectedUserId = $(this).val()
    $.ajax({
      url: `http://localhost:3000/api/v1/users/${selectedUserId}`,
      success: function(data){

        // iterate over data.user_foods and append to dom
        listUserFoods(data.user_foods)

        // show form to add a new user_food
        addForm()

        $('#greeting').show()
        $('#greeting').html(`<h1>Hello ${data.name}!</h1><br><button id="signInAgainButton" class="btn btn-success">Sign in as someone else</button>`)
        $('#signInSection').hide()
        $('#results').show()
        $('#hiddenUserId').val(selectedUserId)
      }
    })
  })
}

function createNewUser(){
  $("#submitNewUser").on('click', function(e) {
    //alert($("#newUserName").val())
    var newUser = $("#newUserName").val()
    $.ajax({
      method: "POST",
      url: 'http://localhost:3000/api/v1/users',
      data: {
        username: newUser
      },
      success: function(response) {
        console.log(response)
        signInForm()
        $('#addFood').show()
        listUserFoods()
      }
    })
  })
}
