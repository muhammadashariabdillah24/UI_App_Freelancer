import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native'
import { home } from '../../styles/HomeStyle/HomeStyle'

class Home extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            BGonPress : {backgroundColor : '#AF4A53', paddingHorizontal : 15, paddingVertical : 5, marginRight : 5,borderRadius : 15},
            TextBGonPress : {color : '#FFF', fontSize : 12},
            BGonPressAlternative : {paddingHorizontal : 15, paddingVertical : 5, borderRadius : 15, borderColor : '#AF4A53', borderWidth : 1},
            TextBGonPressAlternative : {color : '#AF4A53', fontSize : 12},
        }
    }

    shouldComponentUpdate(nextState){

        if (this.state.BGonPress && this.state.BGonPressAlternative !== nextState) {
            
            return true

            
        }

    }

    componentDidUpdate(){

        console.log('BGONPRESS' + this.state.BGonPress);
        console.log('BGONPRESSALTERNATIVE' + this.state.BGonPressAlternative);
        console.log('TEXTBGONPRESS' + this.state.TextBGonPress);
        console.log('TEXTBGONPRESSALTERNATIVE' + this.state.TextBGonPressAlternative);
    }


    render() {
        return (
            <View style={home.container}>
                <View style={home.accomodateHeader}>
                    <View style={home.columnSearchAndHumberger}>
                        <View style={home.viewSearch}>
                            <TextInput 
                                inlineImageLeft="search"
                                placeholder="Search Freelancer, Project"
                                style={{textAlign : 'center'}}
                            />
                        </View>

                        <TouchableOpacity style={home.viewIcon}>
                            <Image 
                                source={require('../../assets/Icon/humberger.png')}
                                style={{alignSelf : 'center'}}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={home.columnContentAndImage}>
                        <View style={home.accomodateContent}>
                            <Text style={home.titleContent}>Cari Freelancer</Text>
                            <View style={home.viewContent}>
                                <Text style={home.textContent}>Selesaikan pekerjaandengan talenta terbaik di bidangnya</Text>
                            </View>
                        </View>

                        <Image 
                            source={require('../../assets/Image/ImageScreenHome/people_sitting.png')}
                            style={home.accomodateImage}
                        />

                    </View>

                    <View style={home.columnImageCircle}>
                        <Image 
                            source={require('../../assets/Image/circle.png')}
                            style={{tintColor : '#fc5151'}}
                        />
                    </View>
                </View>

                <View style={home.accomodateBody}>

                    <Text style={home.titleProfession}>Paling Banyak Dicari</Text>

                    <ScrollView horizontal style={home.accomodateWorkSlider}>
                        
                        <View style={home.imageWorkSlider}>
                            
                            <Image 
                                source={require('../../assets/Image/ImageScreenHome/PalingBanyakDicari/Programmer.png')}
                            />
                            <Text style={home.titleText}>
                            Programmer
                            </Text>

                            <Text style={home.smallText}>
                            256 Programmer
                            </Text>

                        </View>

                        <View style={home.imageWorkSlider}>
                        
                            <Image 
                                source={require('../../assets/Image/ImageScreenHome/PalingBanyakDicari/Designer.png')}
                            />

                            <Text style={home.titleText}>
                            Designer
                            </Text>

                            <Text style={home.smallText}>
                            120 Designer
                            </Text>

                        </View>

                        <View style={home.imageWorkSlider}>
                            
                            <Image 
                                source={require('../../assets/Image/ImageScreenHome/PalingBanyakDicari/Social_media.png')}
                            />

                            <Text style={home.titleText}>
                            Sosial Media
                            </Text>

                            <Text style={home.smallText}>
                            67 Sosial Media
                            </Text>

                        </View>

                        <View style={home.imageWorkSlider}>
                            
                            <Image 
                                source={require('../../assets/Image/ImageScreenHome/PalingBanyakDicari/Marketing.png')}
                            />

                            <Text style={home.titleText}>
                            Marketing
                            </Text>

                            <Text style={home.smallText}>
                            102 Marketing
                            </Text>
                        
                        </View>

                    </ScrollView>

                    
                    <View style={{flexDirection : 'row', justifyContent : 'space-between', marginVertical : 20,}}>
                        <Text style={home.titleTopFreelancer}>Top Freelancer</Text>
                        <TouchableOpacity style={{alignSelf : 'center'}}>
                            <Text style={{color : '#AF4A53'}}>Lihat Semua</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={home.accomodateimagePeople}>
                        <View style={home.accomodateColumnImagePeople}>
                        
                            <Image 
                                source={require('../../assets/Image/ImageScreenHome/TopFreelancer/People.png')}
                                style={home.viewImagePeople}
                            />
                            <View style={home.accomodateContentPeople}>

                                <Text style={{fontSize : 15, fontWeight : 'bold'}}>Andrea Hutama Karya</Text>
                                <Text style={{fontSize : 10}}>Programmer</Text>
                                <View style={{flexDirection : 'row',justifyContent : 'flex-start', paddingVertical : 5}}>
                                    <Text style={{fontSize : 10, marginRight : 6}}><Image source={require('../../assets/Icon/star.png')} />49</Text>
                                    <Text style={{fontSize : 10, marginLeft : 6}}><Image source={require('../../assets/Icon/location.png')} /> Bandung</Text>
                                </View>

                                <View style={{flexDirection : 'row'}}>

                                        <Pressable style={this.state.BGonPress}
                                        onPressIn={() => {
                                            this.setState({
                                                BGonPress : {backgroundColor : '#FFF', paddingHorizontal : 15, paddingVertical : 5, marginRight : 5, borderRadius : 15, borderColor : '#AF4A53', borderWidth : 1},
                                                TextBGonPress : {color : '#AF4A53', fontSize : 12}
                                            })
                                        }}

                                        onPressOut={() => {

                                            this.setState({
                                                BGonPress : {backgroundColor : '#AF4A53', paddingHorizontal : 15, paddingVertical : 5, marginRight : 5, borderRadius : 15},
                                                TextBGonPress : {color : '#FFF', fontSize : 12}
                                            })
                                        }}
                                        >
                                            <Text style={this.state.TextBGonPress}>Hire Mere</Text>
                                        </Pressable>

                                        <Pressable style={this.state.BGonPressAlternative}
                                        onPressIn={() => {

                                            this.setState({
                                                BGonPressAlternative : {backgroundColor : '#AF4A53', paddingHorizontal : 15, paddingVertical : 5, borderRadius : 15},
                                                TextBGonPressAlternative : {color : '#FFF', fontSize : 12}
                                            })
                                        }}

                                        onPressOut={() => {
                                            this.setState({
                                                BGonPressAlternative : {paddingHorizontal : 15, paddingVertical : 5, borderRadius : 15, borderColor : '#AF4A53', borderWidth : 1},
                                                TextBGonPressAlternative : {color : '#AF4A53', fontSize : 12}
                                            })

                                            this.props.navigation.push('Detail')
                                        }}
                                        >
                                            <Text style={this.state.TextBGonPressAlternative}>Profile</Text>
                                        </Pressable>
                                </View>

                            </View>

                            
                            <Text style={{alignSelf : 'center', marginTop : 10, marginLeft : 16, fontWeight : 'bold'}}>$55/<Text style={{fontWeight : 'normal'}}>hr</Text></Text>
                            
                        </View>

                    </View>

                </View>
        </View>
        )
    }
}

export { Home }