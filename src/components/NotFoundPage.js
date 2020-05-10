import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Button } from 'antd';

const {Footer, Content } = Layout;


const NotFound = () =>(
    <div>
     <Layout style={{ position: "fixed", top: "0", right: "0", bottom: "0", left: "0"}}>
        <p className="error-title">Oops, We couldn't not find the page you requested</p>
       <Content className="svg-container">
       <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 797.46 814.59"><title>ERROR</title><g id="Layer_2" data-name="Layer 2"><g id="vector"><path className="cls-1" d="M582.11,94.67c45,40.43,74.45,96.84,121.73,177.92,47.5,81.08,113,186.82,88.16,249.86s-140.46,83.36-249.63,124.7S330.42,750.61,235.87,738.5,55,640.07,33.29,544.6c-21.93-95.7,20.55-200.53,51.15-296C114.82,153.14,133.32,67,186.53,28S327.68-2.62,402.14,13.59C476.59,30,537.11,54.25,582.11,94.67Z"/><path className="cls-2" d="M171.08,774.78h-31.3v37.07H93.89V774.78H0v-14L108.48,612.52h31.3V735.28h31.3Zm-77.19-39.5V689.09L61.08,735.28Z"/><path className="cls-2" d="M197.21,712.49c0-57.43,16.71-102.71,75-102.71,58,0,74.14,45.28,74.14,102.71,0,57.13-16.1,102.1-74.14,102.1C213.92,814.59,197.21,769.62,197.21,712.49Zm103.31,0c0-34.64-6.69-61.38-28.26-61.38-21.88,0-29.47,26.74-29.47,61.38,0,34.33,7.59,60.47,29.47,60.47C293.83,773,300.52,746.82,300.52,712.49Z"/><path className="cls-2" d="M535.1,774.78H503.8v37.07H457.92V774.78H364v-14L472.5,612.52h31.3V735.28h31.3Zm-77.18-39.5V689.09L425.1,735.28Z"/><rect className="cls-3" x="536.73" y="761.3" width="17.01" height="14.4" transform="translate(1090.48 1537) rotate(-180)"/><polygon points="555.35 773.45 555.35 787.85 514.88 787.85 514.88 782.61 535.93 773.45 555.35 773.45"/><rect className="cls-3" x="272.34" y="584.66" width="17.01" height="14.4" transform="translate(561.69 1183.71) rotate(-180)"/><polygon points="290.95 596.8 290.95 611.2 250.49 611.2 250.49 605.97 271.54 596.8 290.95 596.8"/><path className="cls-4" d="M536.15,404.21c.86,8.18,18.93,360.89,18.93,360.89H536.15L444.1,433Z"/><path className="cls-5" d="M545.87,365.35c0,47.9-17.61,91-53.26,91-48.94,0-113.73-31.2-131.56-48.81-4.45,13.16-67.57,178.92-67.57,178.92H267.34s16.75-193,48.15-242.5c10.33-13.76,94.63-10.32,137.22,0S545.87,365.35,545.87,365.35Z"/><path className="cls-6" d="M419.46,86.26A6.15,6.15,0,0,1,426,81.34c3.83.27,10.09,10.39,10.09,18.58s-2.31,11.27-1.61,17.22,15.85,86.63,15.85,91.55c3.82.27,17.49-1.64,17.49-1.64l-9.57,38.54H430.39l-18-155.23Z"/><path d="M446.18,100l-5.87,23.72s-57.91-6.73-64.23-8.29,3.2-40.78,9.69-39.18S446.18,100,446.18,100Z"/><path className="cls-7" d="M499.24,170.17c74.08,0,55.81,191.39,47.16,198.55s-100.75-17-108.4-27.66S444.91,170.17,499.24,170.17Z"/><path className="cls-3" d="M472.8,218.76c-4.07,1.38-27.94,10.69-27.94,10.69-.4-4.8-18.75-100-19.88-105.83a47.62,47.62,0,0,0,3.37-18.3C428.35,89.69,422,77,414.17,77S400,89.69,400,105.32a46.85,46.85,0,0,0,3.7,19.06c-.88,11.9-8.78,124.89,7.34,141,17,17,58.33,1.67,83.45-9.75C499.87,253.77,492.54,213.42,472.8,218.76Z"/><rect x="438.44" y="107.64" width="15.5" height="10.83" transform="translate(43.96 -110.73) rotate(14.87)"/><path className="cls-8" d="M546.45,205.33c11.29,21.92-33.42,61.41-45.79,58.47s-32.32-47.08-28.59-55S535.47,184,546.45,205.33Z"/><path className="cls-6" d="M503.78,188.72c0,3.71-22.63,4.65-22.63,0V146h22.63Z"/><ellipse className="cls-9" cx="484.29" cy="123.03" rx="29.54" ry="47.77"/><path d="M462.16,91.38a19.38,19.38,0,0,0,8.75,17.5c8.81,6,15.09,3.35,21.55,9,3.41,3.41,11.76,10,11.84,20.18,0,7.53,2.47,11.33,4.64,11.33s7.89-1.5,11.57-1.5c36.14,0,78.58,37.31,160,37.31,42.53,0,109.27-10.73,109.27-73.19,0-33.73-12.14-74.49-76.31-74.49-40.75,0-69.3,20-102.78,20-43,0-59.58-15.57-89.29-15.57-21.16,0-68.78,12.26-68.78,44.38,0,12.2,3.82,15.74,5,16.37C458,101.36,460.33,94.44,462.16,91.38Z"/><circle className="cls-9" cx="501.26" cy="134.34" r="7.54"/></g></g></svg>
       </Content>
       <Footer className="notfound-footer">
        <Button type="dashed">
            <Link to="/">Go home</Link>
        </Button>
       </Footer>
     </Layout>
    </div>
)

export default NotFound;