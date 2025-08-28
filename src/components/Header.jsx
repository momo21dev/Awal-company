import { Link } from "react-router";

export default function Header({ showUs = false, showVis = false, showMis = false, showWork = false, showContact = false, showCons = false }) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50 gap-4" dir="rtl">

            {/* اللوجو + الاسم */}
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

            {/* اللينكات */}
            <div className="flex flex-col md:flex-row gap-3 text-gray-700 font-medium text-center overflow-x-auto md:overflow-visible">
                {showUs && (
                    <Link to="/about" className="px-3 py-1 rounded-2xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
                        من نحن
                    </Link>
                )}
                {showVis && (
                    <Link to="/vision" className="px-3 py-1 rounded-2xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
                        رؤيتنا
                    </Link>
                )}
                {showMis && (
                    <Link to="/mission" className="px-3 py-1 rounded-2xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
                        مهمتنا
                    </Link>
                )}
                {showWork && (
                    <Link to="/recent" className="px-3 py-1 rounded-2xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
                        سابقة اعمالنا
                    </Link>
                )}
                {showCons && (
                    <Link to="/const" className="px-3 py-1 rounded-2xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
                        اعمال الانشاء
                    </Link>
                )}
                {showContact && (
                    <Link to="/contact" className="px-3 py-1 rounded-2xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
                        تواصل معنا
                    </Link>
                )}
            </div>
        </div>
    );
}
