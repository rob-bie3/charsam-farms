import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import Swal from 'sweetalert2';


const Contact = () => {
  const [state, handleSubmit] = useForm("mgvypqaa")

  const customSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const result = await handleSubmit(e);

    if (result?.body?.ok || state.succeeded) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully',
        text: 'Thank you for reaching out to us!',
        confirmButtonColor: '#16a34a',
      });

      form.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Please try again later or check your internet connection.',
        confirmButtonColor: '#dc2626',
      });
    }
  };


  return (
    <div className="bg-white px-6 py-12 md:py-20 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions or want to learn more about our services? We’re just a message away!
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <FaLocationArrow className="text-green-700" />
              Sunyani - Odumase, Don Bosco Street.
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-700" />
              +233 54 049 6324
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-700" />
              Charitytwenewaa89@gmail.com
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Send a Message</h3>
          <form onSubmit={customSubmit} className="space-y-4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-green-700"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-green-700"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <input
              id="title"
              type="text"
              name="title"
              placeholder="Message Title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-green-700"
              required
            />

            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-green-700"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
