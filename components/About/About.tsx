'use client'
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { assets, skill } from '@/assets/assets'
import SwiperBar from "@/components/swiper";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";

const About = () => {
    return (
        <div className="containnerAbout">
            <div className="flex flex-col items-center">
                <FaUser className="text-5xl pb-4 text-center" />
                <p className="text-5xl text-center font-bold flex items-center">
                    <GrNext className="text-3xl text-red-600" /> About ME
                </p>
            </div>
            <div className="gridAboutPage">
                <div className="pt-16 w-full flex justify-center">
                    <Image className=
                        'boderShadowImage imageBlur'
                        src={assets.mySeft2} alt="" />
                </div>
                <div className="containnerAboutR">
                    <div className="contentAboutR">
                        <span className="text-4xl font-bold">Who am i?</span>
                        My name is Jaosua. I&apos;m studying at King Mongkut&apos;s University of Technology Thonburi,; in the Faculty of Industrial Education and Technology,; majoring in Computer Engineering. I enjoy studying computer mathematics, but I don&apos;t really like languages—though I&apos;m currently practicing, with the goal of reaching B2 level this year. I love playing basketball and have competed in several tournaments. As Newton&apos;s Third Law states, &apos;If you want to move forward, you must leave something behind&apos;.
                        <div className='barSkill'>
                            <span className="text-2xl font-bold">My Skills :</span>
                            <div className='cardAllSkill'>
                                {
                                    <SwiperBar>
                                        {
                                            skill.map((item, index) =>
                                                <SwiperSlide key={index}>
                                                    <Link href="">
                                                        <div className='containnerLogoSkill'>
                                                            <Image className="logoSkill" src={item.logo} alt="" />
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            )
                                        }
                                    </SwiperBar>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About