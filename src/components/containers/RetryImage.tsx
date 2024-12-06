import { useState } from "react";
import { Image, ImageProps } from "@chakra-ui/react";

interface RetryImageProps extends ImageProps {
    maxRetries?: number;
}

export const RetryImage: React.FC<RetryImageProps> = ({
    src,
    alt,
    maxRetries = 3,
    ...props
}) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    const [retryCount, setRetryCount] = useState(0);

    const handleError = () => {
        if (retryCount < maxRetries) {
            setRetryCount(retryCount + 1);
            setCurrentSrc(`${src}?retry=${retryCount}`);
        } else {
            console.error(
                `Failed to load image ${currentSrc} after ${maxRetries} retries.`
            );
        }
    };

    return (
        <Image {...props} src={currentSrc} alt={alt} onError={handleError} />
    );
};
