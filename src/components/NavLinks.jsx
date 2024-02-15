import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = ({links}) => {
    const pathName = usePathname()
  return (
    <>
    {links.map((link)=>{
        return(<Link href={link.url} key={link.title} className={`p-1 rounded ${pathName === link.url && 'text-white bg-black'}`}>{link.title}</Link>)
    })}
    </>
  )
}

export default NavLinks
