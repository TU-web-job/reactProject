import Image from "next/image";

export function HeaderWrapper(){
    return(
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
    );

}