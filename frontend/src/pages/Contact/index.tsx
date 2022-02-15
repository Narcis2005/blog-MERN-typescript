import ContactComponent from "../../components/ContactComponent/ContactComponent";
import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <>
            <Helmet>   
            <meta name="description" content={`You can contact me here, using the form. ` }/>
            <meta property="og:title" content={`Contact - Astronomy blog`}/>
            <meta property="og:url" content="http://blog.chirilovnarcis.ro/contact"/>
            <meta property="og:image" content="https://blog.chirilovnarcis.ro/hero.webp"/>
            <meta property="og:description" content={`You can contact me here, using the form. ` }/>
            <title>{`Contact - Astronomy blog`}</title>
        </Helmet>
            <ContactComponent />
        </>
    );
};

export default Contact;
