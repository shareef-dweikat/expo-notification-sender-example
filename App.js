import React from 'react';
import { StyleSheet,TextInput, View, Button } from 'react-native';
import { notify , initnotify} from 'expo-push-notification-helper';



export default class  App extends React.Component{

  state={
    text:'',
    title:''
  }
   handleNotify() {

      notify("ExponentPushToken[I0WLa-ABXe8muiE-e_2lE-]",
                                    this.state.title, 
                                           this.state.text,
                                                         "default")
      
    
   }
  render(){
    
    return (
      <View style={styles.container}>
      
        <TextInput
                 onChangeText={(title)=>this.setState({title})} 
                 style={{marginBottom:16}} 
                 placeholder="العنوان"
        />
       
        <TextInput 
                 onChangeText={(text)=>this.setState({text})}
                 style={{marginBottom:16}}
                 placeholder="نص الاشعار"
          />
     
        <Button onPress={()=>this.handleNotify()} title="ارسل"/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:32,
    paddingTop:64
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
