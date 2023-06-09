import SuccessIcon from "../../assets/images/icon-success.svg";
import useEmail from "../../store";

const ThankYou = () => {
  const { setEmail, email } = useEmail();
  return (
    <div className="thankyou-container">
      <img src={SuccessIcon} className="success-icon" />
      <h1 className="thankyou-heading">Thanks for subscribing!</h1>
      <p className="thankyou-text">
        A confirmation email has been sent to{" "}
        <strong className="user-email">{email}.</strong> Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button className="submit-button" onClick={() => setEmail("")}>
        Dismiss message
      </button>
    </div>
  );
};

export default ThankYou;
