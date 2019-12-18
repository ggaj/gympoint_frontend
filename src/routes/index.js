import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// import SignIn from '~/pages/SignIn';
// import SignUp from '~/pages/SignUp';
import Student from '~/pages/Student';
import StudentRegister from '~/pages/Student/Register';
import Plans from '~/pages/Plans';
import PlansRegister from '~/pages/Plans/Register';
import Enrollment from '~/pages/Enrollment';
import EnrollmentRegister from '~/pages/Enrollment/Register';
import Help from '~/pages/Help';
import Help1 from '~/pages/Help/Response';

export default function Routes() {
  return (
    <Switch>
      {/* <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} /> */}
      <Route path="/student/register" component={StudentRegister} isPrivate />
      <Route path="/student" component={Student} isPrivate />
      <Route path="/plans/register" component={PlansRegister} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route
        path="/enrollment/register"
        component={EnrollmentRegister}
        isPrivate
      />
      <Route path="/enrollment" component={Enrollment} isPrivate />
      <Route path="/help" component={Help} isPrivate />
      <Route path="/help1" component={Help1} isPrivate />
    </Switch>
  );
}
