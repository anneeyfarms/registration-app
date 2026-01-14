import { useState } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Choose format: 'excel' or 'pdf'
    const format = 'excel'; // Or 'pdf' — switch as needed

    if (format === 'excel') {
      // Create Excel
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet([formData]);
      XLSX.utils.book_append_sheet(wb, ws, 'Registrations');
      XLSX.writeFile(wb, 'registration.xlsx');
    } else if (format === 'pdf') {
      // Create PDF
      const doc = new jsPDF();
      doc.text(`Name: ${formData.name}`, 10, 10);
      doc.text(`Phone: ${formData.phone}`, 10, 20);
      doc.text(`Email: ${formData.email}`, 10, 30);
      doc.text(`Address: ${formData.address}`, 10, 40);
      doc.save('registration.pdf');
    }

    alert('Registration submitted and file downloaded!');
    setFormData({ name: '', phone: '', email: '', address: '' });
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit and Download File
        </button>
      </form>
    </div>
  );
}

export default Register;