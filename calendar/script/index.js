var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var timesAvailable = [];

var event = JSON.parse(sessionStorage.getItem("eventObj"));



// Calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        height: 'auto',
        showNonCurrentDates: false,
        selectable: true,
        select: function(info) {
            var currentDay = new Date();
            var daySelected = info.start;
            let chosenDay = days[daySelected.getDay()]
            // console.log(chosenDay)
            // console.log(typeof(chosenDay))
            const BASE_URL='https://www.pithgrowth.simurgify.com/'
            if (sessionStorage.getItem('company') && sessionStorage.getItem('sub_type')) {
                axios.post(`${BASE_URL}api/verify/partner/get_schedule?token=${localStorage.getItem('token_partner')?localStorage.getItem('token_partner'):localStorage.getItem('token_company')}`,{
                    sub_type:sessionStorage.getItem('sub_type'),
                    type:sessionStorage.getItem('company'),
                }).then(response=>{
                    if(response.data.schedule.Friday_isOpen ===false && chosenDay==='Friday'){
                        return alert("Fridays are not avaible sorry");
                    }if(response.data.schedule.Monday_isOpen===false && chosenDay==='Monday') {
                        return alert("Monday is not avaible sorry");
                    }if(response.data.schedule.Tuesday_isOpen===false && chosenDay==='Tuesday') {
                        return alert("Tuesday is not avaible sorry");
                    }if(response.data.schedule.Thursday_isOpen===false && chosenDay==='Thursday') {
                        return alert("Thursday is not avaible sorry");
                    }if(response.data.schedule.Saturday_isOpen===false && chosenDay==='Saturday') {
                        return alert("Saturday is not avaible sorry");
                    }if(response.data.schedule.Wednesday_isOpen===false && chosenDay==='Wednesday') {
                        return alert("Wednesday is not avaible sorry");
                    }if(response.data.schedule.Sunday_isOpen===false && chosenDay==='Sunday') {
                        return alert("Sunday is not avaible sorry");
                    }else {
                        if (daySelected >= currentDay) {
                            const BASE_URL='https://www.pithgrowth.simurgify.com/'
                            axios.post(`${BASE_URL}api/verify/partner/filter_schedule?token=${localStorage.getItem('token_company')?localStorage.getItem('token_company'):localStorage.getItem('token_partner')}`,{
                                type:sessionStorage.getItem('company'),
                                sub_type:sessionStorage.getItem('sub_type'),
                                day:chosenDay
                            }).then(response=>{
                                timesAvailable=[]
                                timesAvailable.push(...response.data.time)
                            
                            var timeDiv = document.getElementById("available-times-div");
            
                            while (timeDiv.firstChild) {
                                timeDiv.removeChild(timeDiv.lastChild);
                            }
                            //Heading - Date Selected
                            console.log("Step 1")
                            var h4 = document.createElement("h4");
                            var h4node = document.createTextNode(
                                days[daySelected.getDay()] + ", " +
                                months[daySelected.getMonth()] + " " + 
                                daySelected.getDate());
                                console.log("Step 2")
                                h4.appendChild(h4node);
                                console.log("Step 3")
                            timeDiv.appendChild(h4);
                            console.log("Step 4")
                            //Time Buttons
                            for (var i = 0; i < timesAvailable.length; i++) {
                                var timeSlot = document.createElement("div");
                                timeSlot.classList.add("time-slot");
            
                                var timeBtn = document.createElement("button");
            
                                var btnNode = document.createTextNode(timesAvailable[i]); 
                                timeBtn.classList.add("time-btn");
                                timeBtn.appendChild(btnNode);
                                timeSlot.appendChild(timeBtn);
            
                                timeDiv.appendChild(timeSlot);
            
                                // When time is selected
                                var last = null;
                                timeBtn.addEventListener("click", function() {
                                    if (last != null) {
                                        last.parentNode.removeChild(last.parentNode.lastChild);
                                    }
                                    var confirmBtn = document.createElement("button");
                                    var confirmTxt = document.createTextNode("Confirm");
                                    confirmBtn.classList.add("confirm-btn");
                                    confirmBtn.appendChild(confirmTxt);
                                    this.parentNode.appendChild(confirmBtn);
                                    event.time = this.textContent;
                                    sessionStorage.setItem('time',this.textContent)
                                    confirmBtn.addEventListener("click", function() { 
                                        sessionStorage.setItem('date', days[daySelected.getDay()] + ", " +months[daySelected.getMonth()] + " " + daySelected.getDate())
                                        event.date = 
                                        days[daySelected.getDay()] + ", " +
                                        months[daySelected.getMonth()] + " " + 
                                        daySelected.getDate();
                                    sessionStorage.setItem("eventObj", JSON.stringify(event));
                                         const BASE_URL='https://www.pithgrowth.simurgify.com/'
                                        axios.get(`${BASE_URL}api/public/partners`).then(res=>{
                                            res.data.filter(el=>el.type===sessionStorage.getItem('company') && el.sub_type.includes(sessionStorage.getItem('sub_type'))).map(data=>
                                                {
                                                localStorage.setItem('selected_partner_id',data.id)
                                                    localStorage.setItem('partner_contact_name',data.contact_name)
                                            }
                                            )
                                        }).then(()=>
                                        {
                                        window.location.href = "event_register.html";
                                        }
                                        )
                                    });
                                    last = this;
                                });
                            }
            
                            var containerDiv = document.getElementsByClassName("container_calendar")[0];
                            containerDiv.classList.add("time-div-active");
                            
                            document.getElementById("calendar-section").style.flex = "2";
            
                            timeDiv.style.display = "initial";
                        })
                        } else {alert("Sorry that date has already past. Please select another date.");}
                    }
                })}
        },
    });
    calendar.render();
});