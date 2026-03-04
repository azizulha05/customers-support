import React from "react";

const Footers = () => {
  return (
    <div className="bg-neutral text-neutral-content p-10 space-y-4">
      <footer className="flex flex-col lg:flex-row justify-evenly  gap-5 ">
        <div className=" w-full lg:w-72">
          <nav className="flex flex-col ">
            <h6 className="footer-title">CS — Ticket System</h6>
            <p className="text-xs text-justify">
              A CS Ticket System manages customer issues efficiently by allowing ticket submission,
              tracking, and prioritization. It ensures timely resolution, clear communication, and
              performance monitoring, centralizing support operations to enhance service quality and
              prevent unresolved queries.
            </p>
          </nav>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:flex-1 lg:px-20">
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Salad</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Social Links</h6>
            <a className="link link-hover">@CS — Ticket System</a>
            <a className="link link-hover">@CS — Ticket System</a>
            <a className="link link-hover">@CS — Ticket System</a>
            <a className="link link-hover">support@cst.com</a>
          </nav>
        </div>
      </footer>
      <h2 className="text-center">&copy; 2026 All rights reserved.</h2>
    </div>
  );
};

export default Footers;
