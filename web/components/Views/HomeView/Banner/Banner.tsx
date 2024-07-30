"use client"
import css from "v-home/Banner/Banner.module.scss";
import { useEffect, useState } from "react";
import {useAnimation, motion} from "framer-motion"
import {tBanner} from "v-home/Banner/Banner.models";
import { useInView } from "react-intersection-observer";

export default function Banner({text}:tBanner){
    const controls = useAnimation();
    const [ref,inView] = useInView({
        threshold:.1
    })
    useEffect(() => {
        if(inView){
            controls.start('visible');
        }else{
            controls.start('hidden')
        }
    },[controls,inView]);
    const words = text.split(' ');
    return (
        <div>
            <picture>

            </picture>
            <motion.section
                animate={controls}
                initial="hidden"
                style={{
                    fontSize:"4rem",
                    fontWeight:600,
                    width:"800px",
                    margin:"32vh auto 20vh"
                }}
                ref={ref}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren:.15
                        }
                    },
                    hidden:{}
                }}
            >
                {
                    words.map((item,index) => {
                        return(
                            <motion.span
                                key={index}
                                transition={{duration:.5}}
                                variants={{
                                    visible:{
                                        color:"#ff6f61"
                                    },
                                    hidden:{
                                        color:"#fff"
                                    }
                                }}
                            >
                                {`${item} `}
                            </motion.span>
                        )
                    })
                }
            </motion.section>
        </div>
    )

}