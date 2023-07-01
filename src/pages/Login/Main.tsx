import { SafeAreaView, Text, View } from "react-native";
import Config from 'react-native-config';
function Main() {
    return (
        <SafeAreaView>
            <View>
                <Text style={{color:'black'}}>{Config.API_URL}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Main;