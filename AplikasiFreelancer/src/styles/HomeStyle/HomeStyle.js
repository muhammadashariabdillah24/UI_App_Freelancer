import { StyleSheet } from "react-native"



const home = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#FFF'
    },
    // Accomodate Header
    accomodateHeader : {
        flex : 1,
        backgroundColor : '#AF4A53',
        flexDirection : 'column',
        justifyContent : 'flex-start',
    },
    // 

    // Search And Icon
    columnSearchAndHumberger : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal : 20,
        marginTop : 20
    },
    viewSearch : {
        borderRadius : 100,
        backgroundColor : 'rgba(214, 214, 214, 0.37)',
        width : '70%',
        paddingHorizontal : 5
    },
    viewIcon : {
        borderRadius : 100,
        backgroundColor : 'rgba(214, 214, 214, 0.37)',
        width : '20%',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    //
    
    // Content And Image

    // Content
    columnContentAndImage : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginHorizontal : 20,
        marginTop : 10,
        height : '100%',
        flexWrap : 'wrap'
    },
    accomodateContent : {
        flexDirection : 'column',
        top : 25,
        width : '60%',
        position : 'absolute',
        left : 0
    },
    viewContent : {
        marginTop : 10,
        width : '76%',
    },
    titleContent : {
        fontSize : 36,
        color : '#FFF',
        fontFamily : 'lato',
        fontWeight : 'bold'
    },
    textContent : {
        fontSize : 13,
        color : 'rgba(255, 255, 255, 0.6)',
        zIndex : 1,
        fontFamily : 'lato'
    },

    
    // 

    // 

    // Image
    accomodateImage : {
        position : 'absolute',
        width : 250,
        height : 280,
        right : 0,
        left : '30%'
    },
    //

    columnImageCircle : {
        position : 'absolute',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        top : '26%',
        bottom : 0,
        left : 0
    },


    // AccomodateBody
    accomodateBody : {
        flex : 4,
        backgroundColor : '#fff',
        paddingHorizontal : 20,
        borderTopStartRadius : 30,
        borderTopEndRadius : 30,
        bottom : 0,
        top : '46%',
        position : 'absolute'
    },

    // ColumnProfession
    titleProfession : {
        fontSize : 17,
        color : '#000',
        fontFamily : 'Lato',
        marginVertical : 20,
        fontWeight : 'bold'
    },
    titleText : {
        fontWeight : 'bold',
        fontSize : 15
    },
    smallText : {
        fontSize : 10
    },
    accomodateWorkSlider : {
        flexDirection : 'row',
        marginVertical : 10,
        flexWrap : 'wrap'
    },
    imageWorkSlider : {
         marginRight : 10,
    },
    // 

    // Column Top Freelancer
    titleTopFreelancer : {
        fontSize : 17,
        color : '#000',
        fontFamily : 'Lato',
        marginVertical : 10,
        fontWeight : 'bold'
    },
    accomodateimagePeople : {
        flexDirection : 'column'
    },
    accomodateContentPeople : {
        flexDirection : 'column',
        marginHorizontal : 10,
        justifyContent : 'flex-start',
        flexWrap : 'wrap'
    },
    accomodateColumnImagePeople : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        marginVertical : 10
    },
    accomodateRightPrice : {
        flexDirection : 'row'
    },
    viewImagePeople : {
        borderRadius : 10,
        width : 70,
        height : 70
    }

    // 

})


export { home }


// const home = StyleSheet.create({

//     container : {
//         flex : 1,
//         backgroundColor : '#AF4A53'
//     },

//     // Style For Header
//     accomodateHeader : {

//         flex : 5,
//         flexDirection : 'column',
//         justifyContent : 'flex-start',
//         borderTopStartRadius : 30,
//         borderTopEndRadius : 30,
//     },
//     viewTopbar : {
//         marginHorizontal : 10,
//         marginVertical : 40,
//         flexDirection : 'row',
//         justifyContent : 'space-between'
//     },

//     columnSearch : {
//         width : 200,
//         backgroundColor : '#95a5a6',
//         borderRadius : 20,
//         textAlign : 'center'
//     },
//     buttonHumberger : {
//         alignSelf: 'center',
//         width : 25,
//         height : 25,
//         borderRadius : 10,
//         backgroundColor : '#95a5a6'
//     },

//     accomodateViewContentInHeader : {
//         flexDirection : 'row',
//         justifyContent : 'space-between',
//         marginHorizontal : 10
//     },
//     columnTextContent : {
//         maxWidth : 150,
//         width : 150,
//         flexDirection : 'column',
//         justifyContent : 'center'
//     },
//     columnImage : {
        
//     },
//     //
    
//     // Style For Body
//     accomodateBody : {
//         flex : 5,
//         backgroundColor : '#fff',
//         paddingHorizontal : 10,
//         borderTopStartRadius : 30,
//         borderTopEndRadius : 30
//     },


//     titleText : {
//         fontWeight : 'bold',
//         fontSize : 20
//     },
//     accomodateWorkSlider : {
//         flexDirection : 'row',
//         marginVertical : 10
//     },
//     imageWorkSlider : {
//         marginRight : 10,
//         width : 100,
//         height : 100
//     },

//     accomodateimagePeople : {
//        flexDirection : 'column',
//     },
//     accomodateContentPeople : {
//         flexDirection : 'column',
//         marginHorizontal : 10,
//         justifyContent : 'flex-start'
//     },
//     accomodateColumnImagePeople : {
//         flexDirection : 'row',
//         justifyContent : 'flex-start',
//         marginVertical : 10
//     },
//     viewImagePeople : {
//         borderRadius : 10,
//         width : 70,
//         height : 70
//     }
//     // 
// })

// export { home }