import React, { useContext } from "react";
import { Context } from "@/App";

import { format, parseISO, isValid } from "date-fns";
import PropTypes from "prop-types";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Link,
} from "@react-pdf/renderer";
/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */

const styles = StyleSheet.create({
  // Common Styles
  page: { width: 800 },
  headerText: {
    fontWeight: "bold",
    color: "blue",
    marginBottom: 10,
  },
  text: { fontSize: 13, marginVertical: 4 },
  dateRange: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  image: { width: "50px" },
  // Common Flex and Layout Styles
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 13,
    marginLeft: 0,
    marginRight: 0,
  },

  // Default Layout Styles
  defaultLayout: {
    main: {
      display: "flex",
      flexDirection: "column",
      fontSize: 14,
    },
    name: {
      fontSize: 32,
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      marginBottom: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    contactInfo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
      marginBottom: 15,
    },
    headerSection: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      marginBottom: 35,
    },
    section: {
      marginBottom: 10,
      paddingLeft: 0,
    },
  },

  // Alternative Layout Styles
  altLayout: {
    main: {
      display: "flex",
      flexDirection: "row",
      fontSize: 14,
      padding: 30,
    },
    name: {
      fontSize: 30,
      fontWeight: "bold",
      color: "darkblue",
      textAlign: "left",
      marginBottom: 10,
    },
    contactInfo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 10,
      marginBottom: 15,
    },
    aboutMe: {
      display: "flex",
      flexDirection: "row",
      gap: 6,
      marginBottom: 15,
    },
    section: {
      marginBottom: 15,
      paddingLeft: 10,
    },
    educationSection: {
      marginBottom: 15,
      paddingLeft: 10,
    },
  },
});

const formatDate = (date) => {
  if (!date) return ""; // Handle empty or null date input
  const parsedDate = parseISO(date); // Parse date string
  return isValid(parsedDate) ? format(parsedDate, "MMMM yyyy") : ""; // Ensure the date is valid before formatting
};

const PDFFile = ({
  personalDetails = {},
  selectedFont = "sans-serif",
}) => {
  const {educationalBackgroundEntries} = useContext(Context);
  const{professionalExperienceEntries}= useContext(Context);
  return (
    <Document>
      <Page size="A4" style={{ ...styles.page, fontFamily: selectedFont }}>
        <View style={styles.defaultLayout.main}>
          <View
            style={{
              backgroundColor: "black",
              color: "white",
              paddingTop: "26px",
              paddingBottom: "6px",
            }}
          >
            <Text style={{ ...styles.defaultLayout.name, color: "white" }}>
              {personalDetails.name || "Your Name"}
            </Text>
            <View style={styles.defaultLayout.contactInfo}>
              <Text style={styles.text}>
                {personalDetails.email || "Email"}
              </Text>
              <Text style={styles.text}>
                {personalDetails.phoneNumber || "Phone Number"}
              </Text>
              <Text style={styles.text}>
                {personalDetails.location || "Location"}
              </Text>
              {personalDetails.linkedin && (
                <Text style={styles.text}>
                  <Link src={personalDetails.linkedin}>LinkedIn</Link>
                </Text>
              )}
            </View>
          </View>
          <View style={{ padding: 40 }}>
            <View style={styles.defaultLayout.headerSection}>
              <Text
                style={{
                  ...styles.sectionHeader,
                  textAlign: "center",
                  backgroundColor: "#0e374e12",
                }}
              >
                About Me
              </Text>
              <Text>
                {personalDetails.aboutMe || "No Personal Details Added"}
              </Text>
            </View>

            <View style={styles.defaultLayout.headerSection}>
              <Text
                style={{
                  ...styles.sectionHeader,
                  textAlign: "center",
                  backgroundColor: "#0e374e12",
                }}
              >
                Education
              </Text>
              {educationalBackgroundEntries &&
                educationalBackgroundEntries.map((education, index) => (
                  <View
                    key={index}
                    style={{ ...styles.flexRow, gap: 100, padding: 10 }}
                  >
                    <View style={styles.flexColumn}>
                      <Text>
                        {formatDate(education.startSchoolDate)} -{" "}
                        {formatDate(education.endSchoolDate)}
                      </Text>
                      <Text>
                        {education.schoolCity}, {education.schoolCountry}
                      </Text>
                    </View>
                    <View style={styles.flexColumn}>
                      <Text>{education.school}</Text>
                      <Text>{education.degree}</Text>
                    </View>
                  </View>
                ))}
            </View>

            <View style={styles.defaultLayout.headerSection}>
              <Text
                style={{
                  ...styles.sectionHeader,
                  textAlign: "center",
                  backgroundColor: "#0e374e12",
                }}
              >
                Experience
              </Text>
              {
              professionalExperienceEntries &&  
               professionalExperienceEntries.map((experience, index) => (
                  <View
                    key={index}
                    style={{ ...styles.flexRow, gap: 100, padding: 10 }}
                  >
                    <View style={styles.flexColumn}>
                      <Text>
                        {formatDate(experience.startJobDate)} -{" "}
                        {formatDate(experience.endJobDate)}
                      </Text>
                      <Text>
                        {experience.jobLocation}, {experience.jobTitle}
                      </Text>
                    </View>
                    <View style={styles.flexColumn}>
                      <Text>{experience.company}</Text>
                      <Text>{experience.position}</Text>
                      <Text>{experience.description}</Text>
                    </View>
                  </View>
                ))
              }
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

PDFFile.propTypes = {
  personalDetails: PropTypes.array,
  professionalExperiences: PropTypes.array,
  saveEducationalEntries: PropTypes.array,
};

export default PDFFile;
