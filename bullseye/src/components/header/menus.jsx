import SignInMenu from "./signIn";
import LocationMenu from "./location";

const Menus = ({ isLocationMenuVisible, setLocationMenuVisible, isSignInMenuVisible, setIsSignInMenuVisible}) => {


    return (
      <div>
        <LocationMenu 
        isLocationMenuVisible={isLocationMenuVisible}
        setLocationMenuVisible={setLocationMenuVisible}
        />
        <SignInMenu 
        isSignInMenuVisible={isSignInMenuVisible}
        setIsSignInMenuVisible={setIsSignInMenuVisible}
        />
        
      </div>
    );
  };
  
  export default Menus

