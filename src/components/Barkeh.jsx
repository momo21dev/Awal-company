import Header from "./Header";

export default function Barkeh() {
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
                        اعمال الباركيه
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756270677/WhatsApp_Image_2025-08-27_at_00.42.28_6e1049dc_yesygb.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756270686/WhatsApp_Image_2025-08-27_at_00.42.30_0ca77adc_cavel4.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756270697/WhatsApp_Image_2025-08-27_at_00.42.31_d1d3989b_gqaifm.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756270708/WhatsApp_Image_2025-08-27_at_00.46.16_5cef7460_vyednz.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271017/WhatsApp_Image_2025-08-27_at_00.42.29_4f5226af_wrezto.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271038/WhatsApp_Image_2025-08-27_at_00.42.29_94b6afdc_aecr8r.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271047/WhatsApp_Image_2025-08-27_at_00.42.29_e166310e_tmnrmi.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271057/WhatsApp_Image_2025-08-27_at_00.42.30_59574ac1_gm78xx.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271077/WhatsApp_Image_2025-08-27_at_00.42.32_a8581cf7_wzysno.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271113/WhatsApp_Image_2025-08-27_at_00.46.17_713a9575_dt9jbt.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271125/WhatsApp_Image_2025-08-27_at_00.46.18_f949456b_fweh3v.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271161/WhatsApp_Image_2025-08-27_at_00.46.18_2a04e7bf_vpygl0.jpg" alt="ورق جدران 12" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756271194/WhatsApp_Image_2025-08-27_at_00.46.19_a3c51960_j1rjh0.jpg" alt="ورق جدران 13" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}