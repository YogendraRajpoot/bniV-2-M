import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';


export default function TermsOfService(){     
    return(
        <>
        <Head>
            <title>Business Needs Inc: Terms of Service</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-container">         
            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>Terms and Conditions</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">Terms Of Service</li>
                        </ol>         
                    </div>
                </div>
                <div className="banner-img"><img src="images/about-banner.png" alt="" /></div> 
            </section>

            <section className="content-page-wrapper">
                <div className="container">
                    <div className="content-page">
                        <div className="mission-content wow fadeInUp">
                            <p>Please read these terms and conditions carefully before using Our Service.</p>                          
                            <h1 className="section-title">Interpretation and Definitions</h1>
                            <h2>Interpretation</h2>
                            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                            <h2>Definitions</h2>
                            <p>For the purposes of these Terms and Conditions:</p>
                            <ul>
                                <li>· <b>Affiliate</b> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li> 
                                <li>· <b>Country</b> refers to: California, United States</li> 
                                <li>· <b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Business Needs Inc, 732 N. Diamond Bar, Diamond Bar CA 91765.</li>
                                <li>· <b>Device</b> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                                <li>· <b>Service</b> refers to the Website.</li>
                                <li>· <b>Terms and Conditions</b> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/" target="_blank">Free Terms and Conditions Generator</a>.</li>
                                <li>· <b>Third-party Social Media Service</b> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                                <li>· <b>Website</b> refers to Business Needs Inc, accessible from <a href="https://www.businessneedsinc.com/" target="_blank">https://www.businessneedsinc.com</a></li>
                                <li>· <b>You</b> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                            </ul>                            
                            
                            <h1 className="section-title">Acknowledgment</h1>
                            <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                            <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                            <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                            <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                            <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>

                            <h1 className="section-title">Links to Other Websites</h1>
                            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                            <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                            <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>

                            <h1 className="section-title">Termination</h1>
                            <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                            <p>Upon termination, Your right to use the Service will cease immediately.</p>

                            <h1 className="section-title">Limitation of Liability</h1>
                            <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                            <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                            <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>

                            <h1 className="section-title">"AS IS" and "AS AVAILABLE" Disclaimer</h1>
                            <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
                            <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                            <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>

                            <h1 className="section-title">Governing Law</h1>
                            <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

                            <h1 className="section-title">Disputes Resolution</h1>
                            <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>

                            <h1 className="section-title">For European Union (EU) Users</h1>
                            <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>

                            <h1 className="section-title">United States Legal Compliance</h1>
                            <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>

                             <h1 className="section-title">Severability and Waiver</h1>
                             <h2>Severability</h2>
                             <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                             <h2>Waiver</h2>
                             <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>

                            <h1 className="section-title">Translation Interpretation</h1>
                            <p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
                            
                            <h1 className="section-title">Changes to These Terms and Conditions</h1>
                            <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                            <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
 
                            <h1 className="section-title">Contact Us</h1>
                            <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                            <ul>
                               <li>· By visiting this page on our website: <a href="https://www.businessneedsinc.com/terms-service" target="_blank">https://www.businessneedsinc.com/terms-service</a></li>
                            </ul> 
                          </div>
                    </div>
                </div>
            </section>            

            <HelpWrapperComponent />            
            
        </div>
        </>
    )
}