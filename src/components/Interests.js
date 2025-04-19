export default Interests = ({ data, setData, error }) => {
  const { interests } = data;

  const handleChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  console.log("DATA>>>>", data);

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleChange}
          />
          Music
        </label>
        {error.interests && <span>Invalid Interestes</span>}
      </div>
    </div>
  );
};
