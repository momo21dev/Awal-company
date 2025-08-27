import Header from "./Header";

export default function Badel() {
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
                    <h2 className="text-3xl font-bold text-center my-6 text-red-800">
                        أعمال ديكورات الشيبورد وبديل الرخام
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271550/WhatsApp_Image_2025-08-27_at_00.47.40_cf7a5164_zllnyq.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271560/WhatsApp_Image_2025-08-27_at_00.47.42_e55c84a4_b8p38m.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271572/WhatsApp_Image_2025-08-27_at_00.47.43_07803716_caozrt.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271583/WhatsApp_Image_2025-08-27_at_00.47.39_f3616cc7_howexp.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271678/WhatsApp_Image_2025-08-27_at_00.47.40_47b7a8ff_yopzsl.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271771/WhatsApp_Image_2025-08-27_at_00.47.41_4d0f471d_azrrdd.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271809/WhatsApp_Image_2025-08-27_at_00.47.42_934a3edd_bpwymj.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271889/WhatsApp_Image_2025-08-27_at_00.47.44_3b574648_x1uppr.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271840/WhatsApp_Image_2025-08-27_at_00.47.43_20845007_klpx4n.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271860/WhatsApp_Image_2025-08-27_at_00.47.43_08222923_jwgqd5.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271870/WhatsApp_Image_2025-08-27_at_00.47.44_4a6c1630_k3pgsh.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}