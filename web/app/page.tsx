import { home } from "data/home"
import { AboutUs, Hero, Offer } from "v-home/index"
export default function HomePage(){
  return (
    <>
      <Hero
        {...home.hero}
      />
      <main>
        <Offer
          {...home.offer}
        />
        <AboutUs
          {...home.aboutUs}
        />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vero inventore a est recusandae dolor perferendis magni voluptatem illum architecto perspiciatis id omnis, doloremque nobis ipsam quae cupiditate! Cumque, perferendis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repudiandae ex necessitatibus veniam soluta officiis quod maxime eius accusantium dolore blanditiis tenetur, qui debitis cupiditate porro architecto voluptate sed omnis.
        Quaerat molestias nulla nam odio, dolor itaque velit fuga provident. Impedit dolorum voluptatem vel? Quidem nulla et rem inventore doloremque facere deleniti molestiae sequi, neque voluptatum iste temporibus quam eveniet!
        Explicabo error mollitia quibusdam ducimus reiciendis natus, culpa quae aliquam quas qui recusandae quod, aperiam obcaecati veniam, nobis harum autem sapiente! Repudiandae omnis at consequuntur facere! Omnis impedit quas repellendus.
        Praesentium corrupti, nobis omnis voluptates dolorem aspernatur sequi modi sapiente vel sit unde illo dignissimos adipisci vero eos mollitia saepe labore recusandae repudiandae consectetur libero. Velit repellendus quae minima beatae?
        Reiciendis voluptatum autem, repudiandae ut, doloremque et, omnis facere at quasi atque dignissimos! Fugiat veritatis ea magnam voluptatum! Commodi aperiam perferendis maiores libero vel quas harum aliquam dolorum. Unde, distinctio.
      </main>
    </>
  )
}