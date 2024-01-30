import { useState } from "react";

export const Section = ({ title, discription }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        className="about-container"
        style={{ borderBlock: "1px black solid" }}
      >
        <h1>{title}</h1>
        {isVisible ? (
          <button onClick={() => setIsVisible(false)}>Hide</button>
        ) : (
          <button onClick={() => setIsVisible(true)}>show</button>
        )}
        {isVisible && <p style={{ marginTop: "25px" }}>{discription}</p>}
      </div>
    </>
  );
};

export default function InstaMart() {
  return (
    <>
      <Section
        title={"About InstaMart"}
        discription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <Section
        title={"contact InstaMart"}
        discription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <Section
        title={"Member's of InstaMart"}
        discription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
    </>
  );
}
