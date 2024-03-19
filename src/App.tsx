import { useEffect, useState } from 'react';
import { app, db } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Router from './components/Router';
import Loader from 'components/Loader';

function App() {
  console.log(db);
  const auth = getAuth(app);

  const [init, setInit] = useState<boolean>(false);
  // auth를 체크하기 전(initialize 전)에는 loader를 띄워주는 용도

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);
  // auth의 currentUser가 있으면 authenticated로 변경

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  )
}

export default App;