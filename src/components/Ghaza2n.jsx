import Header from "./Header";

export default function Ghaza2n() {
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
                    <h2 className=" text-3xl font-bold text-center my-6 text-red-700">
                       خزائن خشبيه مميزه
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272816/WhatsApp_Image_2025-08-27_at_01.17.33_aab0935a_mlvo5c.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272826/WhatsApp_Image_2025-08-27_at_01.17.33_e55bbed7_yo6c9p.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756272838/WhatsApp_Image_2025-08-27_at_01.21.57_39c8bca5_lmcczt.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273189/WhatsApp_Image_2025-08-27_at_01.17.34_715f9a41_xule2l.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273168/WhatsApp_Image_2025-08-27_at_01.22.01_2363d889_gj4v52.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273178/WhatsApp_Image_2025-08-27_at_01.17.34_91287091_th1ahe.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273214/WhatsApp_Image_2025-08-27_at_01.17.35_acfd9eea_cm6lmy.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273232/WhatsApp_Image_2025-08-27_at_01.21.57_6ae5898f_nw9ku7.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273255/WhatsApp_Image_2025-08-27_at_01.21.59_81a31fa6_rb1ob1.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273266/WhatsApp_Image_2025-08-27_at_01.22.00_8d6ca96a_bee4a6.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756273277/WhatsApp_Image_2025-08-27_at_01.22.01_40137f50_frgwsi.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>

        </>
    )
}