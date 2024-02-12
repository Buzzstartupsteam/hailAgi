

const biotechnologyTitle = [
    {
        title: "Synthetic Biology"
    },
    {
        title: "Biological Manufacturing"
    },
    {
        title: "Vaccines and Medical Countermeasures"
    }
]

const biotechnologyVaccine = [
    [
        {
            subTitle: "Designing Innovative Biological Systems",
            images: "/BiologicalSystem.png",
            description: "HailAgi, by analyzing extensive datasets of biological components and interactions, can predict the behavior and potential of engineered organisms, guiding the design of novel biological systems with specific desired functions."
        },
        {
            subTitle: "Automation of Genetic Engineering Workflows",
            images: "/GeneticEngineering.png",
            description: "AI has the capacity to automate various steps in the design and construction of synthetic DNA circuits, expediting the development and testing of new biological systems."
        },
        {
            subTitle: "Optimizing Cellular Processes",
            images: "/CellularProcess.png",
            description: "HailAgi, through the analysis of cellular data, can pinpoint inefficiencies and bottlenecks in metabolic pathways, enabling targeted modifications to optimize enzyme activity and product yield in diverse bioproduction processes."
        }
    ],
    [
        {
            subTitle: "Prediction and Optimization of Bioproduction Processes",
            images: "/BiologicalPredictionOfBioproduction.png",
            description: "HailAgi, leveraging historical data and real-time sensor readings, can predict and optimize bioreactor conditions, maximizing product yield, minimizing waste, and ensuring precise process control."
        },
        {
            subTitle: "Early Detection and Prevention of Contamination",
            images: "/BiologicalEarlyDetection.png",
            description: "AI, analyzing data from fermentation monitoring systems, can detect early signs of contamination, triggering prompt preventive measures to minimize product loss and maintain bioreactor sterility."
        },
        {
            subTitle: "Automated Quality Control and Anomaly Detection",
            images: "/BiologicalQualityControl.png",
            description: "HailAgi-powered systems, continuously monitoring and analyzing product quality during bioproduction, can automatically identify anomalous samples, ensuring consistent adherence to product quality standards."
        }
    ],
    [
        {
            subTitle: "Accelerating Vaccine Development",
            images: "/VaccineDevelopment.png",
            description: " HailAgi, through the analysis of pathogen genomic data, can identify potential vaccine targets and design effective candidates, significantly reducing the time required for developing new vaccines during outbreaks."
        },
        {
            subTitle: "Prediction and Tracking of Emerging Pathogens",
            images: "/EmergingPathogen.png",
            description: "AI, analyzing global surveillance data and genetic sequences, can predict the emergence of new pathogens and track their spread, facilitating early intervention and targeted public health measures."
        },
        {
            subTitle: "Personalizing Vaccine Regimens",
            images: "/VaccineRegime.png",
            description: "HailAgi, by analyzing an individual's genetic and immune system data, can predict their vaccine response, allowing for the personalization of vaccination schedules to optimize efficacy and minimize potential side effects."
        }
    ]
]

const BiotechnologyVaccines = () => {
    return (
        <div className="pt-11 background-div-color">
            {biotechnologyTitle.map((item, index) => (
                <div key={index}>
                    <h3 className="text-center text-2xl font-bold pt-8 pb-4 text-black px-5">
                        {item.title}
                    </h3>
                    <div className="flex flex-wrap justify-around pb-4 lg:flex">
                        {biotechnologyVaccine[index].map((item, index) => (
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

export default BiotechnologyVaccines