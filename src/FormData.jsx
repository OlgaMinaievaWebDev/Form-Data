import { useState, useEffect } from "react";

function FormData() {
  const [formData, setFormData] = useState(() => {
    // Load data from localStorage or initialize default state
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          fullname: "",
          email: "",
          favoriteReindeer: "Dasher",
          movies: {
            Elf: true,
            "Home Alone": true,
            "The Grinch": true,
            "It is a wonderful Life": true,
            "Die Hard": true,
          },
        };
  });

  const { fullname, email, favoriteReindeer, movies } = formData;

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onMovieChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      movies: {
        ...prevState.movies,
        [name]: checked,
      },
    }));
  };

  const handleFormData = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setFormData({
      fullname: "",
      email: "",
      favoriteReindeer: "Dasher",
      movies: {
        Elf: true,
        "Home Alone": false,
        "The Grinch": false,
        "It is a wonderful Life": false,
        "Die Hard": false,
      },
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen font-INTR">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleFormData}>
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              value={fullname}
              type="text"
              name="fullname"
              placeholder="Your Full Name"
              className="input input-bordered"
              required
              onChange={onChange}
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              value={email}
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
              onChange={onChange}
            />
          </div>

          {/* Favorite Reindeer */}
          <p className="mt-5">Favorite Reindeer</p>
          <div className="grid grid-cols-3">
            {[
              "Dasher",
              "Vixen",
              "Donner",
              "Dancer",
              "Comet",
              "Blitzen",
              "Prancer",
              "Cupid",
              "Rudolph",
            ].map((reindeer) => (
              <div className="flex" key={reindeer}>
                <label className="label flex-basis-1/3">
                  <input
                    type="radio"
                    name="favoriteReindeer"
                    value={reindeer}
                    checked={favoriteReindeer === reindeer}
                    className="radio radio-accent"
                    onChange={onChange}
                  />
                  <span className="label-text ml-2">{reindeer}</span>
                </label>
              </div>
            ))}
          </div>

          {/* Holiday Movies */}
          <p className="mt-5">
            What holiday movies have you watched this year?
          </p>
          {Object.keys(movies).map((movie) => (
            <div className="flex items-center" key={movie}>
              <input
                type="checkbox"
                name={movie}
                checked={movies[movie]}
                className="checkbox checkbox-accent"
                onChange={onMovieChange}
              />
              <label className="cursor-pointer ml-2">
                <span className="label-text">{movie}</span>
              </label>
            </div>
          ))}

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              className="btn bg-accent text-white border border-accent hover:bg-accent-focus hover:border-accent-focus"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormData;
