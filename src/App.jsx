import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/animate.css";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Layout from "./containers/Layout/Layout";
import TemplateRoute from "./template-route";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <Layout>
      <TemplateRoute />
    </Layout>
  );
}

export default App;
