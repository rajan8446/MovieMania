import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import HomeScreen from './component/HomeScreen';
import SignUpScreen from './component/SignUpScreen';
import { auth } from './Firebase/firebase';
import { login, logout, selectUser } from './Redux/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged(user =>{
      if(user){
        dispatch(login({
          uid : user.uid,
          email : user.email
        }))
      }
      else {
        dispatch(logout)
      }
    })
  
    return unsubscribe();

  }, [])
  
  return (
    <div className="App">
      {
        !user ?  <SignUpScreen /> : <HomeScreen />
      }
    </div>
  );
}

export default App;
