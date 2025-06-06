// import Image from "next/image";
// import me from "@/img/r-adamczyk-gray.webp"
import { home_page } from "@/data/static/home-page";
import { About, Blog, Hero, Projects, Services } from "@/views/home-view";

export default function HomePage() {

  const { about, blog, hero, services } = home_page;

  return (
    <>
      <Hero {...hero} />
      <main>
        <About />
        <Services />
        <Projects />
        <Blog />
      </main>
      <ul>

        <li>lorem59</li>
        <li>lorem60</li>
        <li>lorem61</li>
        <li>lorem62</li>
        <li>lorem79</li>
        <li>lorem80</li>
        <li>lorem81</li>
        <li>lorem82</li>
        <li>lorem83</li>
        <li>lorem84</li>
        <li>lorem85</li>
        <li>lorem86</li>
        <li>lorem87</li>
        <li>lorem88</li>
        <li>lorem89</li>
        <li>lorem90</li>
      </ul>
    </>
  )
}