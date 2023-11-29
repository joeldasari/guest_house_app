import { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../hooks/BaseUrl";
export const AdminPanel = () => {
  const URL = BaseUrl();
  const [hodRequest, setHodRequest] = useState([]);
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`${URL}/form`);
        setHodRequest(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchRequests();
  }, []);
  return (
    <div className="adminPanel">
      <h2>Admin Panel</h2>
      {hodRequest.map((item, index) => {
        return (
          <div className="request">
            <h3>Request {index + 1}</h3>
            <p key={hodRequest._id}>Hod Name: {item.hodName}</p>
            <p key={hodRequest._id}>Department: {item.department}</p>
            <p key={hodRequest._id}>Room No: {item.room}</p>
            <p key={hodRequest._id}>Booking For: {item.bookingFor}</p>
            <p key={hodRequest._id}>Guest Contact: {item.guestPhoneNo}</p>
            <p key={hodRequest._id}>From Date: {item.fromDate}</p>
            <p key={hodRequest._id}>To Date: {item.toDate}</p>
            <p key={hodRequest._id}>Purpose: {item.purpose}</p>
            <p key={hodRequest._id}>Status: {item.status}</p>
            <div className="buttons">
              <button>Accept</button>
              <button>Reject</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
