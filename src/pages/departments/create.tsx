import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function CreateDepartment() {
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState('');
  const [manager, setManager] = useState('');
  const [status, setStatus] = useState('Active');

  // Load department for editing
  useEffect(() => {
    if (id) {
      const storedDepartments = JSON.parse(localStorage.getItem('departments') || '[]');
      const department = storedDepartments.find((dept: any) => dept.id === parseInt(id as string));

      if (department) {
        setName(department.name);
        setManager(department.manager);
        setStatus(department.status);
      }
    }
  }, [id]);

  const handleCancel = () => {
    router.push('/departments');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const storedDepartments = JSON.parse(localStorage.getItem('departments') || '[]');
    const newDepartment = {
      id: id ? parseInt(id as string) : Date.now(), // Generate unique id if creating
      name,
      manager,
      status,
    };

    if (id) {
      // Edit existing department
      const updatedDepartments = storedDepartments.map((dept: any) =>
        dept.id === parseInt(id as string) ? newDepartment : dept
      );
      localStorage.setItem('departments', JSON.stringify(updatedDepartments));
    } else {
      // Add new department
      localStorage.setItem('departments', JSON.stringify([...storedDepartments, newDepartment]));
    }

    router.push('/departments'); // Redirect back
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create / Edit Department</h1>
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
          Manager
          <select
            value={manager}
            onChange={(e) => setManager(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value=" "></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label className="block mb-4">
          Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value=" "></option>
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
