import SignInMenu from "./signIn";
import LocationMenu from "./location";

const Menus = () => {

    return (
      <div>
        <Location />
        <SignInMenu />
      </div>
    );
  };
  
  export default LocationMenu

  const [isLocationMenuVisible, setLocationMenuVisible] = useState(false);
  const [isSignInMenuVisible, setIsSignInMenuVisible] = useState(false);