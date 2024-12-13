import React from "react";
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
import { Grid2X2 } from "lucide-react";
/* eslint-disable no-unused-vars */

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
  flexColumn: { display: "flex", flexDirection: "column" },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
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

const emailSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-mail"
    style={{ width: 400, height: 400 }}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const formatDate = (date) => {
  if (!date) return "";
  const parsedDate = parseISO(date);
  return isValid(parsedDate) ? format(parsedDate, "MMMM yyyy") : ""; // Ensure the date is valid before formatting
};

const PDFFile = ({
  personalDetails = {},
  // selectedFont = "sans-serif",
  professionalExperiences = [],
  educationalBackground = [],
}) => {
  // const { educationalBackgroundEntries } = useContext(Context);
  // const { professionalExperienceEntries } = useContext(Context);

  const filteredEducationalEntries = educationalBackground.filter(
    (entry) =>
      entry.school.trim() !== "" ||
      entry.degree.trim() !== "" ||
      entry.startSchoolDate !== "" ||
      entry.endSchoolDate !== "" ||
      entry.schoolCity.trim() !== "" ||
      entry.schoolCountry.trim() !== ""
  );
  const filteredProfessionalExperienceEntries = professionalExperiences.filter(
    (entry) =>
      entry.company.trim() !== "" ||
      entry.position.trim() !== "" ||
      entry.startJobDate !== "" ||
      entry.endJobDate !== "" ||
      entry.jobLocation.trim() !== "" ||
      entry.description.trim() !== ""
  );

  return (
    <Document>
      <Page
        size="A4"
        style={{
          ...styles.page,
          //  fontFamily: selectedFont
        }}
      >
        <View style={styles.defaultLayout.main}>
          <View
            style={{
              backgroundColor: "black",
              color: "white",
              paddingTop: "26px",
              paddingBottom: "6px",
            }}
          >
            <Text
              style={{
                ...styles.defaultLayout.name,
                color: "white",
                textTransform: "capitalize",
              }}
            >
              {personalDetails.name}
            </Text>
            <View style={styles.defaultLayout.contactInfo}>
              <emailSvg />
              <Text style={styles.text}>{personalDetails.email}</Text>
              <Text style={styles.text}>{personalDetails.phoneNumber}</Text>
              <Text style={styles.text}>{personalDetails.location}</Text>
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
              <Text>{personalDetails.aboutMe}</Text>
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
              {filteredEducationalEntries.length === 0 ? (
                <Text>No Educational Details Added</Text>
              ) : (
                filteredEducationalEntries.map((education, index) => (
                  <View key={index} style={{ ...styles.flexRow, gap: 100 }}>
                    <View style={{ ...styles.flexColumn }}>
                      <Text>
                        {formatDate(education.startSchoolDate)} -{" "}
                        {formatDate(education.endSchoolDate)}
                      </Text>
                      <Text>
                        {education.schoolCity}, {education.schoolCountry}
                      </Text>
                    </View>
                    <View style={{ ...styles.flexColumn }}>
                      <Text>{education.school}</Text>
                      <Text>{education.degree}</Text>
                    </View>
                  </View>
                ))
              )}
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
              {filteredProfessionalExperienceEntries.length === 0 ? (
                <Text>No Professional Experience Added</Text>
              ) : (
                filteredProfessionalExperienceEntries.map(
                  (experience, index) => (
                    <View key={index}>
                      <View style={{ ...styles.flexRow, gap: 100 }}>
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
                        </View>
                      </View>{" "}
                      <View
                        style={{ padding: 10, paddingTop: 5, paddingLeft: 0 }}
                      >
                        <Text style={{ color: "#4A4A4A", fontSize: 14 }}>
                          {experience.description}
                        </Text>
                      </View>
                    </View>
                  )
                )
              )}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

PDFFile.propTypes = {
  personalDetails: PropTypes.object,
  professionalExperiences: PropTypes.array, // Changed from professionalExperienceEntries
  educationalBackground: PropTypes.array, // Changed from educationalBackgroundEntries
};

export default PDFFile;
