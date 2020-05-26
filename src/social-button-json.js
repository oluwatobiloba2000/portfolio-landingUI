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
        link: 'https://twitter.com',
        color: "#2283ed"
    },
    {
        name: "facebook",
        icon: < IconFont className="social-svg"type = "icon-facebook" / > ,
        link: 'https://facebook.com/ananio',
        color:  "#3b5998"
    },
    {
        name: "github",
        icon: < GithubOutlined className="social-svg"/ > ,
        link: 'https://github.com',
        color: "black"
    },
    {
        name: "Linkedin",
        icon: < LinkedinOutlined className="social-svg"/ > ,
        link: "https://Linkedin.com",
        color: "#0e76a8"
    },
    {
        name: "Instagram",
        icon: < InstagramOutlined className="social-svg"/ > ,
        link: "https://instagram.com",
        color: "#ff6104"
    }
]

export default socialButton;