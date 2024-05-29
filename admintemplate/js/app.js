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
            $(".wrappers").toggleClass("bg-primary");

        }
    });
});

// End change theme
