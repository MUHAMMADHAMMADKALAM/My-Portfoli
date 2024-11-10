import Link from "next/link";
import { AlignJustify} from "lucide-react";


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    return (
        <header className="flex justify-center">
            <main data-aos="zoom-in-down" className="fixed backdrop:blur-md bg-opacity-10 rounded-full bg-violet-700 shadow-2xl mt-4 w-11/12 ">
                <nav  className="flex justify-between px-10 ">
                    <div className="font-serif text-5xl font-bold text-white items-center my-2" >
                         <h1>S<span className="text-yellow-500">H.</span></h1>

                    </div>
                    <ul className="hidden md:block ">
                        <li className="space-x-10  mx- my-5 text-white text-xl ">
                            <Link className="hover:border-b-2 hover:text-yellow-500 border-yellow-500" href="#home">Home</Link>
                            <Link className="hover:border-b-2 hover:text-yellow-500 border-yellow-500" href="#about">About</Link>
                            <Link className="hover:border-b-2 hover:text-yellow-500 border-yellow-500" href="#skills">Skills</Link>
                            <Link className="hover:border-b-2 hover:text-yellow-500 border-yellow-500" href="#projects">Projects</Link>
                            <Link className="bg-yellow-500 hover:bg-[#10002b] text-white py-2 px-3 border-2 rounded-3xl hover:text-yellow-500 border-yellow-500" href="#contact-us">Contact-us</Link>
                        </li>

                    </ul>


                    <Sheet >
                        <SheetTrigger className="md:hidden ">
                            <AlignJustify className="m-2 text-white hover:text-yellow-500" />
                        </SheetTrigger>
                        
                        <SheetContent className="bg-violet-500 bg-opacity-20 justify-center items-center h-96 w-[275px] ">
                        <center>
                        <SheetTitle>
                         <h1 className="font-serif text-4xl font-bold text-white items-center my-2 ml-4" >S<span className="text-yellow-500">H.</span></h1>

                        </SheetTitle>
                            <ul className=" my-5 text-white text-lg space-y-5">

                                <li><Link className="hover:border-b-2 px-16 border-yellow-500 hover:text-yellow-500" href="#home">Home</Link></li>
                                <li><Link className="hover:border-b-2 px-16 border-yellow-500 hover:text-yellow-500" href="#about">About</Link></li>
                                <li><Link className="hover:border-b-2 px-16 border-yellow-500 hover:text-yellow-500" href="#skills">Skills</Link></li>
                                <li><Link className="hover:border-b-2 px-16 border-yellow-500 hover:text-yellow-500" href="#projects">Projects</Link></li>
                                <li><Link className="hover:border-b-2 px-16 border-yellow-500 hover:text-yellow-500" href="#contact-us">Contact-us</Link></li>


                            </ul>
                            </center>

                        </SheetContent>
                    </Sheet>




                </nav>
            </main>
        </header>
    )
}