import { FaFacebookSquare as Facebook, FaMedium as Medium,FaTiktok as Tiktok, FaTwitch as Twitch } from "react-icons/fa";
import { FaXTwitter as Twitter, FaInstagram as Instagram } from "react-icons/fa6";

type tGetSocialResponse = {
    color:string;
    icon:JSX.Element;
}

// url.includes("")

export default function getSocial(url:string):tGetSocialResponse|null {
    if(url.includes("facebook")){
        return {
            color:"#1877f2",
            icon:<Facebook/>
        }
    }else if(url.includes("twitter") || url.includes("x.com")){
        return {
            color:"#14171a",
            icon:<Twitter/>
        }
    }else if(url.includes("instagram")){
        return {
            color:"#99187d",
            icon:<Instagram/>
        }
    }else if(url.includes("tiktok")){
        return {
            color:"#ee1d52",
            icon:<Tiktok/>
        }
    }else if(url.includes("twitch")){
        return {
            color:"#9146ff",
            icon:<Twitch/>
        }
    }else if(url.includes("medium")){
        return {
            color:"#076b46",
            icon:<Medium/>
        }
    }else {
        return null;
    }
}