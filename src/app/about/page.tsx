import Image from "next/image";

export default function About() {
    return (
        <main id="about" className="bg-white mt-8 justify-around ">
            <div className=" py-16 md:px-8 lg:px-44 px-8 mx-auto max-w-screen-2xl">
                <section className="text-center py-12">
                    <div className=" mx-2 py-10">
                        <h1 data-aos="zoom-in-up" className="text-violet-950 font-semibold text-4xl md:text-6xl">
                            About-Us
                        </h1>
                        <h3 data-aos="zoom-in-up" className="text-lg pt-2">
                            <i> E-Commerce By Chance | Developer By Choice </i>
                        </h3>
                        <div className="border-b-4 border-violet-950 md:mx-20 my-10">

                        </div>
                    </div>


                </section>
                <section className="md:flex-row flex flex-col  mx-auto">

                    {/* Image Section */}
                    <div data-aos="zoom-in-up" className=" flex-1  justify-center items-center mx-auto lg:mr-10 mb-10 ">
                        <Image className="object-cover rounded-full border-4 border-violet-950 shadow-lg shadow-violet-900 md:h-[370px] md:w-[270px] lg:h-[440px] lg:w-[300px]"
                            src={'/images/my-dp.png'} alt="profile picture"
                            height={400} width={320} />
                    </div>


                    <div className="flex-1 ">
                        <h3 data-aos="zoom-in-up" className="text-2xl font-mono font-bold mb-2">Hi,</h3>
                        <p data-aos="fade-up" className="text-justify">
                            I&apos;m Sheikh Hammad, a web developer specializing in Next.js and Tailwind CSS. I&apos;m passionate about creating
                            modern, responsive websites that offer excellent user experiences. With a strong focus on emerging technologies
                            like AI, Metaverse, and Web 3.0, I continuously strive to stay at the forefront of innovation. <br /><br />
                            My journey into tech has been fueled by a love for learning and growth, and I&apos;m always exploring new ways to refine my skills.
                            I&apos;m dedicated to building strong client relationships through quality work and creative problem-solving, ensuring
                            that each project meets the highest standards. <br /><br />
                            Whether you&apos;re looking to create a cutting-edge website or need a developer to bring your vision to life, I&apos;m here to help.
                            Let&apos;s collaborate and turn your ideas into impactful web solutions!
                        </p>

                    </div>

                </section>
                <div className="border-b-4 border-violet-950 md:mx-20 mt-16 mx-4">

                </div>

            </div>
        </main>
    )
}