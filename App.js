import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import Chart from "./components/Chart";
import Header from "./components/Header";
import colors from "./constants/colors";
import env from "./constants/env";

export default function App() {
  const [isCurrent, setCurrent] = useState(0);
  const [dataArray, setDataArray] = useState([0]);
  const [terugGeleverd, setTerugGeleverd] = useState(0);

  const getCurrentWatt = async () => {
    try {
      // Get data from p1 meter. 
      const response = await fetch(env.p1_url);

      const { active_power_w , total_power_export_t1_kwh, total_power_export_t2_kwh} = await response.json();

      makeNewArray( active_power_w);
      setCurrent(active_power_w);
      setTerugGeleverd(total_power_export_t2_kwh+total_power_export_t1_kwh);
    } catch (error) {
      console.log(error);
    }
  };

  const makeNewArray = (active_power_w) => {

      setDataArray((arr) => {
        if(arr.length <30){
        return [...arr, active_power_w];}
        else{
          arr.shift();
          return [...arr, active_power_w];}
        }
      );
    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentWatt();
    }, 1000);
    return () => clearInterval(interval);
  },[]);


  return (
  <View style={styles.screen}>
    <Header/>
    <Card>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Huidige verbruik: </Text>
          <Text style={styles.text}>{isCurrent} Watt</Text>
        </View>
        <Chart data={dataArray}></Chart>
       
    </Card>
    <Card>
      <View style={styles.textContainer}>
      <Ionicons name="md-sunny" size={32} color="#2B7C80" />
        <Text style={styles.titleText}>Teruggeleverd: </Text>
          <Text style={styles.text}>{terugGeleverd} kWh</Text>
        
        </View>
    </Card>
  </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  container: {
   margin:10,
   backgroundColor: "#fff",

  },
  textContainer:{
   // flex:1,
    flexDirection:"row"
  },
  titleText:{
    color: colors.primary,
    fontSize:22
  },
  text: {
    color: colors.accent,
    fontSize:22
  },
});

