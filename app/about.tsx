import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground} from 'react-native';
import { Link, router } from 'expo-router';



function about(props) {
    return (

        <ImageBackground style={styles.background} source={require("../assets/images/treeBackground.jpg")}>
          <Text style={styles.title}>
                DUNNING READ NATURAL AREA
            </Text>
            <Text style={styles.missionHeader}> Our Mission</Text>
            <Text style={styles.missionContent}>The Dunning Read Natural Area Park Advisory Council is a volunteer group of community members who are passionate about the DRNA. 
            The group’s mission is to support the Chicago Park District in restoring and preserving this natural area to provide a quality habitat for diverse native plants and
             wildlife as well as opportunities for access, education, and recreation for the entire community.</Text>
           
             <Text style={styles.missionHeader}> Hour Notes</Text>
             <Text style={styles.missionContent}>Natural Areas are open from dawn to dusk daily!</Text>

             <Text style={styles.missionHeader}> Community </Text>
             <Text style={styles.missionContent}>The DRNA PAC is part of a thriving Northwest side community, and over the years, numerous local stakeholders have contributed to the 
             betterment of the natural area. We collaborate with the following partners whenever possible, and are appreciative of their contributions to the site:</Text>

             <Text style={styles.missionHeader}> Volunteer With Us</Text>
             <Text style={styles.missionContent}>Volunteer workdays are held at the DRNA from 9am-12pm on the third Saturday of every month. Activities include clearing invasive species, 
             beautification, litter clean up, and other projects.Are you interested in getting involved or being added to our email list? Want to share your thoughts and ideas or 
             ask questions? <Link style={styles.volunteerLink} href={"https://dunningnatural.org/contact/"}>Please Contact Us</Link> We look forward to hearing from you</Text>
            
            <Link style={styles.indexNavigator} href={"/"}> Back To Home </Link>
            </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },

    title:{
        marginTop: 17,
        fontSize:23,
        fontWeight:"bold",
        color:"white"
   },
   missionHeader:{
        marginTop:15,
        color: "white",
        fontWeight: "bold"
   },
   missionContent:{

        marginTop:5,
        color: "white",
        marginHorizontal: 15,
        textAlign: "center"
   },
   volunteerLink:{
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine:"underline"
   },

   indexNavigator:{
    backgroundColor: "darkblue",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 70,
    fontSize:20,
    fontWeight:"bold",
    borderRadius: 15,
    marginTop: 35,
   }
    
})

export default about;
