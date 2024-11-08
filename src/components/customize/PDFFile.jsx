import React from "react";
import { format } from "date-fns";

import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Link,
  Image,
} from "@react-pdf/renderer";

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
    aboutMe: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      marginBottom: 35,
    },
    section: {
      marginBottom: 10,
      paddingLeft: 0,
    },
    educationSection: {
      marginBottom: 15,
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

const formatDate = (date) => (date ? format(new Date(date), "MMMM yyyy") : "");

const defaultLayout = ({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) => (
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
        {personalDetails.name}
      </Text>
      <View style={styles.defaultLayout.contactInfo}>
        <Text style={styles.text}>{personalDetails.email}</Text>
        <Text style={styles.text}>{personalDetails.phoneNumber}</Text>
        <Text style={styles.text}>{personalDetails.location}</Text>
      </View>
    </View>
    <View style={{ padding: 40 }}>
      <View style={styles.defaultLayout.aboutMe}>
        <Text
          style={{
            ...styles.sectionHeader,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#0e374e12",
          }}
        >
          About me
        </Text>
        <Text>{personalDetails.aboutMe}</Text>
      </View>
      <View style={styles.defaultLayout.educationSection}>
        <Text
          style={{
            ...styles.sectionHeader,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#0e374e12",
          }}
        >
          Education
        </Text>
        <View style={{ ...styles.flexRow, gap: 100 }}>
          <View style={styles.flexColumn}>
            <Text>
              {formatDate(educationalBackground.startSchoolDate)} -
              {formatDate(educationalBackground.endSchoolDate)}
            </Text>
            <Text>
              {educationalBackground.schoolCity},{" "}
              {educationalBackground.schoolCountry}
            </Text>
          </View>
          <View style={styles.flexColumn}>
            <Text>{educationalBackground.school}</Text>
            <Text>{educationalBackground.degree}</Text>
          </View>
        </View>
      </View>
      <View style={styles.defaultLayout.section}>
        <Text
          style={{
            ...styles.sectionHeader,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#0e374e12",
          }}
        >
          Experience
        </Text>
        <View style={{ ...styles.flexRow, gap: 100 }}>
          <View style={styles.flexColumn}>
            <Text>
              {formatDate(professionalExperience.startJobDate)} -{" "}
              {formatDate(professionalExperience.endJobDate)}
            </Text>
            <Text>
              {professionalExperience.jobLocation},{" "}
              {professionalExperience.jobTitle}
            </Text>
          </View>
          <View style={{ ...styles.flexColumn }}>
            {" "}
            <Text>{professionalExperience.company}</Text>
            <Text>{professionalExperience.position}</Text>
            <Text>{professionalExperience.description}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const AlternativeLayout = ({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) => (
  <View style={styles.altLayout.main}>
    <Text style={styles.altLayout.name}>{personalDetails.name}</Text>
    <View style={styles.altLayout.contactInfo}>
      <Text style={styles.text}>{personalDetails.email}</Text>
      <Text style={styles.text}>{personalDetails.phoneNumber}</Text>
      <Text style={styles.text}>{personalDetails.location}</Text>
    </View>
    <View style={styles.altLayout.aboutMe}>
      <Text style={styles.sectionHeader}>About Me</Text>
      <Text>{personalDetails.aboutMe}</Text>
    </View>
    <View style={styles.altLayout.educationSection}>
      <Text style={styles.sectionHeader}>Education</Text>
      <View style={styles.flexRow}>
        <Text>{educationalBackground.startSchoolDate}</Text>
        <Text>{educationalBackground.endSchoolDate}</Text>
        <Text>{educationalBackground.schoolCity}</Text>
        <Text>{educationalBackground.schoolCountry}</Text>
        <Text>{educationalBackground.school}</Text>
        <Text>{educationalBackground.degree}</Text>
      </View>
    </View>
    <View style={styles.altLayout.section}>
      <Text style={styles.sectionHeader}>Experience</Text>
      <View style={styles.flexRow}>
        <Text>{professionalExperience.company}</Text>
        <Text>{professionalExperience.position}</Text>
        <Text>{professionalExperience.jobTitle}</Text>
        <Text>{professionalExperience.startJobDate}</Text>
        <Text>{professionalExperience.endJobDate}</Text>
        <Text>{professionalExperience.description}</Text>
        <Text>{professionalExperience.jobLocation}</Text>
      </View>
    </View>
  </View>
);

const PDFFile = ({
  personalDetails,
  educationalBackground,
  professionalExperience,
  selectedLayout,
}) => {
  const LayoutComponent =
    selectedLayout === "defaultLayout" ? AlternativeLayout : defaultLayout;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <LayoutComponent
          personalDetails={personalDetails}
          educationalBackground={educationalBackground}
          professionalExperience={professionalExperience}
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
