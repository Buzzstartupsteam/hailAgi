

const sensingTimingTitle = [
    {
        title: "Data Analysis and Anomaly Detection"
    },
    {
        title: "Signal Optimization and Noise Reduction"
    },
    {
        title: "Advanced Image and Spectral Analysis"
    },
    {
        title: "Sensor Fusion and Multi-modal Data Integration"
    }
]

const sensingTiming = [
    [
        {
            subTitle: "Early Detection of Environmental Changes",
            images: "/SensingEarlyDetection.png",
            description: "Timely alerts for pollution events, natural disasters, or infrastructure issues can be issued."
        },
        {
            subTitle: "Predictive Maintenance",
            images: "/SensingPredictiveMaintenance.png",
            description: "Through trend analysis of sensor data, AI predicts potential equipment failures, allowing for scheduled preventive maintenance, thereby reducing downtime and costs."
        },
        {
            subTitle: "Efficient and Accurate Data Analysis",
            images: "/SensingAccurateDataAnalysis.png",
            description: "AI's capacity to interpret complex data patterns enhances efficiency, saving time, and improving measurement accuracy."
        }
    ],
    [
        {
            subTitle: "Greater Sensitivity and Accuracy",
            images: "/SensingGreaterAccuracy.png",
            description: "Even faint signals can be detected and accurately interpreted, enhancing overall sensor performance."
        },
        {
            subTitle: "Precision in Timing and Navigation",
            images: "/SensingTimingAndNavigation.png",
            description: "More accurate sensor data contributes to improved timing and navigation capabilities, particularly beneficial for applications like autonomous vehicles and robots."
        },
        {
            subTitle: "Real-time Adaptive Calibration",
            images: "/SensingAdaptiveCalibration.png",
            description: "AI-powered systems automatically adjust sensor calibration based on environmental changes, ensuring optimal performance under varying conditions."
        }
    ],
    [
        {
            subTitle: "Object Detection and Classification",
            images: "/SensingObjectDetection.png",
            description: "AI accurately identifies and classifies objects in images, facilitating specific target identification or environmental monitoring."
        },
        {
            subTitle: "Material Identification and Chemical Analysis",
            images: "/SensingChemicalAnalysis.png",
            description: " Through spectral analysis, AI identifies the composition and properties of materials, with applications in environmental monitoring and food safety."
        },
        {
            subTitle: "Medical Diagnostics and Disease Detection",
            images: "/SensingDiseaseDetection.png",
            description: "AI-driven analysis of medical images captured by photonic sensors revolutionizes diagnostics, enabling earlier and more accurate disease detection."
        }
    ],
    [
        {
            subTitle: "Enhanced Situational Awareness for Autonomous Systems",
            images: "/SensingAwarness.png",
            description: "Data fusion from multiple sensors enables precise navigation and obstacle avoidance in complex environments."
        },
        {
            subTitle: "Accurate Environmental Monitoring",
            images: "/SensingEnvironmentalMonitor.png",
            description: " Integration of data from air, water, and soil sensors with meteorological data offers a comprehensive view of environmental changes and potential threats."
        },
        {
            subTitle: "Improved Medical Diagnosis and Treatment",
            images: "/SensingMedicalTreatment.png",
            description: "Integrating data from various sources, such as blood tests, scans, and vital signs, enables a complete understanding of a patient's health, facilitating personalized treatment plans."
        }
    ]
]

const SensingTimingNavigation = () => {
    return (
        <div className="pt-11 background-div-color">
            {sensingTimingTitle.map((item, index) => (
                <div key={index}>
                    <h3 className="text-center text-2xl font-bold pt-8 pb-4 text-black px-5">
                        {item.title}
                    </h3>
                    <div className="flex flex-wrap justify-around pb-4 lg:flex">
                        {sensingTiming[index].map((item, index) => (
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

export default SensingTimingNavigation