import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header/Header";

const Mainoutlet = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <h3>footer</h3>
    </div>
  );
};

export default Mainoutlet;
