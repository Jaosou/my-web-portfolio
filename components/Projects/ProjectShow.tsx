'use cilent'
import Image from "next/image"
import { projectType } from "@/assets/assets"
import { GrNext } from "react-icons/gr";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";


interface projectType {
    title: string,
    Desc: string,
    Image: string
}

const ProjectShow = () => {
    return (
        <div id='home' className='min-h-screen w-full flex flex-col justify-center items-center pt-24'>
            <div className='text-center w-full flex justify-center'>
                <div className='flex flex-col'>
                    <div className="flex w-full justify-center">
                        <p className='text-3xl flex items-center font-bold'><GrNext className="text-3xl text-red-600" />My lastest work</p>
                    </div>

                    <div className='"flex justify-center mt-5 p-4 rounded-2xl"'>
                        <div className="">
                            <span className='textFormat'>Welcome to my web development portfolio!
                                Explore a collection of project showcasing expertise in Fullstack developer.
                            </span>
                        </div>

                    </div>

                </div>
            </div>


            {/* Project */}
            <div className="gridProject">
                {projectType.map((project, index) =>
                    <div key={index} className={
                        index == 1 || index == 3
                            ? "projectOddNumber"
                            : "projectEvenNumber"
                    }>
                        <div className='cardProjectBG overflow-clip'>
                            <div className="w-full">
                                <div className="w-full flex justify-center">
                                    <Image src={project.Image}
                                        className=" rounded-xl imageProject" alt="" />
                                </div>

                                <div className="w-full pl-2">
                                    <h2 className="text-xl font-bold mt-2">
                                        {project.title}...
                                    </h2>
                                </div>

                                <div className="p-2 mb-2">
                                    {project.Desc}
                                </div>
                            </div>

                            <div className="w-full flex justify-end">
                                <Link href='/projectDetail' className="flex items-center h-10 backdrop-blur-lg p-2 rounded-xl hover:scale-110 duration-300 hover:bg-black/30">
                                    <div className='underlineFormat textFormat'>
                                        View more project.
                                    </div>
                                    <GrFormNextLink />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>

    )
}
export default ProjectShow