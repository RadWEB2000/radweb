import {
  Awwwards,
  Behance,
  Dribbble,
  Facebook,
  Instagram,
  LinkedIn,
  Medium,
  Share,
  Spotify,
  Threads,
  TikTok,
  Twitter,
  YouTube,
} from "@/data/icons";

type tGetSocialReturn = {
  color: string;
  icon: JSX.Element;
  title: string;
};

export function getSocial(url: string): tGetSocialReturn {
  if (url.includes("awwwards")) {
    return {
      color: "",
      icon: <Awwwards />,
      title: "Awwwards",
    };
  } else if (url.includes("behance")) {
    return {
      color: "",
      icon: <Behance />,
      title: "Behance",
    };
  } else if (url.includes("dribbble")) {
    return {
      color: "",
      icon: <Dribbble />,
      title: "Dribbble",
    };
  } else if (url.includes("facebook")) {
    return {
      color: "",
      icon: <Facebook />,
      title: "Facebook",
    };
  } else if (url.includes("instagram")) {
    return {
      color: "",
      icon: <Instagram />,
      title: "Instagram",
    };
  } else if (url.includes("medium")) {
    return {
      color: "",
      icon: <Medium />,
      title: "Medium",
    };
  } else if (url.includes("spotify")) {
    return {
      color: "",
      icon: <Spotify />,
      title: "Spotify",
    };
  } else if (url.includes("threads")) {
    return {
      color: "",
      icon: <Threads />,
      title: "Threads",
    };
  } else if (url.includes("tiktok")) {
    return {
      color: "",
      icon: <TikTok />,
      title: "TikTok",
    };
  } else if (url.includes("x.com")) {
    return {
      color: "",
      icon: <Twitter />,
      title: "Twitter",
    };
  } else if (url.includes("youtube")) {
    return {
      color: "",
      icon: <YouTube />,
      title: "YouTube",
    };
  } else if (url.includes("linkedin")) {
    return {
      color: "",
      icon: <LinkedIn />,
      title: "LinkedIn",
    };
  } else {
    return {
      color: "",
      icon: <Share />,
      title: "",
    };
  }
}
