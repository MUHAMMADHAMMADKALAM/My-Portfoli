import Image from "next/image";

export default function Projects() {
  return (
    <main id="projects" className="bg-white pt-12 pb-16 px-4 justify-center items-center text-center">
      <div >

        <div className="text-center py-5">
          <h1 data-aos="zoom-in-up" className="text-violet-950 font-bold text-4xl md:text-5xl">
            Projects
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-6">

          {/* furniture website section */}
          <section data-aos="zoom-in-up" className="bg-[#10002b] w-80 rounded-xl pb-6 border-2 border-[#10002b] shadow-slate-600 shadow-xl hover:border-[#10002b] hover:border-4">
            <a href="https://website-page-ruby.vercel.app/" target="blank">
              <Image className="rounded-t-xl" src={'/images/furniture.png'} alt="project img" width={320} height={250} />
              <div className="px-3">
                <h1 className="text-yellow-500 text-xl py-3 font-semibold">Furniture Website</h1>
                <p className="text-white">
                  This one page website based on a Figma design, built with next.js .
                </p>
              </div>
            </a>
          </section>

          {/* E-commerce website section */}
          <section data-aos="zoom-in-up" className="bg-[#10002b] w-80 rounded-xl pb-6 border-2 border-[#10002b] shadow-slate-600 shadow-xl hover:border-[#10002b] hover:border-4">
            <a href="https://fashion-cloths-website.vercel.app/" target="blank">
              <Image className="rounded-t-xl" src={'/images/fashoin website.png'} alt="project img" width={320} height={250} />
              <div className="px-3">
                <h1 className="text-yellow-500 text-xl py-3 font-semibold">E-commerce Website</h1>
                <p className="text-white">
                  This e-commerce website based on a Figma design, built with next.js .
                </p>
              </div>
            </a>
          </section>

          {/* Shareable Resume Builder section */}
          <section data-aos="zoom-in" className="bg-[#10002b] w-80 rounded-xl pb-6 border-2 border-[#10002b] shadow-slate-600 shadow-xl hover:border-[#10002b] hover:border-4">
            <a href="https://shareable-resume-builder-beta.vercel.app/" target="blank">
              <Image className="rounded-t-xl" src={'/images/resume builder.png'} alt="project img" width={320} height={250} />
              <div className="px-3">
                <h1 className="text-yellow-500 text-xl py-3 font-semibold">Shareable Resume Builder</h1>
                <p className="text-white">
                  A shareable resume builder built with HTML, CSS, and TypeScript.
                </p>
              </div>
            </a>
          </section>

        </div>
      </div>

    </main>

  )
} 