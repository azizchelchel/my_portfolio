const Contact = () => {
  return (
    <div id="Contact" className="">
      <div className="px-2 lg:px-20 py-3 text-center  lg:text-start flex flex-col justify-between  items-center">
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
          className="flex justify-center  text-[52px] text-fuchsia-500 font-semibold mb-8 leading-normal"
        >
          CONTACT ME
        </h1>
        <div className="flex flex-col items-center  justify-between md:flex-row md:justify-evenly lg:justify-evenly px-[4rem] w-full  pb-8">
          <form
            id="formId"
            name="contact_form"
            action="https://getform.io/f/DbDGgqal"
            className="  flex flex-col gap-4"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="flex flex-col w-[20rem] lg:justify-between gap-4 ">
              <input
                className="tabs bg-transparent border-fuchsia-800 py-auto text-white border  rounded-lg p-2 h-[3rem]"
                type="text"
                name="name"
                id="name_id"
                placeholder="Enter Your Name"
              />
              <input
                className="tabs bg-transparent text-white border border-fuchsia-800 rounded-lg p-2 h-[3rem]"
                type="text"
                name="email"
                id="email_id"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <textarea
                className="tabs tabs w-full bg-transparent p-2 text-white border shadow-xl border-fuchsia-800 rounded-lg  "
                name="text_area"
                id="textarea_id"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <input
                type="file"
                name="file"
                id="attach"
                className="text-white rounded-md border-sky-100 border-2"
              />
            </div>
            <button
              type="submit"
              className="tabs button-submit w-full shadow-lg hover:bg-slate-600 text-white border-2 shadow-slate-500 bg-slate-700 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden "
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
