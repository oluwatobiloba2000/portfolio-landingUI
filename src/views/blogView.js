import React from 'react';
import nprogress from 'nprogress';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import {Layout, Input, Tooltip, Tag} from 'antd';
import BlogLists from '../components/blogListComponent';
import UpdatePageTitle from '../components/UpdatePageTitle';
import HeaderBar from '../container/HeaderBar';
import SocialButton from '../components/socialButton';
import SingleBlogContainer from '../container/singleBlogContainer';
import {
    SearchOutlined
} from '@ant-design/icons';
import filterSvg from '../assets/images/filter.svg';

const { Content} = Layout;



class BlogView extends React.Component {

  state = {
      selectedBlogId: '',
      message: '',
      selectedBlogURL: '',
      count: 1
  }


  fetchBlogFromRequestParams(){
    console.log('COMPONENT JUST MOUNTED')
    const idToFetch = this.props.match.params.id;
    if(idToFetch){
      if(idToFetch === '3572554724245438'){
       console.log('Fetch blog ooo FROM REQUEST params', idToFetch)
       return  this.setState({message: 'success', selectedBlogId: idToFetch})
      }else if(idToFetch !== '3572554724245438'){
        this.setState({message: 'notFound', selectedBlogId: idToFetch})
        console.log('fetch now')
      }else{
      this.setState({message: 'error'})
    }
   }else{
     console.log('DONT FETCH BLOG BECAUSE THE USER DID NOT REQUEST FOR ONE');
    }
}
   
    fetchBlogFromUserClick = (e) =>{
      this.setState({count: this.state.count + 1})
      const idToFetch = e.target.getAttribute('data-blogid');
      console.log('Fetch blog FROM THE BLOG THE USER CICKED PLS', idToFetch)
      if(idToFetch === '3572554724245438'){
        this.setState({message: 'success', selectedBlogId: idToFetch})
        console.log('fetch now')
      }else if(idToFetch !== '3572554724245438'){
        this.setState({message: 'notFound', selectedBlogId: idToFetch})
        console.log('fetch now')
      }else{
        this.setState({message: 'notFound'})
      }
    }



    componentDidMount(){
      this.fetchBlogFromRequestParams()
      document.getElementsByTagName('body')[0].classList.add('blog-page')
      nprogress.start();
      setTimeout(()=>{
        nprogress.done();
      }, 2000)
    }
    
    componentWillUnmount(){
      document.getElementsByTagName('body')[0].classList.remove('blog-page')
  }
  onAddBlogActive(){
    document.querySelector('.blog-view-container').classList.add('blog-is-active');
  }
  triggerFilterContainer(){
    document.querySelector(`.tag-filter-container`).classList.toggle('open-filter-container');
  }

  search(e){
    console.log(this.props.history)
    e.preventDefault()
    const searchValue = e.target.childNodes[0].part.value;
    console.log(searchValue)
  }

  render(){
    return(
      <div className="full-height">
        <UpdatePageTitle title="Anani Oluwatobiloba || Blog"/>
        <Layout className="full-height">
       <Router>
            <Content className="blog-container">
                <div className="left-div-nav">
                  <Tooltip  title="Filter" placement="right">
                    <img className="filter-svg-blog" onClick={this.triggerFilterContainer} src={filterSvg} alt="filter" />
                  </Tooltip>
                    <SocialButton />
                </div>
                <div className="blogs-lists-container">
                  <div className="blog-search-input-section">
                    <form onSubmit={this.search}>
                     <Input id="search-input" placeholder={"search blogs"}/>
                     <Tooltip placement="bottom" title="search">
                       <button className="search-btn"><SearchOutlined/></button>
                     </Tooltip>
                    </form>
                   <div className="tag-filter-container">
                     <p>Filter by tags</p>
                    <ul>
                      <li>
                        <Link to="/blog?tag=javascript">
                         <Tag color="#108ee9">Javascript</Tag>
                        </Link>
                        </li>
                      <li>
                        <Link to="/blog?tag=fun">
                          <Tag color="#108ee9">Fun</Tag>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?tag=coding">
                         <Tag color="#108ee9">Coding</Tag>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?tag=christmas">
                         <Tag color="#108ee9">Misleading Tag</Tag>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  </div>

                  <div className="blog-lists">
                    <BlogLists />
                  </div>
                </div>

            <div className="blog-view-container">
           
              
              <Switch>
                <Route path="/blog/:id" children={<SingleBlogContainer />}  />
              </Switch>
              
           
            

             {/* <SingleBlogContainer id={selectedBlogId} /> */}
             {/* <>
             {this.state.selectedBlogId
              ? <>{this.state.message === 'success' ? <div className="selected-blog">
                <span onClick={this.onRemoveActive} className="close-blog"><ArrowLeftOutlined/></span>
                   <span className="selected-blog-view">
                  <span className="blog-views-value">
                   <EyeOutlined/>
                     <span className="blog-views-value">
                      <Badge overflowCount={10000000000} count={this.state.count}>
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
           : this.state.message === 'error' ? 'some thing went wrong white fecThing...'
           : this.state.message === 'notFound' ? 'No Blog Found'
          : '' 
         }</>
        : 'click a blog to preview'}
      </> */}
            </div>
            </Content>
        </Router>

          <div className="nav nav-about">
            <div className="handle-bar">
              <span className="handle-rotate handle-bar-span1"></span>
              <span className="handle-rotate handle-bar-span2"></span>
              <span className="handle-rotate handle-bar-span3"></span>
            </div>
           <HeaderBar className="home-nav-li" activeKey="blog"/>
          </div>
        </Layout>
     </div>
      )
    }
  }

export default BlogView;