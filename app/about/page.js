import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="min-h-screen bg-[#18191B] text-white">
      <section className="py-3 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">Our Offices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {/* Div with left-side content and right-side image */}
          <div className="bg-orange-200 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Left-side Content
            </h3>
            <p className="text-lg text-black">
              This is the content on the left side.
            </p>
          </div>
          <div>
            <Image
              src="/path/to/your/image.jpg"
              alt="Right-side Image"
              className="h-64 object-cover rounded-lg shadow-md"
              width={600} // Set the appropriate width here (in pixels)
              height={400} // Set the appropriate height here (in pixels)
            />
          </div>

          {/* Div with right-side image and left-side content */}
          <div>
            <Image
              src="/path/to/your/image.jpg"
              alt="Left-side Image"
              className="h-64 w-full object-cover rounded-lg shadow-md"
              width={600} // Set the appropriate width here (in pixels)
              height={400} // Set the appropriate height here (in pixels)
            />
          </div>
          <div className="bg-orange-200 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Right-side Content
            </h3>
            <p className="text-lg text-black">
              This is the content on the right side.
            </p>
          </div>
        </div>
      </section>
      <main className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="border border-white p-8 rounded-lg shadow-2xl bg-orange-200 text-black px-10 w-fit">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. In vel mauris consequat, volutpat ex in, vestibulum ex.
            Nunc eget eleifend mauris, a facilisis enim. Suspendisse vel est vel
            elit efficitur scelerisque. Fusce consectetur justo sit amet
            ultrices faucibus. Vivamus venenatis, elit in efficitur facilisis,
            nulla augue iaculis dui, vel tincidunt neque risus eget purus.
          </p>

          <button
            type="button"
            className="rounded-lg border border-black bg-black hover:bg-slate-500 py-2 px-2 text-white "
          >
            <Link href="/contact-us">Contact Us</Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default About;
