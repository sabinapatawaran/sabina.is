import Headshot from "../assets/film-photo.JPG";

const About = () => {
    return (
        <section className="nester">
            <img className="profile" src={Headshot} alt="Headshot of myself"/>
            <section className="subnest">
                <p>Sabina Patawaran (she/they) is a Gen Z woman of colour, trying to do the [write] thing. Based on Dharug Ngurra (Sydney, Australia), she is an undergraduate at the University of Sydney, completing the Advanced Economics program and double majoring in economics and international relations.</p>
                <p>Sponsored by her university, she is completing a policy fellowship under Global Voices, and will be attending the UN Commission on the Status of Women 67 in New York in 2023. She is completing a policy paper on blockchain regulation and the financial wellness of immigrant women of colour.</p>
                <p>In 2020, she co-founded the <a href="www.antiracismkit.com.au" target="_blank">Anti-Racism Kit</a> with Jinyoung Kim. She is currently developing the latest iteration of this resource, which is set to be published under Hardie Grant next summer. She is also an aspiring front-end developer.</p>
                <p>Much to her younger self's ire, it seems she <i>has</i> become a #WomanInSTEM. Go figure.</p>
            </section>
        </section>
    );
};

export default About;