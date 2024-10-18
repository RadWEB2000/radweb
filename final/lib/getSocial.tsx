import { FaFacebookSquare as Facebook, FaMedium as Medium,FaTiktok as Tiktok, FaTwitch as Twitch, FaLinkedin as Linkedin, FaGithubAlt as Github, FaYoutube as YouTube } from "react-icons/fa";
import { FaXTwitter as Twitter, FaInstagram as Instagram } from "react-icons/fa6";

type tGetSocialResponse = {
    color:string;
    icon:JSX.Element;
}

// url.includes("")

export default function getSocial(url:string):tGetSocialResponse {
    if(url.includes("facebook.com")){
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
    }else if(url.includes("linkedin")){
        return {
            color:"#0e76a8",
            icon:<Linkedin/>
        }
    }else if(url.includes("github")){
        return {
            color:"#fafbfc",
            icon:<Github/>
        }
    }else if(url.includes("youtube")){
        return {
            color:"#FF0000",
            icon:<YouTube/>
        }
    }else if(url.includes("medium.com")){
        return {
            color:"#076b46",
            icon:<Medium/>
        }
    }else {
        return {
            color:"#076b46",
            icon:<Medium/>
        }
    }
}