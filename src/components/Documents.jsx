import Header from "./Header";

export default function Documents() {
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
                    <h1 className="text-3xl font-bold text-center my-6 text-red-700">
                        مستندات المؤسسة
                    </h1>

                    {/* الصور */}
                    <div className="flex flex-col gap-18">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756528673/WhatsApp_Image_2025-08-30_at_07.35.11_10aa6cc8_wwtt1a.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756528670/WhatsApp_Image_2025-08-30_at_07.35.11_35a95810_z5zugt.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756528667/WhatsApp_Image_2025-08-30_at_07.35.11_6ba48812_roxgcd.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756528666/WhatsApp_Image_2025-08-30_at_07.35.11_62ffb3c6_bkb3v8.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756528675/WhatsApp_Image_2025-08-30_at_07.35.11_1aa6414e_qjhjee.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756528679/WhatsApp_Image_2025-08-30_at_07.35.10_7ecf426b_ncxihd.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756528809/48c28fec-437e-4655-9400-0d4bcb041cb1.png" alt="ورق جدران 1" className="rounded-2xl shadow-md" />


                    </div>
                </div>
            </section>
        </>

    )
}