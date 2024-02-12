
const energyAndEnvTitle = [
    {
        title: "Hydrogen and Ammonia for Power"
    },
    {
        title: "Supercapacitors"
    },
    {
        title: "Electric Batteries"
    },
    {
        title: "Photovoltaics"
    },
    {
        title: "Nuclear Waste Management and Recycling"
    },
    {
        title: "Directed Energy Technologies"
    },
    {
        title: "Biofuels"
    },
    {
        title: "Nuclear Energy"
    }
]

const energyAndEnv = [
    [
        {
            subTitle: "Optimized Production and Storage",
            images: "/OptimizedProduction.png",
            description: "HailAgi can enhance the efficiency of hydrogen and ammonia production processes, reduce energy consumption, and devise efficient storage solutions for dependable energy deployment."
        },
        {
            subTitle: "Demand Forecasting and Grid Integration",
            images: "/DemandForecasting.png",
            description: "AI can forecast energy demand and seamlessly integrate hydrogen and ammonia sources into existing electricity grids, ensuring a smooth and efficient power supply."
        },
        {
            subTitle: "Maintenance and Safety Assurance",
            images: "/MaintenanceAndSafety.png",
            description: "HailAgi can monitor hydrogen and ammonia infrastructure for potential anomalies, predict equipment failures, and facilitate proactive maintenance and safety measures."
        }
    ],
    [
        {
            subTitle: "Materials Design and Development",
            images: "/SuparMaterialsDesign.png",
            description: " HailAgi can expedite the discovery and design of new electrode materials with higher capacitance and longer lifespan, contributing to the development of high-performance supercapacitors."
        },
        {
            subTitle: "Manufacturing Optimization and Quality Control",
            images: "/ManufacturingOptimization.png",
            description: "HailAgi can optimize supercapacitor manufacturing processes, identify defects in real-time, and ensure consistent quality control for large-scale production."
        },
        {
            subTitle: "Intelligent Energy Management Systems",
            images: "/IntelligentEnergySystem.png",
            description: "AI-powered systems can efficiently manage supercapacitors in microgrids or hybrid energy systems, optimizing energy flow and maximizing overall efficiency."
        }
    ],
    [
        {
            subTitle: "New Battery Material Discovery and Design",
            images: "/NewBatteryMaterial.png",
            description: " HailAgi can analyze extensive datasets of material properties to predict promising new materials for high-performance and sustainable batteries."
        },
        {
            subTitle: "Battery Modeling and Lifetime Prediction",
            images: "/BatteryModeling.png",
            description: "AI can create accurate models to predict battery performance, degradation, and remaining lifespan, optimizing charging strategies and minimizing battery waste."
        },
        {
            subTitle: "Intelligent Charging and Grid Integration",
            images: "/IntelligentCharging.png",
            description: "HailAgi can manage charging infrastructure and seamlessly integrate batteries into power grids, ensuring optimal charging, minimizing grid strain, and maximizing renewable energy utilization."
        }
    ],
    [
        {
            subTitle: "Solar Cell Design and Optimization",
            images: "/SolarCellDesign.png",
            description: " HailAgi can guide the design of more efficient solar cells with higher energy conversion rates and tailored properties for specific applications."
        },
        {
            subTitle: "Solar Energy Forecasting and Grid Integration",
            images: "/SolarEnergyForecasting.png",
            description: "AI can predict solar energy generation based on weather patterns and optimize its integration into power grids for stable and reliable energy supply."
        },
        {
            subTitle: "Automated Solar Panel Cleaning and Maintenance",
            images: "/CleaningAndMaintenance.png",
            description: "AI-powered robots can autonomously clean and maintain solar panels, enhancing efficiency and reducing maintenance costs."
        }
    ],
    [
        {
            subTitle: "AI-Powered Optimization of Waste Handling",
            images: "/AIPoweredWasteHandling.png",
            description: "HailAgi can analyze data on radiation levels, container integrity, and environmental factors to design optimal routes and transportation methods for nuclear waste, minimizing risks and environmental impact."
        },
        {
            subTitle: "Predictive Risk Assessment and Anomaly Detection",
            images: "/PredectiveRiskAssessment.png",
            description: "AI can analyze sensor data and historical records to predict potential leaks, equipment failures, or other risks from waste storage sites, facilitating proactive maintenance and preventative measures."
        },
        {
            subTitle: "Advancements in Nuclear Waste Recycling",
            images: "/NuclearWasteRecycling.png",
            description: "HailAgi can assist in analyzing the composition and feasibility of different waste types for recycling, guiding the development of efficient and safe technologies for extracting reusable materials like uranium and plutonium."
        }
    ],
    [
        {
            subTitle: "Precision Targeting and Beam Optimization",
            images: "/BeamOptimization.png",
            description: "HailAgi can analyze target characteristics and environmental conditions to optimize laser beams for focused energy delivery, increasing efficiency and reducing collateral damage in applications like space-based solar power or advanced manufacturing."
        },
        {
            subTitle: "Autonomous Control and Real-Time Feedback",
            images: "/RealTimeFeedback.png",
            description: "AI-powered systems can adjust beam parameters and targeting coordinates in real-time based on sensor feedback, ensuring precision and safety during directed energy operations."
        },
        {
            subTitle: "Threat Detection and Defense Systems",
            images: "/DirectedEnergyThreatDetection.png",
            description: "HailAgi can analyze data from multiple sensor sources to detect and track potential threats like drones or missiles, enabling rapid and targeted deployment of directed energy weapons for defense."
        }
    ],
    [
        {
            subTitle: "AI-Driven Biofuel Feedstock Optimization",
            images: "/BioFuelFeedstock.png",
            description: " HailAgi can analyze data on plant growth, soil conditions, and climate to identify optimal crops and locations for biofuel production, maximizing yield and minimizing environmental impact."
        },
        {
            subTitle: "Bioconversion Process Optimization",
            images: "/BioFuelProcesOptimization.png",
            description: "AI can analyze and optimize biofuel production processes like fermentation or digestion, increasing efficiency, reducing waste, and lowering production costs."
        },
        {
            subTitle: "Development of Next-Generation Biofuels",
            images: "/NextGenerationBioFuel.png",
            description: "HailAgi can assist in the design and development of advanced biofuels like algal or cellulosic ethanol, paving the way for more sustainable and efficient alternatives to fossil fuels."
        }
    ],
    [
        {
            subTitle: "AI-Powered Reactor Safety Improvements",
            images: "/NuclearEnergySafetyImptovement.png",
            description: "HailAgi can analyze operational data and reactor physics simulations to predict potential anomalies and malfunctions, enabling proactive interventions and ensuring safer reactor operation."
        },
        {
            subTitle: "Fuel Optimization and Efficiency Maximization",
            images: "/NuclearEnergyFuelOptimization.png",
            description: "AI can optimize fuel usage and reactor operation parameters to maximize energy output and minimize waste generation, improving the overall efficiency and sustainability of nuclear power plants."
        },
        {
            subTitle: "Advanced Design and Maintenance Strategies",
            images: "/NuclearEnergyDesignAndMaintenance.png",
            description: "HailAgi can assist in the design of next-generation reactor technologies and develop intelligent maintenance systems for existing plants, extending their lifespan and ensuring reliable energy production."
        }
    ]
]

const EnergyAndEnvironment = () => {
    return (
        <div className="pt-11 background-div-color">
            {energyAndEnvTitle.map((item, index) => (
                <div key={index}>
                    <h3 className="text-center text-2xl font-bold pt-8 pb-4 text-black px-5">
                        {item.title}
                    </h3>
                    <div className="flex flex-wrap justify-around pb-4 lg:flex">
                        {energyAndEnv[index].map((item, index) => (
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

export default EnergyAndEnvironment