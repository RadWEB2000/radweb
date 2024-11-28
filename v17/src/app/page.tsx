import { Badge } from "@/components/ui";


export default function Home() {
  return (
    <>
      <div
        className="fixed w-[350px] h-[350px] top-[50%] left-[50%] bg-slate-100"
        style={{
          
          transform:"translate(-50%,-50%)"
        }}
      >
        <Badge
          category="news"
          title="News"
        />
        <Badge
          category="seo"
          title="Google"
        />
        <Badge
          category="ppc"
          title="Reklamy"
        />
      </div>
    </>
  )
}
