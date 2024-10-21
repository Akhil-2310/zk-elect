import React, { useState, useContext, createContext } from "react";
import { Group } from "@semaphore-protocol/group";
import { Identity } from "@semaphore-protocol/identity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a context for global state management
const GroupContext = createContext();

// Group Provider component to manage global group state
export function GroupProvider({ children }) {
  const [groups, setGroups] = useState([]); // Store the list of all groups
  const [identity, setIdentity] = useState(null); // Store the user's Semaphore identity

  // Function to create and add a group to the global state
  const createGroup = (groupName, description) => {
    const newGroup = new Group(); // Create new Semaphore group

    const groupId = Date.now();

    const groupDetails = {
      id: groupId, // Unique group ID
      name: groupName,
      description: description,
      group: newGroup,
      members: [], // Initially no members
    };

    setGroups((prevGroups) => [...prevGroups, groupDetails]); // Add new group to state
    toast.success("Group created successfully!");
  };

  return (
    <GroupContext.Provider
      value={{ groups, setGroups, identity, setIdentity, createGroup }}
    >
      {children}
    </GroupContext.Provider>
  );
}

// Custom hook to use GroupContext in other components
export const useGroupContext = () => useContext(GroupContext);
