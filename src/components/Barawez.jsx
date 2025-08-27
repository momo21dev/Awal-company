import Header from "./Header";

export default function Barawez() {
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
            <section className="bg-gray-50 py-20 px-6 md:px-20" dir="rtl">
                <div className="max-w-6xl mx-auto m-2">
                    <h1 className="text-3xl font-bold text-center my-6 text-red-800">
                        أعمال البراويز  الجبسيه والفوم
                    </h1>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">

                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756265168/WhatsApp_Image_2025-08-27_at_00.28.37_a888a7c1_he3cmu.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756265177/WhatsApp_Image_2025-08-27_at_00.28.38_ec1a1ff9_lurdde.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756265185/WhatsApp_Image_2025-08-27_at_00.28.32_53c09cbe_aqvbzo.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756265209/WhatsApp_Image_2025-08-27_at_00.28.34_6666437f_pfc9fp.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756265225/WhatsApp_Image_2025-08-27_at_00.28.34_8f69a2ad_krisu1.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756265240/WhatsApp_Image_2025-08-27_at_00.28.36_6a8299e2_hbchbf.jpg" alt="ورق جدران 13" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756265247/WhatsApp_Image_2025-08-27_at_00.28.37_a66d3747_rvoxnq.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756265255/WhatsApp_Image_2025-08-27_at_00.28.38_e50268ea_jn1c5x.jpg" alt="ورق جدران 12" className="rounded-2xl shadow-md" />

                    </div>
                </div>
            </section>
        </>
    )
}