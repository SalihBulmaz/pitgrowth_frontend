/* window.onload = function(){
   var piemenu = new wheelnav('piemenu');
   piemenu.clockwise = false;
   piemenu.animatetime = 500;
   piemenu.animateeffect = 'linear';
   piemenu.wheelRadius = piemenu.wheelRadius * 1.3;
   if(screen.width < 600){
       piemenu.wheelRadius = piemenu.wheelRadius * 0.75;
   }
   piemenu.createWheel();
 }
*/

var options = {
  Menu0: {
    1: ["Developers", "System Engineers", "IT Architectures", "Business Analyst","Project Manager","Product Owner","Test Engineer","Designer","Digital Marketing Professionals","Art Directors","Growth Manager","People and Culture Manager","Devops Engineer","Marketing Professionals","Sales and Channel Professionals","ERP and CRM Consultants","C level Professionals","Others"],
    2: ["Agreements"],
  },
  Menu1: {
    1: ["Aggrements","Others"],
    2: ["Regulatory Compliance","Others"],
    3: ["Dispute Resolution","Others"],
  },
  Menu2: {
    1: ["Retail","Finance","E-commerce","Omnichannel"],
    2: ["Retail","Finance","E-commerce","Omnichannel"],
    3: ["Retail","Finance","E-commerce","Omnichannel"],
  },
  Menu3: {
    1: ["Single - Page Application", "Multiple -Page Application", "Multipurpose Application", "Content Management System","Landing Page","E-commerce Application","Web3 Application","Others"],
    2: ["Mobile Games", "Social Media", "Productivity", "E-commerce","Education","Others"],
    3: ["1", "3", "5", "7"],
    4: ["x", "xx", "xxx", "xxxx"],
    5 : ["Penetration Test","Red Team","Others"],
    6 : ["AI","Analytics","Business Intelligence","Others"],
    7 : [],
    8 : [],
    9 : ["Strategy and Architecture","Engineering Craftsmanship","Growing and Leading the Team","Technology Due Diligence","Advisory and Coaching","Others"]
  },
  Menu4: {
    1: ["Migrate your application to Cloud", "Migrate your e-mail to Cloud", "Others"],
    2: ["Cost Optimization", "Performance Optimization", "Security Optimization", "Re-Architecture","Others"],
    3: ["Cloud Devops / Deployment Lifecycle Management", "Kubernetes,Docker Management", "Infrastructure", "Others"],
  },
  Menu5: {
    1: ["SEO Consulting", "ASO", "User Experience Optimization", "Traffic Data Analysis","Others"],
    2: ["Google Ads", "Yandex Ads", "Email Marketing ", "Social Marketing","Conversion Rate Optimization ","Others"],
    3: ["Instagram","Others"],
  },
  Menu6: {
    1: ["Cash Flow Reporting- Runway Analysis ", "Monthly/Quarterly Investor Reporting", "Financial Projections ", "Others"],
    2: ["Pre-Seed", "Series A and +Startups Valuation", "Enterprise Valuation","Others"],
    3: ["Data Room Organization", "Addressing questions coming from Investors / Auditors","Others"],
    4: ["Tax Planning", "Annual Tax Fillings","Others"],
    5: ["Refine Chart of Accounts","Client Invoicing","Expense Reimbursement","GAAP Complaint Financials","Others"],
    6: [""]
  },
};

//Human Resources Tab ++
var Menu0 = {
  1: "Recruitment",
  2: "Add your CV",
};
var infos0 = {
  1: "Paste your criterias in detail what you are looking for. ",
  2: "If you are looking for a job in tech-based companies. Please add your CV ",
};

//Legal Tab ++
var Menu1 = {
  1: "Agreements",
  2: "Regulatory Compliance",
  3: "Dispute Resolution",
};
var infos1 = {
  1: "",
  2: "",
  3: "",
};

//Sales Tab ++
var Menu2 = {
  1: "UK",
  2: "Belarus",
  3: "Turkey",
  4: "Others"
};
var infos2 = {
  1: "For us we only want to talk to start ups that are ready to invest",
  2: "Efectura",
  3: "Efectura",
  4: "Please let us know if you need a service that is not listed",
};

