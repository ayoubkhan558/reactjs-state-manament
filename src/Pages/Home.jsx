import * as yup from 'yup';
import { Notyf } from 'notyf';

import AuthComponentJatoi from '@components/AuthComponentJatoi';
import AuthComponentEasypeasy from '@components/AuthComponentEasypeasy';
import AuthComponentValtio from '@components/AuthComponentValtio';
import AuthComponent from '@components/AuthComponent';
import AuthComponentRecoil from '@components/AuthComponentRecoil';
import AuthComponentZustand from '@components/AuthComponentZustand';

// Create an instance of Notyf
const notyf = new Notyf();

function Home() {


  return (
    <div className="container-main flex flex-col space-y-6 min-h-screen mb-4">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="card flex items-center w-full mt-4 mx-auto">
          <AuthComponentJatoi />
        </div>
        <div className="card flex items-center w-full mt-4 mx-auto">
          <AuthComponentZustand />
        </div>
        <div className="card flex items-center w-full mt-4 mx-auto">
          <AuthComponentEasypeasy />
        </div>
        <div className="card flex items-center w-full mt-4 mx-auto">
          <AuthComponentValtio />
        </div>
        <div className="card flex items-center w-full mt-4 mx-auto">
          <AuthComponent />
        </div>
        <div className="card flex items-center w-full mt-4 mx-auto">
          <AuthComponentRecoil />
        </div>
      </div>

    </div>
  );
}

export default Home;
