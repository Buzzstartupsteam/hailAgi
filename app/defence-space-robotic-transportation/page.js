
const defenseSpaceTitle = [
    {
        title: "Advanced Aircraft Engine (including Hypersonics)"
    },
    {
        title: "Drones, Swarming, and Collaborative Robots"
    },
    {
        title: "Small Satellites"
    },
    {
        title: "Autonomous Systems Operation Technology"
    },
    {
        title: "Advanced Robotics"
    },
    {
        title: "Space Launch System"
    }
]

const defenseSpace = [
    [
        {
            subTitle: "Optimizing Design and Modeling Performance",
            images: "/AircraftOptimizingDesign.png",
            description: "HailAgi is adept at analyzing extensive data on materials, thermodynamics, and airflow to optimize the design of hypersonic engines for peak efficiency and thrust."
        },
        {
            subTitle: "Predictive Maintenance and Anomaly Detection",
            images: "/AircraftPredictiveMaintenance.png",
            description: "Real-time monitoring of engine data by AI enables the prediction of potential failures and scheduling of preventive maintenance, ensuring safety and minimizing downtime."
        },
        {
            subTitle: "Hypersonic Flight Control and Autonomy",
            images: "/AircraftFlightControl.png",
            description: "AI-powered systems play a crucial role in navigating hypersonic vehicles through the challenging and rapidly changing conditions experienced at extreme speeds."
        }
    ],
    [
        {
            subTitle: "Autonomous Control and Decision-making",
            images: "/DroneDecisionMaking.png",
            description: " HailAgi facilitates autonomous navigation, obstacle avoidance, and real-time tactical decision-making for drones, enhancing their effectiveness in diverse missions."
        },
        {
            subTitle: "Swarm Intelligence and Coordination",
            images: "/DroneIntelligence.png",
            description: "AI algorithms coordinate the movements of multiple drones in a swarm, enabling collaborative efforts for tasks such as search and rescue or environmental monitoring."
        },
        {
            subTitle: "Human-Robot Collaboration",
            images: "/DroneHumanRobot.png",
            description: "HailAgi fosters seamless interaction between humans and robots, allowing them to work closely together for tasks that require a combination of human dexterity and robotic strength."
        }
    ],
    [
        {
            subTitle: "Mission Planning and Optimization",
            images: "/SatellitesMissionPlanning.png",
            description: "HailAgi analyzes orbital dynamics and environmental data to craft efficient mission plans for small satellites, maximizing their efficacy and operational lifespan."
        },
        {
            subTitle: "Data Analysis and Anomaly Detection",
            images: "/SatellitesDataAnalysis.png",
            description: "HailAgi processes vast amounts of real-time data collected by small satellites, identifying patterns and anomalies that might be overlooked by traditional methods, with applications in Earth observation, weather forecasting, and disaster response."
        },
        {
            subTitle: "Autonomous Constellation Management",
            images: "/SatellitesConstellationManagement.png",
            description: "AI-powered systems efficiently manage the deployment and operation of large constellations of small satellites, optimizing their communication and data collection capabilities."
        }
    ],
    [
        {
            subTitle: "Perception and Situational Awareness",
            images: "/AutonomousSituationalAwarness.png",
            description: "HailAgi processes data from diverse sensors to create a comprehensive understanding of the environment, empowering autonomous systems to navigate, avoid obstacles, and make informed decisions."
        },
        {
            subTitle: "Mission Planning and Execution",
            images: "/AutonomousMissionPlanning.png",
            description: "AI algorithms plan and execute complex missions for autonomous systems, considering environmental factors, resource constraints, and potential threats."
        },
        {
            subTitle: "Adaptive Behavior and Learning",
            images: "/AutonomousAIBheaviour.png",
            description: "HailAgi enables autonomous systems to learn from experience and adapt their behavior in real-time, enhancing their performance and decision-making capabilities over time."
        }
    ],
    [
        {
            subTitle: "Dexterous Manipulation and Human-like Interaction",
            images: "/RoboticsHumanLikeInteraction.png",
            description: "HailAgi empowers robots to interact with the environment in a natural and intuitive manner, executing precise and skillful object manipulation."
        },
        {
            subTitle: "Motion Planning and Control",
            images: "/RoboticsMotionPlanning.png",
            description: "AI algorithms optimize robot movements, ensuring efficient and safe task execution in complex environments."
        },
        {
            subTitle: "Learning and Adaptation",
            images: "/RoboticsLearningAdaptation.png",
            description: "HailAgi allows robots to learn from their interactions with the environment, adapting their behavior to become more versatile and efficient in real-world scenarios."
        }
    ],
    [
        {
            subTitle: "Trajectory Optimization and Guidance",
            images: "/SpaceTrajectoryOptimization.png",
            description: "HailAgi analyzes atmospheric and celestial conditions to design optimal launch trajectories and provides precise guidance during rocket ascent."
        },
        {
            subTitle: "Pre-launch Anomaly Detection and Risk Assessment",
            images: "/SpaceRiskAssessment.png",
            description: "AI analyzes complex datasets from spacecraft and launch systems to identify potential anomalies and predict risks, ensuring safe and successful launches."
        },
        {
            subTitle: "Autonomous Launch Control and Decision-making",
            images: "/SpaceLaunchControl.png",
            description: "AI-powered systems automate launch control processes and make real-time decisions based on changing conditions, maximizing launch efficiency and success rates."
        }
    ]
]

const DefenseSpaceRoboticTransportation = () => {
    return (
        <div className="pt-11 background-div-color">
            {defenseSpaceTitle.map((item, index) => (
                <div key={index}>
                    <h3 className="text-center text-2xl font-bold pt-8 pb-4 text-black px-5">
                        {item.title}
                    </h3>
                    <div className="flex flex-wrap justify-around pb-4 lg:flex">
                        {defenseSpace[index].map((item, index) => (
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

export default DefenseSpaceRoboticTransportation