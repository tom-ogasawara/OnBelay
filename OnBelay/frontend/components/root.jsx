import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import InitialRegistration from './auth/initial_reg';
import RegPageContainer from './auth/reg_page_container';
// import ProfileContainer from './profile/profile_container';
import GreetingContainer from './greeting/greeting_container';
// import ConversationsContainer from './conversation/conversations_container';
// import ChatContainer from './conversation/chat_container';
// import MatchContainer from './browse/matches_container';

const Root = ({store}) => {

  function _redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser) {
      replace("/");
    }
  }

  function _redirectIfNotLoggedIn(nextState, replace) {
    if (!store.getState().session.currentUser) {
      replace("/signup");
    }
  }

  const Home = () => {
    return(
      <div></div>
    );
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/signup" component={ RegPageContainer } onEnter={ _redirectIfLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
