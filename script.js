const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

    // Get the current date
    var currentDate = new Date();

    // Add one day to the current date to get tomorrow's date
    var tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);

    // Format tomorrow's date as desired (e.g., YYYY-MM-DD)
    var formattedTomorrowDate = tomorrowDate.toISOString().split('T')[0];
    var formattedCurrentDate = currentDate.toISOString().split('T')[0];

    // Update the content of the element with id "date" to tomorrow's date
    document.getElementById("date").textContent += formattedTomorrowDate;
    document.getElementById("date2").textContent += formattedTomorrowDate;
    document.getElementById("date3").textContent += formattedTomorrowDate;
    document.getElementById("date4").textContent += formattedCurrentDate;