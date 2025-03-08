import Image from "next/image";

interface HeaderProps {
  HeadText: string;
}

export function HeaderWrapper({ HeadText }: HeaderProps) {
    return(
      <>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <header>
          <h1>{HeadText}</h1>
        </header>
      </>
    );
}