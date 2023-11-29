import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Requested } from "../hooks/Requested";
export const HodHome = () => {
  const navigate = useNavigate();
  const requested = Requested();
  const handleBook = (room) => {
    window.localStorage.setItem("roomNo", room);
    navigate("/submitForm");
  };
  return (
    <div className="homeComponent">
      <div className="title">
        <h1>Available Rooms</h1>
      </div>
      <div className="body">
        <div className="rooms">
          <h2>
            <u>AC Rooms</u>
          </h2>
          <div className="room">
            <h3 className="roomTitle">Room1</h3>
            {requested.includes("Room1") ? (
              <button className="requestedBtn">Requested</button>
            ) : (
              <button onClick={() => handleBook("Room1")}>Book</button>
            )}
          </div>
          <div className="room">
            <h3 className="roomTitle">Room2</h3>
            {requested.includes("Room2") ? (
              <button className="requestedBtn">Requested</button>
            ) : (
              <button onClick={() => handleBook("Room2")}>Book</button>
            )}
          </div>
          <div className="room">
            <h3 className="roomTitle">Room3</h3>
            {requested.includes("Room3") ? (
              <button className="requestedBtn">Requested</button>
            ) : (
              <button onClick={() => handleBook("Room3")}>Book</button>
            )}
          </div>
        </div>
        <div className="rooms">
          <h2>
            <u>Non AC Rooms</u>
          </h2>
          <div className="room">
            <h3 className="roomTitle">Room4</h3>
            {requested.includes("Room4") ? (
              <button className="requestedBtn">Requested</button>
            ) : (
              <button onClick={() => handleBook("Room4")}>Book</button>
            )}
          </div>
          <div className="room">
            <h3 className="roomTitle">Room5</h3>
            {requested.includes("Room5") ? (
              <button className="requestedBtn">Requested</button>
            ) : (
              <button onClick={() => handleBook("Room5")}>Book</button>
            )}
          </div>
          <div className="room">
            <h3 className="roomTitle">Room6</h3>
            {requested.includes("Room6") ? (
              <button className="requestedBtn">Requested</button>
            ) : (
              <button onClick={() => handleBook("Room6")}>Book</button>
            )}
          </div>
        </div>
      </div>
      <span>
        <Link to="/updatesPanel">Click here</Link> to see updates
      </span>
    </div>
  );
};
