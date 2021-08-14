import React from 'react';
import styles from './Jobs.style';
import {FlatList, Text, View} from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import JobCard from "../../components/Card/JobCard";

let API_URL = "https://www.themuse.com/api/public/jobs?page=0";

const Jobs = () => {
    const {loading, data, error} = useFetch(API_URL);

    const renderJobs = ({item}) => <JobCard job={item} />;

    return(
        <View style={styles.container}>
            <FlatList keyExtractor={(item, index) => item.id} data={jobs.results} renderItem={renderJobs} />
        </View>
    )
}

export default Jobs;

const jobs = {
        "page": 0,
        "page_count": 19904,
        "items_per_page": 20,
        "took": 23,
        "timed_out": false,
        "total": 398075,
        "results": [
            {
                "contents": "<h2><strong>About the opportunity</strong><strong><br></strong></h2>\n\n<p><span>We are looking for a strong candidate to play a key role in the kick-off and creation of a new Cards &amp; Digital Wallets team in Barcelona. The role also has potential to grow into a Tech Lead for the team in the future. Currently, Cards &amp; Digital Wallets is based in Berlin, and we are expanding to Barcelona, so it is an exciting time to join.</span></p>\n\n<p><span>The new team of the </span><span>Cards &amp; Digital Wallets Segment will be responsible for impactful products such as Cash26, Cashback, perks and benefits around card usage. </span></p>\n\n<p><span>Timing wise you are joining at a pivotal moment during which we are redefining our payments strategy to achieve scale and grow revenue inline with our growing global footprint.</span></p>\n\n<p><span>As a Senior Backend Engineer to evolve our product, powered by a microservice architecture predominantly written in Java 11 and Kotlin, using Spring Boot.</span></p>\n\n<p><span>Our cross-functional teams are passionate about collaboration and sharing knowledge, as well as working with a high degree of autonomy.</span></p>\n\n<p><span>You will be encouraged to embrace the latest technological updates and given a platform to work on complex, interesting problems on a daily basis.</span></p>\n\n<h2><strong>In this role, you will:</strong></h2>\n\n<ul>\n<li><span>Being the responsible for a brand new team in Barcelona, working closely with the other teams in Berlin.</span></li>\n<li><span>Mentor new members in the team by relentlessly guarding code quality through pull requests and helping them when they have questions</span></li>\n<li><span>Stay up to date with the latest trends in technology and you are not afraid to propose some findings during our </span><a href=\"https://mag.n26.com/getting-stuff-done-days-at-n26-a70105e6b9c9\"><span>GSDD</span></a><span>.</span></li>\n<li><span>Work within your cross-functional team to uphold the highest technical standards right across the product</span></li>\n</ul>\n\n<h2><strong>What you need to be successful:</strong></h2>\n\n<p><span>Background:</span></p>\n\n<ul>\n<li><span>Significant experience in developing software using a JVM language and Spring Boot in large-scale production systems (note: experience of Kotlin would be a plus)</span></li>\n</ul>\n\n<p><span>Skills:</span></p>\n\n<ul>\n<li><span>Sound understanding of microservice architecture</span></li>\n<li><span>Deep knowledge of both relational and non-relational databases, preferably Postgres</span></li>\n<li><span>Appreciation of working in a modern cloud architecture, preferably with AWS</span></li>\n<li><span>Language Skills: Full professional proficiency in English</span></li>\n</ul>\n\n<p><span>Traits:</span></p>\n\n<ul>\n<li><span>Strong bias for action, and getting things done</span></li>\n<li><span>Ongoing appreciation and consideration for security</span></li>\n<li><span>Motivation to write code which is well-tested and well-documented</span></li>\n<li><span>Give and receive open, direct and timely feedback</span></li>\n</ul>\n\n<h2><strong>What’s in it for you:</strong></h2>\n\n<ul>\n<li>Accelerate your career growth by joining Germany’s #1 Top Startup Employer, named by LinkedIn two years running 🚀</li>\n<li>Health &amp; Life insurance, Personal development budget, Spanish language classes, fitness memberships, childcare services, N26 premium bank card, and your choice of a Mac or Windows laptop</li>\n<li>24 vacation days per year, with an additional day for each year of service - up to 28 days</li>\n<li>A high degree of collaboration and autonomy while working with a group of international peers, <a href=\"https://medium.com/insiden26/getting-more-stuff-done-days-at-n26-6886951da4f8\">getting things done attitude</a>, and access to cutting edge technologies</li>\n<li>Rotating selection of hot and cold drinks and snacks in the office, Friday Celebrations once per month with pizza, wine, and beer, plus a monthly company-wide lunch and learn</li>\n<li>A relocation package with visa support for those who need it</li>\n</ul>\n\n<h2><strong>Who we are</strong></h2>\n\n<p><span>N26 has reimagined banking for today’s digital world. Technology and design empower everything we do and it’s how we are building the global banking platform the world loves to use.</span></p>\n\n<p><span>We've eliminated physical branches, paperwork, and hidden fees for an elegant digital experience and supreme savings. Giving people the power to live and bank their way is what gets us out of bed in the morning and inspires the work that we do.</span></p>\n\n<p><span>N26 has international offices in Berlin, Barcelona, New York and Vienna.</span></p>\n\n<p><span>Sound good? Apply now for this position.</span></p>\n\n<p><em><span>N26 is an equal opportunity employer and values diversity. We do not discriminate on the basis of race, religion, ethnicity, national origin, gender, sexual orientation, age, marital status or disability status.</span></em></p>",
                "name": "Senior Backend Engineer - Cards",
                "type": "external",
                "publication_date": "2021-08-03T11:03:16Z",
                "short_name": "senior-backend-engineer-cards-fe88eb",
                "model_type": "jobs",
                "id": 5407073,
                "locations": [
                    {
                        "name": "Barcelona, Spain"
                    }
                ],
                "categories": [
                    {
                        "name": "Software Engineer"
                    }
                ],
                "levels": [
                    {
                        "name": "Senior Level",
                        "short_name": "senior"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/n26/senior-backend-engineer-cards-fe88eb"
                },
                "company": {
                    "id": 11702,
                    "short_name": "n26",
                    "name": "N26"
                }
            },
            {
                "contents": "<p>Overview <br>Are you a credentialed CPA, EA, or practicing attorney? And do you have a minimum 3 season of paid Tax Preparation experience with a minimum of 30 tax returns per tax year? If you're one of tax professionals, we need you to help our customers complete their taxes using TurboTax. You'll advance our goal of \"Powering Prosperity Around the World\" by providing expert guidance and explanations of tax and technical terms to our customers. You'll also play an important role in our effort to enhance our brand by delighting our customers and empowering them to prepare their taxes.<br><br> What you'll bring <ul><li>Must possess active unrestricted credential: EA (Enrolled Agent), CPA (Certified Public Accountant), or Practicing Attorney with strong tax preparation experience and extensive knowledge of tax laws</li><li>Must possess or be able to obtain any related State licenses, certificates, permits or bonds</li><li>Must possess active PTIN (Preparer Tax Identification Number)</li><li>3 or more years of recent experience preparing federal and state individual 1040 tax returns for clients/customers, using commercial tax preparation software </li><li> Working knowledge of Circular 230</li><li>Audit experience a plus (IRS and state tax authorities)</li><li>Proficient with technology; solid knowledge of computer operations and software</li><li> Must have (or be willing to obtain) a dedicated hardwired internet connection </li><li>Strong customer service skills - ability to interact with customers through video and audio tools in a way that is professional, friendly and reassuring</li><li>Excellent verbal and written communication skills</li><li>Ability to work in a fast-paced environment with minimal supervision</li><li>Critical thinking, problem solving, research skills and determination</li><li>Bilingual (English/Spanish) communication skills (written &amp; spoken) a plus</li></ul><br>For internal use: tst<br><br>How you will lead <ul><li>This is a seasonal, virtual, customer-facing role; you will be using our state of the art video communication software (SmartLook) to interact with customers </li><li>Help TurboTax customers who are working on their tax return with 1) Tax advice, including return preparation and signature when required; 2) Product/software inquiries, and 3) Tax calculations</li><li>Create high quality customer interactions and experiences that instill confidence using deep customer empathy, and your deep knowledge and expertise in the field of tax preparation</li><li>Utilize and leverage government websites, professional resources, and team expertise to seek out and deliver the right answer to the customer using everyday language</li><li>Apply defined practices, procedures, and company policies to troubleshoot and resolve tax advice and preparation customer inquiries</li><li>Document customer interactions</li></ul><br>If you are a Colorado resident, visit intuit.com/careers/colorado-job-postings-information/<br><br></p>",
                "name": "Remote Tax Advisor - CPA, Enrolled Agent or Attorney",
                "type": "external",
                "publication_date": "2021-08-12T11:38:15Z",
                "short_name": "remote-tax-advisor-cpa-enrolled-agent-or-attorney-dd12d6",
                "model_type": "jobs",
                "id": 6545427,
                "locations": [
                    {
                        "name": "Beaumont, TX"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/intuit/remote-tax-advisor-cpa-enrolled-agent-or-attorney-dd12d6"
                },
                "company": {
                    "id": 11811,
                    "short_name": "intuit",
                    "name": "Intuit"
                }
            },
            {
                "contents": "<p><b>Job Description</b><br>The Shift Supervisor Trainee role is an entry-level, short-term role that prepares an employee to perform a higher-level supervisory role, such as Operations Supervisor or Shift Supervisor. The Shift Supervisor Trainee performs work as directed in order to prepare for future supervisory responsibilities, completes basic operations and management skills training, and also learns about key aspects of the business (e.g., building customer loyalty through exceptional service) and CVS/pharmacy culture.<br> <br>Upon successful completion of the training program, Shift Supervisor Trainees are eligible to be considered for promotion to open Operations Supervisor or Shift Supervisor positions. These key leadership roles support the CVS Store Management team in driving store execution and performance while building consumer loyalty to CVS/pharmacy through a focus on excellent customer service. When there is no manager onsite, the Operations Supervisor or Shift Supervisor leads the store staff, ensures that store operations run smoothly, and is responsible for ensuring the completion of all opening and closing procedures.<br><br>Essential Functions:<br>1. Management <br> •  Work effectively with store management and store crews<br> •  Supervise the store's crew through assigning, directing and following up of all activities<br> •  Effectively communicate information both to and from store management and crews<br> 2. Customer Service<br> •  Assist customers with their questions, problems and complaints<br> •  Promote CVS customer service culture. (Greet, offer help, and thank) <br> •  Handle all customer relations issues in accordance with company policy and promote a positive shopping experience for all CVS customers<br> •  Maintain customer/patient confidentiality<br><br><b>Required Qualifications</b><br>Deductive reasoning ability, analytical skills and computer skills. Advanced communication skills. Ability to work a flexible schedule, including some early morning, overnight and weekend shifts, to work overtime as needed.<br><br><b>Preferred Qualifications</b><li>Experience in retail</li><b>Education</b><li>High school diploma or equivalent required</li><b>Business Overview</b><br>At CVS Health, we are joined in a common purpose: helping people on their path to better health. We are working to transform health care through innovations that make quality care more accessible, easier to use, less expensive and patient-focused. Working together and organizing around the individual, we are pioneering a new approach to total health that puts people at the heart.<br><br> We strive to promote and sustain a culture of diversity, inclusion and belonging every day. CVS Health is an equal opportunity and affirmative action employer. We do not discriminate in recruiting, hiring or promotion based on race, ethnicity, sex/gender, sexual orientation, gender identity or expression, age, disability or protected veteran status or on any other basis or characteristic prohibited by applicable federal, state, or local law. We proudly support and encourage people with military experience (active, veterans, reservists and National Guard) as well as military spouses to apply for CVS Health job opportunities.</p>",
                "name": "Shift Supervisor Management Trainee",
                "type": "external",
                "publication_date": "2021-08-13T12:25:34Z",
                "short_name": "shift-supervisor-management-trainee-e91142",
                "model_type": "jobs",
                "id": 4398876,
                "locations": [
                    {
                        "name": "Miami, FL"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/cvshealth/shift-supervisor-management-trainee-e91142"
                },
                "company": {
                    "id": 12096,
                    "short_name": "cvshealth",
                    "name": "CVS Health"
                }
            },
            {
                "contents": "<p>We spend up to 90 percent of our lives in buildings, and we believe that everything people do in life deserves a flawless place to do it. In a world where our fundamental health, safety and wellbeing expectations have been deeply impacted with the anxiety of a new virus, buildings should offer a haven. Ideally, a perfect place to learn. A flawless place to grow. A perfect place to prosper.<br><br>While it's true that today's buildings should be efficient, reliable and safe - these characteristics alone don't enable businesses and empower people the way a true smart building can.<br><br>How do you craft the future Smart Buildings? We're looking for the makers of tomorrow, the hardworking individuals ready to help Siemens transform entire industries, cities and even countries. Get to know us from the inside, develop your skills on the job. Join our Pune team to make difference!<br><br><strong>What are my Job Responsibilities?</strong><br><ul> <li>You need to Review software requirements and prepare test scenarios.</li> <li>You have to Execute tests on software usability.</li> <li>You Should understand Software Test Automation of owned Manual Test Areas.</li> <li>You need to Analyze test results for impacts, errors or bugs, performance, and usability.</li> <li>You should Prepare reports on all aspects related to the software testing carried out and reporting to the development team.</li> <li>Yu should have working knowledge of C# in Automation Testing.</li> <li>You must Participate in requirement reviews and providing input on requirements, product design, and potential problem.</li> </ul><br><strong>What do I need to be Eligible for this Role?</strong><br><ul> <li>An engineering degree B.E/B.Tech/MCA/M.Tech/M.Sc.</li> <li>You should be Up-to-date knowledge of software test design and testing methodologies.</li> <li>5 - 8 Years of Relevant experience in Manual and Automation Testing.</li> <li>We will prefer candidates with scripting knowledge, IBM Jazz and RQM.</li> </ul><br><strong>Make your mark in our exciting world at Siemens.</strong><br><br>This role is primarily based at Pune. However, you may get the opportunity to visit other locations within India as and when the work demands.<br><br>We've got quite a lot to offer. How about you?<br><br>We're Siemens. A collection of over 379,000 minds building the future, one day at a time in over 200 countries. We're dedicated to equality and we encourage applications that reflect the diversity of the communities we work in. All employment decisions at Siemens are based on qualifications, merit and business need. Bring your curiosity and creativity and help us craft tomorrow.<br><br><strong>Find out more about Siemens careers at:  https://new.siemens.com/global/en/company/jobs.html </strong><br><br><b>Organization:</b> Advanta<br><br><b>Company:</b> Siemens Technology and Services Private Limited<br><br><b>Experience Level:</b> Experienced Professional<br><br><b>Job Type:</b> Full-time<br></p>",
                "name": "Senior Test Engineer(5-8 Years)",
                "type": "external",
                "publication_date": "2021-08-06T23:25:27Z",
                "short_name": "senior-test-engineer58-years",
                "model_type": "jobs",
                "id": 5855656,
                "locations": [
                    {
                        "name": "Pune, India"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Senior Level",
                        "short_name": "senior"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/siemens/senior-test-engineer58-years"
                },
                "company": {
                    "id": 11913,
                    "short_name": "siemens",
                    "name": "Siemens"
                }
            },
            {
                "contents": "<p><strong>Art der Anstellung:</strong>   <br>Befristet; Teilzeit; 15-20 Stunden/Woche<br><br>Willst du die Zukunft des Gesundheitswesens mitgestalten? Wir bei Siemens Healthineers setzen auf Menschen, die ihre Energie und Leidenschaft diesem Ziel widmen - das sagt schon unser Unternehmensname. Er steht für den Pioniergeist unserer Mitarbeiter, gepaart mit unserer langen Tradition als Technologieanbieter in der stets dynamischen Gesundheitsbranche.<br>Wir bieten dir ein flexibles und dynamisches Umfeld voller Gelegenheiten, über die eigene Komfortzone hinaus zu wachsen, um sich persönlich und beruflich weiterzuentwickeln. Klingt das interessant für dich?<br><br><strong>Dann werde Teil unseres globalen Teams als Werkstudent (w/m/d) im Werkstofflabor</strong><br><br><strong>Deine Aufgaben und Verantwortlichkeiten:</strong><ul><li>Du bist Teil des Werkstoff- und Prüflabors und helfen hier bei den arbeitstäglichen Analysen</li><li>Du führst Qualitätsprüfungen an Bauteilen selbstständig durch</li><li>Du unterstützt die Kollegen bei der Probenpräparation und Auswertung von Ergebnissen</li></ul><br>Mehr über dieses Geschäftsfeld erfährst du unter  https://www.siemens-healthineers.com/de/products-services <br><br><strong>Deine Qualifikationen und Erfahrung:</strong><ul><li>Du studierst derzeit erfolgreich in einer der folgenden Fachrichtungen: Werkstoffwissenschaften, physikalische Technik, Chemie, Maschinenbau oder einer vergleichbaren technischen Studienrichtung</li><li>Vorkenntnisse in der Präparation von Proben für Schliffe und Materialanalysen sind von Vorteil</li><li>Du verfügst über sehr gute Kenntnisse im Umgang mit MS Office </li></ul><br><strong><br>Dein Profil und deine Fähigkeiten:</strong><ul><li>Eigeninitiative, Interesse an Labortätigkeiten und hohes Engagement runden dein Profil ab</li></ul><strong> Unser globales Team: </strong><br><br> Siemens Healthineers ist ein weltweit führendes Medizintechnikunternehmen. Mit mehr als 65.000 engagierten Mitarbeitern in über 70 Ländern gestalten wir die Zukunft des Gesundheitswesens. Jeden Tag profitieren etwa fünf Millionen Patienten weltweit von unseren innovativen Technologien und Dienstleistungen aus den Bereichen Diagnostik und therapeutische Bildgebung, Labordiagnostik und molekulare Medizin sowie von unseren digitalen Gesundheits- und Unternehmensdienstleistungen. <br><br><strong> Unsere Kultur: </strong><br><br> Unsere Unternehmenskultur schätzt verschiedene Blickwinkel, offene Diskussionen und den Willen, Konventionen in Frage zu stellen. Ständiger Wandel gehört zu unserem Arbeitsalltag. Wir wollen in unserer Branche Veränderungen vorantreiben, statt nur darauf zu reagieren. Deswegen laden wir Sie ein, sich neuen Herausforderungen zu stellen, eigene Ideen auszutesten und Erfolge zu feiern. <br><br> Besuchen Sie auch unsere Karriere-Seite unter  https://www.siemens-healthineers.com/de/careers <br><br> Wir legen Wert auf Chancengleichheit und freuen uns über Bewerbungen von Menschen mit Behinderung. <br><br>Du möchtest mehr erfahren? Sprich uns an:  Students@Siemens Healthineers <br><br>Wir nehmen den Schutz deiner Daten und die Einhaltung der DSGVO und anderer Datenschutzgesetze ernst. Deshalb bitten wir dich, uns deinen Lebenslauf nicht per E-Mail zu schicken. Wir bitten dich stattdessen, ein Profil in unserer Talent Community anzulegen. Dort kannst du deinen Lebenslauf hochladen. An der Einrichtung eines Profils erkennen wir, dass du an Karrieremöglichkeiten bei uns interessiert bist und wir können dich leicht benachrichtigen, wenn relevante Stellen frei werden. Klicke  hier , um ein Profil anzulegen. <br><br>Siemens Healthineers Deutschland wurde mit dem Zertifikat Great Place to Work® ausgezeichnet. <br><br><b>Organization:</b> Siemens Healthineers<br><br><b>Company:</b> Siemens Healthcare GmbH<br><br><b>Experience Level:</b> Student (Not Yet Graduated)<br><br><b>Job Type:</b> Part-time<br></p>",
                "name": "Werkstudent (w/m/d) im Werkstofflabor",
                "type": "external",
                "publication_date": "2021-07-06T23:24:07Z",
                "short_name": "werkstudent-wmd-im-werkstofflabor-46fad1",
                "model_type": "jobs",
                "id": 6239469,
                "locations": [
                    {
                        "name": "Rudolstadt, Germany"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/siemens/werkstudent-wmd-im-werkstofflabor-46fad1"
                },
                "company": {
                    "id": 11913,
                    "short_name": "siemens",
                    "name": "Siemens"
                }
            },
            {
                "contents": "<p><b>DESCRIPTION</b><br><br> Do you like helping U.S. Intelligence Community agencies implement innovative cloud computing solutions and solve technical problems? Do you love leading customers through a variety of projects involving IT strategy, distributed architecture implementation, and hybrid Cloud operations? Can you lead world class teams that drive breakthrough mission outcomes using new IT deliver models?<br><br>AWS Professional Services is seeking a consulting Senior Practice Manager who has experience working with public sector customers and can lead a team of specialists across a range of disciplines. As a Senior Practice Manager, you will be responsible for building and managing a team of professional services consultants working with customers and partners to architect and implement innovative solutions. You will routinely engage with Director, C-level executives, and governing boards. You will be responsible for opportunity capture and driving engagement delivery. You will work closely with partner teams; drive business development initiatives through thought leadership; provide portfolio guidance and oversight; and meet and exceed customer satisfaction targets.<br><br>The ideal candidate will bring a diverse IT and/or Management Consulting background and knowledge of industry IT trends within the Public Sector space, leveraging this credibility as a strategic advisor to our customers, partners and internally across AWS.<br><br>The ideal candidate will be able to craft an innovative, forward-looking strategy while clearly outlining the investment and multi-step go-to-market plan necessary to help AWS customers lead the changes to IT strategy, policies, processes, people, governance and partnerships.<br><br>This position is open to a candidate who is willing to relocate. The position requires domestic travel to customer sites.<br><br>This position requires that the candidate selected be a U.S. citizen and must currently possess and maintain an active TS/SCI security clearance with polygraph and satisfy other security related requirements.<br>•  Engage customers - collaborate with sales leaders and engineering teams to develop strong customer and partner relationships and build a growing business in a geographic territory, driving AWS adoption in key markets and accounts.<br>•  Coach and teach - collaborate with AWS field sales, pre-sales, training and support teams to help partners and customers learn and use AWS services such as Amazon Databases  Amazon Elastic Compute Cloud (EC2), Amazon Simple Storage Service (S3), AWS Identity and Access Management (IAM), RDS/Aurora/DynamoDB/Redshift, etc.<br>•  Deliver value - lead high quality delivery of a variety of customized engagements with partners and enterprise customers in the commercial and public sectors.<br>•  Build and lead great teams - attract top IT architecture talent to build high performing teams of consultants with technical depth, and genuine customer relationship skills and a career focus on the cloud infrastructure capabilities of AWS (technical and process). Assemble and develop the very best in the world.<br>•  Be a customer advocate - Work with AWS engineering service teams to convey deep technical requirements from partners and customers as input to AWS technology roadmaps.<br>•  Build organization assets - Lead your AWS team in the build and rollout of packaged offers designed to optimize customer impact, leveraging field experiences and outcomes.<br><br>Here at AWS, we embrace our differences. We are committed to furthering our culture of inclusion. We have ten employee-led affinity groups, reaching 40,000 employees in over 190 chapters globally. We have innovative benefit offerings, and we host annual and ongoing learning experiences, including our Conversations on Race and Ethnicity (CORE) and AmazeCon (gender diversity) conferences. Amazon's culture of inclusion is reinforced within our 14 Leadership Principles, which remind team members to seek diverse perspectives, learn and be curious, and earn trust.<br><br>We're dedicated to supporting new team members. Our team has a broad mix of experience levels and Amazon tenures, and we're building an environment that celebrates knowledge sharing and mentorship.<br><br>Our team also puts a high value on work-life balance. Striking a healthy balance between your personal and professional life is crucial to your happiness and success here, which is why we aren't focused on how many hours you spend at work or online. Instead, we're happy to offer a flexible schedule so you can have a more productive and well-balanced lifeboth in and outside of work.<br><br>This position requires that the candidate selected be a U.S. citizen and must currently possess and maintain an active TS/SCI security clearance with polygraph.<br><br><strong>For more information please reach out to Chris Widmann (widmannc@amazon.com)</strong><br><br> <b>BASIC QUALIFICATIONS</b> <br><br> •  Bachelor's degree in information technology or computer science or equivalent experience<br>•  15+ years of relevant enterprise IT delivery oversight experience with national security customers and ecosystem partners<br>•  10+ years of relevant program management experience including innovative agreements w/ integrators, ISVs and managed services providers<br>•  5+ years of direct people management experience leading a team of at least 10 or manager of manager experience in a consulting practice<br>•  Ability to travel to client locations in the Washington DC Metropolitan area to deliver professional services as needed<br>•  Current, active US Government Security Clearance of TS/SCI with Polygraph<br><br> <b>PREFERRED QUALIFICATIONS </b> <br><br> •  Deep understanding of data center, cloud computing, adoption strategy and transition challenges<br>•  Demonstrated ability to think strategically about business, product, and technical challenges<br>•  Outstanding customer relationship management experience and collaboration skills in consulting team leader role<br>•  Experience with design of modern, scalable delivery models for technology consulting services<br>•  Business development experience including complex agreements w/ integrators and ISVs<br>•  Demonstrated experience developing statement of work, writing and closing contracts<br>•  Use of AWS services in distributed environments with Microsoft, IBM, Oracle, HP, SAP etc<br><br>Here at AWS, we embrace our differences. We are committed to furthering our culture of inclusion. We have ten employee-led affinity groups, reaching 40,000 employees in over 190 chapters globally. We have innovative benefit offerings, and we host annual and ongoing learning experiences, including our Conversations on Race and Ethnicity (CORE) and AmazeCon (gender diversity) conferences. Amazon's culture of inclusion is reinforced within our 14 Leadership Principles, which remind team members to seek diverse perspectives, learn and be curious, and earn trust.<br><br>Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, protected veteran status, disability, age, or other legally protected status. For individuals with disabilities who would like to request an accommodation, visit US Disability Accommodations.</p>",
                "name": "Senior Practice Manager",
                "type": "external",
                "publication_date": "2021-08-04T00:04:43Z",
                "short_name": "senior-practice-manager-084921",
                "model_type": "jobs",
                "id": 4909148,
                "locations": [
                    {
                        "name": "Herndon, VA"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Senior Level",
                        "short_name": "senior"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/amazon/senior-practice-manager-084921"
                },
                "company": {
                    "id": 12090,
                    "short_name": "amazon",
                    "name": "Amazon"
                }
            },
            {
                "contents": "<p><b>Responsibilities:</b><ul><li>Practice in accordance to state practice act and principles of veterinary medical ethics </li><li>Leverage evidence-based medicine and continue pursuit of education to deliver quality patient care </li><li>Devote yourself to the culture of preventive care and Optimum Wellness Plans  </li><li>Adopt and positively impact new veterinary standards and guidelines  </li><li>Deliver medical and surgical treatments with formulary approved pharmaceuticals, supplies, and equipment, in accordance with Banfield's Medical Quality Standards  </li><li>Partner with clients as an advocate for the pet to plan follow-up visits, provide home-care instructions, and education to ensure the lifelong health of their pets  </li><li>Maintain relevant, comprehensive medical records with the support of practice systems, including Banfield's database, PetWare, designed to obtain data for population research  </li><li>Foster an effective veterinary support team by communicating medical standards, ethical practices, and your veterinary knowledge and experience  </li><li>Exemplify the Mars Five Principles - Quality, Responsibility, Mutuality, Efficiency, and Freedom </li></ul><b>Requirements:</b><ul><li>State Veterinary Board License and must be in good standing for the state in which they intend to be hired, prior to their start date. </li></ul><b>Additional Licensing:</b><ul><li>A State Controlled Substance (SCS) License may be required by the state in which you intend to work. If you do not already hold an SCS, Banfield encourages you to obtain this license after your start date as the practice may reimburse this cost.   </li><li>Once an associate has obtained their SCS, Banfield will apply and pay for your DEA License.   </li><li>New associates will be required to take their state USDA Accreditation class by the time they reach the 12-week mark from their hire date. </li></ul><b>Your well-being matters.</b><br><br>We know that your real passion for pet well-being is why you chose this profession. At Banfield, we believe it is just as important to support the well-being of those who devote their lives to this cause. Through our extensive network and support structure, Banfield offers a wide array of benefits and programs, empowering you to focus on yourself and your family, as you care for pets and clients.<br><br>As a Banfield veterinarian, we want you to take full advantage of work and play through:<ul><li>Competitive salary with paid time off  </li><li>Medical, dental, vision and prescription drug benefits for you and eligible dependents  </li><li>Automatic enrollment 401(k) Savings Plan after 60 days of employment  </li><li>Health Savings Account with annual practice-paid funding of $750 to supplement health care expenses   </li><li>Automatic enrollment in 100% practice paid short- and long-term disability after 60 days of employment - includes maternity leave   </li><li>Liability and malpractice insurance   </li><li>Eligibility to enroll in the Veterinary Student Debt Relief Pilot Program </li><li>Optimum Wellness Plans (OWPs) for up to three pets  </li><li>A variety of discounts including Mars, PetSmart, Royal Canin, fitness, cellular, and so much more </li></ul><b>Our dedication to your growth.</b><br><br>Your development is important to us which is why we'll provide you with the following:<ul><li>Personal development plans designed to define and achieve your career goals  </li><li>Practice-paid continuing education opportunities  </li><li>VIN Membership discounts and other veterinary networking opportunities  </li><li>The chance to lend your skills to the communities you serve and live in </li></ul><b>Commitment to community wellness.</b><br><br>Through volunteering efforts, and our programs designed to benefit local shelters and rescues, we strengthen the pet-human connections in our communities. Discover how we support the wellness of our people and profession through the Mars Volunteer Program (MVP).<br><br><b>Support when you need it most. </b><br><br>As the world's largest veterinary practice, one of our biggest differentiators is our talented and equally passionate support teams that surround our skilled veterinarians.<br><br>This network of hospital, field, and headquarters leadership, allows us to offer you the support and resources needed to help you worry less and focus more on being your best self while practicing veterinary medicine.<br><br><b>The time is now! </b><br><br>Ready to start your career with Banfield? Apply now.<br><br>Banfield Pet Hospital® strongly supports and values the uniqueness of all individuals and promotes a work environment where diversity is embraced. Banfield Pet Hospital is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, religion, color, national origin, sex, sexual orientation, gender identity, age, genetic information, or protected veteran status. If you have a disability or special need that requires accommodation, please let us know. Banfield Pet Hospital follows all applicable federal, state and local laws governing nondiscrimination in employment in every Banfield location.</p>",
                "name": "Veterinarian",
                "type": "external",
                "publication_date": "2021-07-09T11:32:29Z",
                "short_name": "veterinarian-cd7e11",
                "model_type": "jobs",
                "id": 5171268,
                "locations": [
                    {
                        "name": "Naperville, IL"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/banfieldpethospital/veterinarian-cd7e11"
                },
                "company": {
                    "id": 707,
                    "short_name": "banfieldpethospital",
                    "name": "Banfield Pet Hospital"
                }
            },
            {
                "contents": "<p><strong>Company Name:</strong>Kroger Stores<br> <strong>Position Type:</strong>Employee<br> <strong>FLSA Status:</strong>Non-Exempt <br><br>Our primary focus is to create an uplifting customer experience through exceptional service. We are looking for friendly and engaged people who have a passion to serve and Feed the Human Spirit. Our associates work in different departments in our stores but share a common goal of being friendly and caring to each other and our customers. From making it right to making connections, we show each other how much we truly care.<br><br>As a part of our team, you could:<br> <ul> <li>Assist customers at checkout and bag groceries</li> <li>Build attractive displays and stock shelves</li> <li>Select and gather products to fulfill customer's online orders</li> <li>Prepare gourmet dishes, make artisan sandwiches and serve local and imported cheeses</li> <li>Bake fresh breads and cookies, decorate cakes and serve personalized coffees</li> <li>Create artistic floral arrangements</li> <li>Prepare fresh cut fruits and vegetables</li> <li>Cut and serve the highest quality meats and seafood</li> <li>Contribute in many other areas to provide extraordinary service to our customers</li> </ul> <br>We are now accepting applications for all positions including cashier, bagger, e-Commerce clerk, grocery clerk, produce clerk, meat clerk, deli clerk and bakery clerk.<br><br>We offer our associates much more than just a paycheck, we offer a career with promise. In addition to medical and retirement plans, we offer paid vacation, life insurance, tuition assistance and college scholarships. Associates also enjoy flexible schedules, and many associates who begin in part-time jobs choose to grow with us into long-term careers. If you are interested in becoming a valued member of our team, apply now. We look forward to getting to know you!<br><br> <strong>Education Level:</strong> None<br> <strong>Required Certifications/Licenses:</strong> None<br> <strong>Position Type:</strong> Part-Time<br> <strong>Shift(s):</strong> Day; Evening; Overnight <br> <strong> Regions :</strong>Mountain<br><br> States : Texas <br> Keywords : <br><br> <strong>Jobs at Kroger:</strong> At Kroger, we hire people who have a passion for helping others and who want to build a relationship with our Customers. No matter what stage of your career, you can build your future at Kroger. We look for people who want more, aspire to be more and work hard to achieve their goals. Our focus on keeping the Customer first is what makes us successful. We offer many opportunities not only in our stores, but in Manufacturing, Logistics, Marketing, Finance, Human Resources, and many other fields. <br><br> <strong>Company Overview</strong> <br> Kroger Family of Companies employs nearly half a million associates who serve customers in 2,782 retail food stores under a variety of <a href=\"http://www.thekrogerco.com/about-kroger/operations/grocery-retail\">local banner names</a> in 35 states. Our Family of Companies also operates 2,268 pharmacies, 274 fine jewelry stores, 1,489 supermarket fuel centers and 38 food production plants in the United States. Kroger is dedicated to our Purpose: to Feed the Human Spirit™ by serving America through food inspiration and uplift and creating #ZeroHungerZeroWaste communities by 2025. Careers with The Kroger Co. and our family of companies offer competitive wages, flexible schedules, benefits and room for advancement.<br><br> Posting Notes: TX||New Caney|| 22030 Market Place Dr ||77357 || Kroger Stores||[[mfield2]]||Customer Service ||Employee|| Non-Exempt || Part-Time|| None <br><br></p>",
                "name": "Kroger Retail Clerk",
                "type": "external",
                "publication_date": "2021-08-13T11:52:13Z",
                "short_name": "kroger-retail-clerk-7f13c9",
                "model_type": "jobs",
                "id": 6242833,
                "locations": [
                    {
                        "name": "Atascocita, TX"
                    }
                ],
                "categories": [
                    {
                        "name": "Retail"
                    }
                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/kroger/kroger-retail-clerk-7f13c9"
                },
                "company": {
                    "id": 11671,
                    "short_name": "kroger",
                    "name": "Kroger"
                }
            },
            {
                "contents": "<p><strong>Company Name:</strong>Kroger Stores<br> <strong>Position Type:</strong>Employee<br> <strong>FLSA Status:</strong>Non-Exempt <br><br> Position Summary: <br> Provide exceptional customer service in a safe and clean environment to ensure the customer's return visit. We accomplish this in many ways including, but not limited to; treating our customers/employees in a fair and ethical manner, promoting an inclusive work environment, being a responsible member of the community, providing the right products at the right time with fair and accurate pricing. Role model and demonstrate the company's core values of respect, honesty, integrity, diversity, inclusion and safety of others.<br> Essential Job Functions: <ul> <li> Promote trust and respect among associates. </li> <li> Enter patient's information into computer accurately and efficiently. </li> <li> Counting, measuring and preparation of specified product using company best practices. </li> <li> Follow the appropriate staging procedures. </li> <li> Maintain records on prescription volume and sales. </li> <li> Perform posting audits. </li> <li> Inputs accuracy scanner data weekly. </li> <li> Tender customer transactions in a quick and efficient manner. </li> <li> Promote for sale to our customers any current charitable promotions. </li> <li> Understand and follow the company guidelines on tendering electronic fund transactions such as Credit/Debit Cards, EBT and Gift Cards, as well as cash and check transactions. </li> <li> Understand and adhere to guidelines on accepting and tendering vendor coupons, company limits on cash shortages and shrink guidelines. </li> <li> Understand the operation of the cash register and follow all cashier handling policies to prevent loss. </li> <li> Maintain a clean and organized work station. </li> <li> Create an environment that enables customers to feel welcome, important and appreciated by answering questions regarding products sold throughout the store. </li> <li> Display a positive attitude. </li> <li> Reinforce safety programs by complying with safety procedures and identify unsafe conditions and notify store management. </li> <li> Practice preventive maintenance by properly inspecting equipment and notify appropriate department or store manager of any items in need of repair. </li> <li> Notify management of customer or employee accidents. </li> <li> Assist Pharmacist in all responsibilities except those that require a judgment call by a Pharmacist. </li> <li> Report all safety risks or issues, and illegal activity, including: robbery, theft or fraud. </li> <li> Must be able to perform the essential functions of this position with or without reasonable accommodation. </li></ul> Minimum Position Qualifications: <ul> <li> Pharmacy technician certification </li> <li> HIPAA </li> <li> Confidentiality </li></ul> Desired Previous Job Experience <ul> <li> Previous comparable experience </li></ul><br><br> <strong>Education Level:</strong> None<br> <strong>Required Certifications/Licenses:</strong> Pharmacy Board License<br> <strong>Position Type:</strong> Part-Time<br> <strong>Shift(s):</strong> Day; Evening <br> <strong> Regions :</strong>Mountain<br><br> States : Texas <br> Keywords : <br><br> <strong>Jobs at Kroger:</strong> At Kroger, we hire people who have a passion for helping others and who want to build a relationship with our Customers. No matter what stage of your career, you can build your future at Kroger. We look for people who want more, aspire to be more and work hard to achieve their goals. Our focus on keeping the Customer first is what makes us successful. We offer many opportunities not only in our stores, but in Manufacturing, Logistics, Marketing, Finance, Human Resources, and many other fields. <br><br> <strong>Company Overview:</strong> Kroger Family of Companies employs nearly half a million associates who serve over 11 million customers daily through a seamless shopping experience under a variety of <a href=\"https://c212.net/c/link/?t=0&amp;l=en&amp;o=2658280-1&amp;h=873381302&amp;u=https%3A%2F%2Fc212.net%2Fc%2Flink%2F%3Ft%3D0%26l%3Den%26o%3D2634145-1%26h%3D2061646895%26u%3Dhttps%253A%252F%252Fc212.net%252Fc%252Flink%252F%253Ft%253D0%2526l%253Den%2526o%253D2473690-1%2526h%253D587665226%2526u%253Dhttps%25253A%25252F%25252Fparsley.kroger.com%25252FPoliteMail%25252Fdefault.aspx%25253Fpage%25253DkywZHWjhT0SD0sTSehg8vg%252526ref_id%25253DBCV71JyZPkC_-HU18kNFLw%2526a%253Dbanner%252Bnames%26a%3Dbanner%2Bnames&amp;a=banner+names\">banner names</a> . At The Kroger Co., we are Fresh for Everyone™ and dedicated to our Purpose: To Feed the Human Spirit®. We are committed to creating #ZeroHungerZeroWaste communities by 2025. Careers with The Kroger Co. and our family of companies offer competitive wages, flexible schedules, benefits and room for advancement. <br><br> Posting Notes: TX||Conroe|| 2222 Interstate 45 N ||77301 || Kroger Stores||[[mfield2]]||Customer Service; Pharmacy ||Employee|| Non-Exempt || Part-Time|| Pharmacy Board License <br><br></p>",
                "name": "Pharmacy Technician",
                "type": "external",
                "publication_date": "2021-07-18T11:31:18Z",
                "short_name": "pharmacy-technician-3add9d",
                "model_type": "jobs",
                "id": 6333582,
                "locations": [
                    {
                        "name": "The Woodlands, TX"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/kroger/pharmacy-technician-3add9d"
                },
                "company": {
                    "id": 11671,
                    "short_name": "kroger",
                    "name": "Kroger"
                }
            },
            {
                "contents": "<p>Find out what it means to be part of an exceptional company that values its providers, its role in health care, and making a difference one patient at a time. Take a look at American Health Network and explore a new path to<strong> your life's best work.(sm)</strong> <br> <br> The schedule for this position is Monday - Friday, 8:00 AM - 4:30 PM. <br> <br> The Medical Assistant or EMT performs a variety of duties related to providing patient care. <br> <br> <strong>Primary Responsibilities:</strong> <br> <ul> <li> Prepare examination rooms and sterilizing equipment </li> <li> Room patients, obtain health history, check vital signs and perform EKG's </li> <li> Administer injections and collect specimens </li> <li> Document patient care using NextGen electronic medical record software </li> <li> Schedule appointments, complete prior authorizations, process medication refills, handle referrals, answer calls and complete paperwork </li> <li> Assist physicians and nurse practitioners with minor, in-office procedures </li> </ul><br><br>You'll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in. <br> <br> <strong>Required Qualifications: </strong> <br> <ul> <li> High School Diploma or GED </li> <li> Medical Assistant diploma/degree (2+ years of experience working as an MA in lieu of diploma), LPN license or basic EMT Certification </li> <li> Ability to commute to the office location/s </li> <li> You will be provisioned with appropriate Personal Protective Equipment (PPE) and are required to perform this role with patients and members on site, as this is an essential function of this role </li> <li> Employees are required to screen for symptoms using the ProtectWell mobile app, Interactive Voice Response (i.e., entering your symptoms via phone system) or a similar UnitedHealth Group-approved symptom screener prior to entering the work site each day, in order to keep our work sites safe. Employees must comply with any state and local masking orders. In addition, when in a UnitedHealth Group building, employees are expected to wear a mask in areas where physical distancing cannot be attained </li> </ul> <br> <strong>Preferred Qualifications:</strong> <br> <ul> <li> Experience working as a Medical Assistant or Emergency Medical Technician </li> <li> Medical Assistant Certification (CMA or RMA) </li> <li> EMR/EHR experience </li> <li> Experience with NextGen medical record software </li> <li> CPR certification </li> <li> Experience with medical front office and back office duties including vitals, phlebotomy, injections, casting/splinting, administering medications, referrals, prior authorizations, and insurance verifications </li> <li> Additional healthcare certifications including ARRT, CEHRS, CBCS, CMAA, CPT </li> </ul><br><br><strong>Opportunities with American Health Network, part of Optum</strong>. When you join American Health Network (AHN), you become part of a team that strives to identify and retain the top healthcare professionals in the markets it serves. At American Health Network, we want to be the best health care organization we can be. Our mission is to improve the health of our patients. We're a physician-led organization, operating over 70 medical offices in Indiana and Ohio, with over 300 providers and 1200 employees. We're also part of Optum, in the UnitedHealth Group family of businesses, and backed by the resources of a global health care organization working to help people live healthier lives and help make the health system work better for everyone. That's an important differentiator as more people need our help simplifying the complexities of the American health care system. At the same time, the culture of AHN supports work-life flexibility for employees and places a high value on their physical, emotional, financial and other aspects of well-being. Find out what it means to be part of an exceptional company that values its employees, its role in health care, and making a difference one patient at a time. Take a look at American Health Network and explore a new path to<strong> your life's best work.(sm)</strong><br><br>Diversity creates a healthier atmosphere: UnitedHealth Group is an Equal Employment Opportunity/Affirmative Action employer and all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, age, national origin, protected veteran status, disability status, sexual orientation, gender identity or expression, marital status, genetic information, or any other characteristic protected by law. <br> <br> UnitedHealth Group is a drug-free workplace. Candidates are required to pass a drug test before beginning employment.<br><br>Job Keywords: Licensed Practical Nurse, LPN, Nurse, Nursing, Emergency Medical Technician, EMT, Emergency Med Tech, Medical Tech, Certified Medical Assistant, CMA, CMAA, Medical Assistant, MA, Registered Medical Assistant, RMA, Patient Care Representative, Patient Care Rep, PCR, Patient Care, Back Office, Medical Office, Clinic, Medical field, Medical, Clinical, EMR, EHR, NextGen, AART, CEHRS, CBCS, CPT, Family Practice, AHN, American Health Network, RMA, CMA, Medical Assistant, LPN, licensed practical nurse, EMT, Emergency Medical Technician, Grove City, OH</p>",
                "name": "Medical Assistant, LPN, or EMT",
                "type": "external",
                "publication_date": "2021-06-20T00:06:48Z",
                "short_name": "medical-assistant-lpn-or-emt-76c437",
                "model_type": "jobs",
                "id": 5850126,
                "locations": [
                    {
                        "name": "Worthington, OH"
                    }
                ],
                "categories": [
                    {
                        "name": "Nurses"
                    }
                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/unitedhealthgroup/medical-assistant-lpn-or-emt-76c437"
                },
                "company": {
                    "id": 11856,
                    "short_name": "unitedhealthgroup",
                    "name": "UnitedHealth Group"
                }
            },
            {
                "contents": "<p>LabCorp is seeking a Reference Test Clerk to join our team in Harwood Heights, IL This position will be responsible for preparing and sending specimens and test requests to LabCorp and/or contracted reference laboratory for testing, as well as releasing referral test results into the computer system.<br> <br>The schedule for this position will be Monday - Friday 9:00am-5:30pm and Saturday 9:30am-1:30pm<br> <br><strong>Job Duties/Responsibilities: </strong><ul> <li>Prepare laboratory specimens for various analysis and testing</li> <li>Research, troubleshoot and resolve customer and specimen problems</li> <li>Send test requests to proper location and release test results</li> <li>Assist clients with any specimen related requests or inquires</li> <li>Process specimens to be sent out to additional facilities</li> <li>Provide support to various areas of the laboratory</li> <li>Perform sample sorting, racking and retrieving</li> <li>Prepare record logs in a timely and efficient manner</li> <li>Maintain a clean and safe work environment</li> </ul><b>Requirements</b><ul> <li> High School Diploma or equivalent</li> <li> Experience in a laboratory environment is preferred</li> <li> Comfortability with handling biological specimens</li> <li> Ability to accurately identify specimens</li> <li> Basic computer and data entry skills</li> <li> Strong communication skills; written and verbal</li> <li> Ability to work independently or within a team environment</li> <li> Well organized and a high level of attention to detail</li> <li> Ability to sit and/or stand for extended periods of time</li> <li> Must pass a standardized color blindness test</li> </ul><strong> If you're looking for a career that offers opportunities for growth, continual development, professional challenge and the chance to make a real difference, apply today! </strong><br><br><b>Shift</b><br> 1<br><br><b>Schedule</b><br> Monday - Friday 9:00am-5:30pm and Saturday 9:30am-1:30pm</p>",
                "name": "Medical Reference Test Clerk",
                "type": "external",
                "publication_date": "2021-08-08T11:37:01Z",
                "short_name": "medical-reference-test-clerk-9df9c9",
                "model_type": "jobs",
                "id": 6286556,
                "locations": [
                    {
                        "name": "Rosemont, IL"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/labcorp/medical-reference-test-clerk-9df9c9"
                },
                "company": {
                    "id": 11971,
                    "short_name": "labcorp",
                    "name": "Labcorp"
                }
            },
            {
                "contents": "<p>Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together. Whether we're creating new products or helping a small business expand its reach, people at Facebook are builders at heart. Our global teams are constantly iterating, solving problems, and working together to empower people around the world to build community and connect in meaningful ways. Together, we can help people build stronger communities - we're just getting started.<br><br><b>Summary</b><br><br>At Facebook Reality Labs we aim to bring together the brightest cross-disciplinary minds in one place to deliver on our mission: build tools that help people feel connected, anytime, anywhere. As a Firmware Engineer, you will architect, design, build and test firmware systems for future AR, VR, Portal, or New Technology Teams. You will join a world-class team of experts exploring new concepts through rapid prototyping. Firmware Engineering for FRL's device systems spans multiple target classes, requiring deep collaboration across engineering disciplines (electrical, mechanical, optical, firmware and software) and directly impacting user immersion. Our ideal candidate wants to quickly solve problems, generate big ideas, work in new technology areas, drive concepts into prototypes, and envision how those prototypes transition to high-volume consumer products. In this role, you are expected to participate in the definition of architecture and implementation of architecture in both prototype and shipping consumer products as well as demonstrate good development practices and seamless collaboration.<br><br><b>Required Skills</b><br><br><ul><li>Lead Firmware Engineering activities and provide technical leadership and guidance to team members</li><li>Analyze, design, develop, and debug firmware for a wide variety of AR and VR consumer devices, including novel sensing and imaging systems, haptic devices, and audio prototypes</li><li>Understand and implement power-management, boot loaders, scheduling, and RTOS</li><li>Collaborate in a team environment across multiple , product focused, research, and engineering disciplines, making the architectural tradeoffs required to rapidly deliver firmware solutions</li><li>Support all phases of SoC/ASIC development - including early architecture requirements definition for custom silicon, firmware architecture, implementation, simulation, FPGA debug, chip bring up and support systems and software teams on algorithm development on validated systems</li><li>Understand and drive implementation of FW development good practices across teams and projects</li></ul><br><br><b>Minimum Qualification</b><br><br><ul><li>B.S. degree in Computer Science or Electrical Engineering or equivalent experience</li><li>5+ years of experience in Embedded Software or Firmware Engineering</li><li>Experience with software design and programming in C/C++ for development, debugging, testing and performance analysis</li><li>Experience producing production quality, fail-safe firmware for low-power real-time system control</li><li>Experience with embedded processors like ARM Cortex M0/M3/M4 architecture and boot mechanism, interrupt priorities and experience with configuring peripherals</li><li>Experience with peripherals such as USB, SPI, MIPICSI/DSI, I2C, UART, GPIO, etc.</li><li>Experience analyzing hardware and power consumption</li><li>Experience with hardware, clock-level issues, bridges, delays, interrupts, clock gating, polling, etc.</li><li>Experience with instrumentation like oscilloscopes, logic/protocol analyzers for debugging embedded systems at HW level</li><li>Experience with device documentation and translate that information into software solutions</li><li>Experience with methods of designing experiments to diagnose embedded hardware and firmware problems</li><li>Experience with cross multi-disciplinary boundaries to drive system solutions</li><li>Experience with working independently and managing priorities</li></ul><br><br><b>Preferred Qualification</b><br><br><ul><li>M.S. of PhD in Computer Science or Electrical Engineering</li><li>Experience with wireless and wired communication protocols, including USB, TCP/IP, Ethernet, Bluetooth and 802.11</li><li>Experience working with DRAM-based systems and issues related to DRAM bandwidth, power and throughput</li><li>Experience implementing firmware for low-power SoC and tape-out of chips</li><li>Experience with protocol implementations such as USB device classes (UVC, UAC, HID)</li><li>Experience with embedded DSP and CPU architectures</li><li>Experience with EDA design tools and instruction set simulators</li><li>Experience with FPGA and vendor specific hardware evaluation boards</li><li>Experience in real-time processing for computer vision and user interaction tasks, high-compute/throughput systems and using simulation and modeling technique to estimate performance and power</li></ul><br><br><b>EOE</b><br><br>Facebook is proud to be an Equal Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, national origin, sex (including pregnancy, childbirth, or related medical conditions), sexual orientation, gender, gender identity, gender expression, transgender status, sexual stereotypes, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics. We also consider qualified applicants with criminal histories, consistent with applicable federal, state and local law. Facebook is committed to providing reasonable accommodations for candidates with disabilities in our recruiting process. If you need any assistance or accommodations due to a disability, please let us know at <a href=\"mailto:accommodations-ext@fb.com?Subject=Hello\">accommodations-ext@fb.com</a>.</p>",
                "name": "Firmware Engineer, Facebook Reality Labs",
                "type": "external",
                "publication_date": "2021-06-15T11:57:55Z",
                "short_name": "firmware-engineer-facebook-reality-labs-572fa9",
                "model_type": "jobs",
                "id": 6078164,
                "locations": [
                    {
                        "name": "Sunnyvale, CA"
                    }
                ],
                "categories": [
                    {
                        "name": "Software Engineer"
                    }
                ],
                "levels": [
                    {
                        "name": "Senior Level",
                        "short_name": "senior"
                    }
                ],
                "tags": [
                    {
                        "name": "Fortune 1000",
                        "short_name": "fortune-1000-companies"
                    }
                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/facebook/firmware-engineer-facebook-reality-labs-572fa9"
                },
                "company": {
                    "id": 659,
                    "short_name": "facebook",
                    "name": "Facebook"
                }
            },
            {
                "contents": "<p><b>Job Description</b><br>Summary: Health is everything. At CVS Health, colleagues are committed to increasing access, lowering costs and improving quality of care. Millions of times a day, we help people on their path to better health-from advising on prescriptions to helping manage chronic and specialty conditions. As a Staff Pharmacist, you have a critical role at the forefront of delivering our purpose, modeling our values, and demonstrating genuine, authentic care for our patients. In addition to supporting the Pharmacy Manager in leading and directing your Pharmacy Technician Support Staff, you are accountable for supporting the management, oversight and operation of all aspects within your pharmacy. This includes: •  Patient Safety •  Pharmacy Professional Practice •  Regulatory Requirements •  Quality Assurance •  Customer Service •  Personnel Management •  Inventory Management •  Financial Profitability •  Loss Prevention •  Workflow Management A key component of the Staff Pharmacist role is keeping your customers and patients healthy through adoption and management of patient care programs. Additionally, you will: •  Lead with Heart - display empathy and compassion for your patients, customers, caregivers and colleagues on your team •  Motivate, inspire and develop your Pharmacy Support Staff by balancing assignments that maximize colleagues' strengths, address development opportunities and decrease knowledge gaps •  Identify critical business opportunities and contribute to the development of meaningful solutions to drive growth and improve performance in your pharmacy •  Successfully implement those solutions by leading your team to achieve specified goals •  Adapt to change and adjust plans to thrive in a dynamic community healthcare setting •  Seek new ways to grow, collaborate with others and deliver better outcomes •  Align others around purpose to gain support and commitment •  Actively contribute to a 'team' culture that promotes caring, energy, enthusiasm and pride •  Apply acquired knowledge to help drive healthy outcomes and differentiate CVS from competitors <em>The above represents a summary of the functions of a Staff Pharmacist. Additional functions and physical requirements are available on the full job description.<br><br><b>Required Qualifications</b><br>Minimum Required Qualifications: •  Active Pharmacy License in the state in which you are employed •  Not on the DEA Excluded Parties List •  Immunization Certification through an accredited organization (i.e. APhA)</em> •  Free of pending felony charges or convictions for criminal offenses involving controlled substances<br><br><b>Preferred Qualifications</b><br>.<br><br><b>Education</b><br>Bachelor of Science in Pharmacy or Pharm. D. degree<br><br><b>Business Overview</b><br>At CVS Health, we are joined in a common purpose: helping people on their path to better health. We are working to transform health care through innovations that make quality care more accessible, easier to use, less expensive and patient-focused. Working together and organizing around the individual, we are pioneering a new approach to total health that puts people at the heart. <br> <br>We strive to promote and sustain a culture of diversity, inclusion and belonging every day. CVS Health is an equal opportunity and affirmative action employer. We do not discriminate in recruiting, hiring or promotion based on race, ethnicity, sex/gender, sexual orientation, gender identity or expression, age, disability or protected veteran status or on any other basis or characteristic prohibited by applicable federal, state, or local law. We proudly support and encourage people with military experience (active, veterans, reservists and National Guard) as well as military spouses to apply for CVS Health job opportunities.</p>",
                "name": "Staff Pharmacist Floater FT",
                "type": "external",
                "publication_date": "2021-08-13T12:35:48Z",
                "short_name": "staff-pharmacist-floater-ft-9923ad",
                "model_type": "jobs",
                "id": 6385114,
                "locations": [
                    {
                        "name": "Troy, NY"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/cvshealth/staff-pharmacist-floater-ft-9923ad"
                },
                "company": {
                    "id": 12096,
                    "short_name": "cvshealth",
                    "name": "CVS Health"
                }
            },
            {
                "contents": "<p><strong>Job Description</strong><br><b>Position Purpose:</b><br>The Asset Protection Specialist is primarily responsible for preventing financial loss caused by theft and fraud and supporting safety and environmental program compliance in their assigned store/multiple stores. They utilize tools to minimize loss to the Company, including but not limited to identifying incidents of theft and fraud, reviewing CCTV and exception reports, monitoring the store's physical security, auditing the Electronic Article Surveillance and driving a shrink elimination culture in the store. Other responsibilities include: preparing accurate and detailed case reports documenting your apprehensions and recoveries, preserving evidence, interacting with law enforcement and testifying in criminal and civil court actions. The Asset Protection Specialist must report any hazardous or unsafe condition to the Manager on Duty and carry out job responsibilities in a manner that minimizes the risk of injury to themselves, other associates, vendors, customers, and the Company. They must demonstrate integrity at all times, respond to asset protection and operational concerns of all associates and remain focused on store specific business objectives while supporting key asset protection and operational responsibilities.</p>",
                "name": "Asset Protection Specialist",
                "type": "external",
                "publication_date": "2021-07-10T22:43:06Z",
                "short_name": "asset-protection-specialist-da7e5e",
                "model_type": "jobs",
                "id": 5460510,
                "locations": [
                    {
                        "name": "Cincinnati, OH"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/thehomedepot/asset-protection-specialist-da7e5e"
                },
                "company": {
                    "id": 12092,
                    "short_name": "thehomedepot",
                    "name": "The Home Depot"
                }
            },
            {
                "contents": "<p>EPAM is committed to providing our global team of more than 41,150 EPAMers with inspiring careers from day one. EPAMers think creatively and lead with passion and honesty. Our people are the source of our success. We value collaboration, work in partnership with our customers, and strive for the highest standards of excellence. In today's market conditions, we're supporting operations for hundreds of clients around the world remotely. No matter where you are located, you'll join a dedicated, diverse community that will help you discover your fullest potential. <br><br> Description <br>You are curious, persistent, logical and clever - a true techie at heart. You enjoy living by the code of your craft and developing elegant solutions for complex problems. If this sounds like you, this could be the perfect opportunity to join EPAM as a <strong>Senior .NET/JS Developer</strong>. Scroll down to learn more about the position's responsibilities and requirements. <br><br>REQ #: 211479690 <br>  What You'll Do <ul> <li>Support existing projects</li> <li>Back-end development of new functionality</li> <li>Participating in code and architectural reviews, documenting functionality/architecture</li> <li>Communicating with stakeholders: developers, architects, QA engineers and other colleagues</li> <li>Proactive position in solution development, processes improvements</li> <li>Handle complex problems that might arise during solution development and provide field support with creative and rapid solutions</li> <li>Ensure that the highest coding standards are met and write highly testable, automatable and performant code</li> </ul> Requirements <ul> <li>BS degree in an associated field or other advanced certification along with equivalent experience</li> <li>A very good understanding SOLID principles</li> <li>Ability to write elegant, clean and object-oriented code</li> <li>Excellent knowledge and experience with C#/.NET/ASP.NET/MVC/WCF</li> <li>Excellent knowledge and experience with SQL/MS SQL Server</li> <li>Web development experience using HTML, JS, CSS</li> <li>Development experience in writing Unit Test</li> <li>Ability to effectively work independently while being a good team player</li> <li>Good analytical skills</li> <li>Good team player, motivated to develop and solve complex tasks</li> <li>Self-motivated, self-disciplined and result-oriented</li> <li>Strong attention to details and accuracy</li> <li>Excellent communication skills</li> </ul> What We Offer <ul> <li>Medical, Dental and Vision Insurance (Subsidized)</li> <li>Health Savings Account</li> <li>Flexible Spending Accounts (Healthcare, Dependent Care, Commuter)</li> <li>Short-Term and Long-Term Disability (Company Provided)</li> <li>Life and AD&amp;D Insurance (Company Provided)</li> <li>Employee Assistance Program</li> <li>Unlimited access to LinkedIn learning solutions</li> <li>Matched 401(k) Retirement Savings Plan</li> <li>Paid Time Off</li> <li>Legal Plan and Identity Theft Protection</li> <li>Accident Insurance</li> <li>Employee Discounts</li> <li>Pet Insurance</li> </ul>Apply</p>",
                "name": "Senior .NET/JS Developer",
                "type": "external",
                "publication_date": "2021-08-04T16:07:49Z",
                "short_name": "senior-netjs-developer-41bf8a",
                "model_type": "jobs",
                "id": 5408887,
                "locations": [
                    {
                        "name": "Westport, CT"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Senior Level",
                        "short_name": "senior"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/epamsystems/senior-netjs-developer-41bf8a"
                },
                "company": {
                    "id": 12160,
                    "short_name": "epamsystems",
                    "name": "EPAM Systems"
                }
            },
            {
                "contents": "<p><span><strong>About Stryker</strong></span> <span>Stryker is one of the world's leading medical technology companies and, together with our customers, is driven to make healthcare better. We offer innovative products and services in Orthopaedics, Medical and Surgical, and Neurotechnology and Spine that help improve patient and hospital outcomes. We are proud to be named one of the World's Best Workplaces and a Best Workplace for Diversity by Fortune Magazine. Learn more about our award-winning organization by visiting <span><strong><a href=\"https://www.stryker.com/\">stryker.com</a></strong></span></span><br> <br>Customer Service Professionals- Stryker is looking for you! We focus on a greater mission and doing what's right for our customers and our communities. We are driven to make healthcare better. We are looking for a career focused Customer Service Representative, with strong interpersonal skills and willingness to go above and beyond, to support the Stryker Orthopaedics Team!<br><br><b>Who we want</b><br><b>Charismatic networkers.</b> Relationship-savvy people who intentionally make connections with both internal partners and external contacts.  You will be the face of Stryker!<br><b>Customer-oriented achievers.</b> Representatives with an unparalleled work ethic and customer-focused attitude who bring value to their partnerships.<br><b>Dedicated achievers.</b> People who thrive in a fast-paced environment and will stop at nothing to ensure a project is complete and meets regulations and expectations.<br><b>Goal-oriented developers</b>. Keeping the customer and requirements squarely in focus, people who deliver safe and robust solutions.<br><b>Self-directed initiators.</b> People who take ownership of their work and need no prompting to drive productivity, change, and outcomes.<br><br><b>What you will do </b><br><ul><li>Be the customer-facing voice and develop creative solutions to customer issues</li><li>Build relationships with Sales Reps to support requested product information</li><li>Build relationships with hospital billing specialists and support surgery product usage questions</li><li>Follow up with clients regarding purchase orders and clarify discrepancies</li><li>Engage, interact, and respond in a prompt, accurate, courteous, and poised manner to encourage positive business relationships</li><li>Ensure that products are on track for delivery and communicate kit needs to warehouse if quick delivery is required.</li><li>Consistently demonstrate a positive, constructive, and cooperative attitude in the business environment.</li><li>Determine when Sales Rep support requires escalation based on complexity of need</li><li>Determine charges for services requested, collaborate with Corporate Accounts Receivable for collection payments, and/or arrange for billing</li><li>Prepare product or service reports by collecting and analyzing customer information</li></ul><br><br><b><span>What you need</span></b><br><ul><li>High School diploma; prefer Associates Degree or equivalent work experience</li><li>Valid drivers license and good driving record</li><li>3 years work experience required; customer or account management experience preferred</li><li>Prefer demonstrated knowledge of the medical implant industry and hospital customer base</li><li>Must have the ability to work flexible hours, as needed to support the business needs.</li></ul><br> <span>Know someone at Stryker?</span> <span>Be sure to have them submit you as a referral prior to applying for this position. <a href=\"https://careers.stryker.com/referrals/\"><span><strong>Learn more about our employee referral program.</strong></span></a></span><br></p>",
                "name": "Senior Team Member, Customer Service",
                "type": "external",
                "publication_date": "2021-07-19T11:40:40Z",
                "short_name": "senior-team-member-customer-service-86f89d",
                "model_type": "jobs",
                "id": 6105306,
                "locations": [
                    {
                        "name": "Itasca, IL"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Senior Level",
                        "short_name": "senior"
                    }
                ],
                "tags": [
                    {
                        "name": "Fortune 1000",
                        "short_name": "fortune-1000-companies"
                    }
                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/stryker/senior-team-member-customer-service-86f89d"
                },
                "company": {
                    "id": 11716,
                    "short_name": "stryker",
                    "name": "Stryker"
                }
            },
            {
                "contents": "<p><strong>À propos d'Atos</strong> <br><br>Atos est un leader international de la transformation digitale avec 110 000 collaborateurs dans 73 pays et un chiffre d'affaires annuel de 12 milliards d'euros. Numéro un européen du Cloud, de la cybersécurité et des supercalculateurs, le Groupe fournit des solutions intégrées de Cloud Hybride Orchestré, Big Data, Applications Métiers et Environnement de Travail Connecté. Partenaire informatique mondial des Jeux Olympiques et Paralympiques, le Groupe exerce ses activités sous les marques Atos, Atos|Syntel, et Unify. Atos est une SE (Société Européenne) cotée sur Euronext Paris et fait partie de l'indice CAC 40.<br> <br> La raison d'être d'Atos est de contribuer à façonner l'espace informationnel. Avec ses compétences et ses services, le Groupe supporte le développement de la connaissance, de l'éducation et de la recherche dans une approche pluriculturelle et contribue au développement de l'excellence scientifique et technologique. Partout dans le monde, Atos permet à ses clients et à ses collaborateurs, et plus généralement au plus grand nombre, de vivre, travailler et progresser durablement et en toute confiance dans l'espace informationnel. <br><br><strong> Contexte: </strong><br><br>Intégré(e) au sein de l'équipe Projets HPC/Infra France, vous serez directement sous la responsabilité du Manager d'équipe, et coaché(e) par l'un des Experts HPC.<br> En tant qu'apprenti(e) delivery hardware HPC, vous aurez pour mission de livrer et installer les solutions HPC chez nos clients. <br><br>Dans ce cadre, vos objectifs et responsabilités seront les suivants :<br> • Se familiariser avec les environnements systèmes HPC<br> • Participer à la phase préparatoire : revue de configuration en intégrant notamment les contraintes d'infrastructure du client<br> • Participer à l'organisation logistique des livraisons de matériels<br> • Planifier et Installer la solution matérielle sur site client<br> • Participer aux réunions techniques et de suivi projet<br> • Documenter la solution technique délivrée au client <br><br><strong>Profil :</strong> <br><br>Vous êtes diplomé(e) d'un Bac+3 et preparez un Bac +4/5 au sein d'une école d'ingénieur en informatique ou dans un cursus universitaire équivalent. <br> <br> Vous recherchez une alternance d'un ou deux ans dans l'administration des systèmes informatiques.<br> Des connaissances dans les domaines suivants sont requises et/ou à acquérir :<br> • Système d'exploitation Linux<br> • Réseaux informatiques<br> • Architectures x86 (intel/AMD) et/ou ARM<br> • Services réseaux : DNS, DHCP, ...<br> • Stockage et systèmes de fichiers distribués<br> • Monitoring <br> <br> Anglais opérationnel requis<br> Esprit d'équipe, rigueur, dynamisme et curiosité sont des qualités qui seraient appréciées <br><br>Chez Atos, nous voulons que nos employés se sentent valorisés, appréciés et libres d'être eux-mêmes au travail. Nos process RH sont conçus pour prévenir la discrimination envers l'identité ou l'orientation sexuelle, la religion, l'origine ethnique, l'âge, la neurodiversité, le handicap, la citoyenneté ou tout autre aspect qui rend nos collaborateurs uniques. Partout dans le monde, nous avons créé plusieurs programmes pour soutenir la culture inclusive d'Atos, et nous travaillons pour nous assurer que tous nos collaborateurs aient une chance égale de sentir qu'ils sont exactement là où ils doivent être.</p>",
                "name": "Alternance - Ing&eacute;nieur Syst&egrave;me HPC H/F\n    ",
                "type": "external",
                "publication_date": "2021-06-17T16:00:15Z",
                "short_name": "alternance-ingeacutenieur-systegraveme-hpc-hf-884dc4",
                "model_type": "jobs",
                "id": 5445238,
                "locations": [

                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/atos/alternance-ingeacutenieur-systegraveme-hpc-hf-884dc4"
                },
                "company": {
                    "id": 12015,
                    "short_name": "atos",
                    "name": "Atos"
                }
            },
            {
                "contents": "<p>Janssen Research &amp; Development LLC, a Johnson &amp; Johnson company, is recruiting for an Associate Director, R&amp;D Data Science Portfolio Management, Neuroscience! Is this person you? If it is, you will report to Sr Director Data Science Portfolio Management. This position can be located in New Brunswick, NJ; Spring House, PA; New York City, NY; Cambridge, MA; or San Francisco, CA. <br><br><b>WHO WE ARE: </b> <br><br>Janssen develops treatments that improve the health and lifestyles of people worldwide. Research and Development areas encompass Oncology, Cardiovascular and Metabolic disorders, Immunology, Neuroscience, and Infectious diseases. Our ultimate goal is to help people live longer, healthier lives. We have produced and marketed many first-in-class prescription medications and are poised to serve the broad needs of the healthcare market - from patients to practitioners and from clinics to hospitals. To learn more about Janssen, one of the Pharmaceutical Companies of Johnson &amp; Johnson, visit www.janssenpharmaceuticalsinc.com. (http://www.janssenpharmaceuticalsinc.com/) <br><br><b>RESPONSIBILITIES </b> <br><br>Work closely with the Data Science (DS) organization and Therapeutic Area (TA) to execute on critical data science &amp; digital health initiatives to support delivery of the short and long-term Janssen R&amp;D Data Science strategy. <br><br>Collaborate with TA DS and global cross-functional development teams in Janssen R&amp;D, the DS Analytics &amp; Insights team, Data Platform &amp; Privacy team and the DS Innovation team to conceive, develop, and execute on portfolio strategies. Understand the healthcare ecosystem and ensure portfolio is aligned with impactful healthcare use cases. Ensure delivery of quality results on the use cases from conception, proof-of-concept data generation, tool build and scale. Novel use-cases will include digital endpoints, digital health, decentralized trials, and other data science use cases across all stages of the R&amp;D pipeline. New novel use cases will be proposed based on deep insights and alignment with key internal and external partner prioritized needs. Communication of results is encouraged at executive forums in formats that facilitate decision making. <br><br><b>Qualifications</b><br><br><b>REQUIRED </b> <br> <ul> <li> Master's degree </li> <li> 4+ years of progressive business experience in healthcare </li> <li> Consistent track record of cross-functional collaboration in a matrix organization </li> <li> Entrepreneurial skill and ability to influence and engage strategic and technical partners is required </li> <li> Familiarity with data science, RWD (Real World Data), or digital health space </li> <li> Direct experience and strong understanding of healthcare process and procedures </li> </ul> <br> <b>PREFERRED </b> <br> <ul> <li> Combination of both business &amp; scientific degree and/or experience </li> <li> Experience in life sciences companies, healthcare companies, consulting firms with established healthcare Data Science and life sciences practices, and other companies in the RWD and data science ecosystem is a plus. </li> <li> Experience working on strategic use cases involving healthcare data sets, including EHR, claims, registry data, images, sensor data </li> <li> Experience developing data science strategy in healthcare, including AI/ML, predictive analytics, IoT, novel sites of care and ways of delivering care. </li> <li> Familiarity with data science tools and statistical programming languages, including SQL, Python, R, and others, to connect strategy to execution </li> <li> Experience defining use cases for machine learning and artificial intelligence in healthcare </li> </ul> <br> Thriving on a diverse company culture and celebrating the uniqueness of our employees, we are committed to inclusion. We are proud to be an equal opportunity employer. <br><br>Johnson &amp; Johnson is an Affirmative Action and Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, age, national origin, or protected veteran status and will not be discriminated against on the basis of disability. <br><br>We will ensure that individuals with disabilities are provided reasonable accommodation to participate in the job application or interview process, to perform essential job functions, and to receive other benefits and privileges of employment. Please contact us to request accommodation. <br><br>WORKING WITH JOHNSON &amp; JOHNSON CAN CHANGE EVERYTHING. INCLUDING YOU. <br><br>#JNJDATASCIENCE #JRDDS <br><br><b>Primary Location</b><br>United States-New Jersey-New Brunswick-One Johnson &amp; Johnson Plaza<br><b>Organization</b><br>Janssen Research &amp; Development, LLC (6084)<br><b>Job Function</b><br>R&amp;D<br><b>Requisition ID</b><br>2105944122W</p>",
                "name": "Associate Director, R&D Data Science Portfolio Management, Neuroscience",
                "type": "external",
                "publication_date": "2021-08-08T11:29:06Z",
                "short_name": "associate-director-rd-data-science-portfolio-management-neuroscience",
                "model_type": "jobs",
                "id": 6512296,
                "locations": [
                    {
                        "name": "New Brunswick, NJ"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [
                    {
                        "name": "Fortune 1000",
                        "short_name": "fortune-1000-companies"
                    }
                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/johnsonjohnson/associate-director-rd-data-science-portfolio-management-neuroscience"
                },
                "company": {
                    "id": 1493,
                    "short_name": "johnsonjohnson",
                    "name": "Johnson & Johnson"
                }
            },
            {
                "contents": "<p><strong>Wissen für die Welt von morgen.</strong><br><br>Welche Möglichkeiten gibt es für unsere Kunden? Sie verwandeln \"Das klingt interessant!\" in konkrete Aufträge und ebnen den Weg für neue Geschäftsfelder. Wir versorgen Sie dabei mit neuestem Wissen und viel Freiraum für selbstständiges Handeln und Entscheiden. Das macht Sie zur zuverlässigen, vertrauenswürdigen und vorausschauenden Ansprechperson für unsere Kunden - diese warten bereits auf Sie! <br><br>In unserem Bereich Future Grids bündeln wir alle Themen der Energie- und Mobilitätswende und vereinen Technologie und Kreativität. Tag für Tag gibt es neue Herausforderungen und damit Chancen, den Wandel mit Ihrem eigenen Beitrag zu gestalten. Möchten Sie bei uns die Energie- und Mobilitätswende mitgestalten? <br><br><strong>Verändern Sie mit uns die Welt von morgen.</strong><br><ul><li>Sie vermarkten bei unseren Kunden unsere PKW-Ladeinfrastrukturlösungen von der Wallbox bis zum Ultra-Schnelllader sowie unsere digitalen Backend Lösungen und setzen unsere Go-to-Market Strategie für Deutschland um</li><li>Sie erstellen eigenständig Produktangebote, führen die Kundenverhandlungen und bringen die Projekte erfolgreich zum Abschluss</li><li>In Ihrem Vertriebsgebiet verantworten und entwickeln Sie indirekte Vertriebskanäle und akquirieren Neukunden, z.B. Elektrogroßhandel, mittelständische oder auch größere Unternehmen, die unsere Produkte selbst einsetzen oder vertreiben</li><li>Sie verfolgen und entwickeln Ihre Opportunity-Pipeline und übernehmen die technische Beratung unserer Kunden, auch im Hinblick auf Parametrierung, Installation und Wartung</li><li>Sie sind über Geschäftsbereiche und Unternehmensgrenzen hinaus aktiv und setzen auf neue, kreative Vermarktungsmethoden, um eine große Anzahl von Kunden zu adressieren</li></ul><strong>Ihr Profil für \"Zukunft möglich machen\".</strong><br><ul><li>Sie haben Ihr technisches Studium erfolgreich abgeschlossen und besitzen mehrjährige Berufserfahrung im Vertrieb, idealerweise im Mittelstand. Alternativ bringen Sie eine Ausbildung in Verbindung mit langjähriger Berufserfahrung mit</li><li>Ihre Kommunikationsfähigkeiten für die Beratung von Endkunden und Solution Partnern sowie eine hohe Kundenorientierung zeichnen Sie aus</li><li>Sie besitzen eine ausgeprägte Affinität für Ladetechnik und E-Mobilität, gepaart mit einer hohen Eigenmotivation, neue Kontakte zu knüpfen</li><li>Sie besitzen die Fähigkeit, strukturiert und mit unterschiedlichen Partnern Lösungen zu erarbeiten</li><li>Sie haben idealerweise gute betriebswirtschaftliche Kenntnisse, insbesondere hinsichtlich Angebotswesen und Kalkulation und sind sicher im Umgang mit MS Office und SAP</li><li>Deutschlandweite Reisebereitschaft, ein PKW-Führerschein sowie sehr gute Deutschkenntnisse und gute Englischkenntnisse runden Ihr Profil ab</li></ul>Diese Position ist deutschlandweit an folgenden Standorten zu besetzen:<br><br>Köln/Aachen/Dortmund/Frankfurt/Mannheim/Karlsruhe/Stuttgart/Ulm/München/Erlangen/Magdeburg/Laatzen/Leipzig/Berlin/Hamburg/Bremen<br><br><strong>Wir wollen, dass Sie wollen: Bewerben Sie sich!</strong><br><br><strong>www.siemens.de/karriere</strong>  - wenn Sie mehr Informationen zu Jobs &amp; Karriere bei Siemens erhalten möchten.<br><br><strong><br> www.siemens.de/karriere/faq </strong> - wenn Sie eine Frage zum Thema Bewerbung bei Siemens haben.<br><br>Wir legen Wert auf Chancengleichheit und freuen uns über Bewerbungen von  Menschen mit Behinderung .<br><br><b>Organization:</b> Smart Infrastructure<br><br><b>Company:</b> Siemens AG<br><br><b>Experience Level:</b> Experienced Professional<br><br><b>Job Type:</b> Full-time<br></p>",
                "name": "Sales Professional (w/m/d) PKW Ladeinfrastruktur",
                "type": "external",
                "publication_date": "2021-05-21T23:29:18Z",
                "short_name": "sales-professional-wmd-pkw-ladeinfrastruktur-08819f",
                "model_type": "jobs",
                "id": 5892672,
                "locations": [
                    {
                        "name": "Mannheim, Germany"
                    }
                ],
                "categories": [

                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/siemens/sales-professional-wmd-pkw-ladeinfrastruktur-08819f"
                },
                "company": {
                    "id": 11913,
                    "short_name": "siemens",
                    "name": "Siemens"
                }
            },
            {
                "contents": "<p><b>DESCRIPTION</b><br><br> Come build the future of entertainment with us.<br>Are you interested in shaping the future of movies and television? Do you want to define the next generation of how and what Amazon customers are watching?<br><br>Prime Video is a premium streaming service that offers customers a vast collection of TV shows and movies - all with the ease of finding what they love to watch in one place. We offer customers thousands of popular movies and TV shows from Originals and Exclusive content to exciting live sports events. We also offer our members the opportunity to subscribe to add-on channels which they can cancel at anytime and to rent or buy new release movies and TV box sets on the Prime Video Store. Prime Video is a fast-paced, growth business - available in over 240 countries and territories worldwide. The team works in a dynamic environment where innovating on behalf of our customers is at the heart of everything we do. If this sounds exciting to you, please read on.\"<br><br>We are hiring software development engineers in London to help us deliver on the next generation Network Edge services to power Prime Video globally. The Network Edge team handles all requests from millions of Prime Video customers worldwide to Prime Video's services. This network border must be highly available, secure and low latency to meet the scale of the ever-growing Prime Video service.<br><br>We are responsible for DNS, network routing, authentication, security, and availability protections. We are leading innovations with Native AWS technologies that are breaking new ground for Prime Video and Amazon globally. You will have the opportunity to work on some of the most highly scaled AWS services at Amazon.<br><br>Candidates will have an understanding of stable, scalable systems that have been successfully deployed in a business setting. You will be passionate about technology with a focus on the customer experience and great teamwork.<br><br>You will work as part of one of our small Agile teams, launching and growing new initiatives for Amazon's global business. As an engineer, you can be involved in every aspect of the process - from idea generation, business analysis and technical design through to development and deployment across a variety of technologies - giving you a real sense of ownership. Together we build systems which meet high standards of performance and reliability and operate at massive scale.<br><br>Amazon is a place where builders can build. We're looking for engineers who can delight customers by continually learning and inventing. From day one, you'll be working with experienced engineers, designers and applied scientists who love what they do.<br><br> <b>BASIC QUALIFICATIONS</b> <br><br> •  Non-internship professional software development experience<br>•  Programming experience with at least one modern language such as Java, C++, or C# including object-oriented design<br>•  Experience contributing to the architecture and design (architecture, design patterns, reliability and scaling) of new and current systems<br><br> <b>PREFERRED QUALIFICATIONS </b> <br><br> •  Experience operating and maintaining production software.<br>•  Experience mentoring and coaching others.<br>•  Demonstrated best-practice software engineering including some aspects of agile methodologies, unit testing, refactoring, code reviews, continuous build and deployment processes.<br>•  Advanced coding skills (concurrency, profiling and performance optimization).<br>•  Designed and built complex systems (architecture, design patterns, reliability and scaling).<br>•  Basic familiarity with web technologies (HTML, CSS, JavaScript, React).<br>•  Linux/UNIX (command-line tools, shell scripts, operations).<br>•  Experience in data manipulation and analysis.<br>Amazon is an equal opportunities employer. We believe passionately that employing a diverse workforce is central to our success. We make recruiting decisions based on your experience and skills.<br><br>Please let us know if you have any special requirements in relation to this recruitment process.</p>",
                "name": "Software Development Engineer",
                "type": "external",
                "publication_date": "2021-08-04T00:03:00Z",
                "short_name": "software-development-engineer-96efde",
                "model_type": "jobs",
                "id": 5206418,
                "locations": [
                    {
                        "name": "London, United Kingdom"
                    }
                ],
                "categories": [
                    {
                        "name": "Software Engineer"
                    }
                ],
                "levels": [
                    {
                        "name": "Mid Level",
                        "short_name": "mid"
                    }
                ],
                "tags": [

                ],
                "refs": {
                    "landing_page": "https://www.themuse.com/jobs/amazon/software-development-engineer-96efde"
                },
                "company": {
                    "id": 12090,
                    "short_name": "amazon",
                    "name": "Amazon"
                }
            }
        ],
        "aggregations": {

        }
    }