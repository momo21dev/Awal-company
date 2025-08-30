import Header from "./Header";

export default function Mshare3() {
    return (
        <>
            <Header
                showCons={true}
                showContact={true}
                showMis={true}
                showUs={true}
                showVis={true}
                showWork={true}
            />
            <h1 className="text-3xl font-bold text-center my-6 text-red-800">مشاريع قبل و بعد</h1>
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
                        <img src="/images/مجلس1jpg.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                        <img src="/images/مجلس2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                    </div>
                </div>

                {/* صور بعد */}
                <div>
                    <h4 className="text-gray-600 font-medium mb-3 text-2xl">بعد</h4>
                    <div className="flex flex-col gap-4">
                        <img src="/images/مجلس 3.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                        <img src="/images/مجلس4.jpg" alt="بعد 2" className="rounded-md shadow-md" />

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
                        <img src="/images/تكه1.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                        <img src="/images/تكه2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                    </div>
                </div>

                {/* صور بعد */}
                <div>
                    <h4 className="text-gray-600 font-medium mb-3 text-xl">بعد</h4>
                    <div className="flex flex-col gap-4">
                        <img src="/images/تكه3.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                        <img src="/images/تكه5.jpg" alt="بعد 2" className="rounded-md shadow-md" />
                        <img src="/images/تكة4.jpg" alt="بعد 2" className="rounded-md shadow-md" />
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

                        <img src="/images/فيصل5.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                    </div>
                </div>

                {/* صور بعد */}
                <div>
                    <h4 className="text-gray-600 font-medium mb-3 text-xl">بعد</h4>
                    <div className="flex flex-col gap-4">
                        <img src="/images/فيصل 3.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                        <img src="/images/فيصل4.jpg" alt="بعد 2" className="rounded-md shadow-md" />

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
                        <img src="/images/عطارة.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                        <img src="/images/عطارة2.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                    </div>
                </div>

                {/* صور بعد */}
                <div>
                    <h4 className="text-gray-600 font-medium mb-3 text-xl">بعد</h4>
                    <div className="flex flex-col gap-4">
                        <img src="/images/عطارة3.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                        <img src="/images/عطارة4.jpg" alt="بعد 2" className="rounded-md shadow-md" />
                        <img src="/images/عطارة5.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                        <img src="/images/عطارة6.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                        <img src="/images/عطارة7.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                    </div>
                </div>
            </div>
            {/* مشروع 5*/}
            <div className="bg-white shadow-lg rounded-lg p-8 text-right mb-12">
                <h3 className="text-2xl font-bold text-red-700 mb-4">
                    مسجد ال مبارك
                </h3>
                <p className="text-gray-700 mb-6 leading-8 text-lg">
                    تجديد وترميم مسجد ال مبارك بمنطقه الهفوف حي الروضه
                </p>

                {/* صور قبل */}
                <div className="mb-8">
                    <h4 className="text-gray-600 font-medium mb-3 text-xl">قبل</h4>
                    <div className="flex flex-col gap-4">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756531598/WhatsApp_Image_2025-08-29_at_18.00.47_6ec1c2f0_uwmnal.jpg" alt="قبل 1" className="rounded-md shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756531607/WhatsApp_Image_2025-08-29_at_18.00.46_af50393f_tzriyy.jpg" alt="قبل 2" className="rounded-md shadow-md" />
                    </div>
                </div>

                {/* صور بعد */}
                <div>
                    <h4 className="text-gray-600 font-medium mb-3 text-2xl">بعد</h4>
                    <div className="flex flex-col gap-4">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756531603/WhatsApp_Image_2025-08-29_at_18.01.11_b39d4fd7_wnamz9.jpg" alt="بعد 1" className="rounded-md shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756531594/WhatsApp_Image_2025-08-29_at_18.01.11_4d5bccaa_bzkbwv.jpg" alt="بعد 2" className="rounded-md shadow-md" />

                    </div>
                </div>
            </div>




        </>
    )
}