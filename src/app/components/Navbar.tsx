import { ArrowRight, Link } from "lucide-react"
import MaxWidthWarpper from "./MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = () => {
    return(
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWarpper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <a href="/"><p className="flex z-40 font-semibold">clarify.</p></a>
                
                {/* todo: add mobile nav bar */}
                <div className="hidden items-center space-x-4 sm:flex">
                    <>
                    <a href="/pricing"><p className={buttonVariants({
                        variant:'ghost',
                        size:'sm'
                    })}>Pricing</p></a>
                    <LoginLink
                                className={buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm'
                                })}>
                                    Sign in

                    </LoginLink>
                    <RegisterLink
                                className={buttonVariants({
                                    size: 'sm'
                                })}>
                                    Get Started <ArrowRight className="ml-1.5 h-5 w-5"/>
                    </RegisterLink>
                    </>
                </div>
                </div>
            </MaxWidthWarpper>
        </nav>
    )
}

export default Navbar

