import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]
        p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0

                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://picsum.photos/500"
                alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'></h4>
                <p className='font-bold text-2xl mt-1'></p>
                <div className='flex space-x-2 my-2'>
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work ... Ended ...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </article>
    )
}

export default ExperienceCard