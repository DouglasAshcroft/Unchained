// src/components/JoinTheResistance.jsx

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { storeEmail } from "../utils/emailStorage";
import "../styles/components/joinTheResistance.css";
import "../styles/components/waitlistform.css";
import HomePage from "./HomePage";

const JoinTheResistance = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [userType, setUserType] = useState("fan");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      storeEmail(email, userType);
      setSubmitted(true);
      setEmail("");
      setUserType("fan");
    }
  };

  const [showCTAOnly, setShowCTAOnly] = useState(true); // toggle this for dev/test/demo

  if (showCTAOnly === false) {
    return <HomePage />;
  }


  return (
    <section className="join-the-resistance">
      <header>
        <h1>Ready to join the Resistance?</h1>
        <p> Reward fans, Dismantle the monopoly, Unchain from the 🎟️ Master.</p>
      </header>

      <div className="audience-cards">
      {/* need to add button and useNav */}
      <Link to="/Home" onClick={() => setShowCTAOnly(false)}>
        <div className="card">
          <h2>🎟️ Fans</h2>
          <p>
            Secure your ticket, claim exclusive rewards, and build the
            underground movement that brings Fans, Artists and Venues together
            to overthrow the 🎟️ "Master."
          </p>
        </div>
        </Link>

        <div className="card">
          <h2>🎤 Artists</h2>
          <p>
            Connect directly with fan base, build your following, reward
            loyalty, protect your IP, royalties, and{" "}
            {/* href="https://www.base.org/ecosystem/" target="blank">  */}
            @Base from excessive fees.
          </p>
        </div>


        <div className="card">
          <h2>🏟️ Venues</h2>
          <p>
            Next generation ticketing now! Smart contracts prevent fraud,
            control resale, and build community trust around your venue while we
            handle your ticketing with enhanced sales analytics and no bank fees
            on USDC stablecoin transactions.
          </p>
        </div>

      </div>

      <form onSubmit={handleSubmit}>
        {submitted ? (
          <div className="resistance-confirmation">
            <h2>📡 Message Received 📡 </h2>
            <p>
              <h4>You've reached the resistance!</h4> Watch your inbox...
              <br></br> Once you've been vetted, <strong>THE RESISTANCE</strong>{" "}
              will contact you about how you can <strong>FIGHT</strong> the
              oppression of excessive fees and <strong>OVERTHROW</strong> the{" "}
              <strong>🎟️ "MASTER"</strong>!
            </p>
          </div>
        ) : (
          <>
            <label htmlFor="userType">
              Choose your role in the resistance:
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="fan">
                Guerrillas (Fans) I'm going to fight for the movement!
              </option>
              <option value="artist">
                Public Component (Artist) I'm going to advocate against the
                status quo for my fans!
              </option>
              <option value="venue">
                Auxiliary (Venues) We harbor the Resistance and support the
                community here!{" "}
              </option>
            </select>
            <label htmlFor="email">Sign up today for early access:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(email) => setEmail(email.target.value)}
              placeholder="you@example.com"
              required
            />
            <button type="submit">Join the Resistance</button>
          </>
        )}
      </form>
    </section>
  );
};

export default JoinTheResistance;

// <section>
//   <h1>Join the Resistance</h1>
//   <p>Unchain ticketing. Reward fans. Dismantle the monopoly.</p>

//   <div class="cards">
//     <div class="card">Fans CTA</div>
//     <div class="card">Artists CTA</div>
//     <div class="card">Venues CTA</div>
//   </div>

//   <form>
//     <input type="email" placeholder="Enter your email" />
//     <button>Join the Resistance</button>
//   </form>
// </section>;
