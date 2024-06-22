import Image from 'next/image'

export function Logo() {
    return (
        <div className="h-10">
            <Image src="/server-full-dark.png" className="block dark:hidden h-10" alt="Logo"/>
            <Image src="/server-full-light.png" className="hidden dark:block h-10" alt="Logo"/>
        </div>
    )
}
