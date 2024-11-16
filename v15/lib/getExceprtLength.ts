export default function getExceprtLength(content:string, length:number):string{
    if(content.length < length){
        return content
    }else{
        return `${content.substring(0, length - 3).trim()}...`
    }
}