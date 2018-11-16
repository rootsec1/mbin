(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{2730:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(286),l=a(96),n=a(778),u=a(289),s=function(e){return e&&e.__esModule?e:{default:e}}(a(2731));t.default=(0,r.connect)(function(e){var t=(0,l.getConfig)(e);return{currentChannel:(0,n.getCurrentChannel)(e),currentTeam:(0,u.getCurrentTeam)(e),customDescriptionText:t.CustomDescriptionText,siteName:t.SiteName}})(s.default)},2731:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=E(a(42)),l=E(a(282)),n=E(a(281)),u=E(a(285)),s=E(a(283)),d=E(a(284)),i=E(a(1)),c=E(a(3)),m=a(287),o=E(a(864)),f=E(a(804)),p=E(a(2732)),_=E(a(894)),h=E(a(2733));function E(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(e){(0,n.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));M.call(a);var r={team:{},wizard:"display_name"};return a.state=r,a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.currentChannel,l=t.currentTeam,n=t.customDescriptionText,u=t.match,s=t.siteName,d="/select_team";return l&&(d="/"+l.name,a&&(d+="/channels/"+a.name)),c.default.createElement("div",null,c.default.createElement(o.default,null),c.default.createElement(f.default,{url:d}),c.default.createElement("div",{className:"col-sm-12"},c.default.createElement("div",{className:"signup-team__container"},c.default.createElement(_.default,{customDescriptionText:n,siteName:s}),c.default.createElement("div",{className:"signup__content"},c.default.createElement(m.Switch,null,c.default.createElement(m.Route,{path:this.props.match.url+"/display_name",render:function(t){return c.default.createElement(p.default,(0,r.default)({state:e.state,updateParent:e.updateParent},t))}}),c.default.createElement(m.Route,{path:this.props.match.url+"/team_url",render:function(t){return c.default.createElement(h.default,(0,r.default)({state:e.state,updateParent:e.updateParent},t))}}),c.default.createElement(m.Redirect,{to:u.url+"/display_name"}))))))}}]),t}(c.default.PureComponent);g.propTypes={currentTeam:i.default.object,currentChannel:i.default.object,customDescriptionText:i.default.string,siteName:i.default.string,match:i.default.shape({url:i.default.string.isRequired}).isRequired};var M=function(){var e=this;this.updateParent=function(t){e.setState(t),e.props.history.push("/create_team/"+t.wizard)}};t.default=g},2732:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=E(a(282)),l=E(a(281)),n=E(a(285)),u=E(a(283)),s=E(a(284)),d=E(a(1)),i=E(a(3)),c=E(a(290)),m=a(766),o=a(791),f=E(a(22)),p=a(786),_=E(a(812)),h=a(765);function E(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(e){(0,l.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.submitNext=function(e){e.preventDefault();var t=c.default.findDOMNode(a.refs.name).value.trim();if(t)if(t.length<f.default.MIN_TEAMNAME_LENGTH||t.length>f.default.MAX_TEAMNAME_LENGTH)a.setState({nameError:i.default.createElement(m.FormattedMessage,{id:"create_team.display_name.charLength",defaultMessage:"Name must be {min} or more characters up to a maximum of {max}. You can add a longer team description later.",values:{min:f.default.MIN_TEAMNAME_LENGTH,max:f.default.MAX_TEAMNAME_LENGTH}})});else{var r=a.props.state;r.wizard="team_url",r.team.display_name=t,r.team.name=(0,p.cleanUpUrlable)(t),a.props.updateParent(r)}else a.setState({nameError:i.default.createElement(m.FormattedMessage,{id:"create_team.display_name.required",defaultMessage:"This field is required"})})},a.handleFocus=function(e){e.preventDefault(),e.currentTarget.select()},a.state={},a}return(0,s.default)(t,e),(0,n.default)(t,[{key:"componentDidMount",value:function(){(0,o.trackEvent)("signup","signup_team_01_name")}},{key:"render",value:function(){var e=null,t="form-group";return this.state.nameError&&(e=i.default.createElement("label",{className:"control-label"},this.state.nameError),t+=" has-error"),i.default.createElement("div",null,i.default.createElement("form",null,i.default.createElement("img",{className:"signup-team-logo",src:_.default}),i.default.createElement("h2",null,i.default.createElement(m.FormattedMessage,{id:"create_team.display_name.teamName",defaultMessage:"Team Name"})),i.default.createElement("div",{className:t},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-sm-9"},i.default.createElement("input",{type:"text",ref:"name",className:"form-control",placeholder:"",maxLength:"128",defaultValue:this.props.state.team.display_name,autoFocus:!0,onFocus:this.handleFocus,spellCheck:"false"}))),e),i.default.createElement("div",null,i.default.createElement(m.FormattedMessage,{id:"create_team.display_name.nameHelp",defaultMessage:"Name your team in any language. Your team name shows in menus and headings."})),i.default.createElement("button",{type:"submit",className:"btn btn-primary margin--extra",onClick:this.submitNext},i.default.createElement(m.FormattedMessage,{id:"create_team.display_name.next",defaultMessage:"Next"}),i.default.createElement("i",{className:"fa fa-chevron-right",title:(0,h.localizeMessage)("generic_icons.next","Next Icon")}))))}}]),t}(i.default.PureComponent);g.propTypes={state:d.default.object,updateParent:d.default.func},t.default=g},2733:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),l=a(286),n=a(805),u=function(e){return e&&e.__esModule?e:{default:e}}(a(2734));t.default=(0,l.connect)(null,function(e){return{actions:(0,r.bindActionCreators)({checkIfTeamExists:n.checkIfTeamExists,createTeam:n.createTeam},e)}})(u.default)},2734:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=N(a(181)),l=N(a(295)),n=N(a(182)),u=N(a(282)),s=N(a(281)),d=N(a(285)),i=N(a(283)),c=N(a(284)),m=N(a(1)),o=N(a(3)),f=a(769),p=N(a(290)),_=a(766),h=a(791),E=N(a(22)),g=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(786)),M=N(a(812)),v=N(a(777));function N(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){var a=this;(0,s.default)(this,t);var d=(0,i.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return d.submitBack=function(e){e.preventDefault();var t=d.props.state;t.wizard="display_name",d.props.updateParent(t)},d.submitNext=function(){var e=(0,n.default)(r.default.mark(function e(t){var n,u,s,i,c,m,f,M,N,b,y,T;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=p.default.findDOMNode(d.refs.name).value.trim(),u=g.cleanUpUrlable(n),s=/^[a-z]+([a-z\-0-9]+|(__)?)[a-z0-9]+$/g,i=d.props.actions,c=i.checkIfTeamExists,m=i.createTeam,n){e.next=8;break}return d.setState({nameError:o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.required",defaultMessage:"This field is required"})}),e.abrupt("return");case 8:if(!(u.length<E.default.MIN_TEAMNAME_LENGTH||u.length>E.default.MAX_TEAMNAME_LENGTH)){e.next=11;break}return d.setState({nameError:o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.charLength",defaultMessage:"Name must be {min} or more characters up to a maximum of {max}",values:{min:E.default.MIN_TEAMNAME_LENGTH,max:E.default.MAX_TEAMNAME_LENGTH}})}),e.abrupt("return");case 11:if(u===n&&s.test(n)){e.next=14;break}return d.setState({nameError:o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.regex",defaultMessage:"Use only lower case letters, numbers and dashes. Must start with a letter and can't end in a dash."})}),e.abrupt("return");case 14:f=0;case 15:if(!(f<E.default.RESERVED_TEAM_NAMES.length)){e.next=22;break}if(0!==u.indexOf(E.default.RESERVED_TEAM_NAMES[f])){e.next=19;break}return d.setState({nameError:o.default.createElement(v.default,{id:"create_team.team_url.taken",defaultMessage:"This URL [starts with a reserved word](!https://docs.mattermost.com/help/getting-started/creating-teams.html#team-url) or is unavailable. Please try another."})}),e.abrupt("return");case 19:f++,e.next=15;break;case 22:return d.setState({isLoading:!0}),(M=JSON.parse((0,l.default)(d.props.state))).team.type="O",M.team.name=n,e.next=28,c(n);case 28:if(N=e.sent,!N.exists){e.next=34;break}return d.setState({nameError:o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.unavailable",defaultMessage:"This URL is taken or unavailable. Please try another."})}),d.setState({isLoading:!1}),e.abrupt("return");case 34:return e.next=36,m(M.team);case 36:b=e.sent,y=b.data,T=b.error,y?(d.props.history.push("/"+y.name+"/channels/town-square"),(0,h.trackEvent)("signup","signup_team_03_complete")):T&&(d.setState({nameError:T.message}),d.setState({isLoading:!1}));case 40:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),d.handleFocus=function(e){e.preventDefault(),e.currentTarget.select()},d.state={nameError:"",isLoading:!1},d}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){(0,h.trackEvent)("signup","signup_team_02_url")}},{key:"render",value:function(){var e=null,t="form-group";this.state.nameError&&(e=o.default.createElement("label",{className:"control-label"},this.state.nameError),t+=" has-error");var a=g.getSiteURL()+"/",r=o.default.createElement(f.Tooltip,{id:"urlTooltip"},a),l=o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.finish",defaultMessage:"Finish"});return this.state.isLoading&&(l=o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.creatingTeam",defaultMessage:"Creating team..."})),o.default.createElement("div",null,o.default.createElement("form",null,o.default.createElement("img",{className:"signup-team-logo",src:M.default}),o.default.createElement("h2",null,o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.teamUrl",defaultMessage:"Team URL"})),o.default.createElement("div",{className:t},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-sm-11"},o.default.createElement("div",{className:"input-group input-group--limit"},o.default.createElement(f.OverlayTrigger,{trigger:["hover","focus"],delayShow:E.default.OVERLAY_TIME_DELAY,placement:"top",overlay:r},o.default.createElement("span",{className:"input-group-addon"},a)),o.default.createElement("input",{type:"text",ref:"name",className:"form-control",placeholder:"",maxLength:"128",defaultValue:this.props.state.team.name,autoFocus:!0,onFocus:this.handleFocus,spellCheck:"false"})))),e),o.default.createElement("p",null,o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.webAddress",defaultMessage:"Choose the web address of your new team:"})),o.default.createElement("ul",{className:"color--light"},o.default.createElement("li",null,o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.hint1",defaultMessage:"Short and memorable is best"})),o.default.createElement("li",null,o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.hint2",defaultMessage:"Use lowercase letters, numbers and dashes"})),o.default.createElement("li",null,o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.hint3",defaultMessage:"Must start with a letter and can't end in a dash"}))),o.default.createElement("div",{className:"margin--extra"},o.default.createElement(f.Button,{type:"submit",bsStyle:"primary",disabled:this.state.isLoading,onClick:this.submitNext},l)),o.default.createElement("div",{className:"margin--extra"},o.default.createElement("a",{href:"#",onClick:this.submitBack},o.default.createElement(_.FormattedMessage,{id:"create_team.team_url.back",defaultMessage:"Back to previous step"})))))}}]),t}(o.default.PureComponent);b.propTypes={state:m.default.object,updateParent:m.default.func,actions:m.default.shape({checkIfTeamExists:m.default.func.isRequired,createTeam:m.default.func.isRequired}).isRequired},t.default=b},804:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(a(282)),l=f(a(281)),n=f(a(285)),u=f(a(283)),s=f(a(284)),d=f(a(1)),i=f(a(3)),c=a(766),m=a(287),o=a(765);function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"signup-header"},i.default.createElement(m.Link,{onClick:this.props.onClick,to:this.props.url},i.default.createElement("span",{className:"fa fa-chevron-left",title:(0,o.localizeMessage)("generic_icons.back","Back Icon")}),i.default.createElement(c.FormattedMessage,{id:"web.header.back",defaultMessage:"Back"})))}}]),t}(i.default.PureComponent);p.propTypes={url:d.default.string,onClick:d.default.func},p.defaultProps={url:"/"},t.default=p},812:function(e,t,a){e.exports=a.p+"files/5d6be4015bde2a4e0358c8bc110deadc.png"},894:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a(282)),l=m(a(281)),n=m(a(285)),u=m(a(283)),s=m(a(284)),d=m(a(1)),i=m(a(3)),c=a(766);function m(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this.props,t=e.customDescriptionText,a=e.siteName,r=null;return r=t||i.default.createElement(c.FormattedMessage,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),i.default.createElement(i.default.Fragment,null,i.default.createElement("h1",null,a),i.default.createElement("h4",{className:"color--light"},r))}}]),t}(i.default.PureComponent);o.propTypes={customDescriptionText:d.default.string,siteName:d.default.string},o.defaultProps={siteName:"Mattermost"},t.default=o}}]);
//# sourceMappingURL=29.ad9f618768ea73dcebc0.js.map