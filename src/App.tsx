import "./App.css";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpEnd/SignUpForm";
import ThankYou from "./components/ThankYouEnd/ThankYou";
import useEmail from "./store";

function App() {
  const email = useEmail((s) => s.email);
  return (
    <main className={email ? "container thankyou" : "container"}>
      {email ? <ThankYou /> : <SignUpForm />}
      <Footer />
    </main>
  );
}

export default App;
