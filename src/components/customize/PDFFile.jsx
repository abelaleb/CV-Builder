import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20 },
  main: {
    display: "flex",
    flexDirection: "column",
    fontSize: 16,
    padding: 20,
  },
  section: { marginBottom: 10, paddingLeft: 0 },
  mainheader: {
    fontSize: 32,
    fontWeight: "bold",
    display: "flex",
  },
  header: { color: "blue", fontWeight: "bold", marginBottom: 10 },
  subheader: {
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 4,
    textDecoration: "underline",
  },
  text: { marginVertical: 4 },
  flexRow: { display: "flex", gap: 100 },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: 4,
    paddingLeft: 0,
  },
  personalInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  name: {
    fontSize: 32,
    fontWeight: "extrabold",
    color: "blue",
  },
  aboutMe: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  educationSection: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    paddingLeft: 0,
  },

  flexContainer: { display: "flex", gap: 10 },
  dateRange: {
    display: "flex",
    gap: 4,
  },
  // Layout-specific styles can go here as well
});

// Layout 1: Single Column
const SingleColumnLayout = ({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) => (
  <View style={styles.main}>
    <View style={styles.personalInfo}>
      <Text style={styles.name}>{personalDetails.name}</Text>
      <Text style={styles.header}>{professionalExperience.position}</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.text}>{personalDetails.email}</Text>
        <Text style={styles.text}>{personalDetails.phoneNumber}</Text>
        <Text style={styles.text}>{personalDetails.location}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subheader}>Profile</Text>
        <Text style={styles.aboutMe}>{personalDetails.aboutMe}</Text>
      </View>
    </View>
    <View style={styles.educationSection}>
      <Text style={styles.subheader}>Education</Text>
      <View style={styles.flexRow}>
        <View style={styles.flexColumn}>
          <Text>
            {educationalBackground.startSchoolDate} -
            {educationalBackground.endSchoolDate}
          </Text>
          <Text>
            {educationalBackground.schoolCity}-
            {educationalBackground.schoolCountry}
          </Text>
        </View>
        <View>
          <Text style={styles.aboutMe}>{educationalBackground.school}</Text>
          <Text style={styles.aboutMe}>{educationalBackground.degree}</Text>
        </View>
      </View>
    </View>
    <View style={styles.section}>
      <Text style={styles.subheader}>Experience</Text>
      <View style={styles.flexRow}>
        <View style={styles.flexColumn}>
          <Text>
            {professionalExperience.startJobDate}-
            {professionalExperience.endJobDate}
          </Text>
          <Text>{professionalExperience.jobLocation}</Text>
        </View>
        <View>
          <Text>{professionalExperience.company}</Text>
          <Text>{professionalExperience.position}</Text>
        </View>
      </View>
    </View>
  </View>
);

// Layout 2: Two Column
const TwoColumnLayout = ({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, ...styles.section }}>
        <Text style={styles.header}>{personalDetails.name}</Text>
        <Text style={styles.about}>{personalDetails.aboutMe}</Text>
      </View>
      <View style={{ flex: 1, ...styles.section }}>
        <Text style={styles.subheader}>Experience</Text>
        <Text>{professionalExperience.company}</Text>
        <Text>{professionalExperience.position}</Text>
      </View>
    </View>
  );

  // Layout 3: Compact
  const CompactLayout = ({
    personalDetails,
    educationalBackground,
    professionalExperience,
  }) => (
    <View style={styles.section}>
      <Text style={styles.header}>{personalDetails.name}</Text>
      <Text style={styles.text}>{personalDetails.aboutMe}</Text>
      <Text style={styles.subheader}>
        Education: {educationalBackground.degree}
      </Text>
      <Text style={styles.subheader}>
        Experience: {professionalExperience.position}
      </Text>
    </View>
  );
};

const PDFFile = ({
  personalDetails,
  educationalBackground,
  professionalExperience,
  selectedLayout,
}) => {
  let LayoutComponent;

  switch (selectedLayout) {
    case "TwoColumn":
      LayoutComponent = TwoColumnLayout;
      break;
    case "Compact":
      LayoutComponent = CompactLayout;
      break;
    default:
      LayoutComponent = SingleColumnLayout;
  }

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
