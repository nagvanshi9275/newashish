import React from "react";



import Main1 from "./Main1";


import { initializeApp } from "firebase/app"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




 export default function Main(){

    const[show, setshow] = React.useState(false);

    const[dark, setdark] = React.useState(true);

    const[user, setuser] = React.useState()



    const firebaseConfig = {
      apiKey: "AIzaSyAdfpQwd1kDHBw9tpxk7VCcGbWzGoB78i4",
      authDomain: "selnana.firebaseapp.com",
      projectId: "selnana",
      storageBucket: "selnana.appspot.com",
      messagingSenderId: "923401057273",
      appId: "1:923401057273:web:9304f487964b9f838f8328"
    };

    const app = initializeApp(firebaseConfig);



    const provider = new GoogleAuthProvider();

    const auth = getAuth();

     function Google(){

      
      console.log(app)

     // const database = getFirestore(app);


      signInWithPopup(auth, provider)
  .then((result) => {

    setshow(true)

    setdark(false)

    setuser(result.user)
  
  }).catch((error) => {

   console.error(error.message)



  });





     }










  return (
    <div id="container" className="container">
      {(dark  && <div className="row">
        <div className="col-sm-12 d-flex flex-column align-items-center">
          <input id="form-control" type="email" placeholder="Email" className="form-control mb-3 custom-input h-sm-180 w-lg-400" />
          <input id="form-control" type="password" placeholder="password" className="form-control mb-3 custom-input h-30" />

          <button
            type="button"
            className="btn btn-primary mb-3 w-100 w-lg-auto h-30"
            style={{ maxWidth: "500px" }}
          >
            Login
          </button>

          <button 
            onClick={Google}
            type="button"
            className="btn btn-dark mb-3  w-100 w-lg-auto h-30"
          >
            <span className="me-2">Signup with</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-google" viewBox="0 0 16 16">
              


            <path d="M14.85 8.076c0-.508-.04-.992-.112-1.454H8v2.745h3.842c-.176 1.092-.687 2.008-1.436 2.617v2.174h2.315c1.353-1.243 2.124-3.067 2.124-5.482z"/>
              <path d="M8 15.154c1.937 0 3.717-.64 4.964-1.715l-2.315-2.174c-1.29.872-2.925 1.387-4.649 1.387-2.822 0-5.179-1.89-6.038-4.446H1.21v2.204C2.957 13.086 5.853 16 8 16z"/>
              <path d="M2.963 9.554c-.18-.508-.277-1.048-.277-1.604s.097-1.096.263-1.602V4.774H.477C.175 5.707 0 6.748 0 7.81s.175 2.103.477 3.036l2.486-1.292z"/>
              <path d="M1.327 9.175H1.32l-.005.175-.005-.175z"/>
              <path d="M8 1.846c1.342 0 2.559.46 3.494 1.22l2.605-2.605C11.717.46 10 0 8 0 4.463 0 1.277 2.236.477 5.513l2.486 1.291C5.557 3.034 6.76 2.256 8 2.03V1.846H1.327C1.878.73 2.808 0 3.855 0c1.063 0 1.991.724 2.281 1.715l2.563 2.563A5.968 5.968 0 0 0 8 1.846z"/>





            </svg>
          </button>
        </div>


      
      </div>
    
      )}

     {show && <Main1 user={user}/>}




    </div>
  );
};

//export default Main;


























