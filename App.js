import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const Education = [
    { id: 1, date: "Aug 2018 - Oct 2022", course: "Bachelor of Science in Computer Engineering", school: "Rizal Technological University", location: "Mandaluyong City" },
    { id: 2, date: "Jun 2016 - Mar 2018", course: "Science, Technology, Engineering & Mathematics (STEM)", school: "Antipolo City Senior High School", location: "Antipolo City" },
  ]

  const Experience = [
    { id: 1, date: "Jan 2024 - Present", job: "Information System Analyst I", company: "Philippine Statistics Authority" },
    { id: 2, date: "Jan 2023 - Nov 2023", job: "Backend C#.Net Programmer", company: "Breddas Inc." },
  ]

  const Skills = [
    { title: "Web Development", data: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwindcss'] },
    { title: "Programming", data: ['Java', 'C#', 'MySQL'] },
  ]

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 25 }}>
        <View style={{
          display: 'flex',
          flexDirection: "row",
          justifyContent: 'space-between',
          marginTop: 10
        }}>
          <Image source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFcmLmiECd7sg/profile-displayphoto-shrink_200_200/0/1665987272187?e=2147483647&v=beta&t=Wtqv4TFeiZkK9GKbEJo6npia2sITkBlmxbP-sNydkiA' }} style={styles.image} />
          <View>
            <Text>Kyle Rivera Lerio</Text>
            <Text>kylelerio15@gmail.com</Text>
            <Text>Unit 7 Pagrai Mayamot, 1870 Antipolo City, Philippines </Text>
            <Text>+63-994-859-3685</Text>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text>EDUCATION</Text>
          <FlatList
            data={Education}
            renderItem={({ item }) => (
              <View>
                <Text>{item.date}</Text>
                <View style={{
                  display: 'flex',
                  flexDirection: "row",
                  justifyContent: 'space-between',
                }}>
                  <View>
                    <Text>{item.course}</Text>
                    <Text>{item.school}</Text>
                  </View>
                  <Text>{item.location}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>PROFESSIONAL EXPERIENCE</Text>
          <FlatList
            data={Experience}
            renderItem={({ item }) => (
              <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10
              }}>
                <View>
                  <Text>{item.job}</Text>
                  <Text>{item.company}</Text>
                </View>
                <Text>{item.date}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <Text>SKILLS</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: "100%",
    height: "100%"
  },
  image: {
    width: 100,
    height: 100
  },
  personnel: {
    display: "flex",
    justifyContent: "space-around"
  }
});
