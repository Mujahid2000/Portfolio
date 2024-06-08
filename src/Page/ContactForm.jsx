
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';

const ContactForm = () => {
  const image = '../assets/mail.png'
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get('first-name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    emailjs
      .sendForm('service_o37w5l6', 'template_5bto0xr', form.current, 'UBDZKaLhJspKQjnPv')
      .then((result) => {
        console.log(result.text);

        Swal.fire({
          icon: 'success',
          title: 'Email Sent!',
          text: 'Your email has been sent successfully.',
        });
      })
      .catch((error) => {
        console.log(error.text);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error sending the email. Please try again later.',
        });
      });
  };

  return (
    <div className="container max-w-[1440px] mx-auto px-4 ">
          <h2 className="text-4xl font-extrabold mb-8 text-center ">Contact</h2>
      <div className="flex flex-col-reverse lg:flex-row justify-evenly py-16 rounded-xl items-center mt-6 bg-white shadow-lg">
        <div className="lg:w-1/2 w-full">
          <div className="bg-white px-6 py-12 sm:py-16 lg:px-8">
            <form ref={form} onSubmit={sendEmail} className="mx-auto max-w-xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                
              
              </div>
              <div className="mt-10">
                <button type="submit" className="block w-full rounded-md bg-pink-500 hover:bg-pink-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img src="https://i.ibb.co/rwv9dns/undraw-Mail-sent-re-0ofv-1.png" alt="" className="w-full  mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
