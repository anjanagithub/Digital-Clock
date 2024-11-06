let clock=document.getElementById("clock")
// console.log(clock) for checking purpose

//one method
// setInterval(()=>{
//     let date=new Date()
//     clock.innerHTML=date.toLocaleTimeString()
// },1000)


//another method 
setInterval(()=>{
    let date=new Date()
    let hours=date.getHours()
    let minutes=date.getMinutes().toString().padStart(2,"0")
    let seconds=date.getSeconds().toString().padStart(2,"0")
    let ampm=(hours>12)? "PM": "AM"

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12; // This ensures 0 becomes 12 for midnight/noon
    hours = hours.toString().padStart(2, "0");
    clock.innerHTML=`${hours}:${minutes}:${seconds} ${ampm}`

},1000)