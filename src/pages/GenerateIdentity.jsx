import React from "react";
import { useNavigate } from "react-router-dom";
import { useGroupContext } from "./GroupProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Identity } from "@semaphore-protocol/identity";

function GenerateIdentity() {
  const { identity, setIdentity } = useGroupContext();
  const navigate = useNavigate();

  // Function to generate identity
  const createIdentity = () => {
    if (!identity) {
      const newIdentity = new Identity();
      setIdentity(newIdentity);
      toast.success("Identity generated successfully!"+ newIdentity.commitment.toString());

      // Navigate to create group page after identity creation
      setTimeout(() => {
        navigate("/groups");
      }, 1000);
    } else {
      toast.info("Identity already exists.");
      navigate("/groups");
    }
  };

  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold mb-5">Generate Semaphore Identity</h2>
      <button
        onClick={createIdentity}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Generate Identity
      </button>
      <ToastContainer />
    </div>
  );
}

export default GenerateIdentity;
