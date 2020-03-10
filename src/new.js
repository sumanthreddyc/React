class Item extends React.Component {
  render() {
      var post = this.props.post;
      return <li>
          <a href={post.url}>{post.title}</a>
          <Footer post={post}/>
     </li>;
  }
}

class Footer extends React.Component {
  render() {
      var post = this.props.post;
      return <small>
          {post.points} points by {post.postedBy + ' ' + post.postedAgo} |
          { post.commentCount } { post.commentCount === 1 ? ' comment' : ' comments' }
      </small>;
  }
}

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }
  
  componentWillMount() {
      this.fetchLatestNews();
  }
  
  fetchLatestNews() {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(response => response.json())
      .then((data) => {
        data.map((newsId) => {
          fetch(` https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)
          .then(response => response.json())
          .then((itemDetail) => {
            console.log(`Fetched ${itemDetail.id}`)
            this.setState((currentState) => {
              currentState.posts.push(itemDetail);
              return { posts: currentState.posts };
            })
          })
        });
    })
  }
  
  render() {
      return <ol className="posts">
          {this.state.posts.map(function (post) {
              return <Item key={post.id} post={post}/>
          })}
      </ol>;
  }
}

class Header extends React.Component {
  render() {
      return <header>
          <div className="container">
              <h1 className="logo">Hacker News</h1>
          </div>
      </header>
  }
}

class App extends React.Component {
  render() {
      return <div>
          <Header/>
          <div className="container content">
              <Posts/>
          </div>
      </div>;
  }
}

React.render(<App/>, document.getElementById('app'));