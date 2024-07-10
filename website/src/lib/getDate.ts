
const months = [
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
]

export default function getDate(time:string, type:"long"|"short"|"numeric"):string{

    const date = new Date(time);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();


    if(type === "long"){
        return `${day} ${months[date.getMonth()]} ${year}`
    }
    else if(type === "short"){
        return `${day} ${months[date.getMonth()].substring(0,3)} ${year}`
    } else if (type === "numeric"){
        return `${day}/${month}/${year}`
    }else{
        return `${day}/${month}/${year}`
    }
}