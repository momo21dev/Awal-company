import Header from "./Header";

export default function Haikal() {
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
                       الهيكل التنظيمي للمؤسسة
                    </h2>

                    {/* الصور */}
                    <div className="flex flex-col gap-6">
                        <img src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1756528833/ba9a870a-719e-4cee-b8ec-c1b540d8ec79.png" alt="ورق جدران 1" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}