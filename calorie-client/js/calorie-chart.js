$(document).ready(function(){
  const CHART = document.getElementById("lineChart");
  console.log(CHART);

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var present_day = `${yyyy}-0${mm}-${dd}`
  var sum = 0;



  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/user_foods',
    success: function(data){
      console.log("hello?")
      console.log(data)
      // debugger
      let lineChart = new Chart(CHART, {
        type: 'line',
        data: {
          // labels: ["January", "February", "March", "April", "May", "June", "July"],
          labels: [`${mm}/${dd-7}`, `${mm}/${dd-6}`, `${mm}/${dd-5}`, `${mm}/${dd-4}`, `${mm}/${dd-3}`, `${mm}/${dd-2}`, `${mm}/${dd-1}`],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [
                data[data.length - 1].calories,
                data[data.length - 2].calories,
                data[data.length - 3].calories,
                data[data.length - 4].calories,
                data[data.length - 5].calories,
                data[data.length - 6].calories,
                data[data.length - 7].calories,
              ],
              spanGaps: false,
            }
          ]
        }
      })
    }
  })
}) //document.ready
