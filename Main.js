import React from 'react'
import { FlatList, Image, SectionList, Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Main() {

    const Education = [
        { id: 1, date: "Aug 2018 - Oct 2022", course: "Bachelor of Science in Computer Engineering", school: "Rizal Technological University", location: "Mandaluyong City" },
        { id: 2, date: "Jun 2016 - Mar 2018", course: "Science, Technology, Engineering & Mathematics (STEM)", school: "Antipolo City Senior High School", location: "Antipolo City" },
    ]

    const Experience = [
        { id: 1, date: "Jan 2024 - Present", job: "Information System Analyst I", company: "Philippine Statistics Authority" },
        { id: 2, date: "Jan 2023 - Nov 2023", job: "Backend C#.Net Programmer", company: "Breddas Inc." },
    ]

    const Web = [
        { id: 1, data: "HTML" },
        { id: 2, data: "CSS" },
        { id: 3, data: "JavaScript" },
        { id: 4, data: "TypeScript" },
        { id: 5, data: "React" },
        { id: 6, data: "Tailwindcss" },
    ]

    const Programming = [
        { id: 1, data: "Java" },
        { id: 2, data: "C#" },
        { id: 3, data: "MySQL" }
    ]

    return (
        <ScrollView style={{ width: "100%" }}>
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 10,
                backgroundColor: "#313d5d",
            }}>
                <View>
                    <Image source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFcmLmiECd7sg/profile-displayphoto-shrink_200_200/0/1665987272187?e=2147483647&v=beta&t=Wtqv4TFeiZkK9GKbEJo6npia2sITkBlmxbP-sNydkiA' }} style={styles.image} />
                </View>
                <View style={{ margin: 20, alignItems: "center" }}>
                    <Text style={styles.name}>Kyle Rivera Lerio</Text>
                    <Text style={styles.text}>kylelerio15@gmail.com</Text>
                    <Text style={styles.text}>Unit 7 Pagrai Mayamot Antipolo City, Philippines </Text>
                    <Text style={styles.text}>+63-994-859-3685</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#dee4ef", marginHorizontal: 10, marginBottom: 10, paddingBottom: 10 }}>
                <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                    <Text style={styles.textHeader}>EDUCATION</Text>
                    <View
                        style={{
                            borderBottomColor: '#313d5d',
                            borderBottomWidth: 2,
                        }}
                    />
                    <FlatList
                        data={Education}
                        renderItem={({ item }) => (
                            <View>
                                {/* <Text>{item.date}</Text> */}
                                <View style={{
                                    width: "100%",
                                    display: 'flex',
                                    flexDirection: "row",
                                    justifyContent: 'space-between',
                                }}>
                                    <View style={{ width: "70%", marginBottom: 10 }}>
                                        <Text style={styles.subHeader}>{item.course}</Text>
                                        <Text>{item.school}</Text>
                                    </View>
                                    <Text>{item.location}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ marginBottom: 10, marginHorizontal: 10 }}>
                    <Text style={styles.textHeader}>PROFESSIONAL EXPERIENCE</Text>
                    <View
                        style={{
                            borderBottomColor: '#313d5d',
                            borderBottomWidth: 2,
                        }}
                    />
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
                                    <Text style={styles.subHeader}>{item.job}</Text>
                                    <Text>{item.company}</Text>
                                </View>
                                <Text>{item.date}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.textHeader}>SKILLS</Text>
                    <View
                        style={{
                            borderBottomColor: '#313d5d',
                            borderBottomWidth: 2,
                        }}
                    />
                    <View>
                        <View>
                            <Text style={styles.subHeader}>Web Development</Text>
                            <FlatList
                                data={Web}
                                renderItem={({ item }) => (
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        gap: 10
                                    }}>
                                        <Text>{'>'} {item.data}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <View>
                            <Text style={styles.subHeader}>Programming Language</Text>
                            <FlatList
                                data={Programming}
                                renderItem={({ item }) => (
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        gap: 10
                                    }}>
                                        <Text style={styles.generalText}>{'>'} {item.data}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#7ecced"
    },
    text: {
        color: "white",
        fontSize: 18
    },
    subHeader: {
        color: "#313d5d",
        fontSize: 20,
        fontWeight: "bold",
    },
    textHeader: {
        color: "#313d5d",
        fontSize: 25,
        fontWeight: "bold"
    },
    generalText: {
        fontSize: 18
    }
});
