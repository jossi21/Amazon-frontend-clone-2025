import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataProvider/DataPovider";
import { useNavigate } from "react-router-dom";

const ProtectedRout = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);
  return children;
};

export default ProtectedRout;
