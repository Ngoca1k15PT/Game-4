import { Dimensions } from 'react-native'

export default {
    screenSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    colors: {
        main: '#E27A07'
    },
    images: {
        pokemon1:require('../assets/images/pokemon1.png'),
        pokemon2:require('../assets/images/pokemon2.png'),
        pokemon3:require('../assets/images/pokemon3.png'),
        pokemon4:require('../assets/images/pokemon4.png'),
        pokemon5:require('../assets/images/pokemon5.png'),
        pokemon6:require('../assets/images/pokemon6.png'),
        pokemon7:require('../assets/images/pokemon7.png'),
        diamond:require('../assets/images/diamond.png'),
    }
}

export const ratioH = (value) => {
    return (value * Dimensions.get('screen').height) / Dimensions.get('screen').width
}
