import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvqddww"); // Formspree form setup

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [msg,setMsg] = useState('');


  const { Contact } = content;
  const form = useRef();

  // Sending Email using Formspree
  const sendEmail = async (e) => {
    e.preventDefault();
alert("Form Submitted Successfully");


setEmail('');
setName('');
setMsg('');
    // Handle Formspree submission
    const result = await handleSubmit(e);

    
    if (result.succeeded) {
      form.current.reset();
      toast.success("Email sent successfully");
    } else {
      
      form.current.reset();
    }
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail} // Use the new sendEmail function
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
              onChange={event => setMsg(event.target.value)}
              value={msg}
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="btn self-start bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;