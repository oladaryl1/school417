import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Modal, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Import images for each animal
import animal1Image from '../assets/images/exploreLinks/Coyote.jpg';
import animal2Image from '../assets/images/exploreLinks/Dekaysnake.jpg';
import animal3Image from '../assets/images/exploreLinks/Cottontail.jpg';
import animal4Image from '../assets/images/exploreLinks/Graysquirrel.jpg';
import animal5Image from '../assets/images/exploreLinks/Foxsquirrel.jpg';
import animal6Image from '../assets/images/exploreLinks/Brownbat.jpg';
import animal7Image from '../assets/images/exploreLinks/Meadow.jpg';
import animal8Image from '../assets/images/exploreLinks/Opossum.jpg';
import animal9Image from '../assets/images/exploreLinks/Plainsgarter.jpg';
import animal10Image from '../assets/images/exploreLinks/Prairiecrayfish.jpg';
import animal11Image from '../assets/images/exploreLinks/Raccoon.jpg';
import animal12Image from '../assets/images/exploreLinks/Skunk.jpg';

function Explore() {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);
    const [showPopup6, setShowPopup6] = useState(false);
    const [showPopup7, setShowPopup7] = useState(false);
    const [showPopup8, setShowPopup8] = useState(false);
    const [showPopup9, setShowPopup9] = useState(false);
    const [showPopup10, setShowPopup10] = useState(false);
    const [showPopup11, setShowPopup11] = useState(false);
    const [showPopup12, setShowPopup12] = useState(false);

    const handleButtonPress1 = () => {
        setShowPopup1(true);
    };

    const handleButtonPress2 = () => {
        setShowPopup2(true);
    };

    const handleButtonPress3 = () => {
        setShowPopup3(true);
    };

    const handleButtonPress4 = () => {
        setShowPopup4(true);
    };

    const handleButtonPress5 = () => {
        setShowPopup5(true);
    };

    const handleButtonPress6 = () => {
        setShowPopup6(true);
    };

    const handleButtonPress7 = () => {
        setShowPopup7(true);
    };

    const handleButtonPress8 = () => {
        setShowPopup8(true);
    };

    const handleButtonPress9 = () => {
        setShowPopup9(true);
    };

    const handleButtonPress10 = () => {
        setShowPopup10(true);
    };

    const handleButtonPress11 = () => {
        setShowPopup11(true);
    };

    const handleButtonPress12 = () => {
        setShowPopup12(true);
    };

    const handleClosePopup1 = () => {
        setShowPopup1(false);
    };

    const handleClosePopup2 = () => {
        setShowPopup2(false);
    };

    const handleClosePopup3 = () => {
        setShowPopup3(false);
    };

    const handleClosePopup4 = () => {
        setShowPopup4(false);
    };

    const handleClosePopup5 = () => {
        setShowPopup5(false);
    };

    const handleClosePopup6 = () => {
        setShowPopup6(false);
    };

    const handleClosePopup7 = () => {
        setShowPopup7(false);
    };

    const handleClosePopup8 = () => {
        setShowPopup8(false);
    };

    const handleClosePopup9 = () => {
        setShowPopup9(false);
    };

    const handleClosePopup10 = () => {
        setShowPopup10(false);
    };

    const handleClosePopup11 = () => {
        setShowPopup11(false);
    };

    const handleClosePopup12 = () => {
        setShowPopup12(false);
    };

    return (
        <LinearGradient colors={['dodgerblue', 'aqua', 'green']} style={styles.background}>
            <Text style={styles.title}>Other Animals</Text>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress1}>
                <Text style={styles.buttonText}>Coyote</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress2}>
                <Text style={styles.buttonText}>Dekay Snake</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress3}>
                <Text style={styles.buttonText}>Eastern Cottontail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress4}>
                <Text style={styles.buttonText}>Eastern Gray Squirrel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress5}>
                <Text style={styles.buttonText}>Fox Squirrel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress6}>
                <Text style={styles.buttonText}>Brown Bat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress7}>
                <Text style={styles.buttonText}>Meadow Animal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress8}>
                <Text style={styles.buttonText}>Opossum</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress9}>
                <Text style={styles.buttonText}>Plains Garter Snake</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress10}>
                <Text style={styles.buttonText}>Prairie Crayfish</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress11}>
                <Text style={styles.buttonText}>Raccoon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress12}>
                <Text style={styles.buttonText}>Skunk</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup1}
                onRequestClose={handleClosePopup1}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal1Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Coyote goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup1}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup2}
                onRequestClose={handleClosePopup2}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal2Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Dekay Snake goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup2}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup3}
                onRequestClose={handleClosePopup3}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal3Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Eastern Cottontail goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup3}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup4}
                onRequestClose={handleClosePopup4}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal4Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Eastern Gray Squirrel goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup4}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup5}
                onRequestClose={handleClosePopup5}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal5Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Fox Squirrel goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup5}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup6}
                onRequestClose={handleClosePopup6}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal6Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Brown Bat goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup6}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup7}
                onRequestClose={handleClosePopup7}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal7Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Meadow Animal goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup7}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup8}
                onRequestClose={handleClosePopup8}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal8Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Opossum goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup8}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup9}
                onRequestClose={handleClosePopup9}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal9Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Plains Garter Snake goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup9}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup10}
                onRequestClose={handleClosePopup10}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal10Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Prairie Crayfish goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup10}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup11}
                onRequestClose={handleClosePopup11}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal11Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Raccoon goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup11}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup12}
                onRequestClose={handleClosePopup12}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Image source={animal12Image} style={styles.modalImage} />
                        <Text style={styles.modalText}>Info about Skunk goes here...</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup12}>
                            <Text style={styles.closeButtonText}>Close</Text>
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
        justifyContent: 'center',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'darkblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        width: 200,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: 'darkblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Explore;
