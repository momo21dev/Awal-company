import Header from "./Header";

export default function Mission() {
    return (
        <>
            <Header showContact={true} showVis={true} showUs={true} showWork={true} />

            <section  className="bg-gray-50 py-20 px-6 md:px-20" dir="rtl">
                <div className="max-w-4xl mx-auto text-right">
                    <h2 className="text-3xl font-extrabold text-red-700 mb-8 border-b-4 border-red-600 inline-block pb-2">
                        مهمتنا
                    </h2>
                    <p className="text-gray-800 leading-9 text-xl font-medium">
                        <span className="font-bold text-red-700">تقديم حلول متكاملة</span>{" "}
                        في المقاولات والديكورات بجودة عالية، و{" "}
                        <span className="font-bold">ابتكار</span>{" "}
                        يلبي تطلعات عملائنا، مع التزامنا بـ{" "}
                        <span className="font-bold">الدقة</span>{" "} 
                        و <span className="font-bold">المصداقية</span>{" "} 
                        في كل مشروع، لضمان تنفيذ أعمالنا وفق{" "}
                        <span className="font-bold text-red-700">أعلى معايير الجودة</span>{" "}
                        وبما يحقق <span className="font-bold">رضا عملائنا الكامل</span>.
                    </p>
                </div>
            </section>
        </>
    )
}
