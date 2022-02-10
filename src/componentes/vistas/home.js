import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

var comisariaData = [
  {
    Comisaria: "Primera Metropolitana 53",
    Direccion: "Ita Ybate esq Centenario 000",
    Ciudad: "luque",
    Barrio: "Molino",
    Dependencia: "Primera Instancia",
    telefono: "(021) 666 666",
    info: "Comisaria fundada el 10/01/1950 por Cristobal Colon.",
    //avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
];
const comisarioData = [
  {
    Nombre: "Isaac Coronel",
    Edad: "26 años",
    Licencia: "Activa",
  },
];

//type CardsComponentsProps = {};

const Cards = () => {
  const [masterDataSource, setMasterDataSource] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");

    var raw = JSON.stringify({
      ciudad: "Asuncion",
      barrio: "Santa Maria",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://node-mysql-isak.herokuapp.com/api/getComisaria",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.result[0][0]);

        setMasterDataSource(result.result[0][0]);

        console.log(comisariaData);
      })
      .catch((error) => console.log("error", error));
  }, []);
  const vista = ({ item }) => {
    console.log("item recibido", item);
    /*comisariaData = [
      {
        Comisaria: item[0].comi_descripcion,
        Direccion: item[0].dire_calle_1 + " " + item[0].dire_calle_2,
        Ciudad: item[0].Ciudad_id_ciudad,
        Barrio: item[0].Barrio_id_barrio,
        Dependencia: item[0].comi_descripcion,
        telefono: item[0].comi_descripcion,
        info: item[0].comi_descripcion,
        //avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
      },
    ];*/
    return (
      // Flat List Item
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.cardContainer}>
            <Card.Title>Comisaria</Card.Title>
            <View style={styles.container}>
              <Image
                style={styles.comisario}
                resizeMode="cover"
                source={require("../../../assets/iconos/comisariaLogo.png")}
              />
            </View>
            <Card.Divider />

            <View style={styles.user}>
              <Text style={styles.name}>Nombre: </Text>
              <Text style={styles.name}>
                {comisariaData[0].Comisaria}
              </Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Direccion: </Text>
              <Text style={styles.name}>
                {comisariaData[0].Direccion}
              </Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Ciudad: </Text>
              <Text style={styles.name}>
                {comisariaData[0].Ciudad}
              </Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Barrio: </Text>
              <Text style={styles.name}>
                {comisariaData[0].Barrio}
              </Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Dependencia: </Text>
              <Text style={styles.name}>
                {comisariaData[0].Dependencia}
              </Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Telefono: </Text>
              <Text style={styles.name}>
                {comisariaData[0].telefono}
              </Text>
            </View>
          </Card>
          <Card>
            <Card.Title>Comisario</Card.Title>
            <View style={styles.container}>
              <Image
                style={styles.comisario}
                resizeMode="cover"
                source={require("../../../assets/iconos/comisarioLogo.png")}
              />
            </View>
            <Card.Divider />
            <View style={styles.user}>
              <Text style={styles.name}>Nombre: </Text>
              <Text style={styles.name}>
                {comisarioData[0].Nombre}
              </Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Edad: </Text>
              <Text style={styles.name}>{comisarioData[0].Edad}</Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Licencia: </Text>
              <Text style={styles.name}>
                {comisarioData[0].Licencia}
              </Text>
            </View>
          </Card>
          <Card>
            <Card.Title>Sub Comisario</Card.Title>
            <View style={styles.container}>
              <Image
                style={styles.comisario}
                resizeMode="cover"
                source={require("../../../assets/iconos/subComisarioLogo.png")}
              />
            </View>
            <Card.Divider />
            <View style={styles.user}>
              <Text style={styles.name}>Nombre: </Text>
              <Text style={styles.name}>
                {comisarioData[0].Nombre}
              </Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Edad: </Text>
              <Text style={styles.name}>{comisarioData[0].Edad}</Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Licencia: </Text>
              <Text style={styles.name}>
                {comisarioData[0].Licencia}
              </Text>
            </View>
          </Card>
          <Card>
            <Card.Title>{comisariaData[0].Comisaria}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              /*source={{
                //uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                require("../../../assets/iconos/comisariaLogo.png")
              }}*/
              source={require("../../../assets/iconos/comisariaLogo.png")}
            />
            <Text style={{ marginBottom: 10 }}>
              {comisariaData[0].info}
            </Text>
            <Button
              icon={
                <Icon
                  name="place"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Como llegar?"
            />
          </Card>
        </View>
      </ScrollView>
    );
  };
  return <>{vista(masterDataSource)}</>;
};

const styles = StyleSheet.create({
  cardContainer: {
    color: "#33A6FF",
  },
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  comisario: {
    //width: Dimensions.get("window").width, // Ancho de ventana

    //position: "absolute", // Posicionamiento
    width: 30,
    height: 30,
    marginRight: 30,
  },
});

export default Cards;
