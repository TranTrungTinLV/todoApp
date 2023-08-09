import { View, Text, StyleSheet } from "react-native"

export default function FlexBox() {
    return (
        <View style={{padding:80,flexDirection:'row',width:'80%',height:300, borderWidth:2,justifyContent:'space-around',alignItems:'stretch'}}>
        <View style={style.top}>
            <Text>1</Text>
        </View>
        <View style={style.container}>
            <Text>2</Text>
        </View>
        <View style={style.bottom}>
            <Text>3</Text>
        </View>

    </View>
    )
}

const style = StyleSheet.create({
    top: {
        backgroundColor: 'red',
        flex:3,
        // width: 100,
        // height: 100,
        alignItems:'center',
        justifyContent:'center'
    },
    container: {
        backgroundColor: 'blue',
        flex:2,
        // width: 100,
        // height: 100,
        alignItems:'center',
        justifyContent:'center'
    },
    bottom: {
        backgroundColor: 'green',
        // width: 100,
        // height: 100,
        alignItems:'center',
        justifyContent:'center'
    }
  })