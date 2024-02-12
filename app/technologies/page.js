import Link from "next/link"


const templates = [
    {
        imageTemplate: "/Z5.png",
        title: "Z5",
        subtitle: "Algorithmic Platform Technologies",
        description: "In defence, space, robotics, and transportation, HailAgi AI optimizes hypersonic engines, drones, and small satellites, ensuring autonomy, predictive maintenance, and efficient mission planning. In sensing, timing, and navigation, HailAgi contributes to creating a comprehensive environmental picture through sensor fusion, enabling enhanced situational awareness for autonomous systems. The platform-based technologies harness AI's power for designing, optimizing, and automating complex systems and processes.",
    },
    {
        imageTemplate: "/O5.png",
        title: "O5",
        subtitle: "Optimization of Hardware and Software",
        description: "HailAgi’s influence spans various domains, optimizing hypersonic engine design, automating genetic engineering workflows in biotechnology, and enhancing perception in autonomous systems. In sensing applications, HailAgi ensures efficient data analysis, adaptive calibration, and accurate interpretation of sensor data. In defense and space, AI contributes to trajectory optimization, anomaly detection, and autonomous launch control. These applications showcase AI's role in optimizing both hardware and software for diverse technological advancements.",
    },
    {
        imageTemplate: "/S5.png",
        title: "S5",
        subtitle: "Signal Processing",
        description: "HailAgi Ai excels in real-time analysis of massive data streams from photonic sensors, enabling early detection of environmental changes, predictive maintenance, and efficient data analysis. It enhances signal-to-noise ratio, ensuring greater sensitivity and accuracy in sensor data, crucial for applications like autonomous vehicles and robots. AI's capabilities extend to advanced image and spectral analysis, facilitating object detection, material identification, and medical diagnostics.",
    }
]

const technologiesContent = [
    {
        techLink: "/advantages-material",
        images: "/AdvanceMaterialsandManufacturing.jpg",
        title: "Advance Materials and Manufacturing",
        description: "Advanced Materials and Manufacturing integrate AI in nanoscale research, coating optimization, smart material development, metamaterial design, explosive material safety, critical minerals extraction, magnet and superconductor innovation, advanced protection systems, continuous cashflow chemical synthesis, and additive manufacturing. These applications enhance efficiency, safety, and quality across diverse material engineering processes.",
        techLinkEven: "/artificial-intelligence",
        imagesEven: "/ArtificialIntelligence.jpg",
        titleEven: "Artificial Intelligence, Computing and Communication",
        descriptionEven: "Artificial Intelligence, Computing, and Communication converge with transformative applications. From Advanced RF and Optical Communications to AI Algorithms, Distributed Ledgers, and Advanced Data Analytics, these technologies optimize networks, enhance security, and power innovative solutions. Machine Learning automates model selection, while Protective Cybersecurity employs AI for threat detection. Advanced Integrated Circuit Design relies on AI for chip design, and Natural Language Processing excels in translation and conversational AI, revolutionizing communication and information processing.",
    },
    {
        techLink: "/energy-and-environment",
        images: "/EnergyAndEnvironment.jpg",
        title: "Energy and Environment",
        description: "AI revolutionizes Energy and Environment initiatives. It optimizes hydrogen and ammonia production, supercapacitor materials, and electric battery performance. In photovoltaics, AI guides solar cell design and automates maintenance. For nuclear waste, it optimizes handling and predicts risks. Directed Energy Tech benefits from precision targeting and threat detection. AI advances biofuels with optimal feedstock and production processes. In nuclear energy, it enhances reactor safety and efficiency.",
        techLinkEven: "/quantum",
        imagesEven: "/Quantum.jpg",
        titleEven: "Quantum",
        descriptionEven: "Quantum technologies, powered by AI, revolutionize diverse fields. Quantum Computing benefits from accelerated algorithm development and error correction. Post-Quantum Cryptography employs AI for algorithm discovery, simulation of quantum attacks, and automated vulnerability detection. Quantum Communications utilize AI for network optimization, protocol development, and security automation. Quantum Sensors benefit from AI-driven design, data analysis, and real-time adaptive control, enhancing their sensitivity and performance.",
    },
    {
        techLink: "/biotechnology-vaccine",
        images: "/Biotechnology.jpg",
        title: "Biotechnology, gene technology and vaccines",
        description: "In Biotechnology, AI plays a pivotal role. Synthetic Biology benefits from AI-guided design of innovative biological systems and automated genetic engineering workflows. Biological Manufacturing utilizes AI for predicting and optimizing bioproduction processes, ensuring early contamination detection, and automating quality control. Vaccines benefit from AI-accelerated development, pathogen prediction, and personalized regimens, revolutionizing medical countermeasure strategies.",
        techLinkEven: "/sensing-timing-navigation",
        imagesEven: "/SensingTiming.jpg",
        titleEven: "Sensing, Timing & Navigation",
        descriptionEven: "In Sensing, Timing & Navigation, AI transforms capabilities. Real-time data analysis identifies environmental changes, enabling timely alerts and predictive maintenance. AI optimizes signal quality, enhancing sensor sensitivity and precision in timing/navigation, vital for autonomous systems. Advanced image analysis aids object classification, material identification, and medical diagnostics. Sensor fusion integrates diverse data for enhanced situational awareness, environmental monitoring, and comprehensive medical diagnosis.",
    },
    {
        techLink: "/defence-space-robotic-transportation",
        images: "/DefenceSpaceRobotics.jpg",
        title: "Defence, space, robotics and transportation",
        description: "In Defense, Space, Robotics, and Transportation, AI innovations thrive. For Advanced Aircraft Engines, AI optimizes design, predicts maintenance, and ensures hypersonic flight control. Drones benefit from AI-driven autonomy, swarm intelligence, and human-robot collaboration. Small Satellites leverage AI for mission planning, data analysis, and autonomous constellation management. Autonomous Systems excel in perception, mission execution, and adaptive learning. Advanced Robotics, powered by AI, achieve dexterous manipulation and motion planning. In Space Launch Systems, AI optimizes trajectories, detects anomalies, and autonomously controls launches.",
    },
]

