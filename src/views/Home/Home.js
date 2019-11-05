import React from "react";
import PropTypes from "prop-types";

import Input from "../../components/Input/Input";

const Home = () => {
  return (
    <div>
      Home page.
      <Input inputType="textarea" type="text" name="test" placeholder="HELP" />
    </div>
  );
};

export default Home;
