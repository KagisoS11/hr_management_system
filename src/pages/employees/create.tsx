import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function CreateEmployee() {
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Active');

  // Load employee for editing
  useEffect(() => {
    if (id) {
      const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
      const employee = storedEmployees.find((emp: any) => emp.id === parseInt(id as string));

      if (employee) {
        setName(employee.name);
        setSurname(employee.surname);
        setPosition(employee.position);
        setEmail(employee.email);
        setPhone(employee.phone);
        setStatus(employee.status);
      }
    }
  }, [id]);

  const handleCancel = () => {
    router.push('/employees');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    const newEmployee = {
      id: id ? parseInt(id as string) : Date.now(), // Generate unique id if creating
      name,
      surname,
      position,
      email,
      phone,
      status,
    };

    if (id) {
      // Edit existing employee
      const updatedEmployees = storedEmployees.map((emp: any) =>
        emp.id === parseInt(id as string) ? newEmployee : emp
      );
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    } else {
      // Add new employee
      localStorage.setItem('employees', JSON.stringify([...storedEmployees, newEmployee]));
    }

    router.push('/employees'); // Redirect back
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create / Edit Employee</h1>
      <form onSubmit={handleSave}>
        <label className="block mb-4">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Surname
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Position
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Phone
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
