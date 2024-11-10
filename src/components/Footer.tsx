import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="items-center bg-indigo-950">
           <main className="flex flex-col justify-center md:justify-around md:flex-row items-center">
           <div className="text-white items-center text-center pt-5 md:pt-0">
            <h1 className="text-lg">©2024 Sheikh Muhammad Hammad.All rights reserved.</h1>
                
            </div>
        
            
            <div className="flex gap-5 py-8 items-center">
              <a  className="" href="https://www.linkedin.com/in/sheikh-hammad-4771202b5/" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/linkedin.webp" alt="logo" width={'35'} height={'35'}/></a>
              <a className="" href="https://github.com/MUHAMMADHAMMADKALAM" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/github.webp" alt="logo" width={'35'} height={'35'}/></a>
              <a  className="" href="https://www.facebook.com/profile.php?id=61555985446463" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/Facebook.png" alt="logo" width={'35'} height={'35'}/></a>
              <a className="" href="https://www.facebook.com/profile.php?id=61555985446463" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/instagram.jpeg" alt="logo" width={'35'} height={'35'}/></a>
              </div>
    
           </main>
        </footer>
    )
}