//Development Tab ++
var Menu3 = {
  1: "Web Development",
  2: "Mobile Development",
  3: "ERP",
  4: "CRM",
  5: "Security",
  6: "Data - AI",
  7: "Data - Analytics",
  8: "Data - BI",
  9: "CTO as a Service"
};
var infos3 = {
  1: "Get service to create and style your web pages.",
  2: "Choose your Mobil App style ",
  3: "Coming Soon",
  4: "Coming Soon",
  5: "Security is backbone for your application or your systems. Choose service to keep it safe ",
  6: "Artificial Intelligence Platforms enable machines to be used to perform tasks completed by humans. You can reach out image recognition services",
  7 : "Considered a relatively new field that combines cutting-edge computing and statistical techniques to extract business value from a rapidly expanding volume of data. ",
  8 : "Business intelligence gives organizations the ability to ask questions in plain language and get answers they can understand. It combines business analytics, data mining, data visualization and data infrastructure to help organizations make more data-driven decisions. ",
  9: "Cost-effective alternative to recruiting a permanent Chief Technology Officer "
};

//Cloud Tab ++
var Menu4 = {
  1: "Migration",
  2: "Optimization",
  3: "Operations & Platform Services",
};
var infos4 = {
  1: "Redeploy your workloads to get best performance ",
  2: "Provide re-architect or refactor to provide cost optimization",
  3: "",
};

//Marketing Tab ++
var Menu5 = {
   1: "SEO",
   2: "Ads", 
   3: "Social Media Marketing", 
};
var infos5 = {
  1: "SEO (acronym for Search Engine Optimization) is the process of making your website more visible in search engines. ",
  2: "Time to promote your products and applications ",
  3: "React to large audience",
};

//Finance Tab ++
var Menu6 = {
  1: "Financial Reporting",
  2: "Valuation of Company",
  3: "Due Diligence Preparation",
  4: "Tax Oriented Services",
  5: "Accounting Services",
  6 : ""
};
var infos6 = {
  1: "Process of documenting and communicating financial activities and performance over specific time periods ",
  2: "Determine the economic value of a business ",
  3: "Time to get ready for Data Room, Financial Records, Balance Sheets ",
  4: "Check and plan your taxes ",
  5: "Accounting is without a doubt a crucial part of any business's operations ",
  6 : "Accounting is without a doubt a crucial part of any business's operations ",
};


