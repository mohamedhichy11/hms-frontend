import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";

const AppointmentForm = () => {
  const { isAuthenticated, setIsAuthenticated, setUser, user } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/user/doctors`,
        { withCredentials: true }
      );
      setDoctors(data.doctors);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {

    if (isAuthenticated && user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhone(user.phone);
      setNic(user.nic);
      setDob(user.dob);
      setGender(user.gender);
      setAddress(user.address);
    }
  }, [isAuthenticated, user]);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/appointment/post`,
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
     
      setAppointmentDate("");
      setDepartment("");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="hero2">
        <div className="form-component apointmpent-form">
          <div className="div-img-app"></div>

          <div>
            <form onSubmit={handleAppointment}>
              <h1>Appointment</h1>
             
             
              <div>
                <input
                  type="date"
                  placeholder="Appointment Date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
              <div>
                <select
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                    setDoctorFirstName("");
                    setDoctorLastName("");
                  }}
                  
                >
                  <option value="" selected >
                    Select Department
                  </option>
                  {departmentsArray.map((depart, index) => {
                    return (
                      <option value={depart} key={index} >
                        {depart}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={`${doctorFirstName} ${doctorLastName}`}
                  onChange={(e) => {
                    const [firstName, lastName] = e.target.value.split(" ");
                    setDoctorFirstName(firstName);
                    setDoctorLastName(lastName);
                  }}
                  disabled={!department}
                >
                  <option value="">Select Doctor</option>
                  {doctors
                    .filter(
                      (doctor) => doctor.doctorDepartment === department
                    )
                    .map((doctor, index) => (
                      <option style={{ textTransform:"capitalize" }}
                        value={`${doctor.firstName} ${doctor.lastName}`}
                        key={index}
                      >
                        {doctor.firstName} {doctor.lastName}
                      </option>
                    ))}
                </select>
              </div>
              <textarea
                rows="2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
              <div
                style={{
                  gap: "10px",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                <p style={{ marginBottom: 0, color: "#1CA4AC" }}>
                  Have you visited before?
                </p>
                <input
                  type="checkbox"
                  checked={hasVisited}
                  onChange={(e) => setHasVisited(e.target.checked)}
                  style={{ flex: "none", width: "25px" }}
                />
              </div>
              <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
