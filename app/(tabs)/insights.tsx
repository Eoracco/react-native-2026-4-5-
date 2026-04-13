import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { cssInterop } from "nativewind";
const SafeAreaView = cssInterop(RNSafeAreaView, { className: "style" });

const Insignts = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Insignts</Text>
        </SafeAreaView>
    )
}

export default Insignts