var dropdown_Infos = {
  Menu0: {
    1: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Please let us know if you need a service that is not listed",
    ],
    2: [
      "",
      "",
      "",
      "Please let us know if you need a service that is not listed",
    ],
  },
  Menu1: {
    1: [
      "Tailor made agreements to specifically address your partnership structure and other issues.",
      "Please let us know if you need a service that is not listed",
    ],
    2: [
      "Assisting your organization to ensure its compliance with regulations by considering business strategy, operational efficiency, and remediation level. ",
      "Please let us know if you need a service that is not listed",
    ],
    3: [
      "Representing you in private negotiations and before courts and arbitration to solve your legal disputes between third parties.",
      "Please let us know if you need a service that is not listed",
    ],
    4: [
      "",
      "",
      "",
      "Please let us know if you need a service that is not listed",
    ],
  },
  Menu2: {
    1: [
      "",
      "",
      "",
      "",
    ],
    2: [
      "",
      "",
      "",
      "",
    ],
    3: [
      "",
      "",
      "",
      "",
    ],
    4: [
      "",
      "",
      "",
      "",
    ],
    5: [
      "For us we only want to meet with start ups that are ready to invest",
      "For us we only want to meet with start ups that are ready to invest",
      "",
      "",
    ],
    6: [
      "",
      "",
      "",
      "",
    ],
    7: [
      "For us we only want to meet with start ups that are ready to invest",
      "Efectura",
      "Efectura",
      "Please let us know if you need a service that is not listed",
    ],
  },
  Menu3: {
    1: [
      "Singe Page Applications are websites or web-based applications that work by dynamically updating the current page instead of completely refreshing the page while interacting with the user. With this approach, the user experience is prevented from being interrupted by page loads and a user experience close to desktop applications is obtained.",
      "Multi-page applications are the traditional web applications that reload the entire page and display the new one when a user interacts with the web app.",
      "It is the name given to applications that have more than one main function. Today, multi-purpose applications, especially used by companies and startups, have already started to replace single-purpose applications in the market.",
      "A content management system, often abbreviated as CMS, is software that helps users create, manage, and modify content on a website without the need for specialized technical knowledge.In simpler language, a content management system is a tool that helps you build a website without needing to write all the code from scratch",
      "Landing Page, which plays a major role in increasing your sales for you. With this page, you can collect data such as e-mail, phone number and reach your customers.",
      "By reaching your customers online, you can achieve high sales both locally and globally and greatly move your business forward.",
      "Blockchain and artificial intelligence concepts form the basis of Web 3.0. Working in this field gives us excitement as an institution.",
      "Please let us know if you need a service that is not listed",
    ],
    2: [
      "After the recent growth of the gaming industry, you may want to take part in this industry. If you want to print a special game for your company, we will design and code for both Android and IOS users.",
      "Pictures, texts, sounds... If you have a social media platform where people will interact with each other by sharing their content, we would be happy to implement your project for both Android and IOS platforms",
      "If you have ideas that will increase your productivity in your workplace we can help you to realize this idea.",
      "You can also benefit from the wide market share that the e-commerce sector has achieved with the increase in mobile usage. With a mobile application of your store, you can stay in touch with your customers at any time and increase your sales with various campaigns and discounts.",
      "We will code for you on both Android and IOS platforms, you can create a large community by staying in touch with your audience at any time, share your information with people and turn it into profit.",
      "Please let us know if you need a service that is not listed",
    ],
    3: [
      "",
      "",
      "",
      "",
    ],
    4: [
      "",
      "",
      "",
      "",
    ],
    5: [
      "According to scope, team scan your systems in detail based on OWASP standarts and all breachs are reported to you. This service is not a process. Applied for once time. ",
      "It is target oriented process towards threat simulation. It is ongoing process and looking for security breach and reported to you. ",
      "Please let us know if you need a service that is not listed",
    ],
    6: [
      "Artificial Intelligence Platforms enable machines to be used to perform tasks completed by humans. You can reach out image recognition services",
      "Considered a relatively new field that combines cutting-edge computing and statistical techniques to extract business value from a rapidly expanding volume of data. ",
      "Business intelligence gives organizations the ability to ask questions in plain language and get answers they can understand. It combines business analytics, data mining, data visualization and data infrastructure to help organizations make more data-driven decisions. ",
      "Please let us know if you need a service that is not listed",
    ],
    7:[
      ""
    ],
    8 : [
      ""
    ],
    9: [
      "We use our collective experience to define the foundations in the right way - from the product roadmap and architecture to the technology stack and team composition - we've got your back",
      "When technology becomes a bottleneck from the scalability, security or further product evolution perspective, we can help to redesign the existing solution and get back on track ",
      "We set the bar high when it comes to technology leadership. The quality of your engineering team, processes and culture will shape the outcomes for the whole business",
      "Our experts will analyze the opportunities and risks based on business alignment, strategy, architecture, people and processes, innovation potential, scalability and security",
      "We offer CTO advisory or second opinion on the matters of architecture, strategy, organization and processes. Our advisors can empower your permanent CTO with their vision of the future and innovation.",
      "Please let us know if you need a service that is not listed",
    ]
  },
  Menu4: {
    1: [
      "Get service to migrate Applications, Database Services, Web Services, Infrastructures",
      "Get service to migrate e-mail, workplaces, communication systems, file servers",
      "Please let us know if you need a service that is not listed",
    ],
    2: [
      "Optimize your workloads on cloud & infrastructure and minimize your costs",
      "Tune your workloads to improve for best performance",
      "Improve your cloud security across your organization, planning, desinging, configuration, maintenance, testing and remediation",
      "Re-architect workloads, provide operation excellence ",
      "Please let us know if you need a service that is not listed",
    ],
    3: [
      "Build / Deployment / Version / Release Management, CI / CD and Deployment Processes, Redesign & Automation and more ",
      "Build and Deployment Process ",
      "Provisioning, Implementation, Disaster Recovery, Configuration Management and more ",
      "Please let us know if you need a service that is not listed",
    ],
    4: [
      "",
      "",
      "",
      "",
    ],
  },
  Menu5: {
    1: [
      "SEO Consulting includes a dynamic process. The main strategy is to pinpoint essential keywords that your field of work  ",
      "App Store Optimization helps you connect with a relevant audience and push your app’s unique selling points.  ",
      "The user experience aims to help the site and the visitors reach their targets as soon as possible by directing all the process of the site's visitors.  ",
      "Organic Search,Referral, Direct and Paid Traffic are four common channel to analyse it ",
      "Please let us know if you need a service that is not listed",
    ],
    2: [
      "Create online ads to reach people exactly when they're interested in the products and services that you offer. ",
      "Reach out to new audiences, engage potential customers, create emotional links to your brand or start using retargeting. ",
      "A pivotal role in your marketing strategy with lead generation, brand awareness, building relationships or keeping customers engaged between purchases through different types of marketing emails.  ",
      "Through social marketing activities, communities strive to impact people’s behavior, evoke consciousness, and bring change. ",
      "Use in-depth data to analyze results, runs multiple tests, tweaks content to make it more relevant to the visitors, and draws necessary conclusions. As a result it helps you convert more of the traffic you drive with SEO. ",
      "Please let us know if you need a service that is not listed",
    ],
    3: [
      "Deliver your business stories with Swipeline",
      "Please let us know if you need a service that is not listed",
    ],
    4: [
      "",
      "",
      "",
      "",
    ],
  },
  Menu6: {
    1: [
      "Accounting, preparation of financial statements for 3 and 5 year projections ",
      "Analyse those reports behalf of you and prepare for investor ",
      "Analyse your financials together and scenario modeling",
      "Please let us know if you need a service that is not listed",
    ],
    2: [
      "Get help to valuate your business ",
      "Get help to valuate your business ",
      "Get help to valuate your business",
      "Please let us know if you need a service that is not listed",
    ],
    3: [
      "Help you make your data room prepared for due diligence ",
      "",
      "Please let us know if you need a service that is not listed",
      "",
    ],
    4: [
      "",
      "",
      "Please let us know if you need a service that is not listed",
    ],
    5 :[
      '',
      '',
      '',
      '',
      "Please let us know if you need a service that is not listed",
    ]
  },
};
var piemenuInfos = {
  0: "Conduct HR and technical interviews with our candidates, and then share the most suitable candidates with our customers.",
  1: "Need to handle legal issues as agreements, regulatory compliance, dispute resolution",
  2: "Scale your business via channel partners and meet as online ",
  3: "One of basic needs is especially software development for technology companies. You can get end to end or partially services , getting a service to control vulnerabilities and more. ",
  4: "Availability, Consistent, High Performance, Secure, Scalability, Sustainability is critical to run your workloads ",
  5: "Common way to attract your potential clients. Create awareness, advertise and be popular ",
  6: "Manage your investments, budgets, savings exclusively",
};
var piemenuHeaders = {
  0: "Human Resources",
  1: "Legal",
  2: "Sales & Channels",
  3: "Software Development",
  4: "Cloud",
  5: "Marketing",
  6: "Finance",
};

