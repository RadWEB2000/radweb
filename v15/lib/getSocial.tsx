import { FaFacebookF as Facebook, FaMedium as Medium, FaYoutube as YouTube} from "react-icons/fa";
import { FaGithub as Github, FaXTwitter as Twitter} from "react-icons/fa6";
import { ImLinkedin2 as LinkedIn} from "react-icons/im";
import { PiLinkSimpleBold as Link} from "react-icons/pi";
import { SiInstagram as Instagram} from "react-icons/si";





export default function getSocial(url:string):JSX.Element{
    if(url.includes("facebook.com")){
        return <Facebook/>;
    } else if(url.includes("instagram.com")){
        return <Instagram/>;
    } else if(url.includes("youtube.com")){
        return <YouTube/>;
    } else if(url.includes("linkedin.com")){
        return <LinkedIn/>;
    } else if(url.includes("github.com")){
        return <Github/>;
    } else if(url.includes("twitter.com") || url.includes("x.com")){
        return <Twitter/>;
    } else if(url.includes("medium.com")){
        return <Medium/>;
    } else {
        return <Link/>;
    }
}