import React, {useEffect, useState} from 'react';
import {Badge, Spin} from 'antd';
import ReactHtmlParser from 'react-html-parser';
import {
  useParams
} from "react-router-dom";
import {EyeOutlined,
  PaperClipOutlined,
  CommentOutlined,
  ClockCircleOutlined,
  ArrowLeftOutlined,
  TagOutlined} from '@ant-design/icons';
import blogImg from '../assets/images/lasVegas.jpg';



const blogTEXT = `<p> Learning web development is a huge advantage for a biginner, even understanding the basis will be extremely useful     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tempora nam facere iste quisquam impedit facilis doloribus eius? Sint, ab quidem provident facilis illo laboriosam corporis vitae nihil deserunt autem?
Lorem ipsum dolor sit amet consectetur <a href="www.me.com">hello</a> adipisicing elit. Illum, maiores. Fuga fugit unde et blanditiis veritatis obcaecati dolor. Sed corporis dolore reprehenderit pariatur rem accusantium vitae natus provident hic praesentium.
    Animi corrupti, temporibus </p>
    <p>
    aspernatur maiores illum natus eos adipisci voluptas iusto alias quis dolorum quibusdam libero molestias, eligendi rerum obcaecati voluptatem numquam fuga nulla? Cupiditate autem sequi obcaecati quas impedit.
    Magnam vel iusto minus iure earum assumenda incidunt. Autem iure veniam pariatur ipsa aspernatur tenetur sint nulla unde iusto dolor, soluta aut reprehenderit nihil quae tempore possimus dolores inventore placeat.
    Officia laborum laudantium </p>`

const  SingleBlog = ()=> {
    let { id } = useParams();
    // console.log("SingleBlog -> id", id)
    let [message, setMessage] = useState('');
    // console.log("SingleBlog -> message", message)
    let [count, setCount] = useState(10);
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

  useEffect(()=>{
    setLoading(true)
      console.log('from use effect',id)
      if(id !== '2'){
        setTimeout(()=>{
            setLoading(false)
         return setMessage('notFound')
        }, 5000)
        }else if(id === '2'){
          setTimeout(()=>{
            console.log('Fetch data with ID', id);
            setCount(count + 1)
            setLoading(false)
            return  setMessage('success')
          }, 5000)
        }else{
          // setTimeout(()=>{
            setLoading(false)
            return  setMessage('error')
          // }, 5000)
        }
        document.querySelector('.blog-view-container').classList.add('blog-is-active');
        // return ()=>{
        //     console.log('unmount');
        // }
    }, [id])


    const onRemoveActive =()=>{
      document.querySelector('.blog-view-container').classList.remove('blog-is-active');
    }

    
    return (
      <Spin size="large" spinning={loading}>
             {
           <>{message === 'success' ? <div className="selected-blog">
                <span onClick={onRemoveActive} className="close-blog"><ArrowLeftOutlined/></span>
                   <span className="selected-blog-view">
                  <span className="blog-views-value">
                   <EyeOutlined/>
                     <span className="blog-views-value">
                      <Badge overflowCount={10000000000} count={count}>
                      </Badge>
                     </span>
                   </span>
                  </span>
                
                 <img className="main-blog-img" alt="blog" src={blogImg}  />
                    <div className="blog-body">
                    <div className="blog-clip">
                    <PaperClipOutlined/>
                    </div>

                    <div className="selected-blog-widjet">
                    <p className="time-posted"><ClockCircleOutlined/> 2 mins ago</p>
                    <p><CommentOutlined/><span className="comment-values">20</span></p>
                    <p className="blog-date">2nd April 2020</p>
                    </div>

                    <h3 className="blog-title">Full stack web development - The complete roadmap</h3>
                    <p title="coding" className="tag tag-selected-post"><TagOutlined/> Coding</p>
                    <div className="blog-text">
                      { ReactHtmlParser(blogTEXT)}
                    </div>
                </div>
                </div>
           : message === 'error' ? 'some thing went wrong white fecThing...'
           : message === 'notFound' ? 'No Blog Found'
          : ''
         }</>
        }
      </Spin>
    );
  }


export default SingleBlog;