let choosenFilterOptions = document.querySelector(".activatedFilterParameters");
function deleteActiveFilter(deleteValue) {
  let to_beDeleted = document.querySelector(`#activeFilterCont_${deleteValue}`);
  to_beDeleted.parentNode.removeChild(to_beDeleted);
}
function showSelection(paramNum) {
  let chosenSelection = document.querySelector(`#Parameter${paramNum}`);
  let ChoosenOption =
    chosenSelection.options[chosenSelection.selectedIndex].value;
  if (ChoosenOption !== "filterNoValue") {
    let filter_tag = document.createElement("span");
    let filter_delete_btn = document.createElement("button");
    filter_delete_btn.type = "button";
    filter_delete_btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    let filter_tag_container = document.createElement("div");
    filter_tag_container.className = "d-flex align-items-center gap-2";
    filter_tag_container.id = `activeFilterCont_${ChoosenOption}`;
    filter_delete_btn.id = `filterDeletebtn_${ChoosenOption}`;
    filter_delete_btn.className = "filterDeletebtn";
    filter_delete_btn.setAttribute(
      "onclick",
      `deleteActiveFilter('${ChoosenOption}')`
    );
    filter_tag.innerText = ChoosenOption;
    // console.log(ChoosenOption)
    filter_tag_container.appendChild(filter_tag);
    filter_tag_container.appendChild(filter_delete_btn);
    choosenFilterOptions.appendChild(filter_tag_container);
  }
}

