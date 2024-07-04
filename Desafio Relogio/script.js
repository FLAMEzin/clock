function updateTime(){

    var clockContainner = document.getElementById('clock_containner')

    var img = document.getElementById('img')
    var imgContainner = document.getElementById('img_containner')

    var tempotest = 19

    var now = new Date()
    var nowHours = now.getHours()
    var formater = Intl.DateTimeFormat("pt-br",{timeStyle:"medium"})
    var time = formater.format(now)
    //var time =  now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

    // if (time.getHours() < 10)getHours() = '0' + getHours();
    // if (time.getSeconds() < 10)getSeconds() = '0' + getSeconds();
    // if (time.getSeconds() < 10)getSeconds() = '0' + getSeconds();


    var timePlaceholder = document.getElementById('horario')

    if(nowHours <= 4){
        timePlaceholder.innerHTML = (`Agora são ${time} hrs da madrugada, Boa madrugada! `)
        img.src = 'img/midnight.jpg'
        document.body.style.backgroundColor = "#050727"
        document.body.style.color = "#ffffff"
        clockContainner.style.color = "#050727"
        imgContainner.style.borderColor = "#050727"

    }else if(nowHours <= 12){
        timePlaceholder.innerHTML = (`Agora são ${time} hrs do dia, Bom dia! `)
        img.src = 'img/morning.jpg'
        document.body.style.backgroundColor = "#ff9e37"
        document.body.style.color = "#ffffff"
        clockContainner.style.color = "#ff9e37"
        imgContainner.style.borderColor = "#ff9e37"

    }else if (nowHours <= 17){
        timePlaceholder.innerHTML = (`Agora são ${time} hrs da tarde, Boa tarde! `)
        img.src = 'img/afternoon.jpg'
        document.body.style.backgroundColor = "#3facff"
        document.body.style.color = "#ffffff"
        clockContainner.style.color = "#3facff"
        imgContainner.style.borderColor = "#3facff"

    }else if (nowHours <= 23){
        timePlaceholder.innerHTML = (`Agora são ${time} hrs da noite, Boa noite! `)
        img.src = 'img/night.jpg'
        document.body.style.backgroundColor = "#2029ab"
        document.body.style.color = "#ffffff"
        clockContainner.style.color = "#2029ab"
        imgContainner.style.borderColor = "#2029ab"

    }
}

setInterval(updateTime, 500);