import "../styles/PersonalDetail.css";

function PersonalDetail() {
  return (
    <div className="personalDetailContainer">
      <h2>Personal Details</h2>
      <div className="videoDetail__personDetailContainer">
        <div className="videoDetail__personDetailContainerLeft">
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
            alt=""
          />
        </div>
        <div className="videoDetail__personDetailContainerRight">
          <div className="videoDetail__personDetailContainerRight__List">
            <h3>Name :</h3>
            <p>Someone Famous</p>
          </div>
          <div className="videoDetail__personDetailContainerRight__List">
            <h3>Age :</h3>
            <p>55</p>
          </div>
          <div className="videoDetail__personDetailContainerRight__List">
            <h3>Hometown :</h3>
            <p>Sagaing</p>
          </div>
          <div className="videoDetail__personDetailContainerRight__List">
            <h3>Living school :</h3>
            <p>Sagaing</p>
          </div>
          <button>Check out more video of this person</button>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetail;
