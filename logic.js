var date = window.prompt("please enter the the date that you want to countdown to", "April 4, 2025 03:22:12")

setInterval(function() {
    var countDownDate = new Date(date).getTime();
    // "Jan 1, 2022 00:00:00"
    var now = new Date().getTime();

    var distance = countDownDate - now;
    if (distance < 0) {
        document.getElementById("demo").innerHTML = "you have passed this date";
    } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days + " days"
        document.getElementById("hours").innerHTML = hours + " hours"
        document.getElementById("minutes").innerHTML = minutes + " minutes"
        document.getElementById("seconds").innerHTML = seconds + " seconds"

        document.getElementById("demo").innerHTML = "Still there are " + days + "d " + hours + "h " +
            minutes + "m " + seconds + "s " + `to <h2 style='color:black'>${date}</h2>`;
    }



}, 1000)
