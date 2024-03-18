import { Accordion, AccordionItem, Chip } from "@nextui-org/react"
import { FaShopify } from "react-icons/fa";
import { PiPiggyBankBold } from "react-icons/pi";
import { RiAdvertisementFill } from "react-icons/ri";


export default function Experiences() {

    const jobs = [
        { 
            id:1, 
            indicator: <FaShopify />, 
            timeline:"Jan '22 - Present", 
            company: "Shopify - Data Engineer", 
            name: "experience1",
            image: "../public/shopify-logo-png-transparent.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus pariatur fuga sit dolores atque sequi unde! Odit reiciendis culpa ab.",
            skills: [
                "Designed and implemented scalable and efficient ETL processes, in both cloud environments and spark.",
                "Collaborated with the data science team to develop and deploy key data models.",
                "Built high throughput streaming pipelines for data ingestion at scale ",
                "Optimized and fine-tuned SQL queries and database performance, resulting in a 60% improvement in query response time.",
                "Worked closely with stakeholders to understand business requirements and translate them into technical specifications for data solutions.",
                "Conducted regular performance assessments and implemented optimizations, resulting in a 20% reduction in data processing errors.",
            ],
            techs: [
                "Python"
            ]
            
        },
        { 
            id:2, 
            indicator: <FaShopify />, 
            timeline:"Jun '21 - Dec '22", 
            company: "Shopify - Data Scientist", 
            name: "experience2",
            image: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus pariatur fuga sit dolores atque sequi unde! Odit reiciendis culpa ab.",
            skills: [
                "Deployed and scaled Real-Time streaming pipeline in Flink for Shopify Partners on cloud infrastructure (GCP) ",
                "Designed and implemented end-to-end data pipelines in Spark",
                "Worked closely with stakeholders to build instrumentation and define dimensional models, tables or schemas that support business processes",
                "Built actionable KPIs, production-quality dashboards, informative deep dives, and scalable data products using specialized skills and fundamental data science methods (e.g. regression, survival analysis, segmentation, experimentation, and machine learning when needed)",
            ],
            techs: [
                "Flink", "GCP", "Data Modelling"
            ]
            
        },
        { 
            id:3, 
            indicator: <RiAdvertisementFill />, 
            timeline:"July - Oct", 
            company: "Gale", 
            name: "experience3",
            image: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos consectetur incidunt laudantium repudiandae. Expedita at repellat voluptate esse debitis earum." ,
            skills: [
                "Designed analytics models for multi-touch attribution modelling to drive acquisition and cross sell marketing strategies, both offline and using Google Ads Data Hub.",
                "Evaluated marketing behaviour to identify segments, trends and opportunities to inform in-market strategies and optimize digital marketing actions.",
                "Collaborated with strategy teams to identify needs, recommend analytical methodologies and deploy analytics models across multiple platforms, including Google Cloud Platform and Amazon Web Services.",
                "Supervised and mentored members of the analytics team, implementing Agile methodology",
            ],
            techs: [
                "Python"
            ]
        },
        { 
            id:4, 
            indicator:<PiPiggyBankBold />, 
            timeline:"Oct - Sept", 
            company: "Tangerine", 
            name: "experience4", 
            image: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos consectetur incidunt laudantium repudiandae. Expedita at repellat voluptate esse debitis earum." ,
            skills: [
                "Evaluated client and account behavior to identify segments, trends and opportunities by utilizing machine learning principles and statistical analysis; this helped shape the company’s go to market strategy and drive acquisition",
                "Collaborated with internal business partners to identify needs, recommend strategic enhancements and deploy predictive analytics across multiple platforms, including Google Cloud Platform.",
            ],
            techs: [
                "Python"
            ]
        }
    ]

    return (
        <>
        <h1 className="uppercase text-center p-8" id="Experiences">Experiences</h1>
        <Accordion>
            { jobs.map(job => {
                return (
                    <AccordionItem 
                        key={job.id} 
                        aria-label={ "Accordion " + job.id } 
                        title={ job.company } 
                        subtitle={ job.timeline }
                        indicator={ job.indicator }
                    >
                        <div className="mx-10 flex flex-col">
                            <div className="p-2">
                                { job.description }
                            </div>
                            <div className="p-4">
                                { job.skills.map((skill, index) => {
                                    return <li key={ index }>{ skill} </li>
                                })}
                            </div>
                            <div className="p-4 space-x-2">
                                { job.techs.map((tech, index) => {
                                    return <Chip key={ index } variant="faded" >{ tech }</Chip>
                                })}
                            </div>
                        </div>
                        
                    </AccordionItem>
                )
            })}
        </Accordion>
        </>
    )
}