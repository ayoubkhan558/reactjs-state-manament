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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-4">
        <div className="card w-full">
          <AuthComponentJatoi />
        </div>
        <div className="card w-full">
          <AuthComponentZustand />
        </div>
        <div className="card w-full">
          <AuthComponentValtio />
        </div>
        <div className="card w-full">
          <AuthComponent />
        </div>
        <div className="card w-full">
          <AuthComponentRecoil />
        </div>
        <div className="card w-full">
          <AuthComponentEasypeasy />
        </div>
      </div>

    </div>
  );
}

export default Home;
