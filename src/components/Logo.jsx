// import Image from 'next/image'

export function Logo() {
    return (
        <div className="h-8 w-full">
            <img src='/logo-dark.png' className="block dark:hidden w-full h-auto max-h-8 mt-1" alt="Triangle Web"></img>
            <img src='/logo-light.png' className="hidden dark:block w-full h-auto max-h-8 mt-1" alt="Triangle Web"></img>
        </div>
    )
}
