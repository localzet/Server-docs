// import Image from 'next/image'

export function Logo() {
    return (
        <div className="h-10">
            <img src="/server-full-dark.png" className="block dark:hidden h-10" alt="Logo"/>
            <img src="/server-full-light.png" className="hidden dark:block h-10" alt="Logo"/>
        </div>
    )
}
