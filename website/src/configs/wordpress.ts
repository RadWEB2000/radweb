
type tWordpress = {
    query:string;
}

export default function wordpress({query}:tWordpress){
    return {
        method:"POST",
        body:JSON.stringify({
            query:query,
        }),
        headers: {
            "Content-Type":"application/json"
        }
    }
}