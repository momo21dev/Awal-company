import Header from "./Header";

export default function Abwab() {
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
                        أبواب المونيوم كيلادين
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272293/WhatsApp_Image_2025-08-27_at_01.08.45_811c93e2_wrfxdu.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272306/WhatsApp_Image_2025-08-27_at_01.08.48_0d3b95b5_z1oecs.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272316/WhatsApp_Image_2025-08-27_at_01.08.51_f841a045_ka1cpv.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272530/WhatsApp_Image_2025-08-27_at_01.08.54_158bccdc_zqekho.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272539/WhatsApp_Image_2025-08-27_at_01.08.47_c280dd4f_rvwfyp.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272548/WhatsApp_Image_2025-08-27_at_01.08.47_5dc5c8e2_syovcv.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272559/WhatsApp_Image_2025-08-27_at_01.08.49_d8208aa9_lgtx2f.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272569/WhatsApp_Image_2025-08-27_at_01.08.49_4a08cd5f_cxxqam.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272596/WhatsApp_Image_2025-08-27_at_01.08.50_9472aad9_kouw9i.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272607/WhatsApp_Image_2025-08-27_at_01.08.50_cd8a1fa0_ctygfg.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272618/WhatsApp_Image_2025-08-27_at_01.08.53_26880e71_texkbw.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272629/WhatsApp_Image_2025-08-27_at_01.08.52_1d6488a3_cbgspm.jpg" alt="ورق جدران 12" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272649/WhatsApp_Image_2025-08-27_at_01.08.53_8d459cd4_ujsyj8.jpg" alt="ورق جدران 13" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}