let headercont = document.querySelector(".infoContainer_Header");
let infoPcont = document.querySelector(".infoContainer_Paragraph");
let linkMenu = document.querySelector(".linkMenu");
let infoMenu = document.querySelector(".infoMenu");
function openTheMenu(menuNumber) {
  let condition_login = localStorage.getItem('token_company') || localStorage.getItem('token_partner')
  let condition_bypass = true
  if (condition_bypass) {
    info_cont.style.display = "block";
  headercont.innerHTML = "";
  infoPcont.innerHTML = "";
  linkMenu.innerHTML = "";
  infoMenu.innerHTML = "";
  if (menuNumber == 0) {
    slice_header = document.createElement("span");
    slice_header.className = "giveninfo_Title titleActive";
    slice_header.innerText = piemenuHeaders[0];
    slice_info = document.createElement("p");
    slice_info.className = "giveninfo_Paragraph infopActive";
    slice_info.innerText = piemenuInfos[0];
    for (link in Menu0) {
      let infobtn = document.createElement("div");
      // infobtn.className = "list-group-item";
      // infobtn.innerHTML = '<img src="./images/arrowOption.svg" alt="">';
      infoMenu.appendChild(infobtn);
      let new_link = document.createElement("a");
      new_link.setAttribute("onmouseup", `showInfo(${link})`);
      new_link.className = "list-group-item";
      if(link == 2){
        new_link.setAttribute("onclick", `hideForm()`);
        new_link.setAttribute("onmouseup", ``);
        new_link.classList.toggle("inactiveOption")
      }
      else{
        new_link.setAttribute("onclick", `showForm(${link})`);
      }      
      new_link.innerText = Menu0[link];
      linkMenu.appendChild(new_link);
      new_info_header = document.createElement("span");
      new_info_header.className = "giveninfo_Title";
      new_info_header.id = `infoHeader${link}`;
      new_info_header.innerText = Menu0[link];
      headercont.appendChild(new_info_header);
      new_info_p = document.createElement("p");
      new_info_p.innerText = infos0[link];
      new_info_p.id = `infoP${link}`;
      new_info_p.className = "giveninfo_Paragraph";
      infoPcont.appendChild(new_info_p);
    }
    headercont.appendChild(slice_header);
    infoPcont.appendChild(slice_info);
  }
  if (menuNumber == 1) {
    slice_header = document.createElement("span");
    slice_header.className = "giveninfo_Title titleActive";
    slice_header.innerText = piemenuHeaders[1];
    slice_info = document.createElement("p");
    slice_info.className = "giveninfo_Paragraph infopActive";
    slice_info.innerText = piemenuInfos[1];
    headercont.appendChild(slice_header);
    infoPcont.appendChild(slice_info);
    for (link in Menu1) {
      let infobtn = document.createElement("div");
      // infobtn.className = "list-group-item";
      // infobtn.innerHTML = '<img src="./images/arrowOption.svg" alt="">';
      infobtn.setAttribute("onclick", `showInfo(${link})`);
      // infobtn.setAttribute('onclick',console.log('test'))
      infoMenu.appendChild(infobtn);
      let new_link = document.createElement("a");
      new_link.setAttribute("onmouseup", `showInfo(${link})`);
      new_link.className = "list-group-item";
      new_link.setAttribute("onclick", `showForm(${link})`);
      new_link.innerText = Menu1[link];
      linkMenu.appendChild(new_link);
      new_info_header = document.createElement("span");
      new_info_header.className = "giveninfo_Title";
      new_info_header.id = `infoHeader${link}`;
      new_info_header.innerText = Menu1[link];
      headercont.appendChild(new_info_header);
      new_info_p = document.createElement("p");
      new_info_p.innerText = infos1[link];
      new_info_p.id = `infoP${link}`;
      new_info_p.className = "giveninfo_Paragraph";
      infoPcont.appendChild(new_info_p);
    }
  }
  if (menuNumber == 2) {
    slice_header = document.createElement("span");
    slice_header.className = "giveninfo_Title titleActive";
    slice_header.innerText = piemenuHeaders[2];
    slice_info = document.createElement("p");
    slice_info.className = "giveninfo_Paragraph infopActive";
    slice_info.innerHTML = piemenuInfos[2];
    headercont.appendChild(slice_header);
    infoPcont.appendChild(slice_info);
    for (link in Menu2) {
      let infobtn = document.createElement("div");
      // infobtn.className = "list-group-item";
      // infobtn.innerHTML = '<img src="./images/arrowOption.svg" alt="">';
      infobtn.setAttribute("onclick", `showInfo(${link})`);
      infoMenu.appendChild(infobtn);
      let new_link = document.createElement("a");
      new_link.setAttribute("onmouseup", `showInfo(${link})`);
      new_link.className = "list-group-item";
      //Select disabled ones
      if(link == 4){
        new_link.setAttribute("onclick", `hideForm()`);
        new_link.setAttribute("onmouseup", `showInfo(${link})`);
      }
      else{
        new_link.setAttribute("onclick", `showForm(${link})`);
      }
      new_link.innerText = Menu2[link];
      linkMenu.appendChild(new_link);
      new_info_header = document.createElement("span");
      new_info_header.className = "giveninfo_Title";
      new_info_header.id = `infoHeader${link}`;
      new_info_header.innerText = Menu2[link];
      headercont.appendChild(new_info_header);
      new_info_p = document.createElement("p");
      new_info_p.innerText = infos2[link];
      new_info_p.id = `infoP${link}`;
      new_info_p.className = "giveninfo_Paragraph";
      infoPcont.appendChild(new_info_p);
    }
  }
  if (menuNumber == 3) {
    slice_header = document.createElement("span");
    slice_header.className = "giveninfo_Title titleActive";
    slice_header.innerText = piemenuHeaders[3];
    slice_info = document.createElement("p");
    slice_info.className = "giveninfo_Paragraph infopActive";
    slice_info.innerText = piemenuInfos[3];
    headercont.appendChild(slice_header);
    infoPcont.appendChild(slice_info);
    for (link in Menu3) {
      let infobtn = document.createElement("div");
      // infobtn.className = "list-group-item";
      // infobtn.innerHTML = '<img src="./images/arrowOption.svg" alt="">';
      infobtn.setAttribute("onclick", `showInfo(${link})`);
      infoMenu.appendChild(infobtn);
      let new_link = document.createElement("a");
      new_link.setAttribute("onmouseup", `showInfo(${link})`);
      new_link.className = "list-group-item";
      new_link.innerText = Menu3[link];
      if(link == 3 || link == 4 ){
        new_link.setAttribute("onclick", `hideForm()`);
        new_link.setAttribute("onmouseup", ``);
        new_link.classList.toggle("inactiveOption")
      }
      else{
        new_link.setAttribute("onclick", `showForm(${link})`);
      }
      if(link == 6 || link == 7 || link == 8){
        new_link.setAttribute("onclick", `hideForm()`);
        new_link.setAttribute("onmousedown","showCalendar()")
      }
      linkMenu.appendChild(new_link);
      new_info_header = document.createElement("span");
      new_info_header.className = "giveninfo_Title";
      new_info_header.id = `infoHeader${link}`;
      new_info_header.innerText = Menu3[link];
      headercont.appendChild(new_info_header);
      new_info_p = document.createElement("p");
      new_info_p.innerText = infos3[link];
      new_info_p.id = `infoP${link}`;
      new_info_p.className = "giveninfo_Paragraph";
      infoPcont.appendChild(new_info_p);
    }
  }
  if (menuNumber == 4) {
    slice_header = document.createElement("span");
    slice_header.className = "giveninfo_Title titleActive";
    slice_header.innerText = piemenuHeaders[4];
    slice_info = document.createElement("p");
    slice_info.className = "giveninfo_Paragraph infopActive";
    slice_info.innerText = piemenuInfos[4];
    headercont.appendChild(slice_header);
    infoPcont.appendChild(slice_info);
    for (link in Menu4) {
      let infobtn = document.createElement("div");
      // infobtn.className = "list-group-item";
      // infobtn.innerHTML = '<img src="./images/arrowOption.svg" alt="">';
      infobtn.setAttribute("onclick", `showInfo(${link})`);
      infoMenu.appendChild(infobtn);
      let new_link = document.createElement("a");
      new_link.setAttribute("onmouseup", `showInfo(${link})`);
      new_link.className = "list-group-item";
      new_link.innerText = Menu4[link];
      new_link.setAttribute("onclick", `showForm(${link})`);
      linkMenu.appendChild(new_link);
      new_info_header = document.createElement("span");
      new_info_header.className = "giveninfo_Title";
      new_info_header.id = `infoHeader${link}`;
      new_info_header.innerText = Menu4[link];
      headercont.appendChild(new_info_header);
      new_info_p = document.createElement("p");
      new_info_p.innerText = infos4[link];
      new_info_p.id = `infoP${link}`;
      new_info_p.className = "giveninfo_Paragraph";
      infoPcont.appendChild(new_info_p);
    }
  }
  if (menuNumber == 5) {
    slice_header = document.createElement("span");
    slice_header.className = "giveninfo_Title titleActive";
    slice_header.innerText = piemenuHeaders[5];
    slice_info = document.createElement("p");
    slice_info.className = "giveninfo_Paragraph infopActive";
    slice_info.innerText = piemenuInfos[5];
    headercont.appendChild(slice_header);
    infoPcont.appendChild(slice_info);
    for (link in Menu5) {
      let infobtn = document.createElement("div");
      // infobtn.className = "list-group-item";
      // infobtn.innerHTML = '<img src="./images/arrowOption.svg" alt="">';
      infobtn.setAttribute("onclick", `showInfo(${link})`);
      infoMenu.appendChild(infobtn);
      let new_link = document.createElement("a");
      new_link.setAttribute("onmouseup", `showInfo(${link})`);
      new_link.className = "list-group-item";
      new_link.setAttribute("onclick", `showForm(${link})`);
      new_link.innerText = Menu5[link];
      linkMenu.appendChild(new_link);
      new_info_header = document.createElement("span");
      new_info_header.className = "giveninfo_Title";
      new_info_header.id = `infoHeader${link}`;
      new_info_header.innerText = Menu5[link];
      headercont.appendChild(new_info_header);
      new_info_p = document.createElement("p");
      new_info_p.innerText = infos5[link];
      new_info_p.id = `infoP${link}`;
      new_info_p.className = "giveninfo_Paragraph";
      infoPcont.appendChild(new_info_p);
    }
  }
  if (menuNumber == 6) {
    slice_header = document.createElement("span");
    slice_header.className = "giveninfo_Title titleActive";
    slice_header.innerText = piemenuHeaders[6];
    slice_info = document.createElement("p");
    slice_info.className = "giveninfo_Paragraph infopActive";
    slice_info.innerText = piemenuInfos[6];
    headercont.appendChild(slice_header);
    infoPcont.appendChild(slice_info);
    for (link in Menu6) {
      let infobtn = document.createElement("div");
      // infobtn.className = "list-group-item";
      // infobtn.innerHTML = '<img src="./images/arrowOption.svg" alt="">';
      infobtn.setAttribute("onclick", `showInfo(${link})`);
      infoMenu.appendChild(infobtn);
      let new_link = document.createElement("a");
      new_link.setAttribute("onmouseup", `showInfo(${link})`);
      new_link.className = "list-group-item";
      new_link.setAttribute("onclick", `showForm(${link})`);
      new_link.innerText = Menu6[link];
      linkMenu.appendChild(new_link);
      new_info_header = document.createElement("span");
      new_info_header.className = "giveninfo_Title";
      new_info_header.id = `infoHeader${link}`;
      new_info_header.innerText = Menu6[link];
      headercont.appendChild(new_info_header);
      new_info_p = document.createElement("p");
      new_info_p.innerText = infos6[link];
      new_info_p.id = `infoP${link}`;
      new_info_p.className = "giveninfo_Paragraph";
      infoPcont.appendChild(new_info_p);
    }
  }
  currentMenuNUM = menuNumber;
  } else {
   window.location.href='./login.html'
   alert('You have to be login to take meeting!')
  }
  
}

