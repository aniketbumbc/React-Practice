import React from "react";

const WithClass = (WrappedComponent, classNamed) => {
  return props => (
    <div className={classNamed}>
      <WrappedComponent></WrappedComponent>
    </div>
  );
};

export default WithClass;
