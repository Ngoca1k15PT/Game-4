import {
    Alert,
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Utils from '../controllers/Utils'

const GameScreen = ({ onClose }) => {
    const [score, setScore] = useState(1000)
    const [yourBet, setYourBet] = useState(10)
    const [result, setResult] = useState('Play Now !!!')
    const [isPlaying, setIsPlaying] = useState(false)
    const isFirstOpen = useRef(true)
    const [item1, setItem1] = useState(null)
    const [item2, setItem2] = useState(null)
    const [item3, setItem3] = useState(null)
    const [item4, setItem4] = useState(null)
    const [item5, setItem5] = useState(null)
    const [item6, setItem6] = useState(null)
    const [item7, setItem7] = useState(null)
    const [item8, setItem8] = useState(null)
    const [item9, setItem9] = useState(null)
    const [item10, setItem10] = useState(null)
    const [item11, setItem11] = useState(null)
    const [item12, setItem12] = useState(null)
    const [item13, setItem13] = useState(null)
    const [item14, setItem14] = useState(null)
    const [item15, setItem15] = useState(null)

    const items = [
        Utils.images.pokemon1,
        Utils.images.pokemon2,
        Utils.images.pokemon3,
        Utils.images.pokemon4,
        Utils.images.pokemon5,
        Utils.images.pokemon6,
        Utils.images.pokemon7,
        Utils.images.diamond,
    ]

    const handleMinusBet = () => {
        if (yourBet == 10) {
            return
        }
        setYourBet((yourBet) => yourBet - 10)
    }

    const handlePlusBet = () => {
        if (yourBet == score) {
            return
        }
        setYourBet((yourBet) => yourBet + 10)
    }

    const handleCalculateScore = () => {
        let currentScore = 0
        if (item4 == item5 && item5 == item6) {
            currentScore = yourBet * 5
            setResult('YOU WON ' + currentScore)
        } else if (item4 == item5 || item5 == item6 || item4 == item6) {
            currentScore = yourBet * 2
            setResult('YOU WON ' + currentScore)
        } else {
            currentScore = -yourBet
            setResult('YOU LOSE ' + yourBet)
        }
        setScore((preScore) => preScore + currentScore)
    }

    const handleSpin = () => {
        if (yourBet > score) {
            Alert.alert('Notification', 'Please adjust your bet?', [
                {
                    text: 'OK'
                }
            ])
            return
        }
        let count = 0
        setResult('')
        setIsPlaying(true)
        const intervalId = setInterval(() => {
            if (count >= 1000) {
                clearInterval(intervalId)
                setIsPlaying(false)
            } else {
                spin()
                count += 200
            }
        }, 200)
    }

    const spin = () => {
        setItem1(Math.floor(Math.random() * items.length))
        setItem2(Math.floor(Math.random() * items.length))
        setItem3(Math.floor(Math.random() * items.length))
        setItem4(Math.floor(Math.random() * items.length))
        setItem5(Math.floor(Math.random() * items.length))
        setItem6(Math.floor(Math.random() * items.length))
        setItem7(Math.floor(Math.random() * items.length))
        setItem8(Math.floor(Math.random() * items.length))
        setItem9(Math.floor(Math.random() * items.length))
        setItem10(Math.floor(Math.random() * items.length))
        setItem11(Math.floor(Math.random() * items.length))
        setItem12(Math.floor(Math.random() * items.length))
        setItem13(Math.floor(Math.random() * items.length))
        setItem14(Math.floor(Math.random() * items.length))
        setItem15(Math.floor(Math.random() * items.length))
    }

    useEffect(() => {
        spin()
    }, [])

    useEffect(() => {
        if (!isPlaying && !isFirstOpen.current) {
            handleCalculateScore()
        }
        isFirstOpen.current = false
    }, [isPlaying])

    useEffect(() => {
        if (score == 0) {
            Alert.alert('Game Over', 'Click OK to play again', [
                {
                    text: 'OK',
                    onPress: () => {
                        setYourBet(10)
                        setScore(1000)
                        setResult('Play Now !!!')
                    }
                }
            ])
        }
    }, [score])

    return (
        <View
            style={{
                flex: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
            }}
        >
            <StatusBar hidden={true} />
            <ImageBackground
                style={{
                    backgroundColor: 'gray',
                    height: '100%',
                    aspectRatio: 2414 / 1362
                }}
                source={require('../assets/images/img_bg.jpg')}
                resizeMethod='contain'
            >
                {/* <View style={styles.topView}>
                    <TouchableOpacity
                        onPress={onClose}
                        style={{
                            height: '100%',
                            aspectRatio: 1
                        }}
                    />
                    <Text style={styles.score}>{score}</Text>
                </View> */}
                <View style={styles.contentView}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                            paddingVertical: '2%'
                        }}
                    >
                        <Image source={items[item1]} style={styles.itemImg} />
                        <Image source={items[item2]} style={{ ...styles.itemImg }} />
                        <Image source={items[item3]} style={{ ...styles.itemImg }} />
                        <Image source={items[item4]} style={{ ...styles.itemImg }} />
                        <Image source={items[item5]} style={styles.itemImg} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingVertical: '2%' }}>
                        <Image source={items[item6]} style={styles.itemImg} />
                        <Image source={items[item7]} style={{ ...styles.itemImg }} />
                        <Image source={items[item8]} style={{ ...styles.itemImg }} />
                        <Image source={items[item9]} style={{ ...styles.itemImg }} />
                        <Image source={items[item10]} style={styles.itemImg} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingVertical: '2%' }}>
                        <Image source={items[item11]} style={styles.itemImg} />
                        <Image source={items[item12]} style={{ ...styles.itemImg }} />
                        <Image source={items[item13]} style={{ ...styles.itemImg }} />
                        <Image source={items[item14]} style={{ ...styles.itemImg }} />
                        <Image source={items[item15]} style={styles.itemImg} />
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        style={{
                            // backgroundColor: 'red',
                            height: '100%',
                            width: '8%'
                        }}
                    />
                    <TouchableOpacity
                        onPress={handleMinusBet}
                        style={{
                            // backgroundColor: 'blue',
                            height: '100%',
                            width: '8%'
                        }}
                    />
                    <View
                        style={{
                            width: '11%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 12,
                                marginTop: 22
                            }}
                        >
                            {yourBet}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={handlePlusBet}
                        style={{
                            // backgroundColor: 'blue',
                            height: '100%',
                            width: '8%'
                        }}
                    />
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '23%'
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 14,
                                marginTop: 16,
                                fontWeight: 'bold',
                                color: result.includes('LOSE') ? '#fa3232' : '#34eb43'
                            }}
                        >
                            {result}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setYourBet(score)}
                        style={{
                            // backgroundColor: 'blue',
                            height: '100%',
                            width: '11%'
                        }}
                    />
                    <TouchableOpacity
                        onPress={handleSpin}
                        style={{
                            // backgroundColor: 'red',
                            height: '100%',
                            width: '17%'
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    topView: {
        width: '100%',
        height: '15%',
        flexDirection: 'row'
        // backgroundColor: 'green'
        // opacity: 0.5
    },
    contentView: {
        width: '80%',
        alignSelf: 'center',
        flex: 1,
        borderRadius: 5,
        marginTop: 30,
        // backgroundColor:'red'
    },
    bottomView: {
        width: '100%',
        height: '20%',
        // backgroundColor: 'green',
        opacity: 1,
        flexDirection: 'row',
        paddingLeft: '12%'
    },
    itemImg: {
        // backgroundColor: '#dbdbdb',
        flex: 1,
        resizeMode: 'contain',
        height: '100%'
    },
    score: {
        left: '130%',
        marginTop: '1.4%',
        color: 'white'
    }
})
