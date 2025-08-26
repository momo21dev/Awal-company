import Header from "./Header";

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
                            src="/images/large-building-site.jpg"
                            alt="أعمال أخشاب"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            

            {/* تواصل معنا */}
            <section id="contact" className="bg-gray-50 py-16 px-6 md:px-20" dir="rtl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-red-700 mb-6">تواصل معنا</h2>
                    <p className="text-gray-700 mb-8 text-lg">يسعدنا تواصلكم معنا عبر القنوات التالية:</p>

                    <div className="space-y-4 text-gray-800 text-lg">
                        <p>📞 <span className="font-semibold">الهاتف:</span>966567126478+</p>
                        <p>📱 <span className="font-semibold">واتساب:</span>
                            <a href="https://wa.me/966567126478" target="_blank" className="text-green-600 hover:underline"> اضغط هنا للتواصل</a>
                        </p>
                        <p>📧 <span className="font-semibold">الإيميل:</span> marcompanyy@gmail.com</p>
                    </div>
                </div>
            </section>
        </>
    )
}
