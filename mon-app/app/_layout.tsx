import { Stack } from "expo-router";
import react from "react";

const RootLayout = () => {
    return (<Stack>
        <Stack.Screen name="screens"
        options={{
            headerShown:false,
        }}
        />
    </Stack>
    );
};

export default RootLayout;