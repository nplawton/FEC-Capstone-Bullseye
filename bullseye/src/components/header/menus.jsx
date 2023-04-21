import SignInMenu from "./signIn";
import LocationMenu from "./location";

const Menus = ({ isLocationMenuVisible, setLocationMenuVisible, isSignInMenuVisible, setIsSignInMenuVisible, grey, setGrey}) => {


    return (
      <div>
        <LocationMenu 
        isLocationMenuVisible={isLocationMenuVisible}
        setLocationMenuVisible={setLocationMenuVisible}
        grey={grey}
        setGrey={setGrey}
        />
        <SignInMenu 
        isSignInMenuVisible={isSignInMenuVisible}
        setIsSignInMenuVisible={setIsSignInMenuVisible}
        grey={grey}
        setGrey={setGrey}
        />
        
      </div>
    );
  };
  
  export default Menus

