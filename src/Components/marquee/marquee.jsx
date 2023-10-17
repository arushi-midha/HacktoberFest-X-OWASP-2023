import Marquee from "react-fast-marquee";
import "./marquee.css";


export default function HacktoMarquee() {
    return (
        <div className="hackto-marquee">
            <Marquee
                play={true}
                pauseOnHover={false}
                pauseOnClick={false}
                gradient={false}
                speed={70}
            >
                <div className="marquee-content">
                    OWASP! ✖ Hacktoberfest
                </div>
            </Marquee>
        </div>
    );


}