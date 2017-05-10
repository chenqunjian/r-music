/**
*	路由
*/

import storage  from './storage';
import App from './app';
import Home from './containers/home'
import Album from './containers/album'
import Play from './containers/play'

const Routes = {
	path: '/',
	component: App,
	indexRoute :{onEnter: (nextState, replace) => replace('/discover/recommend')},
	childRoutes: [
		{ path: 'discover',
		  component:Home,
		  // 这里需要处理
		  indexRoute :{onEnter: (nextState, replace) => {
		  		console.log(nextState)
		  		replace('/discover/recommend')}
			},
		  childRoutes: [
			{ path: 'recommend',
			  getComponent (nextState, cb) {
				require.ensure([], (require)=>{
					 cb(null, require('./containers/recommend').default)
				})
			   }
			},
			{ path: 'playlist',
			  getComponent (nextState, cb) {
				require.ensure([], (require)=>{
					 cb(null, require('./containers/playlist').default)
				})
			   }
			},
			{ path: 'rank',
			  getComponent (nextState, cb) {
				require.ensure([], (require)=>{
					 cb(null, require('./containers/rank').default)
				})
			   }
			},
			{ path: 'djradio',
			  getComponent (nextState, cb) {
				require.ensure([], (require)=>{
					 cb(null, require('./containers/djradio').default)
				})
			   }
			}
		  ]
		},
		{ path: 'music',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/music').default)
			})
		   }
		},
		{ path: 'search',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/search').default)
			})
		   }
		},
		{ path: 'friend',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/friend').default)
			})
		   }
		},
		{ path: 'account',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/account').default)
			})
		   }
		},
		{ path: 'album/:id', 
		  component:Album
		},
		{ path: 'play', 
		 	component:Play
		},
		{ path: 'play/:id', 
		  component:Play
		},
		{ path: 'login/:page', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/login').default)
			})
		   }
		},
		{ path: 'login', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/login').default)
			})
		   },
		    onEnter: function({ params }, replace){

				if( storage.get('token') )
					replace(`/home`)
			}

		},
		{ path: 'register', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/register').default)
			})
		   }
		},
		{ path: '*',// 找不到页面跳转到首页
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/pageNotFound').default)
			})
		   }
		}
	]
};

export default Routes;