export const Application = () => {
  return (
    <>
      <h1>Job Application form</h1>
      <h2>Section 1</h2>
      <p title="mandatory-info">All fields are mandatory.</p>
      <img src="https://via.placeholder.com/150" alt="a person with laptop" />
      <div data-testid="custom-element">Custom element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="fullName"
            value="Nikhil"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="textarea" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
