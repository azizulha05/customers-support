import React from "react";

const Footers = () => {
  return (
    <div>
      <footer className="flex flex-col lg:flex-row justify-evenly  gap-5 bg-neutral text-neutral-content p-10">
        <div className=" w-full lg:w-72">
          <nav className="flex flex-col ">
            <h6 className="footer-title">CS — Ticket System</h6>
            <p className="text-xs text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
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
    </div>
  );
};

export default Footers;
