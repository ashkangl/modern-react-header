import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const MobileNav = ({ navItems, ctaText, ctaPath, onClose}) => {

    return createPortal(
        <div className="fixed inset-0 z-40 bg-gray-100 px-6 pt-24 md:hidden block">

            <nav className="flex flex-col">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className="group border-b border-black/10 py-5 text-lg font-medium"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </nav>

            <Link
                to={ctaPath}
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
            >
                {ctaText}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </Link>

        </div>,
        document.body
    );
};

export default MobileNav;