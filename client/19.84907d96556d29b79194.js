(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{2696:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(286),s=a(96),l=a(765),n=function(e){return e&&e.__esModule?e:{default:e}}(a(2697));t.default=(0,r.connect)(function(e){var t=(0,s.getConfig)(e);return{enableSignUpWithEmail:"true"===t.EnableSignUpWithEmail,siteName:t.SiteName,termsOfServiceLink:t.TermsOfServiceLink,privacyPolicyLink:t.PrivacyPolicyLink,customDescriptionText:t.CustomDescriptionText,passwordConfig:(0,l.getPasswordConfig)(t)}})(n.default)},2697:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=P(a(295)),s=P(a(282)),l=P(a(281)),n=P(a(283)),i=P(a(285)),o=P(a(284)),u=P(a(1)),d=P(a(3)),m=a(766),c=a(287),f=a(98),p=a(791),g=L(a(773)),E=a(826),h=a(781),v=P(a(842)),_=a(291),y=P(a(22)),b=L(a(765)),N=P(a(812)),S=P(a(804)),M=P(a(785)),w=P(a(894)),k=P(a(777));function L(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function P(e){return e&&e.__esModule?e:{default:e}}var C=function(e){function t(e){(0,l.default)(this,t);var a=(0,n.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.handleSubmit=a.handleSubmit.bind(a),a.getInviteInfo=a.getInviteInfo.bind(a),a.renderEmailSignup=a.renderEmailSignup.bind(a),a.isUserValid=a.isUserValid.bind(a),a.state=a.getInviteInfo(),a}return(0,o.default)(t,e),(0,i.default)(t,null,[{key:"propTypes",get:function(){return{location:u.default.object,enableSignUpWithEmail:u.default.bool.isRequired,siteName:u.default.string,termsOfServiceLink:u.default.string,privacyPolicyLink:u.default.string,customDescriptionText:u.default.string,passwordConfig:u.default.object}}}]),(0,i.default)(t,[{key:"componentDidMount",value:function(){(0,p.trackEvent)("signup","signup_user_01_welcome")}},{key:"getInviteInfo",value:function(){var e=this,t=new URLSearchParams(this.props.location.search).get("d"),a=new URLSearchParams(this.props.location.search).get("t"),r=new URLSearchParams(this.props.location.search).get("id"),s="",l="",n="",i="",o=!1;if(a&&a.length>0){var u=JSON.parse(t);s=u.email,l=u.display_name,n=u.name,i=u.id}else r&&r.length>0&&(o=!0,(0,E.getInviteInfo)(r,function(t){t?e.setState({loading:!1,serverError:"",teamDisplayName:t.display_name,teamName:t.name,teamId:t.id}):e.setState({loading:!1})},function(){e.setState({loading:!1,noOpenServerError:!0,serverError:d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.invalid_invite",defaultMessage:"The invite link was invalid.  Please speak with your Administrator to receive an invitation."})})}),t=null,a=null);return{data:t,token:a,email:s,teamDisplayName:l,teamName:n,teamId:i,inviteId:r,loading:o,serverError:"",noOpenServerError:!1}}},{key:"handleSignupSuccess",value:function(e,t){var a=this;(0,p.trackEvent)("signup","signup_user_02_complete"),(0,h.loginById)(t.id,e.password,"",function(){a.state.token>0&&v.default.setGlobalItem(a.state.token,(0,r.default)({usedBefore:!0})),(0,h.loadMe)().then(function(){var e=new URLSearchParams(a.props.location.search).get("redirect_to");e?_.browserHistory.push(e):g.redirectUserToDefaultTeam()})},function(t){"api.user.login.not_verified.app_error"===t.id?_.browserHistory.push("/should_verify_email?email="+encodeURIComponent(e.email)+"&teamname="+encodeURIComponent(a.state.teamName)):a.setState({serverError:t.message,isSubmitting:!1})})}},{key:"isUserValid",value:function(){var e=this.refs.email.value.trim();if(!e)return this.setState({nameError:"",emailError:d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.required"}),passwordError:"",serverError:""}),!1;if(!(0,f.isEmail)(e))return this.setState({nameError:"",emailError:d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.validEmail"}),passwordError:"",serverError:""}),!1;var t=this.refs.name.value.trim().toLowerCase();if(!t)return this.setState({nameError:d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.required"}),emailError:"",passwordError:"",serverError:""}),!1;var a=b.isValidUsername(t);if("Cannot use a reserved word as a username."===a)return this.setState({nameError:d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.reserved"}),emailError:"",passwordError:"",serverError:""}),!1;if(a)return this.setState({nameError:d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.usernameLength",values:{min:y.default.MIN_USERNAME_LENGTH,max:y.default.MAX_USERNAME_LENGTH}}),emailError:"",passwordError:"",serverError:""}),!1;var r=this.refs.password.value,s=b.isValidPassword(r,this.props.passwordConfig),l=s.valid,n=s.error;return!(!l&&n)||(this.setState({nameError:"",emailError:"",passwordError:n,serverError:""}),!1)}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),!this.state.isSubmitting&&this.isUserValid()){this.setState({nameError:"",emailError:"",passwordError:"",serverError:"",isSubmitting:!0});var a={email:this.refs.email.value.trim(),username:this.refs.name.value.trim().toLowerCase(),password:this.refs.password.value,allow_marketing:!0};(0,h.createUserWithInvite)(a,this.state.token,this.state.inviteId,this.handleSignupSuccess.bind(this,a),function(e){t.setState({serverError:e.message,isSubmitting:!1})})}}},{key:"renderEmailSignup",value:function(){var e=null,t=d.default.createElement("span",{className:"help-block"},d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.emailHelp",defaultMessage:"Valid email required for sign-up"})),a="form-group";this.state.emailError&&(e=d.default.createElement("label",{className:"control-label"},this.state.emailError),t="",a+=" has-error");var r=null,s=d.default.createElement("span",{className:"help-block"},d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.userHelp",defaultMessage:"Username must begin with a letter, and contain between {min} to {max} lowercase characters made up of numbers, letters, and the symbols '.', '-' and '_'",values:{min:y.default.MIN_USERNAME_LENGTH,max:y.default.MAX_USERNAME_LENGTH}})),l="form-group";this.state.nameError&&(r=d.default.createElement("label",{className:"control-label"},this.state.nameError),s="",l+=" has-error");var n=null,i="form-group";this.state.passwordError&&(n=d.default.createElement("label",{className:"control-label"},this.state.passwordError),i+=" has-error");var o=null;this.state.email&&(o=d.default.createElement(k.default,{id:"signup_user_completed.emailIs",defaultMessage:"Your email address is **{email}**. You'll use this address to sign in to {siteName}.",values:{email:this.state.email,siteName:this.props.siteName}}));var u="margin--extra";return this.state.email&&(u="hidden"),d.default.createElement("form",null,d.default.createElement("div",{className:"inner__content"},d.default.createElement("div",{className:u},d.default.createElement("h5",null,d.default.createElement("strong",null,d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.whatis",defaultMessage:"What's your email address?"}))),d.default.createElement("div",{className:a},d.default.createElement("input",{id:"email",type:"email",ref:"email",className:"form-control",defaultValue:this.state.email,placeholder:"",maxLength:"128",autoFocus:!0,spellCheck:"false",autoCapitalize:"off"}),e,t)),o,d.default.createElement("div",{className:"margin--extra"},d.default.createElement("h5",null,d.default.createElement("strong",null,d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.chooseUser",defaultMessage:"Choose your username"}))),d.default.createElement("div",{className:l},d.default.createElement("input",{id:"name",type:"text",ref:"name",className:"form-control",placeholder:"",maxLength:y.default.MAX_USERNAME_LENGTH,spellCheck:"false",autoCapitalize:"off"}),r,s)),d.default.createElement("div",{className:"margin--extra"},d.default.createElement("h5",null,d.default.createElement("strong",null,d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.choosePwd",defaultMessage:"Choose your password"}))),d.default.createElement("div",{className:i},d.default.createElement("input",{id:"password",type:"password",ref:"password",className:"form-control",placeholder:"",maxLength:"128",spellCheck:"false"}),n)),d.default.createElement("p",{className:"margin--extra"},d.default.createElement("button",{id:"createAccountButton",type:"submit",onClick:this.handleSubmit,className:"btn-primary btn",disabled:this.state.isSubmitting},d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.create",defaultMessage:"Create Account"})))))}},{key:"render",value:function(){var e=this.props,t=e.customDescriptionText,a=e.enableSignUpWithEmail,r=e.location,s=e.privacyPolicyLink,l=e.siteName,n=e.termsOfServiceLink,i=null;if(this.state.serverError&&(i=d.default.createElement("div",{className:"form-group has-error"},d.default.createElement("label",{className:"control-label"},this.state.serverError))),this.state.loading)return d.default.createElement(M.default,null);var o=void 0;if(!a)return null;o=this.renderEmailSignup();var u=null;return!this.state.noOpenServerError&&o&&(u=d.default.createElement("p",null,d.default.createElement(k.default,{id:"create_team.agreement",defaultMessage:"By proceeding to create your account and use {siteName}, you agree to our [Terms of Service]({TermsOfServiceLink}) and [Privacy Policy]({PrivacyPolicyLink}). If you do not agree, you cannot use {siteName}.",values:{siteName:l,TermsOfServiceLink:n,PrivacyPolicyLink:s}}))),this.state.noOpenServerError&&(o=null),d.default.createElement("div",null,d.default.createElement(S.default,null),d.default.createElement("div",{className:"col-sm-12"},d.default.createElement("div",{className:"signup-team__container padding--less"},d.default.createElement("img",{className:"signup-team-logo",src:N.default}),d.default.createElement(w.default,{customDescriptionText:t,siteName:l}),d.default.createElement("h4",{className:"color--light"},d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.lets",defaultMessage:"Let's create your account"})),d.default.createElement("span",{className:"color--light"},d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.haveAccount",defaultMessage:"Already have an account?"})," ",d.default.createElement(c.Link,{to:"/login"+r.search},d.default.createElement(m.FormattedMessage,{id:"signup_user_completed.signIn",defaultMessage:"Click here to sign in."}))),o,i,u)))}}]),t}(d.default.Component);t.default=C},804:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(a(282)),s=f(a(281)),l=f(a(285)),n=f(a(283)),i=f(a(284)),o=f(a(1)),u=f(a(3)),d=a(766),m=a(287),c=a(765);function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,s.default)(this,t),(0,n.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"signup-header"},u.default.createElement(m.Link,{onClick:this.props.onClick,to:this.props.url},u.default.createElement("span",{className:"fa fa-chevron-left",title:(0,c.localizeMessage)("generic_icons.back","Back Icon")}),u.default.createElement(d.FormattedMessage,{id:"web.header.back",defaultMessage:"Back"})))}}]),t}(u.default.PureComponent);p.propTypes={url:o.default.string,onClick:o.default.func},p.defaultProps={url:"/"},t.default=p},812:function(e,t,a){e.exports=a.p+"files/5d6be4015bde2a4e0358c8bc110deadc.png"},894:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a(282)),s=m(a(281)),l=m(a(285)),n=m(a(283)),i=m(a(284)),o=m(a(1)),u=m(a(3)),d=a(766);function m(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return(0,s.default)(this,t),(0,n.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.customDescriptionText,a=e.siteName,r=null;return r=t||u.default.createElement(d.FormattedMessage,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),u.default.createElement(u.default.Fragment,null,u.default.createElement("h1",null,a),u.default.createElement("h4",{className:"color--light"},r))}}]),t}(u.default.PureComponent);c.propTypes={customDescriptionText:o.default.string,siteName:o.default.string},c.defaultProps={siteName:"Mattermost"},t.default=c}}]);
//# sourceMappingURL=19.84907d96556d29b79194.js.map