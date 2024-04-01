import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyBooksScreen from "../screen/MyBooksScreen"

const Stack=createNativeStackNavigator();

const MyBooksStack=()=>{
    return(
         <Stack.Navigator>
            <Stack.Screen name="MyBooks" component={MyBooksScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default MyBooksStack;