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
      $('#showResults').html(`<li>${data.food_name} (${data.calories} cal.) </li>`)
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            var present_day = `${yyyy}-0${mm}-${dd}`
            var sum = 0;

            //Prototype Clean, removes all the undefined values
            Array.prototype.clean = function(deleteValue) {
              for (var i = 0; i < this.length; i++) {
                if (this[i] == deleteValue) {
                  this.splice(i, 1);
                  i--;
                }
              }
              return this;
            };

            //We want calories based on specific user and today's date
            var array = data.map(function(obj){
              if(obj.user_name === "Daniel" && present_day === obj.date) {
              return obj.calories //this includes an array with calories AND undefined
              }
            })

            //mutated array with only calories
            array.clean(undefined)

            //returns total calories of specific user and today's date
            var SUM = array.reduce(function(sum, val){
              return sum + val
            }, 0)
            $('#totalCalories').html(SUM)
          })
    })

    //displays all foods for today
  //   $.ajax({
  //     method: 'GET',
  //     url: 'http://localhost:3000/api/v1/user_foods',
  //     success: function(data){
  //       // debugger
  //       var today = new Date();
  //       var dd = today.getDate();
  //       var mm = today.getMonth()+1; //January is 0!
  //       var yyyy = today.getFullYear();
  //       var present_day = `${yyyy}-0${mm}-${dd}`
  //       var sum = 0;
  //
  //       //Prototype Clean, removes all the undefined values
  //       Array.prototype.clean = function(deleteValue) {
  //         for (var i = 0; i < this.length; i++) {
  //           if (this[i] == deleteValue) {
  //             this.splice(i, 1);
  //             i--;
  //           }
  //         }
  //         return this;
  //       };
  //
  //       //We want calories based on specific user and today's date
  //       var array = data.map(function(obj){
  //         if(obj.user_name === "Daniel" && present_day === obj.date) {
  //         return obj.calories //this includes an array with calories AND undefined
  //         }
  //       })
  //
  //       //mutated array with only calories
  //       array.clean(undefined)
  //
  //       //returns total calories of specific user and today's date
  //       var SUM = array.reduce(function(sum, val){
  //         return sum + val
  //       }, 0)
  //       $('#totalCalories').html(SUM)
  //     }
  //   })
  // })

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

      console.log(data)

      data.forEach(function(food) {
        if (food.date === present_day) {
          newArray.push(`<li> ${food.food_name} (${food.calories} cal.) </li>`)
        }
      })
      var sum = data.reduce(function(sum, ele) {
        return sum + ele.calories;
      }, 0);

      $('#todayDate').append(present_day)
      $('#totalCalories').append(sum)
      $('#showResults').append(newArray)
    }
  })

  const CHART = document.getElementById("lineChart");
  console.log(CHART);

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var present_day = `${yyyy}-0${mm}-${dd}`
  var sum = 0;

})
