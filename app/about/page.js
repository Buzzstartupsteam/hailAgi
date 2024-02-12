
const aboutusContent = [
  {
      images: "/AboutusOurJourney.jpg",
      title: "Our Journey",
      description: "Founded in 2023, HailAGI has its roots in the collective passion of a team comprising AI researchers, engineers, and visionary minds. Drawing inspiration from the groundbreaking contributions of Hail Labs and other prominent AI research organizations, our mission at HailAGI is to fully unlock the potential of artificial intelligence. Presently, HailAGI stands as a renowned hub for AI research and development, offering cutting-edge solutions and services to clients worldwide.",
      imagesEven: "/AboutusAIVision.jpeg",
      titleEven: "Our Vision",
      descriptionEven: "At HailAGI, we envisage a future where artificial intelligence seamlessly integrates into the fabric of everyday life, enhancing human capabilities and catalyzing transformative advancements across industries. Our overarching objective is to render AI accessible, dependable, and ethically grounded, thereby nurturing innovation and instigating positive global change.",
  },
  {
      images: "/AboutusInnovativeExploration.jpg",
      title: "Innovative Exploration",
      description: "We are steadfast in our commitment to delve into uncharted realms of AI, consistently pushing the limits of what is achievable to develop innovative solutions that address real world challenges.",
      imagesEven: "/AboutusStrategic Collaboration.jpg",
      titleEven: "Strategic Collaboration",
      descriptionEven: "Recognizing the pivotal role of collaboration in achieving success, we actively seek partnerships with academic institutions, research organizations, and industry leaders. By fostering these alliances, we aim to propel progress within the dynamic field of AI.",
  },
  {
      images: "/AboutusEthicalDevelopment.jpg",
      title: "Ethical Development Focus",
      description: "Ethical considerations lie at the core of our research and development endeavors. We are dedicated to prioritizing transparency, impartiality, and the preservation of individual privacy and security in the creation of AI solutions.",
      imagesEven: "/AboutusEducationEmpowerment.png",
      titleEven: "Education for Empowerment",
      descriptionEven: "Committed to cultivating AI literacy and skills, we provide comprehensive educational resources, workshops, and training programs. Our aim is to empower individuals and organizations, equipping them with the knowledge and skills needed to thrive in an AI-driven world",
  },
  {
      images: "/AboutusOrganizationCulture.png",
      title: "Our Organizational Culture",
      description: "Within HailAGI, we have nurtured a culture characterized by curiosity, innovation, and collaboration. Embracing diversity and inclusivity, we cultivate an environment where team members engage in mutual learning, professional growth, and meaningful contributions to the dynamic realm of AI.",
  },

]

const About = () => {
  return (
    <div className="pt-11 background-div-color">
      <h3 className="text-center text-2xl font-bold pt-8 pb-2 text-black px-5">
        Diving into Tomorrow's AI Landscape: A Journey with HailAGI to Unravel the Future
      </h3>
      <p className="text-center text-xl font-bold text-black px-5">
        Explore Our Narrative, Vision, and Dedication to Advancing Artificial Intelligence
      </p>
      <div className=" background-div-color mt-4">
        <div className="mx-auto lg:w-3/4 sm:w-90 sm:p-4">
          {aboutusContent.map((item, index) => (
            <div className="flex flex-wrap mb-2" key={index} >
              <div className="mb-2 flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:mb-12 pr-0 lg:pr-4 rounded-md mx-4 mb-4 sm:mx-0">
                  <img src={item.images} alt="Your Image" className="w-full h-auto rounded" />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-4 mb-8 lg:mb-0  mx-4 sm:mx-0">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 lg:mb-4">{item.title}</h3>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              {item?.titleEven && (
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 lg:pr-4 mb-2 lg:mb-0  mx-4 sm:mx-0">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 lg:mb-4">{item.titleEven}</h3>
                      <p>{item.descriptionEven}</p>
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
};

export default About;
