import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WishListScreen from "../screen/WishListScreen"

const Stack=createNativeStackNavigator();

const WishListStack=()=>{
    return(
         <Stack.Navigator>
            <Stack.Screen name="Wishlist" component={WishListScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default WishListStack;