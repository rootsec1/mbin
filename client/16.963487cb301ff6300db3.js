(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{2691:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=E(a(282)),r=E(a(281)),s=E(a(285)),n=E(a(283)),d=E(a(284)),u=E(a(771)),o=E(a(1)),i=E(a(3)),f=E(a(290)),c=a(766),m=a(98),p=a(781),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(765)),_=E(a(804));function E(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){(0,r.default)(this,t);var a=(0,n.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.handleSendLink=a.handleSendLink.bind(a),a.state={error:"",updateText:""},a}return(0,d.default)(t,e),(0,s.default)(t,[{key:"handleSendLink",value:function(e){var t=this;e.preventDefault();var a=f.default.findDOMNode(this.refs.email).value.trim().toLowerCase();a&&(0,m.isEmail)(a)?(this.setState({error:""}),(0,p.sendPasswordResetEmail)(a,function(){t.setState({error:null,updateText:i.default.createElement("div",{className:"reset-form alert alert-success"},i.default.createElement(c.FormattedMessage,{id:"password_send.link",defaultMessage:"If the account exists, a password reset email will be sent to:"}),i.default.createElement("div",null,i.default.createElement("b",null,a)),i.default.createElement("br",null),i.default.createElement(c.FormattedMessage,{id:"password_send.checkInbox",defaultMessage:"Please check your inbox."}))}),(0,u.default)(f.default.findDOMNode(t.refs.reset_form)).hide()},function(e){t.setState({error:e.message,update_text:null})})):this.setState({error:i.default.createElement(c.FormattedMessage,{id:"password_send.error",defaultMessage:"Please enter a valid email address."})})}},{key:"render",value:function(){var e=null;this.state.error&&(e=i.default.createElement("div",{className:"form-group has-error"},i.default.createElement("label",{className:"control-label"},this.state.error)));var t="form-group";return e&&(t+=" has-error"),i.default.createElement("div",null,i.default.createElement(_.default,null),i.default.createElement("div",{className:"col-sm-12"},i.default.createElement("div",{className:"signup-team__container"},i.default.createElement("h3",null,i.default.createElement(c.FormattedMessage,{id:"password_send.title",defaultMessage:"Password Reset"})),this.state.updateText,i.default.createElement("form",{onSubmit:this.handleSendLink,ref:"reset_form"},i.default.createElement("p",null,i.default.createElement(c.FormattedMessage,{id:"password_send.description",defaultMessage:"To reset your password, enter the email address you used to sign up"})),i.default.createElement("div",{className:t},i.default.createElement("input",{type:"email",className:"form-control",name:"email",ref:"email",placeholder:h.localizeMessage("password_send.email","Email"),spellCheck:"false"})),e,i.default.createElement("button",{type:"submit",className:"btn btn-primary"},i.default.createElement(c.FormattedMessage,{id:"password_send.reset",defaultMessage:"Reset my password"}))))))}}]),t}(i.default.Component);v.defaultProps={},v.propTypes={params:o.default.object.isRequired},t.default=v},804:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=m(a(282)),r=m(a(281)),s=m(a(285)),n=m(a(283)),d=m(a(284)),u=m(a(1)),o=m(a(3)),i=a(766),f=a(287),c=a(765);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,r.default)(this,t),(0,n.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"signup-header"},o.default.createElement(f.Link,{onClick:this.props.onClick,to:this.props.url},o.default.createElement("span",{className:"fa fa-chevron-left",title:(0,c.localizeMessage)("generic_icons.back","Back Icon")}),o.default.createElement(i.FormattedMessage,{id:"web.header.back",defaultMessage:"Back"})))}}]),t}(o.default.PureComponent);p.propTypes={url:u.default.string,onClick:u.default.func},p.defaultProps={url:"/"},t.default=p}}]);
//# sourceMappingURL=16.963487cb301ff6300db3.js.map