const Technologies = () => {
    return (
        <div className="pt-11 bg-black">
            <h3 className="text-center text-2xl font-bold pt-8 pb-4 text-[#fabf68] px-5">
                Technologies
            </h3>
            <div className="flex flex-wrap justify-around pb-4 lg:flex">
                {templates.map((item, index) => (
                    <div key={index} className="w-full sm:w-full md:w-[90%] lg:w-customWidth m-2 py-2 px-4 shadow-md background-div-color rounded-lg flex flex-col items-center">
                        <img src={item.imageTemplate} height={70} width={90} alt="Your Image" className="my-4" />
                        <p className="text-center font-bold text-2xl">{item.title}</p>
                        <p className="text-center font-bold text-lg mb-2">{item.subtitle}</p>
                        <p className="text-justify">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className=" border-[#18191B] border-4"></div>
            <div className=" background-div-color">
                <div className="mx-auto lg:w-3/4 sm:w-90 sm:p-4">
                    {technologiesContent.map((item, index) => (
                        <div className="flex flex-wrap mb-2 mt-8" key={index} >
                            <div className="mb-6 flex flex-wrap">
                                <div className="w-full lg:w-1/2 lg:mb-12 pr-0 lg:pr-4 rounded-md mx-4 mb-4 sm:mx-0">
                                    <img src={item.images} alt="Your Image" className="w-full h-auto rounded" />
                                </div>
                                <div className="w-full lg:w-1/2 lg:pl-4 mb-8 lg:mb-0  mx-4 sm:mx-0">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 lg:mb-4">{item.title}</h3>
                                        <p>
                                            {item.description}
                                        </p>
                                        <Link href={item.techLink} className="text-center">
                                            <button className="cursor-pointer text-[15px] font-sans rounded-md bg-[#FFDAA9] text-black shadow shadow-[#D89153] hover:bg-black border-0 mt-3 hover:text-white px-2 py-2">
                                                Read More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {item?.techLinkEven && (
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-1/2 lg:pr-4 mb-8 lg:mb-0  mx-4 sm:mx-0">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 lg:mb-4">{item.titleEven}</h3>
                                            <p>{item.descriptionEven}</p>
                                            <Link href={item.techLinkEven} className="text-center">
                                                <button className="cursor-pointer text-[15px] font-sans rounded-md bg-[#FFDAA9] text-black shadow shadow-[#D89153] hover:bg-black border-0 mt-3 hover:text-white px-2 py-2">
                                                    Read More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 mb-4 lg:mb-12 pr-0 lg:pl-4 rounded-md mx-4 sm:mx-0">
                                        <img src={item.imagesEven} alt="Your Image" className="w-full h-auto rounded" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Technologies