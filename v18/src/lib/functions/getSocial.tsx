import * as Icon from "@/data/icons";

type tGetSocialReturn = {
  color: string;
  icon: JSX.Element;
  title: string;
};

export function getSocial(url: string): tGetSocialReturn {
  if (url.includes("awwwards")) {
    return {
      color: "",
      icon: <Icon.Awwwards />,
      title: "Awwwards",
    };
  } else if (url.includes("behance")) {
    return {
      color: "",
      icon: <Icon.Behance />,
      title: "Behance",
    };
  } else if (url.includes("dribbble")) {
    return {
      color: "",
      icon: <Icon.Dribbble />,
      title: "Dribbble",
    };
  } else if (url.includes("facebook")) {
    return {
      color: "",
      icon: <Icon.Facebook />,
      title: "Facebook",
    };
  } else if (url.includes("instagram")) {
    return {
      color: "",
      icon: <Icon.Instagram />,
      title: "Instagram",
    };
  } else if (url.includes("medium")) {
    return {
      color: "",
      icon: <Icon.Medium />,
      title: "Medium",
    };
  } else if (url.includes("spotify")) {
    return {
      color: "",
      icon: <Icon.Spotify />,
      title: "Spotify",
    };
  } else if (url.includes("threads")) {
    return {
      color: "",
      icon: <Icon.Threads />,
      title: "Threads",
    };
  } else if (url.includes("tiktok")) {
    return {
      color: "",
      icon: <Icon.TikTok />,
      title: "TikTok",
    };
  } else if (url.includes("x.com")) {
    return {
      color: "",
      icon: <Icon.Twitter />,
      title: "Twitter",
    };
  } else if (url.includes("youtube")) {
    return {
      color: "",
      icon: <Icon.YouTube />,
      title: "YouTube",
    };
  } else if (url.includes("linkedin")) {
    return {
      color: "",
      icon: <Icon.LinkedIn />,
      title: "LinkedIn",
    };
  } else {
    return {
      color: "",
      icon: <Icon.Share />,
      title: "",
    };
  }
}
