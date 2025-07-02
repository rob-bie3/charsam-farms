import { useState } from 'react';
import Swal from 'sweetalert2';

const BookTraining = ({ isOpen, onClose }) => {
 if (!isOpen) return null; // ← must be here!

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     try {
    const response = await fetch("https://formspree.io/f/xnnvrnzk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        preferredDate: formData.preferredDate,
        message: formData.message
      })
    });

if (response.ok) {

   Swal.fire({
      icon: 'success',
      title: 'Booking Sent!',
      text: 'We will reach out to you shortly.',
      confirmButtonColor: '#16a34a',
    });

    setFormData({ name: '', email: '', preferredDate: '', message: '' });
    onClose();
  } else {
     Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#dc2626"
      });
  }
} catch (error) {
   Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
      confirmButtonColor: "#dc2626"
    });
}

}; 

  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-green-800 mb-4">Book Training Session</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="date"
            name="preferredDate"
            required
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Additional Notes (optional)"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTraining;
