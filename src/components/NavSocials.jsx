import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NavSocials = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-4  w-1/2 xl:w-1/3">
      <Link href="#">
        <Image src="/github.png" alt="Github Icon" width={24} height={24} />
      </Link>
      <Link href="#">
        <Image src="/linkedin.png" alt="LinkedIn Icon" width={24} height={24} />
      </Link>
      <Link href="#">
        <Image src="/facebook.png" alt="Facebook Icon" width={24} height={24} />
      </Link>
      <Link href="#">
        <Image
          src="/instagram.png"
          alt="Instagram Icon"
          width={24}
          height={24}
        />
      </Link>
      <Link href="#">
        <Image src="/dribbble.png" alt="Dribble Icon" width={24} height={24} />
      </Link>
    </div>
  );
}

export default NavSocials