let currentMenuNUM = 0;
let is_myFormOpen = false;
let myform = document.querySelector("#myForm");
let optionInfo_Container = document.querySelector(".optionInfo_Container");
let options_cont = document.querySelector("#somethingSelection");
function showForm(formNum) {
  options_cont.innerHTML = " <option selected>Open this select menu</option>";
  optionInfo_Container.innerHTML = "";
  options_cont.addEventListener('click',event=>{
    sessionStorage.setItem('option',options_cont.value)
  })
  if (currentMenuNUM == 0) {
    for (filter in options.Menu0[formNum]) {
      filter_element = document.createElement("option");
      filter_element.value = options.Menu0[formNum][filter];
      filter_element.innerText = options.Menu0[formNum][filter];
      optionInfo = document.createElement("span");
      optionInfo.id = `optionInfo${parseInt(filter) + 1}`;
      optionInfo.className = "optionInfo";
      optionInfo.innerText = dropdown_Infos.Menu0[formNum][filter];
      optionInfo_Container.appendChild(optionInfo);
      options_cont.appendChild(filter_element);
    }
  }
  if (currentMenuNUM == 1) {
    for (filter in options.Menu1[formNum]) {
      filter_element = document.createElement("option");
      filter_element.value = options.Menu1[formNum][filter];
      filter_element.innerText = options.Menu1[formNum][filter];
      optionInfo = document.createElement("span");
      optionInfo.id = `optionInfo${parseInt(filter) + 1}`;
      optionInfo.className = "optionInfo";
      optionInfo.innerText = dropdown_Infos.Menu1[formNum][filter];
      optionInfo_Container.appendChild(optionInfo);
      options_cont.appendChild(filter_element);
    }
  }
  if (currentMenuNUM == 2) {
    for (filter in options.Menu2[formNum]) {
      filter_element = document.createElement("option");
      filter_element.value = options.Menu2[formNum][filter];
      filter_element.innerText = options.Menu2[formNum][filter];
      optionInfo = document.createElement("span");
      optionInfo.id = `optionInfo${parseInt(filter) + 1}`;
      optionInfo.className = "optionInfo";
      optionInfo.innerText = dropdown_Infos.Menu2[formNum][filter];
      optionInfo_Container.appendChild(optionInfo);
      options_cont.appendChild(filter_element);
    }
  }
  if (currentMenuNUM == 3) {
    for (filter in options.Menu3[formNum]) {
      filter_element = document.createElement("option");
      filter_element.value = options.Menu3[formNum][filter];
      filter_element.innerText = options.Menu3[formNum][filter];
      optionInfo = document.createElement("span");
      optionInfo.id = `optionInfo${parseInt(filter) + 1}`;
      optionInfo.className = "optionInfo";
      optionInfo.innerText = dropdown_Infos.Menu3[formNum][filter];
      optionInfo_Container.appendChild(optionInfo);
      options_cont.appendChild(filter_element);
    }
  }
  if (currentMenuNUM == 4) {
    for (filter in options.Menu4[formNum]) {
      filter_element = document.createElement("option");
      filter_element.value = options.Menu4[formNum][filter];
      filter_element.innerText = options.Menu4[formNum][filter];
      optionInfo = document.createElement("span");
      optionInfo.id = `optionInfo${parseInt(filter) + 1}`;
      optionInfo.className = "optionInfo";
      optionInfo.innerText = dropdown_Infos.Menu4[formNum][filter];
      optionInfo_Container.appendChild(optionInfo);
      options_cont.appendChild(filter_element);
    }
  }
  if (currentMenuNUM == 5) {
    for (filter in options.Menu5[formNum]) {
      filter_element = document.createElement("option");
      filter_element.value = options.Menu5[formNum][filter];
      filter_element.innerText = options.Menu5[formNum][filter];
      optionInfo = document.createElement("span");
      optionInfo.id = `optionInfo${parseInt(filter) + 1}`;
      optionInfo.className = "optionInfo";
      optionInfo.innerText = dropdown_Infos.Menu5[formNum][filter];
      optionInfo_Container.appendChild(optionInfo);
      options_cont.appendChild(filter_element);
    }
  }
  if (currentMenuNUM == 6) {
    for (filter in options.Menu6[formNum]) {
      filter_element = document.createElement("option");
      filter_element.value = options.Menu6[formNum][filter];
      filter_element.innerText = options.Menu6[formNum][filter];
      optionInfo = document.createElement("span");
      optionInfo.id = `optionInfo${parseInt(filter) + 1}`;
      optionInfo.className = "optionInfo";
      optionInfo.innerText = dropdown_Infos.Menu6[formNum][filter];
      optionInfo_Container.appendChild(optionInfo);
      options_cont.appendChild(filter_element);
    }
  }
  if (is_myFormOpen == false) {
    myform.classList.toggle("showmyfrom");
    is_myFormOpen = !is_myFormOpen;
  }
  // myform.scrollIntoView(false);
}

