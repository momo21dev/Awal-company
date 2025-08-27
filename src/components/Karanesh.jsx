import Header from "./Header";

export default function Karanesh() {
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
                    <h2 className="text-3xl font-bold text-center my-6 text-red-700">
                       الكرانيش  الفيوتك والفوم
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262002/WhatsApp_Image_2025-08-27_at_00.27.04_41544a92_tjwkz5.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262008/WhatsApp_Image_2025-08-27_at_00.27.06_2dc6bdd1_k9mfht.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262020/WhatsApp_Image_2025-08-27_at_00.27.07_0158c64f_vmogga.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262027/WhatsApp_Image_2025-08-27_at_00.27.09_398aaddd_hqfyml.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262197/WhatsApp_Image_2025-08-27_at_00.27.04_616845ac_un9ywv.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262212/WhatsApp_Image_2025-08-27_at_00.27.06_cd2faaa6_z8etlq.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262219/WhatsApp_Image_2025-08-27_at_00.27.07_0c1545b2_fzbem9.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262226/WhatsApp_Image_2025-08-27_at_00.27.08_6cb1dfee_py2ahb.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262233/WhatsApp_Image_2025-08-27_at_00.27.09_af106c21_wo4ew0.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262240/WhatsApp_Image_2025-08-27_at_00.27.10_007cc205_xsobf7.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262247/WhatsApp_Image_2025-08-27_at_00.27.11_6797a04c_n6cqyv.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262254/WhatsApp_Image_2025-08-27_at_00.27.12_8174a1a6_t288dx.jpg" alt="ورق جدران 12" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262269/WhatsApp_Image_2025-08-27_at_00.27.14_a883cb67_itiysn.jpg" alt="ورق جدران 13" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262332/WhatsApp_Image_2025-08-27_at_00.27.18_e61e40e7_bxf7ps.jpg" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262325/WhatsApp_Image_2025-08-27_at_00.27.18_2db49544_wwbock.jpg" alt="ورق جدران 2" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262318/WhatsApp_Image_2025-08-27_at_00.27.17_636cf58c_buiugc.jpg" alt="ورق جدران 3" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262299/WhatsApp_Image_2025-08-27_at_00.27.17_3f3b8052_x2p3io.jpg" alt="ورق جدران 4" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262291/WhatsApp_Image_2025-08-27_at_00.27.16_a55d8a10_j69nop.jpg" alt="ورق جدران 5" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262205/WhatsApp_Image_2025-08-27_at_00.27.05_8bb2dc28_jaqtug.jpg" alt="ورق جدران 6" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262283/WhatsApp_Image_2025-08-27_at_00.27.14_306704d5_zuu45f.jpg" alt="ورق جدران 7" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262262/WhatsApp_Image_2025-08-27_at_00.27.13_51ff431e_ox7rdf.jpg" alt="ورق جدران 8" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262055/WhatsApp_Image_2025-08-27_at_00.27.18_ae0fd97c_mlrd2q.jpg" alt="ورق جدران 9" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262044/WhatsApp_Image_2025-08-27_at_00.27.15_ab5e4e18_i7i5bw.jpg" alt="ورق جدران 10" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756262036/WhatsApp_Image_2025-08-27_at_00.27.12_c2b41cfc_g3up8d.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )

}