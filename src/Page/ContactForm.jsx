import { SiWhatsapp } from "react-icons/si";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';
import { MdEmail } from "react-icons/md";
import { Email } from "@mui/icons-material";
const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
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
    <div className="container mx-auto p-8 mt-6">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
      <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message" 
           
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <Button type="submit" value="Send" variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
    </form>

    <div className='mt-5 items-center justify-center'>
    <h3 className="flex mt-2"><SiWhatsapp className="gap-5 w-5 h-5 mr-2" /> : 01987-064729</h3> 
    <h3 className="mt-4"><Email></Email> : developermujahid2001@gmail.com</h3>
    </div>
    </div>
  );
};

export default ContactForm;
