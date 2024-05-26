
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

})