import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import emailverification from "../../95247-email.json";
import Swal from 'sweetalert2';
import { AiFillMail } from 'react-icons/ai';


const Contact = () => {
    const form = useRef();

    const resetForm = () => {
        form.current.reset();
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_90o5lcl', 'template_u21t1zl', form.current, 'yQl0yPYykcdjTkUdf')
            .then((result) => {
                console.log(result.text);
                showSuccessToast();
            })
            .catch((error) => {
                console.log(error.text);
            });

        resetForm();
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:alhazsarkar5523@gmail.com';
    };

    const showSuccessToast = () => {
        Swal.fire({
            icon: 'success',
            title: 'Email Sent',
            text: 'Email sent successfully!',
        });
    };

    return (
        <div id="contact" className="md:mx-24 rounded-lg pt-5 pb-8" style={{ background: 'linear-gradient(90deg, #bdc3c7, #2c3e50)' }}>
            <h2 className="text-center text-3xl mb-4 mt-10 font-bold">
                <AiFillMail className="inline-block mr-2 text-red-400" />
                Get In Touch
            </h2>
            <div className="md:flex">
                <div className="md:w-1/2">
                    <div className="flex flex-col items-center gap-0">
                        <div className="mb-0 pb-0 h-1/2 w-96" style={{ padding: '0px' }}>
                            <Lottie animationData={emailverification} loop={true} />
                        </div>
                        <div className="mt-0 pt-0">
                            <p className="text-center text-xl font-semibold">Send email to:</p>
                            <a onClick={handleEmailClick} className="text-center text-lg text-blue-500 cursor-pointer">
                               alhazsarkar5523@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="p-6  md:w-1/2">
                    <div className="mb-4">
                        <label htmlFor="user_name" className="text-white">
                            Name
                        </label>
                        <input type="text" id="user_name" name="from_name" className="input input-bordered w-full bg-slate-500 mt-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user_email" className="text-white">
                            Email
                        </label>
                        <input type="email" id="user_email" name="from_email" className="input input-bordered w-full bg-slate-500 mt-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="text-white">
                            Subject
                        </label>
                        <input type="text" id="subject" name="subject" className="input input-bordered w-full bg-slate-500 mt-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-white">
                            Message
                        </label>
                        <textarea id="message" name="message" className="textarea textarea-bordered w-full h-32 bg-slate-500 mt-2" required></textarea>
                    </div>
                    <div className="send-container">
                        <input type="submit" value="Send" className="btn btn-error btn-md hover:bg-gray-500 w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;