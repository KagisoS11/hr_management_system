import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Employee {
  name: string;
  surname: string;
  phone: string;
  email_address: string;
  manager: string;
  status: string;
}

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [filter, setFilter] = useState({ manager: '', status: '' });

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    setEmployees(storedEmployees);
    setFilteredEmployees(storedEmployees);
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));

    const updatedFiltered = employees.filter(
      (emp) =>
        (name === 'manager' ? emp.manager.includes(value) : true) &&
        (name === 'status' ? emp.status.includes(value) : true)
    );
    setFilteredEmployees(updatedFiltered);
  };

  const deleteEmployee = (index: number) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      <Link href="/employees/create">
        <button className="bg-green-500 text-white p-2 mb-4 rounded hover:bg-green-600">
          + Create Employee
        </button>
      </Link>
      <div className="mb-4">
        <input
          type="text"
          name="manager"
          placeholder="Filter by Manager"
          className="border p-2 mr-2"
          onChange={handleFilterChange}
        />
        <select name="status" className="border p-2" onChange={handleFilterChange}>
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Surname</th>
            <th className="border p-2">Telephone Number</th>
            <th className="border p-2">Manager</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="border p-2">{emp.name}</td>
              <td className="border p-2">{emp.surname}</td>
              <td className="border p-2">{emp.phone}</td>
              <td className="border p-2">{emp.manager}</td>
              <td className="border p-2">{emp.status}</td>
              <td className="border p-2">
                <Link href={`/employees/edit?id=${index}`}>
                  <button className="bg-blue-500 text-white p-2 rounded mr-2">Edit</button>
                </Link>
                <button
                  onClick={() => deleteEmployee(index)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredEmployees.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center p-6">
                No employees available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