options_cont.addEventListener("change", () => {
  let allOptions = document.getElementsByClassName("optionInfo");
  for (option in allOptions) {
    allOptions[option].className = "optionInfo";
  }
  let pickedOption = document.querySelector(
    `#optionInfo${options_cont.selectedIndex}`
  );
  pickedOption.classList.toggle("optioninfoActive");
});

let headers = document.getElementsByClassName("giveninfo_Title");
let titles = document.getElementsByClassName("giveninfo_Paragraph");
let info_cont = document.querySelector(".infoContainer");
function showInfo(element_num) {
  info_cont.style.display = "block";
  
  for (i = 0; i < headers.length; i++) {
    headers[i].classList.remove("titleActive");
    titles[i].classList.remove("infopActive");
  }
  let header = document.querySelector(`#infoHeader${element_num}`);
  let paragraph = document.querySelector(`#infoP${element_num}`);
  function getText( obj ) {
    return obj.textContent ? obj.textContent : obj.innerText;
  }
  const sub_text=getText(document.querySelector(`#infoHeader${element_num}`))
  sessionStorage.setItem('sub_type',sub_text)
  noFriday()
  header.classList.toggle("titleActive");
  paragraph.classList.toggle("infopActive");
}

function hideForm(){
  if(is_myFormOpen == true){
    myform.classList.toggle("showmyfrom");
    is_myFormOpen = !is_myFormOpen;
  }
}

function showCalendar(){
  let condition_login = localStorage.getItem('token_company') || localStorage.getItem('token_partner')
  let condition_bypass = true
  if( condition_login ){


  let calendar = document.querySelector(".container_calendar")
  if(calendar.classList.contains("showCalendar")){
    return
  }
  else{
    calendar.classList.toggle("showCalendar")
  }
  document.querySelector(".fc-next-button").click()
  document.querySelector(".fc-prev-button").click()
  calendar.scrollIntoView(false)
}
else{
  window.location.href='./login.html'
  alert('You have to be login to take meeting!')
}
}

