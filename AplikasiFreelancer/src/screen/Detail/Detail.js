import React from "react";
import { 
    View,
    Text,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { detail } from "../../styles/DetailStyle/DetailStyle";



class Detail extends React.Component {

    constructor(props){
        super(props)

        this.state = { 

            id : 0,
            setStyle : {
                backgroundColor : '#FFF',
                paddingVertical : 5,
                paddingHorizontal : 15,
                borderColor : '#AF4A53',
                borderWidth : 1,
                borderRadius : 20
            },
            setTextColor : {color : '#FFF'}
        }
    }

    setId(id){

        if (id === 1) {
            
            this.setState({
                id : id,
                setStyle : {
                    backgroundColor : '#AF4A53',
                    paddingVertical : 5,
                    paddingHorizontal : 15,
                    borderRadius : 20
                }
            })
        } else if (id === 2) {
            this.setState({
                id : id,
                setStyle : {
                    backgroundColor : '#AF4A53',
                    paddingVertical : 5,
                    paddingHorizontal : 15,
                    borderRadius : 20
                }
            })
        } else if (id === 3) {
            this.setState({
                id : id,
                setStyle : {
                    backgroundColor : '#AF4A53',
                    paddingVertical : 5,
                    paddingHorizontal : 15,
                    borderRadius : 20
                }
            })
        }
    }

    render() {
        return (
            <View style={detail.container}>
                <View style={detail.accomodateHeader}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack('Home')
                        }}
                    >

                        <Image 
                            source={require('../../assets/Icon/arrow_left.png')}
                            style={detail.arrowLeft}
                        />

                    </TouchableOpacity>
                    <View style={detail.accomodateImageProfile}>
                        <Image 
                            source={require('../../assets/Image/ImageScreenDetail/ImageProfile.png')}
                            style={detail.imageProfile}
                        />
                        <View style={detail.textProfile}>
                            <Text style={detail.textName}>Muhammad Ashari Abdillah</Text>
                            <Text style={detail.textProfession}>Programmer</Text>
                            <Text style={detail.textLocation}><Image source={require('../../assets/Icon/location.png')} style={detail.imageLocation}/> Jakarta</Text>

                            <Pressable 
                            style={detail.buttonHireMe}
                            onPress={() => {

                            }}
                            >
                                <Text style={detail.textHireMe}>HIRE ME</Text>
                            </Pressable>
                        </View>
                    </View>

                    <ScrollView style={detail.accomodateBody}>
                        
                        {/* Overview */}
                        <Text style={detail.titleText}>Overview</Text>

                        <View style={detail.textContent}>
                            <Text>
                            From humble startups to software used by billions, I’ve had a blast designing things that people love. At Google, I'm proudly building the future of Chrome alongside some of the industry's greatest innovators.
                            </Text>
                        </View>
                        {/*  */}

                        {/* Skills */}

                        <Text style={detail.titleText}>Skills</Text>

                        <View style={detail.textContent}>
                            <Text>
                            UX Design, UI Design, IoT Design, Micro-interaction Design, 3D Illustration
                            </Text>
                        </View>

                        {/*  */}

                        <View style={detail.accomodateTouchPicker}>
                            <TouchableOpacity 
                            style={
                                
                                this.state.id === 1 ? this.state.setStyle : detail.buttonTouchPicker
                            }
                            onPress={() => {
                                id = 1
                                this.setId(id)
                            }}
                            >
                                <Text style={this.state.id === 1 ? this.state.setTextColor : detail.textPicker}>Portofolio</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={
                                
                                this.state.id === 2 ? this.state.setStyle : detail.buttonTouchPicker
                            }
                            onPress={() => {
                                id = 2
                                this.setId(id)
                            }}
                            >
                                <Text style={this.state.id === 2 ? this.state.setTextColor : detail.textPicker}>Clients</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={
                                
                                this.state.id === 3 ? this.state.setStyle : detail.buttonTouchPicker
                            }
                            onPress={() => {
                                id = 3
                                this.setId(id)
                            }}
                            >
                                <Text style={this.state.id === 3 ? this.state.setTextColor : detail.textPicker}>Review</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={detail.accomodateImage}>
                            <Image 
                                source={require('../../assets/Image/ImageScreenDetail/imagePortofolio.png')}
                            />
                        </View>

                    </ScrollView>
                </View>
            </View>
        )
    }
}

export { Detail }