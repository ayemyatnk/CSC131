// src/api.js
const API_BASE_URL = "http://localhost:8080/api";

export const USER_API = {
  GET_ALL_USERS: `${API_BASE_URL}/user`,
  GET_ONE_USER: (userId) => `${API_BASE_URL}/user/${userId}`,
  ADD_USER: `${API_BASE_URL}/user`,
  EDIT_USER: (userId) => `${API_BASE_URL}/user/${userId}`,
  DELETE_USER: (userId) => `${API_BASE_URL}/user/${userId}`,
  GET_USER_AVAILABILITY: (userId) => `${API_BASE_URL}/user/${userId}/availability`,
  ADD_USER_AVAILABILITY: (userId) => `${API_BASE_URL}/user/${userId}/availability`,
  EDIT_USER_AVAILABILITY: (userId, availabilityId) => `${API_BASE_URL}/user/${userId}/availability/${availabilityId}`,
  DELETE_USER_AVAILABILITY: (userId, availabilityId) => `${API_BASE_URL}/user/${userId}/availability/${availabilityId}`,
};

export const MEETING_API = {
  GET_ALL_MEETINGS: `${API_BASE_URL}/meeting`,
  GET_ONE_MEETING: (meetingId) => `${API_BASE_URL}/meeting/${meetingId}`,
  ADD_MEETING: `${API_BASE_URL}/meeting`,
  EDIT_MEETING: (meetingId) => `${API_BASE_URL}/meeting/${meetingId}`,
  DELETE_MEETING: (meetingId) => `${API_BASE_URL}/meeting/${meetingId}`,
};

export const TIMESLOTS_API = `${API_BASE_URL}/timeslots`;
