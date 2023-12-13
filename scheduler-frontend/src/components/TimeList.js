import React, { useState, useEffect } from "react";
import { USER_API } from "../api/api";

const TimeList = ({ userId }) => {
  useEffect(() => {
    // Fetch user availability from the backend
    fetch(USER_API.GET_USER_AVAILABILITY(userId));
  }, [userId]);
};

export default TimeList;
