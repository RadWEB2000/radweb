import {
  Behance,
  Dribbble,
  Facebook,
  Github,
  Instagram,
  LinkedIn,
  Medium,
  Spotify,
  TikTok,
  Twitter,
  YouTube,
} from "@/ico/index";
import { ReactElement } from "react";

type tGetSocialReturn = {
  color: string;
  icon: ReactElement;
  title: string;
};

export function getSocial(url: string): tGetSocialReturn {
  if (url.includes("behance")) {
    return {
      color: " #6001d2",
      icon: <Behance />,
      title: "Behance",
    };
  } else if (url.includes("dribbble")) {
    return {
      color: "#ea4c89",
      icon: <Dribbble />,
      title: "Dribbble",
    };
  } else if (url.includes("facebook")) {
    return {
      color: "#1877f2",
      icon: <Facebook />,
      title: "Facebook",
    };
  } else if (url.includes("instagram")) {
    return {
      color: "#c32aa3",
      icon: <Instagram />,
      title: "Instagram",
    };
  } else if (url.includes("medium")) {
    return {
      color: "#02b875",
      icon: <Medium />,
      title: "Medium",
    };
  } else if (url.includes("spotify")) {
    return {
      color: "#1ed760",
      icon: <Spotify />,
      title: "Spotify",
    };
  } else if (url.includes("tiktok")) {
    return {
      color: "#ee1d52",
      icon: <TikTok />,
      title: "TikTok",
    };
  } else if (url.includes("x.com")) {
    return {
      color: "#1da1f2",
      icon: <Twitter />,
      title: "Twitter",
    };
  } else if (url.includes("youtube")) {
    return {
      color: "#ff0000",
      icon: <YouTube />,
      title: "YouTube",
    };
  } else if (url.includes("linkedin")) {
    return {
      color: "#0a66c2",
      icon: <LinkedIn />,
      title: "LinkedIn",
    };
  } else if (url.includes("github")) {
    return {
      color: "#40c463",
      icon: <Github />,
      title: "GitHub",
    };
  } else {
    return {
      color: "",
      icon: <Medium />,
      title: "",
    };
  }
}
