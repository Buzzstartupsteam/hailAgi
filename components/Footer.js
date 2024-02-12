"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const SocialMediaIcons = () => {
    return (
        <div className="flex mt-3">
            <div className="mr-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#e4405f" />
            </div>
            <div className="mr-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877f2" />
            </div>
            <div>
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0e76a8" />
            </div>
            <div className="ml-2">
                <FontAwesomeIcon icon={faTwitter} size="2x" color="#1da1f2" />
            </div>
        </div>
    );
};

export default function DefaultFooter() {
    return (
        <div className='bg-black flex items-center justify-center mt-0'>
            <div className="w-full lg:w-4/5 md:w-9/10 text-white p-4">
                <div className="flex flex-wrap justify-between mt-6">
                    <div className="w-full md:w-1/4 lg:w-1/4 mb-4 md:mb-0">
                        <span className="self-center whitespace-nowrap text-3xl font-semibold text-[#fabf68]" href="/">
                            HailAgi
                        </span>
                        <p className="py-4 text-sm">HailAgi is a cutting-edge technology company specializing in Hypersonic, 
                        Hybrid and  Holistic solutions. Harnessing the power of AI in S5 (Signal Processing), Z5 (Platform-based 
                        Technologies), and O5 (Optimization of Hardware and Software), HailAgi excels in sectors ranging from 
                        hypersonic engines to biotechnology. The company pioneers advancements for efficiency, autonomy, and innovation.
                        </p>
                    </div>
                    <div className="w-full md:w-1/6 lg:w-1/6 mb-4 md:mb-0">
                        <p className="font-bold">Information</p>
                        <p className="text-sm pt-2">AI World</p>
                    </div>
                    <div className="w-full md:w-1/6 lg:w-1/6 mb-4 md:mb-0">
                        <p className="font-bold">Site Pages</p>
                        <Link href="https://platform.hailagi.com/welcome/login?callbackUrl=https%3A%2F%2Fplatform.hailagi.com"><p className="text-sm pt-2">Login</p></Link>
                        <Link href="https://platform.hailagi.com/welcome/register"><p className="text-sm pt-2">Register</p></Link>
                    </div>
                    <div className="w-full md:w-1/6 lg:w-1/6 mb-4 md:mb-0">
                        <p className="font-bold">Company</p>
                        <Link href="/terms-and-conditions"><p className="text-sm pt-2 cursor-pointer">Terms & Conditions</p></Link>
                        <Link href="/privacy-policy"><p className="text-sm pt-2">Privacy policy</p></Link>
                    </div>
                    <div className="w-full md:w-1/4 lg:w-1/5 mb-4 md:mb-0">
                        <p className="font-bold">Social Media</p>
                        <p className="text-sm pt-2">Follow up on social media to find out the latest updates.</p>
                        <SocialMediaIcons />
                        <p className="font-bold mt-3">Get Started Today</p>
                        <Link href="https://platform.hailagi.com/welcome/register">
                            <button className="cursor-pointer text-[15px] font-sans rounded-xl bg-[#FFDAA9] text-black border shadow shadow-[#D89153] hover:bg-[#ffa227] px-2 py-2">
                                Getting Started
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="border-b my-4"></div>

                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-4/5 mb-4 md:mb-0 md:mr-4">&copy; 2023 Your Company <span className="text-custom-orange"> HailAGI</span> All rights reserved</div>
                    <div className="w-full md:w-1/4"><Link href="/privacy-policy"><span className=" text-custom-orange">Privacy Policy</span></Link> | <Link  href="/terms-and-conditions"><span className="text-custom-orange" href="/terms-and-conditions">Terms & Conditions</span></Link></div>
                </div>
            </div>
        </div>
    )
}