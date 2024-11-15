import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
    return (
        <main id="contact-us" className="justify-center items-center text-center py-10 ">

            <div className="flex flex-col lg:flex-row bg-white rounded-xl my-10 sm:my-20 mx-6 sm:mx-20 md:mx-28 lg:mx-44 py-10 2xl:mx-auto  max-w-screen-2xl">

                {/* contact-us section  */}
                <section className="flex-1 px-6">
                    <h1 className="text-violet-950 text-2xl md:text-3xl tracking-wider  font-bold ">Contact-Us</h1>
                    <p className="text-justify text-gray-700 mt-4 mb-8">
                        Thank you for visiting my portfolio! If you have any questions, inquiries,
                        or collaboration opportunities, please feel free to reach out.
                        I would love to hear from you! You can contact me through the form below or via my social media links.
                        I strive to respond to all messages as quickly as possible.

                    </p>
                    <div className="space-y-5">
                        <div className="flex gap-4">
                            <span className="text-violet-950 text-lg mt-1"><FaPhoneAlt /></span>
                            <h1 className="text-violet-950 text-lg">+92 324 3478967</h1>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-violet-950 text-lg mt-1"><MdEmail /></span>
                            <h1 className="text-violet-950 text-lg">hammad.kalam13@gmail.com</h1>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-violet-950 text-lg mt-1"><FaLocationDot /></span>
                            <h1 className="text-violet-950 text-lg">Karachi,Pakistan.</h1>
                        </div>
                    </div>
                    <div className="flex gap-7 py-10 justify-center  ">
                        <a className="" href="https://www.linkedin.com/in/sheikh-hammad-4771202b5/" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/linkedin.webp" alt="logo" width={'40'} height={'40'} /></a>
                        <a className="" href="https://www.facebook.com/profile.php?id=61555985446463" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/Facebook.png" alt="logo" width={'40'} height={'40'} /></a>
                        <a className="" href="https://www.facebook.com/profile.php?id=61555985446463" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/instagram.jpeg" alt="logo" width={'40'} height={'40'} /></a>
                    </div>

                </section>

                {/* form section */}
                <section className="flex-1 px-6 items-center ">
                    <form action="form">
                        {/*first name & last name  */}
                        <div className="flex flex-col md:flex-row">
                            <div className="text-left text-violet-950 ">
                                <label className="font-semibold">FIRST NAME</label>
                                <br />
                                <input className="my-4 border border-gray-500 rounded-xl h-10 pl-2 w-full" type="text" required placeholder="Enter your First Name" />

                            </div>
                            <div className="text-left text-violet-950 md:ml-3">
                                <label className="font-semibold ">LAST NAME</label>
                                <br />
                                <input className="my-4 border border-gray-500 rounded-xl h-10 pl-2 w-full " type="text" required placeholder="Enter your Last Name" />

                            </div>
                        </div>
                        {/* Email & Phone # */}
                        <div className="flex flex-col md:flex-row md:mt-4">
                            <div className="text-left text-violet-950 ">
                                <label className="font-semibold">E-MAIL</label>
                                <br />
                                <input className="my-4 border border-gray-500 rounded-xl h-10 pl-2 w-full" type="email" required placeholder="Enter your E-Mail" />

                            </div>
                            <div className="text-left text-violet-950 md:ml-3">
                                <label className="font-semibold ">PHONE #</label>
                                <br />
                                <input className="my-4 border border-gray-500 rounded-xl h-10 pl-2 w-full " type="tel" required placeholder="Enter your Phone#" />

                            </div>
                        </div>
                        {/* message section */}
                        <div className="text-left text-violet-950 md:mt-4">
                            <label className="font-semibold ">WHAT DO YOU HAVE IN MIND?</label>
                            <br />
                            <textarea  id="message" name="message" rows={4}
                                className="my-4 border border-gray-500 rounded-xl pl-2 w-full " >
                            </textarea>
                        </div>
                        {/* Button */}
                        <button
                            type="submit"
                            className="text-white bg-violet-900 py-2 px-20 rounded-xl mt-4 font-bold hover:bg-violet-800 active:bg-violet-950"
                        >
                            Submit
                        </button>

                    </form>

                </section>

            </div>
        </main>
    )
}