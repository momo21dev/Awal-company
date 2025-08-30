import { Link, useLocation } from "react-router";

export default function Header() {
    const location = useLocation();

    const links = [
        { to: "/about", label: "من نحن" },
        { to: "/vision", label: "رؤيتنا" },
        { to: "/mission", label: "مهمتنا" },
        { to: "/recent", label: "سابقة اعمالنا" },
        { to: "/const", label: "اعمال الانشاء" },
        { to: "/docs", label: "مستندات المؤسسة" },
        { to: "/haikal", label: "الهيكل التنظيمي للمؤسسة" },
        { to: "/contact", label: "تواصل معنا" },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 shadow-md bg-white z-50 gap-4" dir="rtl">


            <div className="flex gap-2 items-center">
                <img
                    src="/images/WhatsApp Image 2025-08-23 at 06.13.31_762e957c.jpg"
                    alt="شعار مؤسسة أوال المتحدة"
                    width="80px"
                    className="rounded-lg"
                />
                <h1 className="text-lg font-bold text-red-700 text-center md:text-right mt-1">
                    مؤسسة اوال المتحدة للمقاولات العامة
                </h1>
            </div>


            <div className="flex flex-row gap-3 text-gray-700 font-medium text-center overflow-x-auto md:overflow-visible w-full md:w-auto whitespace-nowrap">
                {links.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`px-3 py-1 rounded-2xl border transition 
                            ${location.pathname === link.to
                                ? "bg-red-600 text-white border-red-600"
                                : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
