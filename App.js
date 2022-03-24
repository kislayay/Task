import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,Image} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
        
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image source={require('../project/image/enter-otp-concept-illustration_114360-7897.jpg')} style = {styles.pic} />
           <Text style={{fontWeight:"bold",fontSize:23,color:"black"}}>Do You Want about your</Text>
           <Text style={{fontWeight:"bold",fontSize:23,color:"black"}}>own network?</Text>
           <Text style={{marginTop:18,fontWeight:"normal"}}>Upload your contacts to monitor your</Text>
           <Text style={{fontWeight:"normal"}}>professional and social network for risk or</Text>
           <Text style={{fontWeight:"normal"}}>Opportunities</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose1]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle1}>Back to in The News</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Open News</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:"#EAECEE",
    margin: 0,
    padding: 0,
    opacity: 1,
    
    
  
    
  },
  modalView: {
    margin: 20,
    marginTop: 180,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 45,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 50,
    
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 8,
    padding: 20,
    elevation: 5,
    paddingLeft: 80,
    paddingRight: 80,
    marginTop: 60,
    
  },
  button1: {
    borderRadius: 8,
    padding: 8,
    elevation: 5,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 50,
    
  },
  buttonClose1: {
    backgroundColor: "#228b22",
  },
  buttonOpen: {
    backgroundColor: "#228b22",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  
  },
  textStyle1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 13,
  
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  pic: {
 
    alignItems:"center",
    marginLeft:30,
    height: 120,
    width: 140,
    marginTop: 40,
  },
  
});

export default App;