import Header from "./Header";

export default function Art() {
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
                       رسومات جداريه
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530438/WhatsApp_Image_2025-08-30_at_03.09.49_057bf81d_gmwbhh.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530441/WhatsApp_Image_2025-08-30_at_03.09.51_ac712517_r0hklz.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530446/WhatsApp_Image_2025-08-30_at_03.09.50_4ae47057_ohpqrc.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530433/WhatsApp_Image_2025-08-30_at_03.09.51_a3da5ef2_nswdde.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530430/WhatsApp_Image_2025-08-30_at_03.09.52_3dc714d2_cucllr.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530425/WhatsApp_Image_2025-08-30_at_03.09.50_27b35e40_higi0d.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530422/WhatsApp_Image_2025-08-30_at_03.09.52_a95cfbd7_vfzh0i.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530419/WhatsApp_Image_2025-08-30_at_03.09.53_0f96ca91_mlmbq7.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530416/WhatsApp_Image_2025-08-30_at_03.09.53_a4853491_spfm9e.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530413/WhatsApp_Image_2025-08-30_at_03.09.51_a3fd4e40_ac8tpw.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530409/WhatsApp_Image_2025-08-30_at_03.09.54_91071ca4_goy7eq.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530407/WhatsApp_Image_2025-08-30_at_03.09.52_a812ba9d_gb40d3.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530402/WhatsApp_Image_2025-08-30_at_03.09.54_3a3ee2d7_fr18ke.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530399/WhatsApp_Image_2025-08-30_at_03.09.53_686192c1_xars1f.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530394/WhatsApp_Image_2025-08-30_at_03.09.55_36ed75fc_arisvn.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530391/WhatsApp_Image_2025-08-30_at_03.09.54_f80d7c6b_pdiuso.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530387/WhatsApp_Image_2025-08-30_at_03.09.55_c3aa6e09_zf7qf8.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756530385/WhatsApp_Image_2025-08-30_at_03.09.55_6b918bd0_ollxhh.jpg" alt="ورق جدران 11" className="rounded-2xl shadow-md" />
                        <img src="" alt="ورق جدران 11" className="rounded-2xl shadow-md" />

                    </div>
                </div>
            </section>
        </>
    )
}