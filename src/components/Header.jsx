import { Link } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ showUs = false, showVis = false, showMis = false, showWork = false, showContact = false }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50" dir="rtl">

            {/* اللوجو + الاسم */}
            <div className="flex gap-2 items-center">
                <img
                    src="/images/WhatsApp Image 2025-08-23 at 06.13.31_762e957c.jpg"
                    alt="شعار مؤسسة أوال المتحدة"
                    width="70px"
                    className="rounded-lg"
                />
                <h1 className="text-lg font-bold text-red-700">
                    مؤسسة اوال المتحدة للمقاولات العامة
                </h1>
            </div>

            {/* زر المنيو للموبايل */}
            <button className="md:hidden text-2xl text-red-700" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* اللينكات */}
            <div className={`flex-col md:flex md:flex-row gap-6 text-gray-700 font-medium absolute md:static bg-white md:bg-transparent right-0 top-16 p-6 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${isOpen ? "flex" : "hidden"}`}>
                {showUs && <Link to="/about" className="hover:text-red-600">من نحن</Link>}
                {showVis && <Link to="/vision" className="hover:text-red-600">رؤيتنا</Link>}
                {showMis && <Link to="/mission" className="hover:text-red-600">مهمتنا</Link>}
                {showWork && <Link to="/recent" className="hover:text-red-600">سابقة اعمالنا</Link>}
                {showContact && <Link to="/contact" className="hover:text-red-600">تواصل معنا</Link>}
            </div>
        </div>
    );
}
