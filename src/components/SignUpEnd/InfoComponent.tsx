import ListIcon from "../../assets/images/icon-list.svg";

const InfoComponent = () => {
  return (
    <>
      <h1 className="signup-main-heading">Stay updated!</h1>
      <h2 className="signup-subheading">
        Join 60,000+ product managers receiving monthly updates on:
      </h2>
      <ul className="list">
        <li className="list-item">
          <img src={ListIcon} alt="tick" className="list-icon" />
          <p className="list-text">
            Product discovery and building what matters
          </p>
        </li>
        <li className="list-item">
          <img src={ListIcon} alt="tick" className="list-icon" />
          <p className="list-text">Measuring to ensure updates are a success</p>
        </li>
        <li className="list-item">
          <img src={ListIcon} alt="tick" className="list-icon" />
          <p className="list-text">And much more!</p>
        </li>
      </ul>
    </>
  );
};

export default InfoComponent;
