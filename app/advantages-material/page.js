

const advMaterialTitle = [
    {
        title: "Nanoscale Materials and Manufacturing"
    },
    {
        title: "Coating"
    },
    {
        title: "Smart Materials"
    },
    {
        title: "Advanced Composite Materials"
    },
    {
        title: "Novel Metamaterials"
    },
    {
        title: "Advanced Explosive and Energetic Materials"
    },
    {
        title: "Critical Minerals Extraction and Processing"
    },
    {
        title: "Advanced Magnets and Superconductors"
    },
    {
        title: "Advanced Protection"
    },
    {
        title: "Continuous Cashflow Chemical Synthesis"
    },
    {
        title: "Additive Manufacturing (3D Printing)"
    }
]

const advMaterial = [
    [
        {
            subTitle: "Materials Discovery",
            images: "/MaterialDiscovery.png",
            description: "HailAgi algorithms have the capability to analyze extensive datasets comprising scientific literature and experimental data to pinpoint promising new materials possessing desired properties."
        },
        {
            subTitle: "Simulation and Design",
            images: "/SimulationAndDesign.png",
            description: "AI can simulate the atomic-level behavior of nanomaterials, facilitating the design of materials tailored for specific applications."
        },
        {
            subTitle: "Automated Synthesis and Characterization",
            images: "/AutomatedSynthesisAndCharacterization.png",
            description: "HailAgi-powered robots can automate the synthesis and characterization processes of nanomaterials, thereby expediting research and development."
        }
    ],
    [
        {
            subTitle: "Optimized Coating Design ",
            images: "/OptimizedCoatingDesign.png",
            description: " HailAgi can evaluate data related to coating performance and environmental conditions, providing recommendations for optimal coating materials and application processes."
        },
        {
            subTitle: "Defect Detection and Quality Control",
            images: "/DefectDetectionandQualityControl.png",
            description: "Vision systems driven by AI can automatically identify defects in coatings, enhancing quality control and minimizing waste."
        },
        {
            subTitle: "Predictive Maintenance",
            images: "/PredictiveMaintenance.png",
            description: "AI can analyze sensor data from coated surfaces, predicting potential failures and scheduling preventive maintenance to minimize downtime and costs."
        }
    ],
    [
        {
            subTitle: "Materials Design and Development",
            images: "/MaterialsDesign.png",
            description: " HailAgi can contribute to the design of smart materials with specific functionalities, such as self-healing or energy harvesting."
        },
        {
            subTitle: "Real-time Monitoring and Control",
            images: "/Real-timeMonitoring.png",
            description: "AI can analyze data from sensors embedded in smart materials, enabling real-time monitoring and adaptive adjustments."
        },
        {
            subTitle: "Autonomous Systems",
            images: "/AutonomousSystems.png",
            description: "HailAgi can empower smart materials to make autonomous decisions and take actions, fostering the development of intelligent and adaptive materials."
        }
    ],
    [
        {
            subTitle: "Optimized Design and Manufacturing",
            images: "/AdvanceCompositeOptimizedDesign.png",
            description: " HailAgi has the capacity to optimize the design of composite materials to achieve desired properties with minimal weight and cost."
        },
        {
            subTitle: "Defect Detection and Non-destructive Testing",
            images: "/AdvanceCompositeDefectDetection.png",
            description: "HailAgi can analyze data from diverse sensors to detect defects in composite materials without causing damage."
        },
        {
            subTitle: "Predictive Maintenance",
            images: "/AdvanceCompositePredictiveMaintenance.png",
            description: "AI can predict the potential failure of composite materials based on sensor data and usage patterns, facilitating preventive maintenance and extending lifespan."
        }
    ],
    [
        {
            subTitle: "Materials Discovery and Design",
            images: "/MaterialsDiscovery.png",
            description: " HailAgi can be utilized for designing metamaterials with specific electromagnetic properties, such as negative refractive index or invisibility."
        },
        {
            subTitle: "Simulation and Optimization",
            images: "/SimulationAndOptimization.png",
            description: "AI can simulate the behavior of metamaterials and optimize their design for particular applications."
        },
        {
            subTitle: "Fabrication and Characterization",
            images: "/FabricationAndCharacterization.png",
            description: "HailAgi can assist in the fabrication and characterization of intricate metamaterials, hastening their development and commercialization."
        }
    ],
    [
        {
            subTitle: "Materials Design and Safety",
            images: "/AdvanceExplosiveMaterialsDesign.png",
            description: " AI can analyze extensive datasets to predict the properties and behavior of energetic materials, contributing to the design of safer and more efficient explosives."
        },
        {
            subTitle: "Process Optimization and Simulation",
            images: "/AdvanceExplosiveProcessOptimization.png",
            description: "HailAgi can simulate and optimize the manufacturing processes of energetic materials, minimizing risks and enhancing control over their properties."
        },
        {
            subTitle: "Predictive Testing and Quality Control",
            images: "/AdvanceExplosivePredictiveTesting.png",
            description: "AI can analyze data from sensors and imaging techniques to predict the performance and potential hazards of energetic materials, ensuring quality control and safety."
        }
    ],
    [
        {
            subTitle: "Mineral Exploration and Discovery",
            images: "/criticalMineralMineralExploration.png",
            description: " HailAgi can analyze geological data and satellite imagery to pinpoint promising areas for mineral exploration, optimizing resource discovery and extraction efforts."
        },
        {
            subTitle: "Process Optimization and Efficiency",
            images: "/criticalMineralProcessOptimization.png",
            description: "HailAgi can analyze data from mining and processing operations to optimize extraction and purification processes, reducing environmental impact and increasing resource yield."
        },
        {
            subTitle: "Autonomous Mining and Robotics",
            images: "/criticalMineralAutonomousMining.png",
            description: "AI-powered robots can execute hazardous and repetitive tasks in mining operations, enhancing safety and efficiency."
        }
    ],
    [
        {
            subTitle: "Materials Discovery and Design",
            images: "/AdvanceMagnetMaterialsDiscovery.png",
            description: "HailAgi can analyze data on material properties, predicting potential candidates for next-generation magnets and superconductors, expediting their development."
        },
        {
            subTitle: "Simulation and Optimization",
            images: "/AdvanceMagnetSimulationAndOptimization.png",
            description: "AI can simulate the behavior of magnetic and superconducting materials under various conditions, guiding the design of materials with optimized properties for specific applications."
        },
        {
            subTitle: "Automated Fabrication and Characterization",
            images: "/AdvanceMagnetAutomatedFabrication.png",
            description: "HailAgi can control and optimize the delicate fabrication and characterization processes of these materials, ensuring high quality and performance."
        }
    ],
    [
        {
            subTitle: "Threat Detection and Analysis",
            images: "/advanceProtectionThreatDetection.png",
            description: "HailAgi can analyze data from sensors and surveillance systems to detect and identify potential threats, such as ballistic attacks, chemical hazards, or biological agents."
        },
        {
            subTitle: "Adaptive Protection Systems",
            images: "/advanceProtectionAdaptiveProtection.png",
            description: "AI can control and adapt advanced protective materials and systems in real-time, providing optimal protection against various threats."
        },
        {
            subTitle: "Predictive Maintenance and Risk Assessment",
            images: "/advanceProtectionRiskAssessment.png",
            description: "HailAgi can analyze data from protective systems to predict potential failures and schedule preventive maintenance, ensuring their effectiveness and longevity."
        }
    ],
    [
        {
            subTitle: "Reaction Optimization and Design",
            images: "/cashFlowReactionOptimization.png",
            description: "HailAgi can analyze reaction data, predicting optimal reaction conditions to maximize yield and minimize waste in chemical synthesis processes."
        },
        {
            subTitle: "Real-time Monitoring and Control",
            images: "/cashFlowRealtimeMonitoring.png",
            description: "AI can monitor and control chemical reactions in real-time, adjusting parameters for optimal efficiency and product quality."
        },
        {
            subTitle: "Autonomous Synthesis and Robotics",
            images: "/cashFlowAutonomousSynthesis.png",
            description: "HailAgi-powered robots can handle hazardous and delicate tasks in chemical synthesis, improving safety and reducing human error."
        }
    ],
    [
        {
            subTitle: "Design Optimization and Support Generation",
            images: "/additiveDesignOptimization.png",
            description: "HailAgi can analyze and optimize 3D models for printability, reducing material waste and ensuring structural integrity."
        },
        {
            subTitle: "Process Parameter Optimization",
            images: "/additiveProcessParameter.png",
            description: "AI can analyze data from printing processes to optimize parameters like printing speed, temperature, and layer thickness, leading to improved print quality and efficiency."
        },
        {
            subTitle: "In-situ Defect Detection and Correction",
            images: "/additiveIn-situDefect.png",
            description: "HailAgi can analyze sensor data during printing to detect and correct defects in real-time, ensuring high-quality printed parts."
        }
    ],
]

const AdvantagesMaterial = () => {
    return (
        <div className="pt-11 background-div-color">
            {advMaterialTitle.map((item, index) => (
                <div key={index}>
                    <h3 className="text-center text-2xl font-bold pt-8 pb-4 text-black px-5">
                        {item.title}
                    </h3>
                    <div className="flex flex-wrap justify-around pb-4 lg:flex">
                        {advMaterial[index].map((item, index) => (
                            <div key={index} className="w-full sm:w-full md:w-[90%] lg:w-customWidth m-2 py-2 px-4 shadow-md background-div-color rounded-lg flex flex-col items-center">
                                <img src={item.images} height={70} width={90} alt="Your Image" className="my-4" />
                                <p className="text-center font-bold text-lg mb-3">{item.subTitle}</p>
                                <p className="text-justify">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className=" border-[#18191B] border-4"></div>
                </div>
            ))}
        </div>
    )
}

export default AdvantagesMaterial