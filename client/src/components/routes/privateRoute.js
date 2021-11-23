import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const role = useSelector((state)=>state.auth.user?.role);

  if (isAuth)
  return(
   <div>
     <Route component={Component} {...rest} />
   </div>)
 else if (isAuth && role==="Admin") {
    return( <div>
       <Route component={Component} {...rest} />
     </div> )
   }
 else if (isAuth && role==="Developer") {
     return (<div>
       <Route component={Component} {...rest} />
     </div> )
   } 
   else {return <Redirect to="/login" />}
}
