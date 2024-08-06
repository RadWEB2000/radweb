
const months =  {
    en:[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    es:[
        "Enero",
        "Febero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubure",
        "Noviembre",
        "Diciembre",
    ],
    fr:[
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ],
    pl:[
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
    ],
}

export default function getDate(time:string,lang:"en"|"es"|"fr"|"pl", type:"long"|"short"|"numeric"){

    const date = new Date(time);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    
    if(type === "long"){
        return `${day} ${months[lang][date.getMonth()]} ${year}`
    }
    else if(type === "short"){
        return `${day} ${months[lang][date.getMonth()].substring(0,3)} ${year}`
    } else if (type === "numeric"){
        return `${day}/${month}/${year}`
    }else{
        return `${day}/${month}/${year}`
    }
}