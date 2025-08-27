import Header from "./Header";

export default function Bergola() {
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
                      أعمال برجولات خشبية
                    </h1>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756259870/WhatsApp_Image_2025-08-27_at_00.19.26_cf355afc_rckvyd.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756259876/WhatsApp_Image_2025-08-27_at_00.19.27_76daa16e_xrl2jk.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756259862/WhatsApp_Image_2025-08-27_at_00.19.26_d6fead62_dnxuey.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756259882/WhatsApp_Image_2025-08-27_at_00.19.26_e0f4b802_rprxll.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756259888/WhatsApp_Image_2025-08-27_at_00.19.26_71e25096_irotdd.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756259893/WhatsApp_Image_2025-08-27_at_00.19.27_1ab74ea8_j29gao.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}