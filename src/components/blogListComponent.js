import {Link, useLocation} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {Spin, Typography} from 'antd';
import blogImg from '../assets/images/lasVegas.jpg';

import {EyeOutlined,
  CommentOutlined,
  ClockCircleOutlined,
  TagOutlined
} from '@ant-design/icons';

const {Paragraph} = Typography;

function useQuery () {
    return new URLSearchParams(useLocation().search);
}
  
const  BlogList = ()=> {
      let query = useQuery();
      let SearchName = query.get("tag")
    console.log(SearchName, 'query name', 'while query',query.has('tag'))

    // let { id } = useParams();
    // console.log("SingleBlog -> id", id)
    let [message, setMessage] = useState('');
    // console.log("SingleBlog -> message", message)
    let [tagMessage, setTagMessage] = useState('');
    let [loading, setLoading] = useState(true);
    // console.log("SingleBlog -> loading", loading)


     // Function to fetch starts
  //    const fetchBlogFromRequestParams = (id) =>{
  //     console.log('Function was called to fetch data for id : ', id)
  //     const idToFetch = id;
  //     if(idToFetch){
  //       if(idToFetch === '2'){
  //        return  setMessage({ message: 'notFound'})
  //       }else if(idToFetch !== '2'){
  //         this.setState({message: 'notFound', selectedBlogId: idToFetch})
  //         console.log('fetch now')
  //       }else{
  //       this.setState({message: 'error'})
  //     }
  //    }else{
  //      console.log('DONT FETCH BLOG BECAUSE THE USER DID NOT REQUEST FOR ONE');
  //     }
  // }
    let TagExist = query.has('tag');
  useEffect(()=>{
    console.log('from use effect',SearchName)
    
    if(TagExist){
      setLoading(true)
      setMessage('success')
        //   fetch blog list from tag here
        if(SearchName === 'javascript' || SearchName === 'fun' || SearchName === 'coding'){
            setTimeout(()=>{
                setLoading(false)
                return setMessage('success')
            }, 5000)
        }else{
            setLoading(false)
             setMessage('error')
             return setTagMessage(`No Blog associated with "${SearchName}"`)
        }
     }else{
        setLoading(true)
            // fetch all data here
          setTimeout(()=>{
            setLoading(false)
            return  setMessage('success')
          }, 5000)
        }
    
    
    // return ()=>{
        //     console.log('unmount');
        // }
    }, [SearchName, TagExist])

    function onAddBlogActive(){
        document.querySelector('.blog-view-container').classList.add('blog-is-active');
    }
    

    return (
      <Spin size="large" spinning={loading}>
             {
           <>{message === 'success' ?
           <div className="blog">
             <img src={blogImg} alt="blog" style={{width: "100%", height: "180px", borderRadius: "20px"}}/>
              <p  className="blog-date">1st June 2020</p>
              
                <Link onClick={onAddBlogActive} to="/blog/2">
                  <h3 data-blogid="3572554724245438" className="blog-title">Full stack web development - The complete roadmap</h3>
                </Link>
                  <div className="top">
                      <p className="time-posted"><ClockCircleOutlined/> 2 mins ago</p>
                      <p><CommentOutlined/><span className="comment-values">20</span></p>
                      {/* TODO: ADD BADGE THAT ANIMATES WHEN INCREASED */}
                      <span><EyeOutlined/><span className="blog-views-value">10</span></span>
                  </div>
                  {/* TODO: elpisis here ......... */}
                  <div className="blog-body-preview">
                  <Paragraph
                      ellipsis={{
                        rows: 2,
                        expandable: false
                      }}
                      title={`TODO: title here`}
                    >
                      Learning web development is a huge advantage for a biginner, even understanding the basis will be extremely useful Learning web development is a
                      huge advantage for a biginner, even understanding the basis will be extremely usefu Learning web development is a huge advantage for a biginner, even understanding the basis will be extremely useful Learning web development is a
                      huge advantage for a biginner, even understanding the basis will be extremely usefu
                      Learning web development is a huge advantage for a biginner, even understanding the basis will be extremely useful ...
                    </Paragraph>
                  </div>
                  <div className="tag-container">
                  <p title="tag" className="tag"><TagOutlined/> Coding</p>
                  </div>
                </div>
           : message === 'error' ? <p>{tagMessage}</p>
           : message === 'notFound' ? 'No Blog Found'
          : ''
         }</>
        }
      </Spin>
    );
  }


export default BlogList;