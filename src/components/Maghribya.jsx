import Header from "./Header";

export default function Maghribya() {
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
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center my-6 text-red-700">
                        أعمال  النقشيات الجبسية والمغربية
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274076/WhatsApp_Image_2025-08-27_at_01.26.59_f0e61197_ncdsud.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274082/WhatsApp_Image_2025-08-27_at_01.27.00_fd2ed2ee_wfwlhc.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274089/WhatsApp_Image_2025-08-27_at_01.27.02_21e767de_lzvraq.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274096/WhatsApp_Image_2025-08-27_at_01.27.03_c47e8ad6_ywlyrr.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274105/WhatsApp_Image_2025-08-27_at_01.27.05_4856b313_jd0ebb.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274112/WhatsApp_Image_2025-08-27_at_01.27.07_c8172975_g3fuqo.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274125/WhatsApp_Image_2025-08-27_at_01.27.00_d2f4c649_zoucrz.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274130/WhatsApp_Image_2025-08-27_at_01.27.01_2c9a09c2_zaithd.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274137/WhatsApp_Image_2025-08-27_at_01.27.01_ad16f800_gbdwxy.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274319/WhatsApp_Image_2025-08-27_at_01.27.03_e97bb15a_wlwoc0.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274337/WhatsApp_Image_2025-08-27_at_01.27.03_36170976_iddnzq.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274388/WhatsApp_Image_2025-08-27_at_01.27.04_f68849ab_ohkb7d.jpg" alt="ورق جدران 12" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274401/WhatsApp_Image_2025-08-27_at_01.27.06_8c8554f4_hnewli.jpg" alt="ورق جدران 13" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756274408/WhatsApp_Image_2025-08-27_at_01.27.08_96b3ae97_q9zmga.jpg" alt="ورق جدران 12" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}