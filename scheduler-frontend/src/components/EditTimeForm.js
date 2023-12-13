import React, { useState } from "react";
import { USER_API } from "../api/api";

const EditTimeForm = ({ userId, timeId, start, end, onUpdate }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the backend for updating the availability
    fetch(USER_API.EDIT_USER_AVAILABILITY(userId, timeId), {})
      .then((response) => response.json())
      .then((data) => {
        console.log("Availability updated:", data);
        // Optionally update the local state or trigger a refetch of the availability list
        onUpdate();
      })
      .catch((error) => console.error("Error updating availability:", error));
  };
};

export default EditTimeForm;
