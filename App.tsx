import { ScrollView, StyleSheet, Text, View, TextInput, Image, StatusBar} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Feather name="menu" size={30} style={styles.iconMenu} />
        <Text style={styles.titled}> MyCar </Text>
        <Feather name="shopping-cart" size={30} style={styles.iconBuy} />
      </View>

      <View style={styles.textHeader}>
        <Text style={styles.textDescription}>Shop for</Text>
        <Text style={styles.textDescriptionTwo}>AED 75 more for free shipping</Text>
      </View>

      <Text style={styles.subTitled}>My Cart</Text>

      <View style={styles.firstProduct}>
        <Image source={require("./assets/shoes.jpg")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textAldo}>Aldo</Text>
          <Text>Almond Toe</Text>
          <Text style={styles.textSize}>Size: 39 us</Text>
          <Text style={styles.textAED}>AED 45</Text>
        </View>

        <View style={styles.counter}>

          <View style={styles.counterPlus}>
            <AntDesign name="plus" size={24} style={styles.iconPlus} />

            <Text style={styles.textCounter}>1</Text>
          </View>

          <View style={styles.counterLess}>
            <AntDesign name="minus" size={24} style={styles.iconLess} />
          </View>
        </View>
      </View>

      <View style={styles.firstProduct}>
        <Image source={require("./assets/shoes.jpg")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textAldo}>Aldo</Text>
          <Text>Almond Toe</Text>
          <Text style={styles.textSize}>Size: 39 us</Text>
          <Text style={styles.textAED}>AED 45</Text>
        </View>

        
        <View style={styles.counter}>

          <View style={styles.counterPlus}>
            <AntDesign name="plus" size={24} style={styles.iconPlus} />

            <Text style={styles.textCounter}>1</Text>
          </View>

          <View style={styles.counterLess}>
            <AntDesign name="minus" size={24} style={styles.iconLess} />
          </View>
        </View>
      </View>

      <View>
        <Text>Coupon Code</Text>
        <View>
          <Text>APPLY</Text>
        </View>
      </View>

      <View>
        <Text>Subtotal:</Text>
        <Text>Discount:</Text>
        <Text>VAT:</Text>
        <Text>Total:</Text>
        <Text>AED 126.57</Text>
        <Text>.AED 21.31</Text>
        <Text>AED 5.26</Text>
        <Text>AED 125.52</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          PROCEED TO PAYMENT
        </Text>
      </View>

      <View style={styles.iconFooter}>
        <Ionicons name="md-home" size={30} style={styles.iconsFooterTwo} />
        <FontAwesome name="search" size={30} style={styles.iconsFooterTwo} />
        <FontAwesome name="star" size={30} style={styles.iconsFooterTwo} />
        <FontAwesome name="user" size={30} style={styles.iconsFooterTwo} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    position: 'absolute',
    bottom: "80%",
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
  },

  textHeader: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
  },

  textDescription: {
    color: "#ffffff",
    marginTop: 130,
    marginLeft: 50,
  },

  textDescriptionTwo: {
    fontWeight: "bold",
    marginLeft: 115,
    marginTop: -20,
    color: "#ffffff",
  },

  iconBuy: {
    marginTop: -15,
    alignSelf: "center",
    color: "black",
    marginLeft: 330,
  },

  iconMenu: {
    marginTop: -40,
    color: "black",
    marginLeft: 10,
  },

  titled: {
    alignSelf: "center",
    margin: -20,
    fontWeight: "bold",
  },

  subTitled: {
    alignSelf: "center",
    marginTop: 180,
    fontSize: 20,
  },

  firstProduct: {
    backgroundColor: "#f5f5f5",
    width: "82%",
    height: 130,
    marginLeft: "8%",
    marginTop: 10,
  },


  counterPlus: {
    width: 30,
    height: 30,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#a0a0a0",
    alignSelf: "center",
    alignItems: "center",
    marginTop: -85,
    marginLeft: 270,
  },

  counter: {
    flexDirection: "column",
    marginLeft: -20,
    marginTop: -5,
  },

  textCounter: {
    marginTop: 10,
  },

  counterLess: {
    width: 30,
    height: 30,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#a0a0a0",
    alignSelf: "center",
    marginTop: 35,
    marginLeft: 270,
  },

  iconLess: {
    marginTop: 4,
    color: "black",
    marginLeft: 2,
  },

  iconPlus: {
    marginTop: 3,
    color: "black",
  },

  image: {
    width: 80,
    height: 80,
    marginTop: 20,
    marginLeft: 10,
  },

  textContainer: {
    marginLeft: 100,
    marginTop: -78,
  },

  textAldo: {
    fontSize: 8,
    color: "#909194",
  },

  textSize: {
    fontSize: 12,
    color: "#909194",
  },

  textAED: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },

  footer: {
    position: "absolute",
    height: 50,
    width: "100%",
    backgroundColor: '#333333',
    bottom: "15%",
  },

  textFooter: {
    position: "absolute",
    color: "#ffffff",
    alignSelf: "center",
    marginTop: 15,
  },

  iconFooter: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: -15,
  },

  iconsFooterTwo: {
    margin: 30,
    color: "#a0a0a0",
  },

});