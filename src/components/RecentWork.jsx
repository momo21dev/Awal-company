import Header from "./Header";

export default function RecentWork() {
    return (
        <>
            <Header showContact={true} showMis={true} showUs={true} showVis={true} />

            {/* سابقة أعمالنا */}
            <section id="recent-work" className="bg-gray-50 py-20 px-6 md:px-20" dir="rtl">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-red-700 mb-12 border-b-4 border-red-600 inline-block pb-2">
                        سابقة أعمالنا
                    </h2>

                    {/* مشروع 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-right mb-12">
                        <h3 className="text-2xl font-bold text-red-700 mb-4">
                            مجلس الشيخ عبد الرحمن النعيم بمنطقة الهفوف
                        </h3>
                        <p className="text-gray-700 mb-6 leading-8 text-lg">
                            تم تنفيذ أعمال النقشيات المغربي والدهانات الحديثة حسب التصميم المتفق عليه.
                        </p>

                        {/* صور قبل */}
                        <div className="mb-8">
                            <h4 className="text-gray-600 font-medium mb-3 text-xl">قبل</h4>
                            <div className="flex flex-col gap-4">
                                <img src="public/images/مجلس1jpg.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                                <img src="/images/مجلس2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                            </div>
                        </div>

                        {/* صور بعد */}
                        <div>
                            <h4 className="text-gray-600 font-medium mb-3 text-2xl">بعد</h4>
                            <div className="flex flex-col gap-4">
                                <img src="public/images/مجلس 3.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                                <img src="/images/مجلس4.jpg" alt="بعد 2" className="rounded-md shadow-md" />
                                <img src="public/images/مجلس 4.jpg" alt="بعد 3" className="rounded-md shadow-md" />
                            </div>
                        </div>
                    </div>

                    {/* مشروع 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-right mb-12">
                        <h3 className="text-2xl font-bold text-red-700 mb-4">مطعم تكة المعازيب  بمنطقه الأحساء الهفوف</h3>
                        <p className="text-gray-700 mb-6 leading-8 text-lg">
                            مطعم تكة المعازيب  بمنطقه الأحساء الهفوف حي الواحه
                            توريد وتنفيذ جميع الأعمال  الجبس الفرنسي بتراث حساوي قديم  أعمال الأخشاب بتراث قديم دهانات المششكو
                        </p>

                        {/* صور قبل */}
                        <div className="mb-8">
                            <h4 className="text-gray-600 font-medium mb-3 text-xl">قبل</h4>
                            <div className="flex flex-col gap-4">
                                <img src="public/images/تكه1.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                                <img src="public/images/تكه2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                            </div>
                        </div>

                        {/* صور بعد */}
                        <div>
                            <h4 className="text-gray-600 font-medium mb-3 text-xl">بعد</h4>
                            <div className="flex flex-col gap-4">
                                <img src="public/images/تكه3.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                                <img src="public/images/تكه5.jpg" alt="بعد 2" className="rounded-md shadow-md" />
                                <img src="public/images/تكة4.jpg" alt="بعد 2" className="rounded-md shadow-md" />
                            </div>
                        </div>
                    </div>
                    {/* مشروع 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-right mb-12">
                        <h3 className="text-2xl font-bold text-red-700 mb-4">مسجد جامعة الملك فيصل بالاحساء</h3>
                        <p className="text-gray-700 mb-6 leading-8 text-lg">
                            توريد وتنفيذ  أعمال رسم رخامي للاعمدة بمسجد جامعه الملك فيصل بالأحساء الهفوف
                        </p>

                        {/* صور قبل */}
                        <div className="mb-8">
                            <h4 className="text-gray-600 font-medium mb-3 text-xl">قبل</h4>
                            <div className="flex flex-col gap-4">
                                <img src="public/images/فيصل1.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                                <img src="public/images/فيصل2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                            </div>
                        </div>

                        {/* صور بعد */}
                        <div>
                            <h4 className="text-gray-600 font-medium mb-3 text-xl">بعد</h4>
                            <div className="flex flex-col gap-4">
                                <img src="public/images/فيصل 3.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                                <img src="public/images/فيصل4.jpg" alt="بعد 2" className="rounded-md shadow-md" />

                            </div>
                        </div>
                    </div>
                    {/* مشروع 4 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-right mb-12">
                        <h3 className="text-2xl font-bold text-red-700 mb-4">توريد وتنفيذ واجهه محل  بي اف جاليري للعطور</h3>
                        <p className="text-gray-700 mb-6 leading-8 text-lg">
                            توريد وتنفيذ واجهه محل  بي اف جاليري للعطور   من الأسمنت بورد تم تنفيذ  تيوبات حديد 5*10  وعمل عزل للصوت وبعدها تركيب الأسمنت بورد والدهانات  حسب التصميم  وتركيب ورق 3D  من داخل المحل
                        </p>

                        {/* صور قبل */}
                        <div className="mb-8">
                            <h4 className="text-gray-600 font-medium mb-3 text-xl">قبل</h4>
                            <div className="flex flex-col gap-4">
                                <img src="public/images/عطارة.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                                <img src="public/images/عطارة2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                            </div>
                        </div>

                        {/* صور بعد */}
                        <div>
                            <h4 className="text-gray-600 font-medium mb-3 text-xl">بعد</h4>
                            <div className="flex flex-col gap-4">
                                <img src="public/images/عطارة3.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                                <img src="public/images/عطارة4.jpg" alt="بعد 2" className="rounded-md shadow-md" />
                                <img src="public/images/عطارة5.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                                <img src="public/images/عطارة6.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                                <img src="public/images/عطارة7.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                            </div>
                        </div>
                    </div>
                    {/* مشروع 5 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-right mb-12">
                        <h3 className="text-2xl font-bold text-red-700 mb-4">شغل الأبواب والمطابخ  الأخشاب والالومنيوم الكيلادين</h3>


                        {/* صور  */}
                        <div className="mb-8">

                            <div className="flex flex-col gap-4">
                                <img src="public/images/اخشاب1.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب3.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب4.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب5.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب6.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب7.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب8.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب9.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب10.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب11.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب12.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب13.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب15.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/اخشاب16.jpg" alt="قبل 2" className="rounded-md shadow-md" />

                            </div>
                        </div>
                    </div>
                     {/* مشروع 5 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-right mb-12">
                        <h3 className="text-2xl font-bold text-red-700 mb-4">ديكورات بديل الشيبورد وبديل الرخام</h3>


                        {/* صور  */}
                        <div className="mb-8">

                            <div className="flex flex-col gap-4">
                                <img src="public/images/ديكورات1.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                                <img src="public/images/ديكورات2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/ديكورات3.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/ديكورات4.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/ديكورات5.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/ديكورات7.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/ديكورات8.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                                <img src="public/images/ديكورات9.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
