import Header from "./Header";

export default function Constructions() {
    return (
        <>
            <Header
                showContact={true}
                showMis={true}
                showUs={true}
                showVis={true}
                showWork={true}
            />

            <section className="bg-gray-50 py-20 px-6 md:px-20" dir="rtl">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-12 border-b-4 border-red-600 inline-block pb-2 px-2 rounded">
                            اعمال الانشاء
                        </h2>
                    </div>

                    {/* بطاقة مشروع */}
                    <article className="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-12 border border-gray-100">
                        <header className="mb-6 md:mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-red-700">
                                أعمال تمديد الأنابيب بمختلف شبكات البنية التحتية
                            </h3>
                        </header>

                        {/* وصف منسق */}
                        <div className="space-y-5 text-right">
                            <section className="bg-red-50 border border-red-100 rounded-xl p-4 md:p-5">
                                <h4 className="text-red-700 font-semibold mb-2">
                                    معدات الحفر والرفع
                                </h4>
                                <p className="text-gray-700 leading-8 text-lg">
                                    استخدام رافعات{" "}
                                    <span className="font-medium">(كرين Crane)</span> ومعدات حفر
                                    مناسبة للتوصيل مع الخطوط، مع مراعاة إمكانية انحناء الأنابيب
                                    عند الاصطدام بالحواجز أو أثناء التعامل مع{" "}
                                    <span className="font-medium">وحدة السحب</span>.
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100">
                                <h4 className="text-gray-800 font-semibold mb-2">
                                    دقة التمديد والتحكم
                                </h4>
                                <p className="text-gray-700 leading-8 text-lg">
                                    تتم عملية التمديد بمعدات حديثة ومتطورة تضمن دقة التنفيذ في
                                    الأعماق المطلوبة مع التحكم في الاتجاهات الأفقية والرأسية، مع
                                    ضرورة تحديد المسارات بدقة وتفادي العوائق تحت سطح الأرض.
                                </p>
                            </section>

                            <section className="rounded-xl p-4 md:p-5 border border-gray-100">
                                <h4 className="text-gray-800 font-semibold mb-2">
                                    القياس والتوجيه
                                </h4>
                                <p className="text-gray-700 leading-8 text-lg">
                                    تُستخدم أجهزة قياس دقيقة لتحديد مواقع الحفر والأنفاق وتوجيه
                                    المعدات على المسار المطلوب.
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100">
                                <h4 className="text-gray-800 font-semibold mb-2">
                                    عملية السحب <span className="font-normal">(Pulling)</span>
                                </h4>
                                <p className="text-gray-700 leading-8 text-lg">
                                    سحب الأنابيب يتم بوحدات سحب خاصة (بكرات)، مع متابعة مستمرة
                                    أثناء التنفيذ لضمان سلامة الأنابيب.
                                </p>
                            </section>

                            <section className="rounded-xl p-4 md:p-5 border border-gray-100">
                                <h4 className="text-gray-800 font-semibold mb-2">
                                    اختبارات الجودة والتشغيل
                                </h4>
                                <p className="text-gray-700 leading-8 text-lg">
                                    تشمل الأعمال إجراء اختبارات الضغط الهيدروليكي والتأكد من كفاءة
                                    وجودة الشبكة قبل التشغيل.
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100">
                                <h4 className="text-gray-800 font-semibold mb-3">
                                    مجالات الشبكات التي نخدمها
                                </h4>
                                <ul className="list-disc pr-6 space-y-2 text-gray-700 leading-8 text-lg">
                                    <li>شبكات المياه.</li>
                                    <li>شبكات الصرف الصحي.</li>
                                    <li>شبكات الري.</li>
                                    <li>شبكات الكهرباء.</li>
                                    <li>شبكات الاتصالات.</li>
                                    <li>شبكات الغاز.</li>
                                </ul>
                            </section>

                            <section className="rounded-xl p-4 md:p-5 border border-gray-100">
                                <h4 className="text-gray-800 font-semibold mb-3">
                                    مزايا أنابيب HDPE
                                </h4>
                                <ul className="list-disc pr-6 space-y-2 text-gray-700 leading-8 text-lg">
                                    <li>خفيفة الوزن وسهلة التركيب.</li>
                                    <li>مقاومة عالية للتآكل وتحمّل الضغوط.</li>
                                    <li>مرونة ممتازة وحل مثالي لمشاريع البنية التحتية الحديثة.</li>
                                    <li>عمر افتراضي طويل وقدرة كبيرة على التحمل.</li>
                                </ul>
                            </section>

                            <section className="bg-red-50 rounded-xl p-4 md:p-5 border border-red-100">
                                <h4 className="text-red-700 font-bold mb-3">
                                    شروط ومزايا عقد التوريد
                                </h4>
                                <ul className="list-disc pr-6 space-y-2 text-gray-700 leading-8 text-lg">
                                    <li>
                                        عدم وجود أعمال حفرة أو الحاجة لتراخيص الحفر لمسار المشروع.
                                    </li>
                                    <li>توفر المسار بما يضمن سهولة عملية التمديد.</li>
                                    <li>أن تكون أرض المسار خالية من المياه الجوفية.</li>
                                    <li>استخدام مواد معتمدة من قِبل المالك والاستشاري.</li>
                                </ul>
                            </section>
                        </div>

                        {/* صور المشروع */}
                        <div className="mt-10">
                            <h4 className="text-gray-800 font-semibold mb-4 text-xl">
                                صور المشروع
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <img
                                    src="/images/انابيب1.jpg"
                                    alt="صورة 1"
                                    className="rounded-xl shadow-md object-cover w-full"
                                />
                                <img
                                    src="/images/انابيب2.jpg"
                                    alt="صورة 2"
                                    className="rounded-xl shadow-md object-cover w-full"
                                />
                                <img
                                    src="/images/انابيب3.jpg"
                                    alt="صورة 3"
                                    className="rounded-xl shadow-md object-cover w-full"
                                />
                            </div>
                        </div>
                    </article>
                    <article className="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-12 border border-gray-100">
                        <header className="mb-6 md:mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-red-700">
                                اعمال ضرب الرمل , ساند بلاست
                            </h3>
                        </header>

                        {/* وصف منسق */}
                        <div className="space-y-5 text-right">
                            <section className="bg-red-50 border border-red-100 rounded-xl p-4 md:p-5">
                                <h4 className="text-red-700 font-semibold mb-2">
                                    المعدات والاستخدامات
                                </h4>
                                <p className="text-gray-700 leading-8 text-lg">
                                    <span className="font-medium">تستخدم تقنية الساند بلاست</span> في
                                    تخشين الخرسانة والأسطح الناعمة، وصنفرة الحديد لإزالة الصدأ،
                                    بالإضافة إلى إزالة الدهانات وتنظيف الأحجار والرخام لإعطاء مظهر
                                    نهائي مثالي.
                                </p>
                            </section>

                            <section className="bg-gray-50 border border-gray-100 rounded-xl p-4 md:p-5">
                                <h4 className="text-gray-800 font-semibold mb-2">مزايا الساند بلاست</h4>
                                <ul className="list-disc pr-6 space-y-2 text-gray-700 leading-8 text-lg">
                                    <li>تجهيز الأسطح للدهان أو الطلاء بشكل احترافي.</li>
                                    <li>إزالة الشوائب والصدأ بكفاءة عالية.</li>
                                    <li>الحصول على أسطح نظيفة وملساء تدوم لفترات طويلة.</li>
                                    <li>مناسب لمختلف أنواع المواد مثل الحديد، الحجر، الرخام والخرسانة.</li>
                                </ul>
                            </section>
                        </div>

                        {/* صور المشروع */}
                        <div className="mt-10">
                            <h4 className="text-gray-800 font-semibold mb-4 text-xl">صور المشروع</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <img
                                    src="/images/بلاست2.jpg"
                                    alt="صورة 1"
                                    className="rounded-xl shadow-md object-cover w-full"
                                />
                                <img
                                    src="/images/بلاست.jpg"
                                    alt="صورة 2"
                                    className="rounded-xl shadow-md object-cover w-full"
                                />
                            </div>
                        </div>
                    </article>

                </div>

            </section>
        </>
    );
}
