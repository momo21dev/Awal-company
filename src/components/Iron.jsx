import Header from "./Header";

export default function Iron() {
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
                    <h1 className="text-3xl font-bold text-center my-6 text-red-700">
                        تصاميم أبواب وشبابيك حديد مشغول
                    </h1>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756266966/WhatsApp_Image_2025-08-27_at_00.37.19_7db674db_ppltbb.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756266976/WhatsApp_Image_2025-08-27_at_00.37.20_88c66fab_nfpmcm.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756266985/WhatsApp_Image_2025-08-27_at_00.37.21_4ea69d90_kvtape.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756266994/WhatsApp_Image_2025-08-27_at_00.37.23_5914a090_xltent.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267004/WhatsApp_Image_2025-08-27_at_00.37.25_4c5dcadc_tci0hx.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267024/WhatsApp_Image_2025-08-27_at_00.37.19_6758cc65_vhnc9p.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267033/WhatsApp_Image_2025-08-27_at_00.37.20_f1646a58_lkzqow.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267044/WhatsApp_Image_2025-08-27_at_00.37.20_77e37da8_lvrxao.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267053/WhatsApp_Image_2025-08-27_at_00.37.21_fd1ddcb3_f2bo0a.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267219/WhatsApp_Image_2025-08-27_at_00.37.22_81ff404e_lcdqs2.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267228/WhatsApp_Image_2025-08-27_at_00.37.22_b1cdbff9_dy9ewz.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267238/WhatsApp_Image_2025-08-27_at_00.37.22_20a10515_qwghjp.jpg" alt="ورق جدران 12" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267248/WhatsApp_Image_2025-08-27_at_00.37.23_ff8d7f5a_rfudjf.jpg" alt="ورق جدران 13" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267288/WhatsApp_Image_2025-08-27_at_00.37.25_667e8aa0_cxwlsl.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267298/WhatsApp_Image_2025-08-27_at_00.37.26_e401dce9_cr8bc9.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756267308/WhatsApp_Image_2025-08-27_at_00.37.27_8043141b_flvugk.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}