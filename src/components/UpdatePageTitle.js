import React from "react";
import {Helmet} from "react-helmet";

const UpdatePageTitle = (props) =>( 

        <>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
        </>
);

export default UpdatePageTitle;