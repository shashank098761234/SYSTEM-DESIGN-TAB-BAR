export default Profile = ({ data, setData, error }) => {
  const { name, age, email } = data;

  const handleStateChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>Name : </label>
        <input value={name} onChange={(e) => handleStateChange(e, "name")} />
        {error.name && <span>Invalid name</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>Age : </label>
        <input value={age} onChange={(e) => handleStateChange(e, "age")} />
        {error.age && <span>Invalid Age</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>Email : </label>
        <input value={email} onChange={(e) => handleStateChange(e, "email")} />
        {error.email && <span>Invalid Email</span>}
      </div>
    </div>
  );
};
