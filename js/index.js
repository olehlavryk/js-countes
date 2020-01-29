window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Timer
    let deadline = '2021-01-01';

    function getTimerRamaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours   = Math.floor((t / (1000 * 60 * 60))),
        days    = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total'   : t,
            'days'    : days,
            'hours'   : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            days  = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            daysLabel = timer.querySelector('.daysLabel'),
            hoursLabel = timer.querySelector('.hoursLabel'),
            minutesLabel = timer.querySelector('.minutesLabel'),
            secondsLabel = timer.querySelector('.secondsLabel'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimerRamaining(endTime);

            // set labels
            daysLabel.textContent = t.days > 1 ? 'Days:': 'Day:';
            hoursLabel.textContent = t.hours > 1 ? 'Hours:': 'Hour:';
            minutesLabel.textContent = t.minutes > 1 ? 'Minutes:': 'Minute:';
            secondsLabel.textContent = t.seconds > 1 ? 'Seconds:': 'Second:';

            // set values
            days.textContent    = t.days < 10 ? '0' + t.days : t.days;
            hours.textContent   = t.hours < 10 ? '0' + t.hours: t.hours;
            minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
            seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent   = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);
});