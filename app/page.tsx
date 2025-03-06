import Image from "next/image";
import { Armchair, ArrowRight, Clock4, Phone, PiggyBank, ShieldCheck, TrendingUp } from "lucide-react"

export default function Home() {
    return (
        <>
            <section
                className="w-full h-screen bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url(\"/images/canyon.jpg\")' }}
            >
                <div className="container mx-auto h-screen flex items-start flex flex-col">
                    <div className="flex-1 flex flex-col justify-center items-start gap-10">
                        <div className="text-white bg-white/20 h-10 items-center flex px-4 rounded-full text-sm border border-white/20">Viaja como nunca antes</div>
                        <h1 className="text-7xl text-white max-w-[800px] font-bold">Porque una buena experiencia comienza antes del viaje.</h1>
                        <button className="flex bg-white h-12 px-6 text-black rounded-full font-semibold items-center gap-2">
                            Conócenos
                            <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] pb-[100px] gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="bg-white/20 backdrop-blur w-14 aspect-square flex items-center justify-center rounded-full">
                                <Clock4 color="white" />
                            </div>
                            <p className="text-white flex-1">Descubre destinos únicos sin prisas, disfrutando cada momento del camino. </p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="bg-white/20 backdrop-blur w-14 aspect-square flex items-center justify-center rounded-full">
                                <TrendingUp color="white" />
                            </div>
                            <p className="text-white flex-1">Viajar es crecer: cada experiencia te lleva a nuevas alturas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white-50 w-full h-[700px]">
                <div className="max-w-[1200px] mx-auto py-[50px] grid grid-cols-2 gap-4 h-[700px] text-white">
                    <div className="bg-cover bg-center rounded-3xl flex items-end" style={{ backgroundImage: 'url(\"/images/iceland.jpg\")' }}>
                        <div className="w-full p-12">
                            <h1 className="text-3xl font-bold">Fjaðrárgljúfur</h1>
                            <p>Iceland</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-cover bg-cente rounded-3xl flex items-end" style={{ backgroundImage: 'url(\"/images/rio-de-janeiro.jpg\")' }}>
                                <div className="p-8">
                                    <h1 className="text-3xl font-bold">Rio de Janeiro</h1>
                                    <p>Brasil</p>
                                </div>
                            </div>
                            <div className="bg-cover bg-center rounded-3xl flex items-end" style={{ backgroundImage: 'url(\"/images/ha-long.jpg\")' }}>
                                <div className="p-8">
                                    <h1 className="text-3xl font-bold">Ha Long</h1>
                                    <p>Vietnam</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-cover bg-center rounded-3xl flex items-end" style={{ backgroundImage: 'url(\"/images/poon-hill.jpg\")' }}>
                            <div className="p-12">
                                <h1 className="text-3xl font-bold">Poon Hill</h1>
                                <p>Nepal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 w-full py-[70px]">
                <div className="max-w-[1184px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className="pb-6">
                            <h1 className="text-3xl font-bold pb-4">Experimenta una nueva aventura</h1>
                            <p>Descubre paisajes impresionantes, culturas vibrantes y experiencias únicas. Explora la naturaleza, aventuras urbanas o encuentra el equilibrio perfecto. ¡Tu próxima aventura te espera!</p>
                        </div>
                        <div className="grid grid-rows-3 py-2 gap-7">
                            <div className="flex flex-row gap-3 items-center">
                                <ShieldCheck size={80} />
                                <div>
                                    <h1 className="font-bold">Viaja seguro</h1>
                                    <p>Tu bienestar es nuestra prioridad. Disfruta de tu aventura con la tranquilidad de saber que contamos con opciones de seguros de viaje y asistencia 24/7 para que tu experiencia sea sin preocupaciones.</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <PiggyBank size={80} />
                                <div>
                                    <h1 className="font-bold">Precios asequibles</h1>
                                    <p>Explora el mundo sin romper tu presupuesto. Ofrecemos tarifas competitivas y opciones de pago flexibles para que puedas vivir la aventura de tus sueños a un precio que se adapta a ti.</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <Armchair size={80} />
                                <div>
                                    <h1 className="font-bold">Alojamientos cómodos</h1>
                                    <p>Encuentra el lugar perfecto para descansar después de un día lleno de exploración. Desde hoteles boutique hasta resorts de lujo, nuestros alojamientos garantizan confort y calidad para que te sientas como en casa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: 'url("/images/setenil.jpg")' }}
                        className="bg-cover bg-center h-[300px] lg:h-auto order-2 lg:order-none"
                    ></div>
                </div>
            </section>
            <section className="bg-black">
                <div className="max-w-[1184px] mx-auto">
                    <div className="flex items-center justify-between h-[70px] rounded-2xl px-6 text-white font-bold">
                        <p>Llámanos</p>
                        <a href="tel:+34910228319" className='text-white flex items-center gap-4 hover:bg-sky-50 hover:text-black p-4 rounded-xl transition duration-500'><Phone />910 228 319</a>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div
                    className="bg-cover bg-center bg-fixed flex items-center justify-center mx-auto"
                    style={{ backgroundImage: 'url("/images/el-gastor.jpg")' }}
                >
                    <div className="bg-black/50 w-full flex flex-col items-center justify-center py-[150px]">
                        <h3 className="text-6xl font-bold text-white text-center max-w-4xl px-4">
                            “No hay tierras extranjeras. Solo el viajero es extranjero.”
                        </h3>
                        <p className="text-2xl italic text-white text-center max-w-4xl px-4 mt-8">
                            — Robert Louis Stevenson
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full h-[400px]">
                <div className="w-[1072px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-[50px]">
                    <div style={{ backgroundImage: 'url(\"/images/capadoccia.jpg\")' }}
                        className="bg-cover bg-center h-[300px] lg:h-auto">
                    </div>
                    <div className="gap-10">
                        <h1 className="font-bold">¿Por qué elegir nuestra agencia de viajes?</h1>
                        <p>Viajar es más que moverse de un lugar a otro — es vivir experiencias inolvidables, y estamos aquí para hacerlas posibles. Te ofrecemos seguridad y asistencia 24/7, precios transparentes sin sorpresas y alojamientos seleccionados para tu máximo confort. <br /> Personalizamos cada detalle de tu aventura, desde destinos exóticos hasta escapadas relajantes, adaptándonos a tus gustos y presupuesto. Además, siempre contarás con un equipo cercano y dispuesto a ayudarte en cada paso del camino. ¡Déjanos encargarnos de todo para que solo te preocupes por disfrutar al máximo tu próxima aventura! 🌍✈️</p>
                    </div>
                </div>
            </section>

            {/* <section
                className="w-full h-screen bg-cover bg-center relative mt-16"
            // style={{ backgroundImage: 'url(\"/images/elnido.jpg\")' }}
            >
                <div className="container h-full flex flex-col items-center mx-auto">
                    <div className="text-left">
                        <h1 className="text-7xl font-bold text-black">Explore The Majestic Asia Now</h1>
                        <button className="px-6 py-2 my-4 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition-colors">
                            Empezar
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <div>
                             <Image src={ } alt="" width={ } height={ } /> 
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div>
                            <Image src={ } alt="" width={ } height={ } /> 
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-12 bg-blue-50">
                <div className="container">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-blue-700">Agencia de viajes en Madrid</h1>
                        <h2 className="text-2xl font-semibold text-blue-600">Viajes DFMTravel</h2>
                        <h3 className="text-lg font-medium text-blue-500">¿Tienes dudas? ¡Te escuchamos!</h3>
                        <a
                            href="tel:+34910228319"
                        >910228319</a>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-50 flex items-center justify-center space-x-8">
                <div className="w-1/3 max-w-xs">
                    <Image
                        width={200}
                        height={200}
                        src="/images/caption.jpg"
                        alt="Imagen de ejemplo"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                <div className="w-2/3 max-w-lg">
                    <h1 className="text-3xl font-bold text-blue-700 mb-4">
                        Descubre los viajes más exclusivos con dfmtravel, ¡tu agencia de confianza!
                    </h1>
                    <p className="text-lg text-gray-700">
                        Con dfmtravel, viajar es mucho más que llegar a un destino. Ofrecemos experiencias únicas, diseñadas para que disfrutes de cada momento.
                        Ya sea que busques aventura, relax o exploración cultural, tenemos el paquete perfecto para ti.
                    </p>
                </div>
            </section>
            <section className="py-12 bg-blue-50 flex items-center justify-center space-x-8">
                <div className="w-full max-w-2xl">
                    <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
                        ¿Por qué elegir nuestra agencia de viajes?
                    </h1>
                    <p className="text-lg text-gray-700 text-center">
                        En dfmtravel, entendemos que cada viaje es una oportunidad única de explorar el mundo y crear recuerdos inolvidables. Nuestro equipo de expertos en viajes trabaja de la mano contigo para ofrecerte experiencias personalizadas que se adapten a tus deseos y necesidades. Ya sea que busques relajarte en playas paradisíacas, aventurarte en destinos exóticos o explorar la historia y cultura de nuevos lugares, tenemos opciones para todos los gustos.
                        <br /><br />
                        Lo que nos diferencia es nuestra atención al detalle, la calidad de nuestros servicios y la pasión que ponemos en cada itinerario que diseñamos. Nos aseguramos de que cada aspecto de tu viaje sea perfecto, desde la selección de los mejores alojamientos hasta las actividades más emocionantes. Además, contamos con un equipo de atención al cliente disponible para resolver cualquier duda o preocupación antes, durante y después de tu aventura.
                        <br /><br />
                        Viajar con dfmtravel es más que solo planificar un viaje; es crear experiencias que durarás para siempre. ¡Déjanos ser parte de tu próxima gran aventura!
                    </p>
                </div>
                <div className="w-full max-w-xs">
                    <Image
                        width={200}
                        height={200}
                        src="/images/dock.jpg"
                        alt="Imagen de ejemplo"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </section>
            */}
        </>
    );
}
