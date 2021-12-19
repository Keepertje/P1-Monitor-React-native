import React from 'react';
import { View } from 'react-native';
import {
    LineChart
} from "react-native-chart-kit";
  
export const Chart = props => {
    // Round the maxvalue up
    const maxValue = Math.round((Math.max(...props.data) + 50)/100)*100;

    return(
        <View>
        <LineChart
          data={{
            datasets: [
                /** Transparent dataset for maxvalue */
              {
                    data: [maxValue], 
                    color: () => `rgba(0, 0, 0, 0)` 
              },
              {
                data: props.data
              }
            ]
          }}
          width={300}
          height={220}
          yAxisInterval={2} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: () => `rgba(43, 124, 128, 0.8)`,
            labelColor: () => `rgba(43, 124, 128, 1)`,
           
          }}
          withDots={false}
          bezier
          fromZero={true}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingRight: 40
          }}
        />
      </View>
    )
}

export default Chart;