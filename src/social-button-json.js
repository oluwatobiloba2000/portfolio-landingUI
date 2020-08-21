import React from 'react';
import {
    createFromIconfontCN,
    GithubOutlined,
    LinkedinOutlined,
    InstagramOutlined
} from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


const socialButton = [{
        name: "Twitter",
        icon: < IconFont className="social-svg" type = "icon-twitter" / > ,
        link: 'https://twitter.com/Anani_oluwatobi',
        color: "#2283ed"
    },
    {
        name: "facebook",
        icon: < IconFont className="social-svg"type = "icon-facebook" / > ,
        link: 'https://web.facebook.com/oluwatobi.anani.9',
        color:  "#3b5998"
    },
    {
        name: "github",
        icon: < GithubOutlined className="social-svg"/ > ,
        link: 'https://github.com/oluwatobiloba2000',
        color: "black"
    },
    {
        name: "Linkedin",
        icon: < LinkedinOutlined className="social-svg"/ > ,
        link: "https://www.linkedin.com/in/anani-oluwatobiloba-967728183/",
        color: "#0e76a8"
    },
    {
        name: "Instagram",
        icon: < InstagramOutlined className="social-svg"/ > ,
        link: "https://www.instagram.com/anani_oluwatobi/",
        color: "#ff6104"
    }
]

export default socialButton;