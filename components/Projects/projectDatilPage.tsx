'use client'

import { projectDetail } from "@/assets/assets"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { GrFormNextLink } from "react-icons/gr";

/* export const metadata = {
    'Title' : 'Hello'
} */

export interface ProjectDetailType {
    Title: string;
    Image: StaticImageData;
    Desc: string;
    Time: string;
    Link: string;
    Position: string;
}

const ProjectDatailPage = () => {

    const data : ProjectDetailType[] = projectDetail;

    return (
        <div className="containnerDetailProject">
            {/* Header */}
            <div className="w-full flex justify-center pb-10">
                <h2 className="text-3xl font-bold text-center">
                    All my projrct. & Work Experience
                </h2>
            </div>

            {/* Grid */}
            <div className="gridProject">
                {data.map((item, index) =>
                    <div key={index} className='bgCardProject'>
                        <div className="w-full flex flex-col items-center justify-center">
                            {
                                item.Image
                                    ? <Image src={item.Image}
                                        width={700}
                                        alt="Project Image"
                                        className="rounded-lg" />
                                    : <div className="w-[20rem] h-[20rem] bg-black/20 flex justify-center items-center rounded-xl text-2xl">No Image</div>
                            }
                            <div className="w-full text-lg font-bold px-2 pt-3 overflow-clip">
                                Title: {item.Title} ({item.Time})
                            </div>

                            <div className="w-full px-2 py-2 ">
                                &nbsp;&nbsp;{item.Desc}
                            </div>

                            <div className="w-full px-2 py-2 text-xl font-bold  ">
                                Position : {item.Position}
                            </div>

                            <div className="w-full flex justify-end">
                                <Link href={item.Link} className='btnAnimateToGit'
                                    target="blank">
                                    {
                                        index == 5
                                            ? <div className="w-full flex items-center justify-center">
                                                <GrFormNextLink className="mr-2 rounded-full text-black text-3xl bg-white" />
                                                <h2 className="text-lg text-center">Web</h2>
                                            </div>
                                            : <div className="w-full flex items-center justify-center">
                                                <FaGithub className='gotoGitLogo mr-2' />
                                                <h1 className="gotoGit">Go Git</h1>
                                            </div>
                                    }

                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ProjectDatailPage