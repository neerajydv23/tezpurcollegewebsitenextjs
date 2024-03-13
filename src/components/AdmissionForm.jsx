import React from 'react';

function AdmissionForm() {
  return (
    <div className="relative h-[100vh] ">
      <div className="absolute inset-0 bg-[#00000072] opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="bg-white p-6 rounded shadow-md ">
          <h2 className="text-2xl mb-4">Admission Form</h2>
            <input type="text" className="w-full p-2 border rounded mt-1" placeholder='Enter Name' />
            <input type="email" className="w-full p-2 border rounded mt-1" placeholder='Enter Email' />
            <input type="email" className="w-full p-2 border rounded mt-1" placeholder='Enter Mobile Number' />
            <select className="w-full p-2 border rounded mt-1 mb-4">
  <option value="">Select Course Applying For</option>
  <option value="course1">Course 1</option>
  <option value="course2">Course 2</option>
  <option value="course3">Course 3</option>
</select>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;