import React from "react";
import { useGroupContext } from "./GroupProvider";
import { ToastContainer, toast } from "react-toastify";

function ListGroups() {
  const { groups, identity, setIdentity, setGroups } = useGroupContext();


  // Function to join a group
  const joinGroup = (groupId) => {
    if (!identity) {
      toast.error("You need to generate an identity first!");
      return;
    }

    // Find the group by ID and add the user's identity commitment to the group
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        // group.group.addMember(identity.commitment); // Add the user's identity commitment
        group.members.push(identity.commitment); // Update the members list
        toast.success(`Joined group: ${group.name}`);
      }
      return group;
    });

    setGroups(updatedGroups); // Update the groups in state
  };

  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold mb-5">All Groups</h2>

      {/* If no groups exist, show a message */}
      {groups.length === 0 ? (
        <p>No groups available. Create a group first!</p>
      ) : (
        <div>
          {/* List all groups */}
          {groups.map((group) => (
            <div
              key={group.id}
              className="p-4 mb-4 border border-gray-300 rounded-lg"
            >
              <h3 className="text-lg font-bold">{group.name}</h3>
              <p>{group.description}</p>
              <p>Members: {group.members.length}</p>

              {/* Button to join the group */}
              <button
                onClick={() => joinGroup(group.id)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3"
              >
                {identity ? "Join Group" : "Generate Identity to Join"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* If no identity, allow the user to generate one */}
      {!identity && (
        <div className="flex items-center justify-center mt-5">
          <button
            onClick={generateIdentity}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Generate Identity
          </button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default ListGroups;
