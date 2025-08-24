import Header from "./Header";

export default function Vision() {
    return (
        <>
            <Header showContact={true} showMis={true} showUs={true} showWork={true}/>
            <div className="bg-gray-50 py-20 px-6 md:px-20" dir="rtl">
                <div className="max-w-4xl mx-auto text-right">
                    <h2 className="text-3xl font-extrabold text-red-700 mb-8 border-b-4 border-red-600 inline-block pb-2">
                        رؤيتنا
                    </h2>
                    <p className="text-gray-800 leading-9 text-xl font-medium">
                        أن نكون من <span className="font-bold text-red-700">الرواد</span> في قطاع
                        <span className="font-bold"> المقاولات والديكورات</span> داخل المملكة، عبر تقديم
                        <span className="font-bold"> مشاريع متكاملة</span> تجمع بين
                        <span className="font-bold"> الجودة</span>،
                        <span className="font-bold"> الابتكار</span>،
                        و<span className="font-bold"> الدقة في التنفيذ</span>،
                        وأن نصبح <span className="font-bold text-red-700">الخيار الأول</span> لعملائنا
                        في كل ما يتعلق بأعمال
                        <span className="font-bold"> البناء والتشطيبات والتصاميم الحديثة</span>.
                    </p>
                </div>
            </div>
        </>
    )
}
