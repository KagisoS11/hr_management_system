import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Department {
  name: string;
  manager: string;
  status: string;
}

export default function Departments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [filteredDepartments, setFilteredDepartments] = useState<Department[]>([]);
  const [filter, setFilter] = useState({ manager: '', status: '' });

  useEffect(() => {
    const storedDepartments = JSON.parse(localStorage.getItem('departments') || '[]');
    setDepartments(storedDepartments);
    setFilteredDepartments(storedDepartments);
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));

    const updatedFiltered = departments.filter(
      (dept) =>
        (name === 'manager' ? dept.manager.includes(value) : true) &&
        (name === 'status' ? dept.status.includes(value) : true)
    );
    setFilteredDepartments(updatedFiltered);
  };

  const deleteDepartment = (index: number) => {
    const updatedDepartments = departments.filter((_, i) => i !== index);
    setDepartments(updatedDepartments);
    setFilteredDepartments(updatedDepartments);
    localStorage.setItem('departments', JSON.stringify(updatedDepartments));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <Link href="/departments/create">
        <button className="bg-green-500 text-white p-2 mb-4 rounded hover:bg-green-600">
          + Create Department
        </button>
      </Link>
      <div className="mb-4">
        <input
          type="text"
          name="manager"
          placeholder="Filter by Manager (Yes or No)"
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
            <th className="border p-2">Manager</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDepartments.map((dept, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="border p-2">{dept.name}</td>
              <td className="border p-2">{dept.manager}</td>
              <td className="border p-2">{dept.status}</td>
              <td className="border p-2">
                <Link href={`/departments/create?id=${index}`}>
                  <button className="bg-blue-500 text-white p-2 rounded mr-2">Edit</button>
                </Link>
                <button
                  onClick={() => deleteDepartment(index)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Deactivate
                </button>
              </td>
            </tr>
          ))}
          {filteredDepartments.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4">
                No departments available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
