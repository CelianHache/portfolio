// ts
import { AspectRatio } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

export const YoutubePlayer: React.FC = () => {
    return (
        <AspectRatio ratio={16 / 9} asChild maxW={"1000px"}>
            <ReactPlayer
                width={"100%"}
                height={"100%"}
                url="https://youtu.be/W8tZK_3NwcQ"
                controls
            />
        </AspectRatio>
    );
};
