import React from 'react'
import { Group } from "@semaphore-protocol/group";
import { Identity } from "@semaphore-protocol/identity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useGroupContext } from './GroupProvider';
import { useState } from 'react';
import GenerateIdentity from './GenerateIdentity';



const Groups = () => {

    const [groupName, setGroupName] = useState("");
    const [description, setDescription] = useState("");
    const { createGroup, identity } = useGroupContext();
    const navigate = useNavigate();


const handleCreateGroup =(e)=>{
    e.preventDefault();
     if (!identity) {
       toast.error("Please generate an identity first.");
       return;
     }

     createGroup(groupName, description);
     toast.success("Group created successfully!");
     navigate("/all-groups")
}

  return (
    <>

      <div className="m-20">
        <h2 className=" flex justify-center text-2xl font-bold mb-5">Create a Community</h2>
        <form onSubmit={handleCreateGroup} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Community Name
            </label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Community name"
              required
            />
          </div>
          <div class="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Community description"
              required
            />
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Group
          </button>
        </form>
      </div>
    </>
  );
}

export default Groups
