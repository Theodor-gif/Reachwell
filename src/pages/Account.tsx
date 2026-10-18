import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import CreateEmployeeAccount from "../components/CreateEmployeeAccount.tsx";

function Account() {
  return (
    <section>
      <Navbar />
      <section className="w-[80%] m-[75px_auto_0_auto]">
        <h3>Welcome to the Reachwell</h3>
        <p>
          Do you already have an account ? Log in{" "}
          <button type="button"> here</button>.
        </p>
        <p>
          <span>*</span> Required fields
        </p>
      </section>
      <CreateEmployeeAccount />
      <Footer />
    </section>
  );
}

export default Account;
