import { Button } from "../components/Button";
import { useState } from "react";
import Title from "../components/Title";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmitForm(values) {
    
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response.status);
      if (response.status == 200) {
        // reset();
        console.log('Success')
      }
    } catch (err) {}
  }
  const [button, setButton] = useState(true);
  return (
    <section id="contact">
      <Title title="CONTACT" />

      <div className="contact-form">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group">
            <input
              type="text"
              {...register("name", {
                required: true,
                maxLength: 10,
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                },
              })}
              className="form-control"
              name="name"
              placeholder="ENTER YOUR NAME*"
            />
            {errors.name && errors.name.type === "required" && (
              <small className="text-danger">This is required</small>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <small className="text-danger">Max length exceeded</small>
            )}
            {errors.name && errors.name.type === "pattern" && (
              <small className="text-danger">Invalid name</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
              })}
              className="form-control"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
            />
            {errors.email && errors.email.type === "required" && (
              <small className="text-danger">This is required</small>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <small className="text-danger">Invalid email</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              {...register("phone", {
                pattern: {
                  value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                },
              })}
              className="form-control"
              name="phone"
              placeholder="ENTER YOUR PHONE*"
            />
            {errors.phone && errors.phone.type === "pattern" && (
              <small className="text-danger">Invalid number phone</small>
            )}
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              {...register("message", {
                required: true,
                maxLength: 1000,
                minLength: 50,
              })}
              name="message"
              rows="3"
              placeholder="YOUR MESSAGE*"
            ></textarea>
            {errors.message && errors.message.type === "required" && (
              <small className="text-danger">This is required</small>
            )}
            {errors.message && errors.message.type === "maxLength" && (
              <small className="text-danger">Max length exceeded</small>
            )}
            {errors.message && errors.message.type === "minLength" && (
              <small className="text-danger">Min length exceeded</small>
            )}
          </div>

          {button && (
            <Button buttonStyle="btn--red" type="submit">
              Submit
            </Button>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
