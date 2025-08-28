import Header from "./Header";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Landing() {
    return (
        <>


            {/* من نحن */}
            <Header showContact={true} showMis={true} showUs={true} showVis={true} showWork={true} showCons={true} />
            <div className="bg-gray-50 py-16 px-6 md:px-20" dir="rtl">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                    {/* النص */}
                    <div className="md:w-1/2 text-right">
                        <h2 className="text-2xl font-bold text-red-700 mb-6">من نحن</h2>
                        <p className="text-gray-700 leading-8 text-lg">
                            نحن مؤسسة أوال المتحدة للمقاولات العامة والديكورات، متخصصون في تنفيذ المشاريع بأعلى معايير الجودة والاحترافية،
                            مع تقديم حلول متكاملة في مجال التصميم الداخلي والخارجي.
                        </p>
                    </div>

                    {/* الصورة */}
                    <div className="md:w-1/2">
                        <img
                            width={'400px'}
                            src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756361540/elegant-rendering-interior-design_l6d6j5.jpg"
                            alt="أعمال أخشاب"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>



            {/* تواصل معنا */}
            <section id="contact" className="bg-gray-50 py-20 px-6 md:px-20" dir="rtl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-red-700 mb-8 border-b-4 border-red-600 inline-block pb-2">
                        تواصل معنا
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        يسعدنا تواصلكم معنا لأي استفسار أو تعاون، هدفنا دائمًا أن نكون أقرب إليكم ونلبي احتياجاتكم بكل احترافية.
                    </p>

                    {/* بيانات التواصل */}
                    <div className="text-right bg-white shadow-lg rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-bold text-red-700 mb-4">معلومات التواصل</h3>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">📍 العنوان:</span> الأحساء المبرز
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">📑 رقم السجل التجاري:</span> 2252107724
                        </p>
                        <div className="flex justify-center gap-8 text-4xl text-red-600">
                            <a href="https://wa.me/966567126478" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="hover:text-green-600 transition duration-300" />
                            </a>
                            <a href="https://www.instagram.com/khldhmd1926?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-pink-500 transition duration-300" />
                            </a>
                            <a href="https://www.tiktok.com/@m.a.r11?_t=ZS-8z6mSVZpeB5&_r=1" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="hover:text-black transition duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* الأيقونات */}

                </div>
            </section>
        </>
    )
}
