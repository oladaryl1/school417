import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Modal, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Explore(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    // Define your buttons
    const buttons = [
        { name: "Ashtree", image: require('../assets/images/exploreLinks/Ashtree.jpg') },
        { name: "Big Bluestem Grass", image: require('../assets/images/exploreLinks/Bigblue.jpg') },
        { name: "Buckthorn", image: require('../assets/images/exploreLinks/Buckthorn.jpg') },
        { name: "Daisy", image: require('../assets/images/exploreLinks/Daisy.jpg') },
        { name: "Horsetail", image: require('../assets/images/exploreLinks/Horsetail.jpg') },
        { name: "Joepye", image: require('../assets/images/exploreLinks/Joepye.jpg') },
        { name: "New England Aster", image: require('../assets/images/exploreLinks/NewEngland.jpg') },
        { name: "Phragmites", image: require('../assets/images/exploreLinks/Phragmites.jpg') },
        { name: "Prairie Coreopsis", image: require('../assets/images/exploreLinks/Prairie.jpg') },
        { name: "Red Oak", image: require('../assets/images/exploreLinks/RedOak.jpg') },
        { name: "Teasel", image: require('../assets/images/exploreLinks/Teasel.jpg') },
        { name: "Wild Bergamot", image: require('../assets/images/exploreLinks/WildBergamot.jpg') },
    ];

    const openModal = (button: { name: string; image: any; }) => {
        setSelectedButton(button);
        setModalVisible(true);
    };

    return (
        <LinearGradient colors={['dodgerblue','aqua','green']} style={styles.background}>
            <Text style={styles.title}>Plant Life</Text>

            {/* Render buttons inside ScrollView */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {buttons.map((button, index) => (
                    <TouchableOpacity key={index} onPress={() => openModal(button)} style={styles.button}>
                        <Text style={styles.buttonText}>{button.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {selectedButton && (
                            <>
                                <Text style={styles.modalText}>{selectedButton.name}</Text>
                                <Image
                                    source={selectedButton.image}
                                    style={styles.modalImage}
                                />
                            </>
                        )}
                        <TouchableOpacity
                            style={{ ...styles.button, backgroundColor: "darkblue" }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 23,
        fontWeight: "bold",
    },
    button: {
        marginTop: 20,
        backgroundColor: "darkblue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        height: 50,
        width: 200,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
    },
    modalImage: {
        width: 200, // Adjust width and height as needed
        height: 200,
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
});

export default Explore;
