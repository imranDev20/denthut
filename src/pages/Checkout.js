import React from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const handleSubmission = (e) => {
    e.preventDefault();
    toast("Successfully Booked");
  };
  return (
    <main className="container mx-auto px-10 flex my-10">
      <div className="w-1/2 rounded overflow-hidden">
        <img
          className="w-full object-cover"
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
      </div>
      <div className="w-1/2">
        <h2 className="ml-10 my-5 text-4xl font-semibold text-neutral-600">
          Book Now!
        </h2>
        <form
          className="ml-10 w-[70%] flex flex-col items-center justify-center"
          onSubmit={(e) => handleSubmission(e)}
        >
          <input
            className="py-2 my-3 w-full bg-neutral-100 rounded-full px-5 outline-none focus:ring ring-cyan-400"
            type="text"
            placeholder="Name"
          />
          <input
            className="py-2 my-3 w-full bg-neutral-100 rounded-full px-5 outline-none focus:ring ring-cyan-400"
            type="email"
            placeholder="Email"
          />
          <input
            className="py-2 my-3 w-full bg-neutral-100 rounded-full px-5 outline-none focus:ring ring-cyan-400"
            type="number"
            placeholder="Phone"
          />
          <input
            className="py-2 my-3 w-full rounded-full bg-cyan-400 text-white"
            type="submit"
            name=""
            id=""
          />
        </form>
      </div>
    </main>
  );
};

export default Checkout;
