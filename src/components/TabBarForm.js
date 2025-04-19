import Profile from "./Profile";
import Interest from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: null,
    email: "",
    interests: ["coding", "music"],
    theme: "dark",
  });

  const [error, setError] = useState({});
  let tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is Invalid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is invalid";
        }
        if (!data.email || data.email.length < 18) {
          err.email = "Email is Invalid";
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Enter interrests";
        }

        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  console.log("error>>>>>>", error);

  let ActiveTabComponent = tabs[activeTab].component;

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevState) => prevState - 1);
    }
  };

  const handleNextCLick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevState) => prevState + 1);
    }
  };

  const handleSubmit = () => {
    console.log("API call", data);
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((item, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextCLick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};
