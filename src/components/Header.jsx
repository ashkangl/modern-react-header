import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";


const navItems = [
        {path: '/', label: "Home"},
        {path: '/services', label: "Services"},
        {path: '/about', label: "About"},
        {path: '/pricing', label: "Pricing"},
    ]

const Header = ({logo = "ACME", ctaText = "Start a Project"}) => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0})
    const [mobileMenu, setMobileMenu] = useState(false)

    const handleShowMobile = () => {
        setMobileMenu((prev) => !prev)
    }

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        setMousePosition({
            x: x * 0.15,
            y: y * 0.15
        })
    }

    const handleMouseLeave = () => {
        setMousePosition({
            x: 0, y: 0
        })
    }

    return (
        <>
        <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between rounded-full border border-black/10 bg-white/80 px-5 py-3 backdrop-blur-xl">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-black tracking-tighter"
                >
                    {logo}<span className="text-blue-600">.</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item)=>(
                    <Link to={item.path} className="group relative h-6 overflow-hidden text-sm font-medium" key={item.path}>
                        <span className="relative block transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
                            <span className="block h-6">
                                {item.label}
                            </span>
                            <span className="block">
                                {item.label}
                            </span>
                        </span>
                    </Link>
                    ))}
                </nav>

                {/* CTA */}
                <Link
                    to="/contact"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group relative overflow-hidden rounded-full bg-gray-200 px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-200 md:block hidden"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    }}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {ctaText}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-rose-300 transition-transform duration-300 group-hover:translate-x-0" />
                </Link>

                {/* Mobile Nav */}
                <div className="md:hidden block">
                    <button className="md:hidden flex cursor-pointer px-2" onClick={handleShowMobile}>{mobileMenu ? "🗙" : "☰"}</button>
                </div>

            </div>
        </header>
        {mobileMenu && <MobileNav onClose={() => setMobileMenu(false)} ctaText="Start a Project" ctaPath="/contact" navItems={navItems} />}
        </>
    );
};

export default Header;