

const Contact = () => {
    return (
        <div className="pt-11 background-div-color">
            <h3 className="text-center text-2xl font-bold pt-8 pb-2 text-black px-5">
                Contact
            </h3>
            <div className="mx-auto lg:w-3/4 sm:w-90 sm:p-4 mt-2">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 lg:pl-4 mb-8 lg:mb-0 flex items-center mx-4 sm:mx-0">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 lg:mb-4 text-custom-orange">Join Our Community</h3>
                            <p>
                                Become a part of our thriving AI community and stay up-to-date with the latest news,
                                research, and developments in the world of AI. Subscribe to our newsletter, follow us on
                                social media, or join our events and webinars to connect with like-minded individuals and
                                organizations.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 mb-4 lg:mb-12 pr-0 lg:pr-4 rounded-md mx-4 sm:mx-0">
                        <div>
                            <form className="w-90 bg-white p-8 rounded shadow">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                        Subject
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="subject"
                                        type="text"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                        Your Message
                                    </label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message" rows={5}
                                        placeholder="Your Message"
                                    />
                                </div>
                                <button className="cursor-pointer text-[15px] font-sans rounded-md bg-[#FFDAA9] text-black shadow shadow-[#D89153] hover:bg-black border-0 hover:text-white px-2 py-2">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact