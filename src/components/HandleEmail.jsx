import { storeEmail } from "../utils/emailStorage";
import { useState } from "react";

import "../styles/components/joinTheResistance.css";
import "../styles/components/waitlistform.css";

function HandleEmail() {

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

    return (
        <>
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


        </>
    )

}

export default HandleEmail