import { useKeycloak } from "@react-keycloak/web";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
 const { keycloak } = useKeycloak();
 const isLoggedIn = keycloak.authenticated;

 return (
 <Route
    {...rest}
    render={props => {
        return isLoggedIn
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', }} />
    }}
  />
)};

export default PrivateRoute;