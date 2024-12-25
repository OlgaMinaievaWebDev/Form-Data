function FormData() {
  const handleFormData = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero bg-base-200 min-h-screen font-INTR">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleFormData}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <p className="mt-5 ">Favorite Reindeer </p>
          <div className="grid grid-cols-3 ">
            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                  defaultChecked
                />
                <span className="label-text ml-2">Dasher</span>
              </label>
            </div>
            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                />
                <span className="label-text ml-1">Vixen</span>
              </label>
            </div>
            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                />
                <span className="label-text ml-1">Donner</span>
              </label>
            </div>
            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                />
                <span className="label-text ml-1">Dancer</span>
              </label>
            </div>

            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                />
                <span className="label-text ml-1">Comet</span>
              </label>
            </div>

            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                />
                <span className="label-text ml-1">Blitzen</span>
              </label>
            </div>
            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                />
                <span className="label-text ml-1">Prancer</span>
              </label>
            </div>

            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                />
                <span className="label-text ml-1">Cupid</span>
              </label>
            </div>

            <div className="flex">
              <label className="label flex-basis-1/3">
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                />
                <span className="label-text ml-1">Rudolph</span>
              </label>
            </div>
          </div>

          <p className="mt-5 ">
            What holiday movies have you watched this year?{" "}
          </p>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <label className="cursor-pointer ml-2">
              <span className="label-text">Elf (2203)</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <label className="cursor-pointer ml-2">
              <span className="label-text">Home Alone (1990)</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <label className="cursor-pointer ml-2">
              <span className="label-text">The Grinch (1966)</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <label className="cursor-pointer ml-2">
              <span className="label-text">It is a wonderful Life (1946)</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <label className="cursor-pointer ml-2">
              <span className="label-text">Die Hard (1988)</span>
            </label>
          </div>

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
