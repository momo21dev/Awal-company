import { Link } from "react-router";
import Header from "./Header";

export default function RecentWork() {
    return (
        <>
            <Header showContact={true} showMis={true} showUs={true} showVis={true} />


            <section id="recent-work" className="bg-gray-50 py-20 px-6 md:px-20" dir="rtl">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-red-700 mb-12 border-b-4 border-red-600 inline-block pb-2">
                        سابقة أعمالنا
                    </h2>
                    <div className="grid grid-cols-4 gap-4 mb-4 ">
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"> <Link to={'/woodenkitchen'}>المطابخ الخشبيه</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/rokham'}>درج الرخام</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/wpc'}>ابواب WPC</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/wara2'}>ورق جدران 3D</Link></button>

                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/bergola'}>برجولات خشبية</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/dehanat'}>الدهانات الحديثه</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/karanesh'}>الكرانيش</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/barawez'}>البراويز</Link></button>

                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/tarabezat'}>كراسي وطاولات</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/iron'}>أبواب وشبابيك حديد</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/barkeh'}>الباركيه</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/badel'}>بديل الرخام</Link></button>

                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/abwab'}>أبواب المونيوم كيلادين</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/ghaza2n'}>خزائن خشبيه</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/hanager'}>هناجر  حديد</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/maghribya'}>النقشيات الجبسية والمغربية</Link></button>

                    </div>
                    <div className="flex m-4 justify-center gap-6 ">
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/art'}>رسومات جداريه</Link></button>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm hover:bg-red-600 transition"><Link to={'/shlalat'}>شلالات وصخور اسمنتيه</Link></button>
                    </div>
                    <div>
                        <button className="bg-white border border-gray-300 rounded-lg py-3 px-18 shadow-sm hover:bg-red-600 transition"><Link to={'/mshare3'}>مشاريع قبل و بعد</Link></button>
                    </div>






                </div>
            </section>
        </>
    )
}
