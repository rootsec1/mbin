(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2698:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(286),s=a(96),i=function(e){return e&&e.__esModule?e:{default:e}}(a(2699));t.default=(0,r.connect)(function(e){var t=(0,s.getConfig)(e);return{customTermsOfServiceId:t.CustomTermsOfServiceId,privacyPolicyLink:t.PrivacyPolicyLink,siteName:t.SiteName,termsEnabled:"true"===t.EnableCustomTermsOfService,termsOfServiceLink:t.TermsOfServiceLink}})(i.default)},2699:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=k(a(282)),s=k(a(281)),i=k(a(285)),n=k(a(283)),l=k(a(284)),o=k(a(1)),c=k(a(3)),u=a(769),d=a(766),m=a(98),f=O(a(773)),g=a(781),v=k(a(864)),p=k(a(777)),h=k(a(785)),E=a(291),T=k(a(972)),S=a(814),y=O(a(765)),_=a(22);function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}var L=function(e){function t(e){(0,s.default)(this,t);var a=(0,n.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.getTermsOfService=function(){a.setState({customTermsOfServiceId:"",customTermsOfServiceText:"",loading:!0}),(0,g.getTermsOfService)(function(e){a.setState({customTermsOfServiceId:e.id,customTermsOfServiceText:e.text,loading:!1})},function(){f.emitUserLoggedOutEvent("/login?extra="+_.Constants.GET_TERMS_ERROR)})},a.handleLogoutClick=function(e){e.preventDefault(),f.emitUserLoggedOutEvent("/login")},a.handleAcceptTerms=function(){a.setState({loadingAgree:!0,serverError:null}),a.registerUserAction(!0,function(){var e=new URLSearchParams(a.props.location.search).get("redirect_to");e&&e.match(/^\/([^/]|$)/)?E.browserHistory.push(e):f.redirectUserToDefaultTeam()})},a.handleRejectTerms=function(){a.setState({loadingDisagree:!0,serverError:null}),a.registerUserAction(!1,function(){f.emitUserLoggedOutEvent("/login?extra="+_.Constants.TERMS_REJECTED)})},a.registerUserAction=function(e,t){(0,g.updateTermsOfServiceStatus)(a.state.customTermsOfServiceId,e,t,function(){a.setState({loadingAgree:!1,loadingDisagree:!1,serverError:c.default.createElement(d.FormattedMessage,{id:"terms_of_service.api_error",defaultMessage:"Unable to complete the request. If this issue persists, contact your System Administrator."})})})},a.state={customTermsOfServiceId:"",customTermsOfServiceText:"",loading:!0,loadingAgree:!1,loadingDisagree:!1,serverError:null},a.formattedText=(0,m.memoizeResult)(function(e){return(0,S.formatText)(e)}),a}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.termsEnabled?this.getTermsOfService():f.redirectUserToDefaultTeam()}},{key:"render",value:function(){return this.state.loading?c.default.createElement(h.default,null):c.default.createElement("div",null,c.default.createElement(v.default,null),c.default.createElement("div",{className:"signup-header"},c.default.createElement("a",{href:"#",onClick:this.handleLogoutClick},c.default.createElement("span",{className:"fa fa-chevron-left",title:y.localizeMessage("generic_icons.logout","Logout Icon")}),c.default.createElement(d.FormattedMessage,{id:"web.header.logout",defaultMessage:"Logout"}))),c.default.createElement("div",{className:"col-sm-12"},c.default.createElement("div",{className:"signup-team__container padding--less max-width--more"},c.default.createElement("div",null,c.default.createElement("h2",null,c.default.createElement(d.FormattedMessage,{id:"terms_of_service.title",defaultMessage:"Terms of Service"}))),c.default.createElement("div",{className:"signup__markdown min-height--fill"},(0,T.default)(this.formattedText(this.state.customTermsOfServiceText),!1,{mentions:!1})),c.default.createElement("div",{className:"margin--extra"},c.default.createElement(u.ButtonGroup,null,c.default.createElement(u.Button,{bsStyle:"primary",disabled:this.state.loadingAgree||this.state.loadingDisagree,id:"acceptTerms",onClick:this.handleAcceptTerms,type:"submit"},this.state.loadingAgree&&c.default.createElement("span",{className:"fa fa-refresh icon--rotate",title:y.localizeMessage("generic_icons.loading","Loading Icon")}),c.default.createElement(d.FormattedMessage,{id:"terms_of_service.agreeButton",defaultMessage:"I Agree"})),c.default.createElement(u.Button,{bsStyle:"link",disabled:this.state.loadingAgree||this.state.loadingDisagree,id:"rejectTerms",onClick:this.handleRejectTerms,type:"reset"},this.state.loadingDisagree&&c.default.createElement("span",{className:"fa fa-refresh icon--rotate",title:y.localizeMessage("generic_icons.loading","Loading Icon")}),c.default.createElement(d.FormattedMessage,{id:"terms_of_service.disagreeButton",defaultMessage:"I Disagree"}))),Boolean(this.state.serverError)&&c.default.createElement("div",{className:"alert alert-warning margin--extra hidden-xs"},c.default.createElement("i",{className:"fa fa-exclamation-triangle",title:y.localizeMessage("generic_icons.warning","Warning Icon")})," ",this.state.serverError)),c.default.createElement("div",{className:"margin--extra"},c.default.createElement(p.default,{id:"terms_of_service.footnote",defaultMessage:"By choosing 'I Agree', you understand and agree to [Terms of Service]({TermsOfServiceLink}) and [Privacy Policy]({PrivacyPolicyLink}). If you do not agree, you cannot access {siteName}.",values:{siteName:this.props.siteName,TermsOfServiceLink:this.props.termsOfServiceLink,PrivacyPolicyLink:this.props.privacyPolicyLink}})))))}}]),t}(c.default.PureComponent);L.propTypes={customTermsOfServiceId:o.default.string.isRequired,privacyPolicyLink:o.default.string,siteName:o.default.string,termsEnabled:o.default.bool,termsOfServiceLink:o.default.string},L.defaultProps={privacyPolicyLink:"https://about.mattermost.com/default-privacy-policy/",siteName:"Mattermost",termsEnabled:!0,termsOfServiceLink:"https://about.mattermost.com/default-terms/"},t.default=L}}]);
//# sourceMappingURL=20.db3bfeac214b5f3af0c3.js.map