import Header from "./Header";

export default function Hanager() {
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
                        هناجر  حديد
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273619/WhatsApp_Image_2025-08-27_at_01.19.28_49593011_cysmue.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273626/WhatsApp_Image_2025-08-27_at_01.19.29_ef708d8b_dls4h8.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273634/WhatsApp_Image_2025-08-27_at_01.19.30_0f7f1b20_vj3ivs.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273641/WhatsApp_Image_2025-08-27_at_01.19.32_49531faf_gn8wez.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273760/WhatsApp_Image_2025-08-27_at_01.19.28_e34c6105_mirph2.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273767/WhatsApp_Image_2025-08-27_at_01.19.29_b35601b6_njbwb8.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273773/WhatsApp_Image_2025-08-27_at_01.19.29_fb0e3571_szbknh.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273779/WhatsApp_Image_2025-08-27_at_01.19.30_17c75665_z0z4xw.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273806/WhatsApp_Image_2025-08-27_at_01.19.31_d23ab0b3_blqxze.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273819/WhatsApp_Image_2025-08-27_at_01.19.31_64a0ed07_d2j98n.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273825/WhatsApp_Image_2025-08-27_at_01.19.32_983d1e89_muqsoh.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273831/WhatsApp_Image_2025-08-27_at_01.19.32_e93915b1_z1ljwz.jpg" alt="ورق جدران 12" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273838/WhatsApp_Image_2025-08-27_at_01.19.32_4e3fde78_kdwpwi.jpg" alt="ورق جدران 13" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}