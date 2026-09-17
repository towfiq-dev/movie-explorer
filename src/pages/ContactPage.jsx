import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaHeadset, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent.", {
        icon: "✉️",
        style: {
          borderRadius: "16px",
          background: "#1e1e2d",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      });
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="badge badge-primary badge-outline font-semibold mb-3">
          Help &amp; Support
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm text-base-content/60 mt-2">
          Have a question regarding movie listings, API integration, or encountered an issue? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-base-200/50 border border-base-content/10 flex items-start gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl text-lg">
              <FaHeadset />
            </div>
            <div>
              <h3 className="font-bold text-sm">Customer Support</h3>
              <p className="text-xs text-base-content/60 mt-0.5">
                Our support team typically responds within 24 hours.
              </p>
              <span className="text-xs font-semibold text-primary mt-2 block">
                Available 24/7
              </span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-base-200/50 border border-base-content/10 flex items-start gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl text-lg">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-bold text-sm">Email Us</h3>
              <p className="text-xs text-base-content/60 mt-0.5">
                Direct queries regarding collaboration or issues:
              </p>
              <a
                href="mailto:support@movieexplorer.app"
                className="text-xs font-semibold text-primary mt-2 block hover:underline"
              >
                support@movieexplorer.app
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-base-200/50 border border-base-content/10 flex items-start gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl text-lg">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-sm">Data Provider</h3>
              <p className="text-xs text-base-content/60 mt-0.5">
                Public API powered by TVMaze database.
              </p>
              <span className="text-xs font-semibold text-base-content/80 mt-2 block">
                Global Open-source Catalog
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-base-200/40 border border-base-content/10 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Mercer"
                  className="input input-bordered w-full rounded-xl text-sm focus:outline-primary"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-semibold">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="input input-bordered w-full rounded-xl text-sm focus:outline-primary"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs font-semibold">Subject</span>
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="select select-bordered w-full rounded-xl text-sm focus:outline-primary"
              >
                <option>General Inquiry</option>
                <option>Missing Movie/Show Request</option>
                <option>Bug or Technical Glitch</option>
                <option>Feedback &amp; Suggestions</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs font-semibold">Message</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your query or message here..."
                className="textarea textarea-bordered w-full rounded-xl text-sm focus:outline-primary"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary rounded-xl px-8 font-semibold gap-2"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
