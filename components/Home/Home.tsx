'use client'
import { assets, httpWeb } from '@/assets/assets';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';


const HomePage = () => {

    const themeOb = useTheme()

    return (
        <div className='font-mono w-full flex flex-col justify-center '>
            {/* Lamp top */}
            <div className={
                themeOb.theme == 'dark'
                    ? ' absolute w-32 h-32 top-10 left-[46.75%] rounded-full bg-white border-white'
                    : 'lampTop'
            }></div>
            <div className={
                themeOb.theme == 'dark'
                    ? 'w-52 h-52 absolute left-[46.75%] top-0 blur-3xl container bg-gradient-to-r from-white to-black '
                    : ""
            }></div>


            <div className='homeContainner '>
                <div className='w-full flex items-center justify-center '>
                    <div className='w-full flex items-center justify-center flex-col '>
                        {/* Description */}
                        <div className={
                            themeOb.theme == 'dark'
                                ? ' absolute left-40 h-24 w-24 bg-white blur-2xl rounded-xl -z-10'
                                : ' absolute left-40 h-24 w-24 bg-black blur-2xl rounded-xl -z-10'
                        }>
                        </div>
                        <div className='containnerCardHomeLeft'>
                            <div className='w-full'>
                                <div className='cardHome'>
                                    <div className='text-4xl font-normal'>
                                        <span>I am</span>
                                        <span className='font-bold text-5xl text-[#fd0c0c]'>  Jaosou.</span>
                                    </div>
                                    <div>
                                        <p className='text-animation'><span className='font-bold'></span></p>
                                    </div>
                                    <div className=' textFormat'>
                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This portfolio serves as a     platform to showcase my technical abilities and projects. I&apos;m   actively seeking
                                            an internship where I can apply my skills, especially in database management. My experience includes
                                            database connectivity, API development, and a strong passion for backend development.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex w-3/5 gap-4'>
                                {/* <Link href={""} className='buttonHome'>
                                    <div className='underlineFormat'>Hire.</div>
                                </Link> */}
                                <Link href={httpWeb[0].Website}
                                    target='blank'
                                    className='buttonHome'>
                                    <div className='underlineFormat'>Resume.</div>
                                </Link>
                                <Link href="#Contact" className='buttonHome'>
                                    <div className='underlineFormat'>Contact.</div>
                                </Link>
                            </div>

                            {/* Button Contact */}
                            <div className='flex w-3/5 gap-8'>
                                <Link href={httpWeb[1].Website}
                                    target='blank'
                                    className='logoContact btn'>
                                    <FaGithub className='textLogoContact' />
                                </Link>
                                <Link href={httpWeb[2].Website}
                                    target='blank'
                                    className='logoContact btn'>
                                    <CiLinkedin className='textLogoContact' />
                                </Link>
                                <Link href={httpWeb[3].Website}
                                    target='blank'
                                    className='logoContact btn'>
                                    <FaInstagram className='textLogoContact' />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Picture */}
                <div className='contentHomeBr'>

                    <Image src={assets.mySelf} alt='' className={
                        themeOb.theme == 'dark'
                            ? ' bg-gradient-to-tr duration-500 from-white to-black z-10 relative cursor-pointer  imageBlur selfImage'
                            : 'bg-gradient-to-tr duration-500 from-black  via-neutral-600 to-white  z-10 relative  imageBlur selfImage'
                    } />

                    <div className='cardHomeBR'>
                        A place to talk about yourself. I think everyone wants to have a good life, and so do I. That&apos;s why I&apos;m always improving myself in terms of my knowledge. But there are times when I take a break. Everything I&apos;ve learned or what I want to present, I&apos;ve put it on this website and my intention.
                        {/* A space to talk about myself. I like mathematics and play basketball very much. In my free time, I like to find new knowledge, sleep, play games. I want to get better and better. When I'm tired, I take a break to live my life. I rest because people complain that I like to pressure or work hard. I just want to have a good life in the future. */}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomePage
