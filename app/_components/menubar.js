import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaApple, FaTiktok} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {IoIosMail} from "react-icons/io";
import Link from "next/link"

function Menubar(props) {

  const styleel1 = `w-5 h-5 hover:text-red-800 duration-300 hover:scale-125`
  return (
    <header className={`fixed top-0 w-full z-30 bg-black`}>
      <nav className={`flex mt-5 w-full justify-between items-center`}>
        <div className={`flex flex-col`}>
          <div className={`hidden lg:flex gap-1 ml-5 relative z-10`}>
            <Link href={`https://www.facebook.com/profile.php?id=61557123352501`}><FaFacebook
              className={styleel1}/></Link>
            <Link href={`https://twitter.com/MadMansSpirit`}><FaXTwitter className={styleel1}/></Link>
            <Link href={`https://www.instagram.com/madmansspiritofficial/`}><FaInstagram className={styleel1}/></Link>
            <Link href={`https://www.youtube.com/channel/UCqWZpGmXXUd23ML3pfSH4pg`}><FaYoutube
              className={styleel1}/></Link>
            <Link href={`https://open.spotify.com/intl-de/artist/0xnJ8yCRbsEhQBaCNkTAFC`}><FaSpotify className={styleel1}/></Link>
            <Link href={`https://music.apple.com/us/artist/mad-mans-spirit/1734707689`}><FaApple className={styleel1}/></Link>
            <Link href={`https://www.tiktok.com/@mad.mans.spirit`}><FaTiktok className={styleel1}/></Link>
          </div>
          <img className={`hidden lg:block`} src="/logo2.png" alt=""/>
        </div>
        <div className={`w-full flex flex-col justify-center items-center`}><img src="/logo1.png"
                                                                                 alt="main logo of mms"/></div>
        <div className={`flex flex-col`}>
          <div className={`hidden lg:flex`}>
            <Link href={`/subscribe`}
                  className={`uppercase hover:text-red-800 duration-300 text-xl mr-2`}>Subscribe </Link>
            <IoIosMail className={`w-7 h-7`}/>
          </div>
          <img className={`hidden lg:block`} src="/logo23.png" alt=""/>
        </div>
      </nav>

    </header>
  );
}

export default Menubar;