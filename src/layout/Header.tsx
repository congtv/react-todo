import React from "react";

const Header = () => {
  return (
    <div className="d-flex flex-wrap">
      <button type="button" className="btn btn-primary btn__header">
        Create
      </button>
      <button type="button" className="btn btn-success btn__header">
        Edit
      </button>
      <button type="button" className="btn btn-danger btn__header">
        Danger
      </button>
      <button type="button" className="btn btn-warning btn__header">
        Warning
      </button>
      <button type="button" className="btn btn-info btn__header">
        Info
      </button>
    </div>
  );
};

export default Header;
