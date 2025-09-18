import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    eamil: "",
    message: "",
  });
  return (
    <section className="realtive flex items-center c-space section-spacing">
      <div className="flex flex-col items-center justify-center mx-w-md p-5 mx-auto border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col itmes-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to bulid a new webstei, improve your existing
            platform, or bring a unique project to life, I,m her to help
          </p>
        </div>
        <form className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Diwakar Singh"
              autoComplete="name"
              value={formData.name}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="itsdiwakarsingh02@gmail.com"
              autoComplete="email"
              value={formData.eamil}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Message" className="feild-label">
              Message
            </label>
            <input
              id="Message"
              name="Message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughs..."
              autoComplete="Message"
              value={formData.message}
              required
            />
          </div>
          <button className="w-full px-1 py-3 text-lg text-center"></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
