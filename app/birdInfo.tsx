import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Modal, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Import the images
import americanCrowImage from './assets/images/exploreLinks/Amcrow.jpg'; // Replace './americanCrowImage.jpg' with the path to your image
import anotherBirdImage from '../assets/images/exploreLinks/Amgold.jpg'; // Add the path to the new bird image
import thirdBirdImage from '../assets/images/exploreLinks/Amrobin.jpg'; // Add the path to the third bird image
import fourthBirdImage from '../assets/images/exploreLinks/Baltimore.jpg'; // Add the path to the fourth bird image
import fifthBirdImage from '../assets/images/exploreLinks/Black.jpg'; // Add the path to the fifth bird image
import sixthBirdImage from '../assets/images/exploreLinks/Brown.jpg'; // Add the path to the sixth bird image
import seventhBirdImage from '../assets/images/exploreLinks/Grackle.jpg'; // Add the path to the seventh bird image
import eighthBirdImage from '../assets/images/exploreLinks/Starling.jpg'; // Add the path to the eighth bird image
import ninthBirdImage from '../assets/images/exploreLinks/House.jpg'; // Add the path to the ninth bird image
import tenthBirdImage from '../assets/images/exploreLinks/Cardinal.jpg'; // Add the path to the tenth bird image
import eleventhBirdImage from '../assets/images/exploreLinks/Redtail.jpg'; // Add the path to the eleventh bird image
import twelfthBirdImage from '../assets/images/exploreLinks/Redwing.jpg'; // Add the path to the twelfth bird image

