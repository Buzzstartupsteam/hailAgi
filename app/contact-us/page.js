"use client";
import { useState } from "react";
import Head from "next/head";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log("Form data:", data);
    // Add your logic to send the form data as an email here.

    // Simulating form submission success with a delay of 2 seconds
    setTimeout(() => {
      setFormSubmitted(true);
      toast.success("Thank you! Your message has been sent successfully.");
      e.target.reset(); // Reset the form fields
      reset(); // Reset the react-hook-form state
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#18191B] text-white">
      <main className="pb-3 flex justify-center items-center text-[#DCC5B2] pt-20">
        <div className="self-center text-center rounded-lg shadow-2xl p-3 px-10 w-fit">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            Have questions or need assistance? Fill out the form below, and we
            will get back to you as soon as possible.
          </p>
        </div>
      </main>
      <section className="py-3 px-4 sm:px-6 lg:px-2 flex justify-center text-center ">
        <>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfAcmj_fIc16_-diRy8UOZCFhAdV-tjo-k7RmsFTlL83Q63ng/viewform?embedded=true"
            width="640"
            height="821"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </>
      </section>

      {/* Toast Container for Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactUs;
