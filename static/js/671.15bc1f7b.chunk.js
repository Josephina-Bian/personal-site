"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[671],{4671:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(2791),i=n(1087),r=n(6842),s=n(184),c=function(e){var t=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,s.jsx)(c,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,s.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var m=d,p=n(5671),h=n(3144),y=n(136),g=n(516),f=n(4942),b=n(1413),v=function(e){var t=e.handleClick,n=e.active,a=e.label;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},j=function(e){var t=e.data,n=e.categories,a=t.category,i=t.competency,r=t.title,c={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,b.Z)((0,b.Z)({},c),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:c,children:(0,s.jsx)("span",{children:r})}),(0,s.jsx)("div",{className:"skillbar-bar",style:o}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};j.defaultProps={categories:[]};var x=j,k=function(e){(0,y.Z)(n,e);var t=(0,g.Z)(n);function n(e){var a;return(0,p.Z)(this,n),(a=t.call(this,e)).handleChildClick=function(e){a.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return(0,b.Z)((0,b.Z)({},n),{},(0,f.Z)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},a.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,b.Z)((0,b.Z)({},e),{},(0,f.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),a}return(0,h.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,s.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,s.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("p",{children:"Note: As an active learner, my skillsets are developing over time."})]}),(0,s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(a.Component);k.defaultProps={skills:[],categories:[]};var S=k,w=function(e){var t=e.data,n=e.last;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:t.link,children:[(0,s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};w.defaultProps={last:!1};var N=w,P=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,s.jsx)(N,{data:t,last:n===e.length-1},t.title)}))},C=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Selected Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:P(t)})]})};C.defaultProps={data:[]};var D=C,A=function(){return(0,s.jsxs)("div",{className:"references",children:[(0,s.jsx)("div",{className:"link-to",id:"references"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)(i.rU,{to:"/contact",children:(0,s.jsx)("h3",{children:"References are available upon request"})})})]})},O=[{title:"Machine Learning for Data Science",number:"DSCI 552",link:"https://web-app.usc.edu/soc/syllabus/20231/32414.pdf",university:"USC"},{title:"Data Science at Scale",number:"DSCI 550",link:"https://irds.usc.edu/classes/dsci550_2023a/",university:"USC"},{title:"Principles of Programming for Data Science",number:"DSCI 510",link:"https://web-app.usc.edu/soc/syllabus/20223/32404.pdf",university:"USC"},{title:"Theoretical Approaches to Communication Data Science",number:"COMM 502",link:"https://web-app.usc.edu/soc/syllabus/20223/20780.pdf",university:"USC"},{title:"Introduction to Statistics for the Social Sciences",number:"STAT 203",link:"https://www.sfu.ca/outlines.html?2022/spring/stat/203/d100",university:"SFU"},{title:"Introduction to Computing Science and Programming",number:"CMPT 120",link:"https://www.sfu.ca/outlines.html?2022/spring/cmpt/120/d100",university:"SFU"}],M=[{school:"University of Southern California",degree:"M.S. Communication Data Science",link:"https://www.usc.edu/",year:2024},{school:"Simon Fraser University",degree:"B.A. Communication, Philosophy (first class with distinction), Philosophy and Methodology of Science Certificate",link:"https://www.sfu.ca/",year:2022}],Z=[{company:"Chihuo Marketing Agency",position:"Social Media Specialist",link:"https://en.thechihuo.com/about-us/",daterange:"January 2023 - Present",points:["Created media content for over 20 WeChat and XiaoHongShu accounts across 16 cities in North Amercia, which garnered over 160 millions active followers. ","Analyzed, reported and improved social media performance by monitoring social media metrics and analytics","Collaborated with other teams within the organization to ensure social media strategies align with overall markketing and business objectives."]},{company:"Yuanheng Holdings Ltd.",position:"Social Media Coordinator",link:"http://yuanheng.ca/en/",daterange:"January 2021 - April 2022",points:["Launched the official website (viewstar.ca) and created media content on social media including Facebook, Instagram, LinkedIn and WeChat increasing engagement by 900 new subscribers","Analyzed marketing data on emerging real estate industry trends and used Tableau and Excel for data visualization","Monitored all marketing channels, analyzed social media campaign performance through marketing key performance indicators and provided performance reporting and recommendations for optimization","Managed consumer engagement and responded to consumer feedback through multiple social media platforms","Designed and photoshopped visual content for both digital media and print media, including social media updates and the large poster on the front of the building"]},{company:"UniUni Inc.",position:"Marketing Coordinator",link:"https://www.uniuni.com/",daterange:"April 2019 - December 2019",points:["Developed and updated written materials for internal use (user guides, training material, etc.) and external use (web contents, pitch news articles, client-facing and investor-facing presentations)","Designed media kits (brochure, business card, and corporate shirt) by using InDesign and Photoshop to promote the company and culture by using visual elements and slogans to shed light on the brand's attention to customer service","Collected marketing data and analyzed local e-commerce marketing to identify patterns, trends and insights for potential business partnerships and market expansion opportunities","Developed marketing reports and conducted presentations for senior management to review campaign performance"]}],L=n(3433),U=[{title:"Javascript",competency:1,category:["Web Development","Languages"]},{title:"Node.JS",competency:1,category:["Web Development"]},{title:"SQLite/MySQL",competency:5,category:["Languages","Data Analysis"]},{title:"BeautifulSoup",competency:5,category:["Python"]},{title:"Seaborn",competency:5,category:["Python","Data Visualization"]},{title:"Power BI",competency:5,category:["Data Visualization"]},{title:"NumPy",competency:5,category:["Python","Data Analysis"]},{title:"SciPy",competency:5,category:["Python","Data Analysis"]},{title:"Jupyter",competency:5,category:["Python"]},{title:"HTML",competency:1,category:["Languages"]},{title:"Python",competency:5,category:["Languages","Data Analysis"]},{title:"R",competency:4,category:["Languages","Data Analysis"]},{title:"Tableau",competency:3,category:["Data Visualization"]},{title:"Pandas",competency:5,category:["Python","Data Analysis"]},{title:"Matplotlib",competency:4,category:["Data Visualization","Python"]},{title:"Scikit-Learn",competency:4,category:["Python"]},{title:"Google Analytics",competency:5,category:["Data Analysis"]},{title:"SPSS",competency:5,category:["Data Analysis"]},{title:"NVivo",competency:3,category:["Data Analysis"]},{title:"Photoshop",competency:3,category:["Adobe Creative Suite"]},{title:"Premiere Pro",competency:3,category:["Adobe Creative Suite"]},{title:"InDesign",competency:3,category:["Adobe Creative Suite"]},{title:"Excel",competency:5,category:["Microsoft Office Suite"]},{title:"Word",competency:5,category:["Microsoft Office Suite"]},{title:"PowerPoint",competency:4,category:["Microsoft Office Suite"]}].map((function(e){return(0,b.Z)((0,b.Z)({},e),{},{category:e.category.sort()})})),z=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],I=(0,L.Z)(new Set(U.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:z[t]}})),E=["Education","Experience","Skills","Courses","References"],R=function(){return(0,s.jsx)(r.Z,{title:"Resume",description:"Josephina Bian's Resume. Education and Work Experience.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{children:(0,s.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:E.map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,s.jsx)(l,{data:M}),(0,s.jsx)(m,{data:Z}),(0,s.jsx)(S,{skills:U,categories:I}),(0,s.jsx)(D,{data:O}),(0,s.jsx)(A,{})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(9142);function i(e,t,n){return(t=(0,a.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=671.15bc1f7b.chunk.js.map