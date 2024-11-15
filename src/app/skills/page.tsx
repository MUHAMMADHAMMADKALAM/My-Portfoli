import Image from "next/image";

export default function Skills() {
    return (
        <main id="skills">
            <div className="text-center  py-16 mx-auto max-w-screen-2xl">
                <section className="justify-around">
                    <h1 data-aos="zoom-in-up" className="text-white text-4xl tracking-wider font-extrabold">Skills</h1>

                    <div className="border-b-4 border-white mx-16 md:mx-40 lg:mx-60 my-10"></div>

                    {/* Front End development */}
                    <div>
                        <h1 data-aos="zoom-in-up" className="text-white text-4xl font-extrabold">Front End Development</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center py-10 space-y-12 md:gap-8 lg:px-24" >
                        <div className="flex flex-col md:flex-row justify-center mx-auto mt-14 md:gap-12 md:mr-4 lg:gap-28 ">
                            <Image data-aos="zoom-in-up" className="bg-[#10002b] mb-12 md:mb-0" src={'/logo/html.png'} alt="html logo"
                                height={'200'}
                                width={'150'}
                            />
                            <Image data-aos="zoom-in-up" className="bg-[#10002b]" src={'/logo/css.png'} alt="html logo"
                                height={'200'}
                                width={'150'}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row justify-center mx-auto md:gap-12 lg:gap-28  ">
                            <Image data-aos="zoom-in-up" className="bg-[#10002b] mb-12 md:mb-0" src={'/logo/js.png'} alt="html logo"
                                height={'200'}
                                width={'150'}
                            />
                            <Image data-aos="zoom-in-up" className="bg-[#10002b]" src={'/logo/ts.png'} alt="html logo"
                                height={'200'}
                                width={'150'}
                            />
                        </div>

                    </div>
                </section>
                <section>
                    {/* FrameWorks & Libraries */}
                    <div className="">
                        <h1 data-aos="zoom-in-up" className="text-white text-4xl font-extrabold py-10">FrameWorks & Libraries</h1>
                        <div className="flex flex-col sm:flex-row items-center sm:justify-center my-auto gap-20 py-10">
                            <Image data-aos="zoom-in-up" className="bg-slate-300 rounded-xl" src={'/logo/Next.js.png'} alt="html logo"
                                height={'200'}
                                width={'200'}
                            />
                            <Image data-aos="zoom-in-up" className="bg-slate-300 rounded-xl py-12" src={'/logo/Tailwind CSS.png'} alt="html logo"
                                height={'200'}
                                width={'200'}
                            />
                        </div>
                    </div>
                    {/* Tools */}
                    <div>
                        <h1 data-aos="zoom-in-up" className="text-white text-4xl font-extrabold py-12 ">Tools</h1>
                        <div className="flex flex-col sm:flex-row mx-auto items-center sm:justify-center gap-20">
                            <Image data-aos="zoom-in-up" className="bg-slate-300 rounded-xl py-1" src={'/logo/Git.png'} alt="html logo"
                                height={'200'}
                                width={'200'}
                            />
                            <Image data-aos="zoom-in-up" className="bg-slate-300 rounded-xl" src={'/logo/Figma.png'} alt="html logo"
                                height={'200'}
                                width={'200'}
                            />
                        </div>
                    </div>

                    <div className="border-b-4 border-white mx-16 md:mx-40 lg:mx-60 mt-16"></div>

                </section>
            </div>
        </main>
    )
}