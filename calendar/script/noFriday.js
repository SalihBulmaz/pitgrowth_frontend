function noFriday(){
    const BASE_URL='https://www.pithgrowth.simurgify.com/'
    console.log('test123123')
   if (sessionStorage.getItem('company') && sessionStorage.getItem('sub_type')) {
       axios.post(`${BASE_URL}api/verify/partner/get_schedule?token=${localStorage.getItem('token_partner')?localStorage.getItem('token_partner'):localStorage.getItem('token_company')}`,{
           sub_type:sessionStorage.getItem('sub_type'),
           type:sessionStorage.getItem('company'),
       }).then(response=>{
           sessionStorage.setItem('event_register_partner_name',response.data.filterbySub[0].company_name)
           document.getElementById("event").textContent = response.data.filterbySub[0].company_name;
           document.getElementById("scheduler").textContent = "Pitgrowth";
           document.getElementById("duration").textContent = 15 + "min";
           document.getElementById("description").textContent = "Our team will meet with you to review pricing options.";
           document.getElementById("selected_partner_logo").setAttribute('src',`https://www.pithgrowth.simurgify.com/${response.data.filterbySub[0].logo}`)
           sessionStorage.setItem('logo_partner',`https://www.pithgrowth.simurgify.com/${response.data.filterbySub[0].logo}`)
           if (response.data.schedule.Monday_isOpen===false) {
               var days = document.getElementsByClassName("fc-daygrid-day")
               let day_nums = document.querySelectorAll(".fc-day-mon .fc-daygrid-day-number")
               for(var i = 0; i <= 36 ;i++){
                   if(day_nums[i]!==undefined)
                       {
                       day_nums[i].style.opacity = "0.2"
               }
                   if(days[i].classList.contains("fc-day-mon")){
                       days[i].className = "fc-daygrid-day fc-day fc-day-mon fc-day-disabled fc-unselectable"
                       days[i].setAttribute('click',null)
                   }
               }
           }if (response.data.schedule.Sunday_isOpen===false){
               var days = document.getElementsByClassName("fc-daygrid-day")
               let day_nums = document.querySelectorAll(".fc-day-sun .fc-daygrid-day-number")
               for(var i = 0; i <= 36 ;i++){
                   if(day_nums[i]!==undefined)
                   {
                   day_nums[i].style.opacity = "0.2"
           }
                   if(days[i].classList.contains("fc-day-sun")){
                       days[i].className = "fc-daygrid-day fc-day fc-day-sun fc-day-disabled fc-unselectable"
                   }
               }
           } if (response.data.schedule.Tuesday_isOpen===false){
               var days = document.getElementsByClassName("fc-daygrid-day")
               let day_nums = document.querySelectorAll(".fc-day-tue .fc-daygrid-day-number")
               for(var i = 0; i <= 36 ;i++){
                   if(day_nums[i]!==undefined)
                   {
                   day_nums[i].style.opacity = "0.2"
           }
                   if(days[i].classList.contains("fc-day-tue")){
                       days[i].className = "fc-daygrid-day fc-day fc-day-tue fc-day-disabled fc-unselectable"
                   }
               }
           } if (response.data.schedule.Wednesday_isOpen===false){
               var days = document.getElementsByClassName("fc-daygrid-day")
               let day_nums = document.querySelectorAll(".fc-day-wed .fc-daygrid-day-number")
               for(var i = 0; i <= 36 ;i++){
                   if(day_nums[i]!==undefined)
                   {
                   day_nums[i].style.opacity = "0.2"
           }
                   if(days[i].classList.contains("fc-day-wed")){
                       days[i].className = "fc-daygrid-day fc-day fc-day-wed fc-day-disabled fc-unselectable"
                   }
               }
           }  if (response.data.schedule.Thursday_isOpen===false){
               var days = document.getElementsByClassName("fc-daygrid-day")
               let day_nums = document.querySelectorAll(".fc-day-thu .fc-daygrid-day-number")
               for(var i = 0; i <= 36 ;i++){
                   if(day_nums[i]!==undefined)
                   {
                   day_nums[i].style.opacity = "0.2"
           }
                   if(days[i].classList.contains("fc-day-thu")){
                       days[i].className = "fc-daygrid-day fc-day fc-day-thu fc-day-disabled fc-unselectable"
                   }
               }
           } if (response.data.schedule.Friday_isOpen===false){
               var days = document.getElementsByClassName("fc-daygrid-day")
               let day_nums = document.querySelectorAll(".fc-day-fri .fc-daygrid-day-number")
               for(var i = 0; i <= 36 ;i++){
                   if(day_nums[i]!==undefined)
                   {
                   day_nums[i].style.opacity = "0.2"
           }
                   if(days[i].classList.contains("fc-day-fri")){
                       days[i].className = "fc-daygrid-day fc-day fc-day-fri fc-day-disabled fc-unselectable"
                   }
               }
           } if (response.data.schedule.Saturday_isOpen===false){
               var days = document.getElementsByClassName("fc-daygrid-day")
               let day_nums = document.querySelectorAll(".fc-day-sat .fc-daygrid-day-number")
               for(var i = 0; i <= 36 ;i++){
                   if(day_nums[i]!==undefined)
                   {
                   day_nums[i].style.opacity = "0.2"
           }
                   if(days[i].classList.contains("fc-day-sat")){
                       days[i].className = "fc-daygrid-day fc-day fc-day-sat fc-day-disabled fc-unselectable"
                   }
               }
           } 
       })
   }
}