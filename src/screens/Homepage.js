import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import poster1 from '../asset/film1.jpg' 
import poster2 from '../asset/film2.jpg'
import poster3 from '../asset/film3.jpg'
import poster4 from '../asset/film4.jpg'
import poster5 from '../asset/film5.jpg'

const Homepage = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Search" />
            <View style={styles.container2}>
                <Text style={styles.text}>Best Genre</Text>
                <Text style={styles.text2}>Best Movie {">>"}</Text>
            </View>
            <View style={styles.container1}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Action</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Romance</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Thriller</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Horror</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Anime</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Korean</Text>
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.text}>Hot Anime Series</Text>
            <ScrollView style={styles.container4}>
                <View style={styles.container5}>
                    <Image source={poster1} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Image source={poster2} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Image source={poster3} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Image source={poster4} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Image source={poster5} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    container3: {
        backgroundColor: '#fff',
        width: 150,
        height: 30,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    container4: {
        marginTop: 10,
    },
    container5: {
        backgroundColor: '#fff',
        width: '96%',
        height: 'auto',
        borderRadius: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },
    container6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
    },
    image: {
        width: '90%',
        height: 180,
        borderRadius: 10,
    },
    input: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 25,
    },
    text2: {
        color: 'white',
        fontSize: 20,
    },
    text3: {
        fontSize: 20,
        marginHorizontal: 20,
    },
    sinopsis: {
        fontSize: 15,
        marginHorizontal: 20,
        textAlign: 'justify',
        marginTop: 5,
    }
})

export default Homepage