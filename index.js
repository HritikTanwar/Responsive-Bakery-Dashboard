
const AddReminder = document.getElementById("add-reminder")
let HiddenReminder = document.querySelector(".hidden-reminder")
let InputField = document.getElementById("input-filed")
let AddBtn = document.getElementById("add-btn")
let ReminderList = document.getElementById("reminder-list")
const darkMode = document.querySelector('.dark-mode');
const MSG = document.getElementById("msg")
let AllContent = document.querySelector(".allContent")
let ToggleReminder = document.getElementById("toggle")
let Reminders = document.querySelector(".reminders")
let ShowHome = document.querySelector(".second")
const mediaQuery = window.matchMedia('(max-width: 890px)');
let ItemBar = document.querySelector(".itemsBar")
let MenuToggle = document.querySelector(".clicking")




function Menu(){
    if(ItemBar.style.left === '-105px'){
    ItemBar.style.left = '0';
   }
     else{
         ItemBar.style.left = '-105px';
     }
}


ToggleReminder.addEventListener("click", function(){
    AllContent.style.display = "none"
    Reminders.style.display = "block"
    console.log("Clicked")
})


ShowHome.addEventListener("click", function(){
    if(mediaQuery.matches){ 
    MenuToggle.style.display = "block"
    AllContent.style.display = "block"
    Reminders.style.display = "none" 
    }
    
});


AddReminder.addEventListener("click", function () {
    HiddenReminder.style.display = "block"
})



AddBtn.addEventListener("click", function () {
    if (InputField.value.trim() == ""){
        MSG.style.display = "block"
    }
    else{   
    addingReminder()
    InputField.value = ""
    HiddenReminder.style.display = "none"
    MSG.style.display = "none"
}
})


// Function to create new Reminder
function addingReminder() {
    
    
    let newReminder = InputField.value
    let newList = document.createElement("li")
    newList.textContent = newReminder

    ReminderList.append(newList)

}

// Function to remove Reminder on Double Click!
ReminderList.addEventListener("dblclick", function () {

    event.target.remove();

})


// Function to toggle Dark/Light Mode.
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span').classList.toggle('active');
})