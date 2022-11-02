import './App.css';
import Router from './routers/router';
// import {useQuery} from 'react-query';
// import fetchdata from './FetchApi';
// import Form from './form';

function App() {
  // const { data, error, isError, isLoading } = useQuery('users', fetchPosts)
    
  //   if (isLoading) {
  //       return <div>Loading...</div>
  //   }
  //   if (isError) {
  //       return <div>Error! {error.message}</div>
  //   }
    
  //   return (
  //       <div className=''>
  //           <h1 className='container'>Users Name</h1>
  //           {
  //               data.map((users, id) => {
  //                   return <li className='container' key={id}>{users.name}</li>
  //               })
  //           }
    
  //       </div>
  //   )
  return (
    <div className="App">
      <Router />
      {/* <header className="App-header">
      <form class="form-register" action="/signup/post" method="post">
            <div class="form-group">
                <h3 class="theme-normal-1">Email</h3>
                <input type="email" class="form-control" id="__BVID__77" name="email" />
            </div>
                <div class="form-group">
                    <h3 class="theme-normal-1">Password</h3>
                    <input type="password" class="form-control" id="__BVID__78" name="password" />
                </div>
                <div class="form-group button-submit-register mt-2">
                    <div class="row">                    
                        
                        <div class="d-flex align-items-end justify-content-between flex-column col-sm-6 col-12">
                            <button type="submit" class="Button">
                                <div>Sign up</div>
                            </button>
                        </div>
                    </div>
                </div>
        </form>
      </header> */}
    </div>
  );
}

export default App;
