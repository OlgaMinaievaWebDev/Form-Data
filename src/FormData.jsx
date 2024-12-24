function FormData() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Olga Minaieva"
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
          <div className="form-control">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <label className="cursor-pointer label">
              <span className="label-text">Elf (2003</span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormData;
