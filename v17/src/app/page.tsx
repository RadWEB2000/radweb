import { Badge, BlogCard } from "@/ui/index";

export default function Home() {
  return (
    <>
      <Badge category="news" title="News" />
      <Badge category="seo" title="Google" />
      <Badge category="ppc" title="Reklamy" />
      <Badge category="www" title="CSS" />
      <BlogCard />
    </>
  );
}
