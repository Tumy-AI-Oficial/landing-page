"use client";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaRegCircle } from "react-icons/fa";

const services = [
    {
        title: "Inteligencia",
        items: [
            "IA Generativa",
            "LLM & NLM",
            "Machine Learning",
            "Chatbots",
            "IA Personalizada"
        ],
        img: "https://sendbird.imgix.net/cms/Chatbot-UI_Ask-Redfin-bot.png"
    },
    {
        title: "Software de empresas",
        items: [
            "Gestion de Inventario",
            "Sistemas de Ventas",
            "Sistemas de Facturación",

        ],
        img: "https://www.diariosigloxxi.com/multimedia/images/img_c_6569b792a4288.jpg"
    },
    {
        title: "Desarrollo Web",
        items: [
            "React / Vue / Angular",
            "Node.js / Python / .NET",
            "GoLang",
        ],
        img: "https://tramapublicidad.com/wp-content/uploads/2024/05/Web_GabiGarcia_p2.webp"
    },
    {
        title: "Desarrollo Móvil",
        items: [
            "iOS / Android",
            "React Native",
        ],
        img: "https://weareshifta.com/wp-content/uploads/consistencia-UX-Writing.jpg"
    },
    {
        title: "Diseño de Producto",
        items: [
            "Diseño UI/UX",
            "Sistemas de diseño",
            "Prototipos & Wireframes",
            "Figma / Sketch / After Effects"
        ],
        img: "https://assets.justinmind.com/wp-content/uploads/2018/06/justinmind-user-flow-sequence-diagram.png"
    },
    {
        title: "Aseguramiento de Calidad",
        items: [
            "QA Automatizado",
            "Pruebas Manuales",
            "Testing de API",
            "Pruebas de Rendimiento"
        ],
        img: "https://www.atlascode.com/wp-content/uploads/2016/04/software-testing.jpg"
    }
];

export default function SolutionsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen text-center py-8 md:py-16 gap-8 md:px-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Soluciones inteligentes para personas, negocios y empresas
            </h1>
            <p className="text-lg max-w-4xl mx-auto">
                Te ayudamos a crear soluciones personalizadas utilizando las últimas tecnologías en desarrollo, inteligencia artificial y diseño digital. Llevamos tus ideas al siguiente nivel.
            </p>

            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-8 text-left">
                Puedes optar por las siguientes soluciones:
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-32 mt-8">
                {services.map((service, index) => (
                    <TiltedCard
                        key={index}
                        imageSrc={service.img}
                        altText={service.title}
                        captionText={service.title}
                        containerHeight="350px"
                        containerWidth="350px"
                        imageHeight="350px"
                        imageWidth="350px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <div className="flex flex-col justify-center items-center h-full w-full px-4 py-6 gap-3 bg-black/85 backdrop-blur-md rounded-2xl text-white text-center">
                                <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                                    <HiOutlineSparkles className="text-white dark:text-white" />
                                    {service.title}
                                </div>
                                <ul className="space-y-1 text-sm text-white/90 w-full text-left">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <FaRegCircle className="text-xs opacity-60" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    );
}