function Explore() {
    const [showAmericanCrowInfo, setShowAmericanCrowInfo] = useState(false);
    const [showAnotherBirdInfo, setShowAnotherBirdInfo] = useState(false);
    const [showThirdBirdInfo, setShowThirdBirdInfo] = useState(false);
    const [showFourthBirdInfo, setShowFourthBirdInfo] = useState(false);
    const [showFifthBirdInfo, setShowFifthBirdInfo] = useState(false);
    const [showSixthBirdInfo, setShowSixthBirdInfo] = useState(false);
    const [showSeventhBirdInfo, setShowSeventhBirdInfo] = useState(false);
    const [showEighthBirdInfo, setShowEighthBirdInfo] = useState(false);
    const [showNinthBirdInfo, setShowNinthBirdInfo] = useState(false);
    const [showTenthBirdInfo, setShowTenthBirdInfo] = useState(false);
    const [showEleventhBirdInfo, setShowEleventhBirdInfo] = useState(false);
    const [showTwelfthBirdInfo, setShowTwelfthBirdInfo] = useState(false);

    const handleAmericanCrowPress = () => {
        setShowAmericanCrowInfo(true);
    };

    const handleAnotherBirdPress = () => {
        setShowAnotherBirdInfo(true);
    };

    const handleThirdBirdPress = () => {
        setShowThirdBirdInfo(true);
    };

    const handleFourthBirdPress = () => {
        setShowFourthBirdInfo(true);
    };

    const handleFifthBirdPress = () => {
        setShowFifthBirdInfo(true);
    };

    const handleSixthBirdPress = () => {
        setShowSixthBirdInfo(true);
    };

    const handleSeventhBirdPress = () => {
        setShowSeventhBirdInfo(true);
    };

    const handleEighthBirdPress = () => {
        setShowEighthBirdInfo(true);
    };

    const handleNinthBirdPress = () => {
        setShowNinthBirdInfo(true);
    };

    const handleTenthBirdPress = () => {
        setShowTenthBirdInfo(true);
    };

    const handleEleventhBirdPress = () => {
        setShowEleventhBirdInfo(true);
    };

    const handleTwelfthBirdPress = () => {
        setShowTwelfthBirdInfo(true);
    };

    const closeModal = () => {
        setShowAmericanCrowInfo(false);
        setShowAnotherBirdInfo(false);
        setShowThirdBirdInfo(false);
        setShowFourthBirdInfo(false);
        setShowFifthBirdInfo(false);
        setShowSixthBirdInfo(false);
        setShowSeventhBirdInfo(false);
        setShowEighthBirdInfo(false);
        setShowNinthBirdInfo(false);
        setShowTenthBirdInfo(false);
        setShowEleventhBirdInfo(false);
        setShowTwelfthBirdInfo(false);
    };

    return (
        <LinearGradient colors={['dodgerblue', 'aqua', 'green']} style={styles.background}>
            <Text style={styles.title}> Birds</Text>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.button} onPress={handleAmericanCrowPress}>
                <Text style={styles.buttonText}>American Crow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAnotherBirdPress}>
                <Text style={styles.buttonText}>American GoldFinch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleThirdBirdPress}>
                <Text style={styles.buttonText}>American Robin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleFourthBirdPress}>
                <Text style={styles.buttonText}>Baltimore Oriole</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleFifthBirdPress}>
                <Text style={styles.buttonText}>Black Capped Chickadee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSixthBirdPress}>
                <Text style={styles.buttonText}>Brown Headed Cowbird</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSeventhBirdPress}>
                <Text style={styles.buttonText}>Common Grackle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleEighthBirdPress}>
                <Text style={styles.buttonText}>European Starling</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNinthBirdPress}>
                <Text style={styles.buttonText}>House Sparrow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleTenthBirdPress}>
                <Text style={styles.buttonText}>Northern Cardinal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleEleventhBirdPress}>
                <Text style={styles.buttonText}>Red Tailed Hawk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleTwelfthBirdPress}>
                <Text style={styles.buttonText}>Red Winged Black Bird</Text>
            </TouchableOpacity>
            </ScrollView>

            {/* Modal to display American Crow information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showAmericanCrowInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>American Crow</Text>
                        {/* Add the American Crow image */}
                        <Image source={americanCrowImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                            The American crow is a large, intelligent bird known for its adaptability and
                            distinctive cawing sound. It is found throughout North America and is often
                            seen in urban and suburban areas.
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Another Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showAnotherBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>American Goldfinch</Text>
                        {/* Add the Another Bird image */}
                        <Image source={anotherBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                            The American Goldfinch is often found in open areas near thistle plants. Listen
                            for its flight call, which sounds like, “po-ta-to-chip.”
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Third Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showThirdBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>American Robin</Text>
                        {/* Add the Third Bird image */}
                        <Image source={thirdBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        The American Robin is known as the harbinger of spring. You may find this
orange-breasted bird hunting for earthworms, or sitting in a tree chirping,
“cheerily cheer up.”
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Fourth Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showFourthBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Baltimore Oriole</Text>
                        {/* Add the Fourth Bird image */}
                        <Image source={fourthBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        The brightly-colored Baltimore Oriole sings a whistling song. It eats fruit and
weaves a nest that hangs high off the ground.
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Fifth Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showFifthBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Black-capped Chickadee</Text>
                        {/* Add the Fifth Bird image */}
                        <Image source={fifthBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        The Black-capped Chickadee is a tiny bird with a black cap and bib. Known
for its “chicka-dee-dee-dee” call, the bird often hides seeds to eat later. You
may see a chickadee hanging upside down on a tree branch.
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Sixth Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showSixthBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Brown-headed Cowbird</Text>
                        {/* Add the Sixth Bird image */}
                        <Image source={sixthBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        The Brown-headed Cowbird lays its eggs in the nests of other birds, leaving its
young to be raised by other species. Look for it in fields and meadows..
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Seventh Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showSeventhBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Common Grackle</Text>
                        {/* Add the Seventh Bird image */}
                        <Image source={seventhBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        The Common Grackle is found in open woodlands and marshes. The species is
taller and has a longer tail than other similar-looking birds.
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Eighth Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showEighthBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>European Starling</Text>
                        {/* Add the Eighth Bird image */}
                        <Image source={eighthBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        The European Starling was first brought to New York by Shakespeare
enthusiasts. The birds are now found across the country, and often move in
large, noisy flocks.
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Ninth Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showNinthBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>House Sparrow</Text>
                        {/* Add the Ninth Bird image */}
                        <Image source={ninthBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        The House Sparrow is frequently found at backyard feeders, and often nests in
manmade structures, like the eaves of buildings or in street lights.
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Tenth Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showTenthBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Northern Cardinal</Text>
                        {/* Add the Tenth Bird image */}
                        <Image source={tenthBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        The male Northern Cardinal is an eye-catching bright red, while the female is
mostly brown. Both have a sharp crest and may sound as if they’re saying,
“Cheer! Cheer! Cheer!” or “Birdie, birdie, birdie!”
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Eleventh Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showEleventhBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Red-tailed Hawk</Text>
                        {/* Add the Eleventh Bird image */}
                        <Image source={eleventhBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                        Look for the Red-tailed Hawk soaring above open fields, where it hunts for
voles and rabbits. Notice its broad wings and short tail.
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal to display Twelfth Bird information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showTwelfthBirdInfo}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Red-winged Blackbird</Text>
                        {/* Add the Twelfth Bird image */}
                        <Image source={twelfthBirdImage} style={styles.modalImage} />
                        <Text style={styles.modalText}>
                            The Red-winged Blackbird is common in the DRNA and other wetlands across
the U.S. Look for the male’s red and yellow shoulder patches, and listen for its
conk-la-lee song.
                        </Text>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
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
        backgroundColor: 'darkblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        height: 70,
        width: 200,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: '100%',
        overflow: 'hidden',
    },
    modalContainer: {
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
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalImage: {
        width: 200, // Adjust the width as needed
        height: 200, // Adjust the height as needed
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        textAlign: 'center',
    },
    modalCloseButton: {
        marginTop: 20,
        backgroundColor: 'darkblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    modalCloseText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Explore;
