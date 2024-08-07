/* TIME HOUR MINUTES */

/* time date text */

const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAmPM = document.getElementById('text-ampm')


const clockText = () =>{
    //Get date object
    let date = new Date()

    //get time 
    let hh = date.getHours(),
        mm = date.getMinutes(),
        ampm


    //if hours > 12(pm), subtract -12, start @ 1 in afternoon

    if (hh >= 12) {
        hh = hh-12
        ampm = 'pm'
    } else {
        ampm = 'am'
    }

    textAmPM.innerHTML = ampm

    // when 0 hours (midnight), change hourse to 12
    if (hh == 0){hh = 12}

    //if hours < 10, add 0 (01, 02, 03,...09)
    if (hh < 10){hh = `0${hh}`}

    textHour.innerHTML = `${hh}:`

    //if minutes < 10, add 0 (01, 02, 03, ...09)
    if (mm < 10){mm = `0${m}`}

    textMinutes.innerHTML = mm
}

setInterval(clockText)