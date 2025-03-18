import { isMobile } from "@/utils/mobile";
import { urlRobertoCarlos, urlRobertoCarlosMutada } from "@/utils/url";

export default function RobertoCarlos() {
    return (
        <iframe
            className="w-full h-full"
            width="560"
            height="315"
            src={isMobile() ? urlRobertoCarlosMutada : urlRobertoCarlos}
            title="Feliz Natal"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />
    );
}