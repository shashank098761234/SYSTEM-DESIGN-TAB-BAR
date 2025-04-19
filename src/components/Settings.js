export default Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };

  console.log("data>>>>>>>", data);

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};
