import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react";


interface Props {
  text:string;
  href:string;
}

export const ActiveLink : FC<Props> = ({text, href}) => {

    const router = useRouter();
    const style = {
        textDecoration:'underline',
        color:router.asPath === href ? '#0070f3' : 'black',
    }

    const handleClick  = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push(href)
      }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {text}
    </a>
  )
}






