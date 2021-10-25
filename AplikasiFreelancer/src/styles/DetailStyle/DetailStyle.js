import { StyleSheet } from "react-native";


const detail = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#FFF'
    },

    // Style For Header
    accomodateHeader : {
        flex : 1,
        backgroundColor : '#ECC2B9',
    },
    // 

    // Styles Icon Arrow Left
    arrowLeft : {
        position : 'absolute',
        top : 42,
        left : 20
    },
    // 

    // Style Accomodate Image And Profile
    accomodateImageProfile : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        width : 260,
        maxWidth : 260,
        maxHeight : 200,
        top : 120,
        left : 20
    },
    imageProfile : {
        maxWidth : 254,
        maxHeight : 254,
        backgroundColor : '#FFF',
        borderRadius : 20
    },
    textProfile : {
        flexDirection : 'column',
        justifyContent : 'center',
        marginLeft : 30
    },
    textName : {
        fontSize : 15,
        color : '#AF4A53',
        fontWeight : 'bold',
        marginBottom : 5
    },
    textProfession : {
        fontSize : 10,
        color : '#AF4A53',
        opacity : 0.9,
        marginBottom : 5
    },
    imageLocation : {
        width : 12,
        height : 12,
    },
    textLocation: {
        fontSize : 12,
        lineHeight : 20
    },
    buttonHireMe : {
        backgroundColor : '#AF4A53',
        flexDirection : 'column',
        justifyContent : 'center',
        width : '50%',
        height : '20%',
        marginTop : 30, 
        borderRadius : 15,
    },
    textHireMe : {
        textAlign : 'center',
        color : '#FFF',
        fontSize : 12
    },
    // 

    // Style For Body
    accomodateBody : {
        position : 'absolute',
        bottom : 0,
        top : '40%',
        width : '100%',
        flex : 5,
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        backgroundColor : '#FFF',
        paddingHorizontal : 20,
        paddingTop : 8
    },
    titleText  : {
        marginTop : 24,
        marginBottom : 10,
        fontSize : 20,
        fontWeight : 'bold'
    },
    textContent : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        lineHeight : 20,
    },
    accomodateTouchPicker : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginVertical : 20
    },
    buttonTouchPicker : {
        backgroundColor : '#FFF',
        paddingVertical : 5,
        paddingHorizontal : 15,
        borderColor : '#AF4A53',
        borderWidth : 1,
        borderRadius : 20

    },
    textPicker : {
        color : '#AF4A53',
    },
    accomodateImage : {
        justifyContent : 'center',
        width : 408,
        height : 306
    }
    // 
    
})

export { detail }