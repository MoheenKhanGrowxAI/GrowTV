import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Context } from "../../Context";
import "./Contact.css";

function Contact() {
  const [context, setContext] = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setContext(true);
    }, 1000);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data) => {
    let payload = JSON.stringify({
      sender: {
        name: "GrowX A.i",
        email: "info@thehomegrownpros.com",
      },
      to: [
        {
          name: `${data.fullName}`,
          email: `${data.email}`,
        },
      ],
      subject: "Welcome to the Growx A.i Family!",
      htmlContent: `
      <!DOCTYPE html>
        <html lang="en">
          <head> </head>
          <body>
            <p>Dear ${data.fullName},</p>
            <p style="margin-bottom:12px">A warm welcome to the Growx A.i family!</p>
            <p style="margin-bottom:12px">
              We are thrilled to inform you that you have successfully subscribed.
            </p>
            <p style="margin-bottom:12px"> 
              Thank you for registering.
            </p>
          </body>
        </html>
      `,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.brevo.com/v3/smtp/email",
      headers: {
        accept: "application/json",
        "api-key":
          "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",
        "content-type": "application/json",
      },
      data: payload,
    };
    sendEmail(config, data);
  };

  async function sendEmail(config, grower) {
    setLoading(true);
    axios
      .request(config)
      .then((response) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  }

  if (success) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: "100%",
        }}
        animate={{
          opacity: 1,
          y: "0%",
        }}
        transition={{ duration: 1.5 }}
        className="contact-us-page body-wrapper"
      >
        <Container>
          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="contact-us-wrapper">
                <h1>Submitted Successfully!</h1>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    );
  }
  if (!error && !success) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: "100%",
        }}
        animate={{
          opacity: 1,
          y: "0%",
        }}
        transition={{ duration: 1.5 }}
        className="contact-us-page body-wrapper"
      >
        <Container>
          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="contact-us-wrapper">
                <h1>Get In Touch</h1>
                <p>
                  Please complete the following information and a member of our
                  Customer <br /> Service Team will contact you
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Enter your name"
                          className="form-control"
                          {...register("fullName", { required: true })}
                        />
                        {errors.fullName && (
                          <div className="invalid-feedback">
                            {errors.fullName.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          required
                          type="email"
                          placeholder="Enter your email"
                          className="form-control"
                          {...register("email", {
                            required: true,
                            email: true,
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          rows="5"
                          placeholder="Enter your massage"
                          className="form-control"
                          {...register("message")}
                        ></textarea>
                        {errors.message && (
                          <div className="invalid-feedback">
                            {errors.message.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                      <button
                        type="submit"
                        className="btn btn-submit"
                        disabled={loading}
                      >
                        {!loading ? "SUBMIT" : "submitting..."}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    );
  }
}

export default Contact;
