// Start Right Navbar
    const getsitesettings =document.getElementById("sitesettings");
    getsitesettings.addEventListener("click",function()
    {
        document.body.classList.toggle("show-nav");
    });
// End Right Navbar
    // Start Navbar
        // start top bar
            function dropbtn(e){
                // console.log(e.target);
                // console.log(e.target.parentElement.nextElementSibling);
                e.target.parentElement.nextElementSibling.classList.toggle("show");
            };
        // end top bar
    // End Navbar

$(document).ready(function(){
     // Start Navbar
            // Start left side bar
            $(".sidebarlinks").click(function(){
                $(".sidebarlinks").removeClass("currents");
                $(this).addClass("currents");
            })
            // End left side bar
     // End Navbar

});
// Start Guage Area

var gaugeurs = new JustGage({
    id: "gaugeusers", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugecus = new JustGage({
    id: "guagecustomers", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});



var gaugeemps = new JustGage({
    id: "guageemployees", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});



var gaugeinvs = new JustGage({
    id: "guageinvesters", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

// update the value randomly
setInterval(() => {
        gaugeurs.refresh(Math.random() * 100);
        gaugecus.refresh(Math.random() * 100);
        gaugeemps.refresh(Math.random() * 100);
        gaugeinvs.refresh(Math.random() * 100);
}, 5000)







// End Guage Area

// Start Expense Area 
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
    }
  });


// End Expense Area 
// Start Earning Area 
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Sales Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

// End Earning Area 

// Start Footer 
const getyear=document.getElementById("getyear");
const getfullyear=new Date().getFullYear();
getyear.textContent=getfullyear;
// End Footer 



// start change theme

// let getclass=document.querySelectorAll(".fa-square");

$(document).ready(function(){
    $(".fa-square").click(function(){
        
        if($(this).hasClass("text-primary"))
        {
            $("body").toggleClass("bg-primary");

        }
    });
});

// End change theme
