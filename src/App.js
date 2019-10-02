import React, { useState, useEffect } from 'react';
// Styles
import './App.scss';
// Data & external methods
import { FiveGTimeline, digitalDev } from './data';
import analytics from './helpers/analytics';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Pagebody from './components/Pagebody';
import Dropcap from './components/Dropcap';
import Pullquote from './components/Pullquote';
import PullQuoteSpecial from './components/Pullquote/subcomponents/PullQuoteSpecial';
import CTA from './components/CTA';
import Button from './components/Button';
import Timeline from './components/Timeline';
import Slider from './components/Slider';
import Related from './components/Related';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Socials from './components/Socials';
import AnimationTrigger from './components/AnimationTrigger';
import Bubbles from './components/Bubbles';

// Assets
import ladder from './assets/titles/ladder.svg';
import globe from './assets/titles/globe.svg';
import dumbbell from './assets/titles/dumbbell.svg';
import plane from './assets/titles/plane.svg';
import trophy from './assets/titles/trophy.svg';
import Broughttyb from './components/Broughttyb';
import stars from './assets/stars.svg';

function App() {
  const [progress, setProgress] = useState(0);

  const changeProgress = () => {
    window.requestAnimationFrame(() => {
      let progressState = progress;
      const docHeight = document.body.scrollHeight;
      const scrolled = window.scrollY + window.innerHeight;
      const difference = docHeight + scrolled;
      const percentage = difference / docHeight - 1;
      progressState = percentage;
      setProgress(progressState);
    });
  };

  useEffect(() => {
    // on update
    document.addEventListener('scroll', changeProgress);
    return function cleanup() {
      document.removeEventListener('scroll', changeProgress);
    };
  });

  useEffect(() => {
    analytics.send('App Loaded');
  }, []);

  return (
    <>
      <Header progress={progress} />
      <Hero />
      <PullQuoteSpecial>
        <Pullquote specialQuote>
          <h3>
            We are witnessing a shift to a new revolution, the final part in the UK's transition from an industrial age to a digital one
          </h3>
          <p>
          Neil Bellamy, head of technology, media and telecoms at NatWest
          </p>
        </Pullquote>
      </PullQuoteSpecial>
      <Pagebody noPadding>
        <AnimationTrigger>
          <p>
            <Dropcap>O</Dropcap>
            nly the biggest businesses used to be able to aord to invest in cutting-edge technology.
          </p>
          <p>
            But successive waves of innovation, from the arrival of the web through to smartphones, cloud computing and artificial intelligence (AI), are providing even the smallest businesses with the advantages that were once only available to those with the deepest pockets. 
          </p>
          <p>
            These rapid advances in technology have fuelled new companies across all sectors. Online fashion chain boohoo, Apple Music, online food delivery apps such as Just Eat and Deliveroo, accommodation company Airbnb and ride-hailing app Uber are relatively new, but they are already overtaking their more established rivals.
          </p>
          <p>
            In macro terms, Neil Bellamy, head of technology, media and telecoms at NatWest, says we are witnessing a shift to a new revolution, the final part in the UK’s transition from an industrial age to a digital one.
          </p>
          <p>
            He says: “What digitisation means to most small and medium-sized firms is technology that can enhance their business.
          </p>
          <p>
            “It can make them more productive by saving costs, reducing back office and internal processes, and by making the customer journey more simple and more effective. It can also help firms discover new business models,” he says.
          </p>
          <p>
            NatWest, for example, has recently launched Mettle, a digital banking platform that combines a current account with invoicing, payment chasing and bookkeeping capabilities, helping firms manage their finances.
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Timeline
        title="Major digital developments in UK business"
        items={digitalDev}
        anchor="talent"
      />
      <Pagebody title="Reaping the benefits of digitisation" img={ladder}>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Being on a level playing field
            </h3>
            <p>Any business, large or small, can now be digital. But small and medium-sized companies, which tend to lack the complex multi-layered structures of their larger rivals, are well placed to grasp the opportunities that digital offers and can use it to reach new potential customers or those of rivals.</p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Greater business insight
            </h3>
            <p>
            Every business has data, from invoices and price lists through to customer records. Using technologies such as big data and advanced analytics, companies can leverage this information to spot connections that would otherwise remain hidden, as well as forecasting demand and customer behaviour.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Customer knowledge
            </h3>
            <p>
            Business owners can store and record more information than ever before. This helps companies to better understand the needs of smaller, and more lucrative, segments of their customer base.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Increasing productivity
            </h3>
            <p>
            Digitisation allows companies to automate many processes, meaning work is faster and more efficient. Because much of the information is stored centrally in the cloud, staff can work flexibly and from anywhere, also improving productivity.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Reducing overheads
            </h3>
            <p>
            Cloud computing allows even the smallest of companies to rent business apps over the internet at a much lower cost than buying or building them in-house. Businesses can get access to anything from finance, sales and marketing packages to cutting-edge AI, and pay for just what they use, slashing capital expenditure.
            </p>
          </Pullquote>
        </AnimationTrigger>
      </Pagebody>
      <Pagebody
        title="… And what you should be aware of"
        img={globe}
      >
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Security concerns
            </h3>
            <p>Digitisation means storing and using data responsibly and safely. Cybersecurity attacks are a huge risk for companies, particularly small and medium-sized ones, which are seen as easier targets than their larger counterparts. But by having proper processes in place from the outset and ways to identify authorised users and non-authorised users, digitisation can be secure.</p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Cost
            </h3>
            <p>
            Every business has data, from invoices and price lists through to customer records. Using technologies such as big data and advanced analytics, companies can leverage this information to spot connections that would otherwise remain hidden, as well as forecasting demand and customer behaviour.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Customer knowledge
            </h3>
            <p>
            Business owners can store and record more information than ever before. This helps companies to better understand the needs of smaller, and more lucrative, segments of their customer base.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Increasing productivity
            </h3>
            <p>
            Digitisation allows companies to automate many processes, meaning work is faster and more efficient. Because much of the information is stored centrally in the cloud, staff can work flexibly and from anywhere, also improving productivity.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
            Reducing overheads
            </h3>
            <p>
            Cloud computing allows even the smallest of companies to rent business apps over the internet at a much lower cost than buying or building them in-house. Businesses can get access to anything from finance, sales and marketing packages to cutting-edge AI, and pay for just what they use, slashing capital expenditure.
            </p>
          </Pullquote>
        </AnimationTrigger>
      </Pagebody>
      <Slider />
      <Pagebody purple anchor="challenges">
        <AnimationTrigger>
          <h2 className="title__content">Tackling the talent drain in Europe</h2>
        </AnimationTrigger>
        <AnimationTrigger>
          <img className="stars" src={stars} alt="stars" />
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            Offering part-time work is key to engaging workers in EU nations,
            with 19pc of EU workers engaged on a part-time basis, rising to 32pc
            among women, according to research by staffing company Kelly
            Services.
          </p>
          <p>
            Dealing with staff as individuals can help workers to deal with the
            pressure of balancing work and home life, says Clare Eagle, chief
            people officer at cloud telephony platform Natterbox.
          </p>
          <p>
            Ms Eagle says: “Whether it’s being late to work because of dropping
            the children off at school, or leaving early for a doctor’s
            appointment, staff feel guilty that they are having to put
            something else ahead of work. Companies should work with staff
            individually to create a workplace environment that best suits
            their needs and removes this guilt.”
          </p>
          <p>
            Research by Kelly Services shows that workers in temporary and
            part-time work are being well rewarded in European countries, with
            19pc saying that their motivation was increased reward. Kelly
            Services found that many employees are reluctant to engage with a
            traditional interview process, with just 38pc of interviewees
            having applied via an online portal without previous contact with
            the company.
          </p>
          <p>
            Alister Esam, chief executive of Process Bliss, which advises SMEs,
            says: “The conventional approach to recruitment is flawed – it’s
            too much of a one-way street and the candidate has to effectively
            sell themselves to the employer. There is lots of talent out there
            but traditional approaches to recruitment are fundamentally unsuited
            to finding and developing it.”
          </p>
          <p>
            Instead, Mr Esam invites applicants to complete a game-based
            psychometric assessment before selecting a shortlist, which he
            believes helps to find candidates who will stick.
          </p>
          <p>
            He says: “We gather several candidates for a talk on what the
            business is all about, and see how they interact. Then each person
            will go for a walk with someone to interview them. We’ll then swap
            candidates and walk again, and then make a final decision about who
            to recruit.”
          </p>
        </AnimationTrigger>
        <Bubbles leastBubbles />
      </Pagebody>
      <Pagebody
        title="The challenges of the 5G workforce..."
        img={dumbbell}
      >
        <AnimationTrigger>
          <p>
            Employers are responding to the challenges of the multigenerational
            workforce, says Andy Young, talent and organisation lead at
            Accenture UK. Mr Young says: “The multiple generations across the
            UK have more in common than they do differences. The critical need
            for businesses is to be inclusive of all types of talent.”
          </p>
          <p>
            He says that the rise of technologies such as automation and
            artificial intelligence (AI) is not a matter of robots taking jobs,
            but instead poses an opportunity for businesses. “In the age of AI,
            success will increasingly depend on the collaboration of people and
            machines. British businesses recognise this future, with 66pc of
            leaders believing AI will result in net job gains for their
            organisation in the next three years.”
          </p>
          <p>
            Mr Young points to Accenture research, which shows that 67pc of
            workers are keen to learn how to work with intelligent technology
            in the next three to five years – but only 3pc of executives are
            offering training in areas such as AI, empathy and complex reasoning
            for their staff, which he points out are skill sets in growing
            demand.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Investing in technology is not a magic bullet for companies
          </h3>
          <p>Vincent Belliveau, chief executive EMEA, Cornerstone OnDemand</p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            He believes it is important to invest in technologies that focus on
            people, saying: “Invest in systems that will help your employees
            grow and develop, rather than transactional systems like payroll
            and time management. Put the emphasis on your people and focus on
            the technologies that will help your employees prepare for a
            digitally focused and fast-moving workplace of the future.
          </p>
          <p>
            “Identify the areas where innovative technology will make the
            biggest impact and expand the impact of that technology over time.
            By integrating technology slowly, you can ensure that it works and
            that it’s having a measurable impact on employee engagement.”
          </p>
          <p>
            Bruce Morton, talent acquisition expert and author of Redesigning
            the Way Work Works, says: “First you need to deconstruct, streamline
            and improve work processes. Survey, or have informal talks with your
            employees about how work works – and where it doesn’t work quite so
            well. Rely on them to suggest which tasks are redundant, less
            efficient or a pain in the neck.
          </p>
          <p>
            “Then huddle with leaders and workers to redefine work patterns,
            behaviours and workflows. That way, before you even automate or
            digitise anything you should see real performance shifts. If you’ve
            made the right changes, productivity will improve. If not, you’ll
            see where a new approach is necessary.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Pagebody
        title="… and the international challenges"
        img={plane}
      >
        <AnimationTrigger>
          <p>
            And there are other challenges for workforces to contend with,
            particularly on the international stage. British companies face
            pressure from global challenges, such as a shortage of digital
            skills, says Mr Gray. “The UK workforce is under pressure from
            global trends, including the need to develop tech skills. The lack
            of qualified talent could stifle the nation’s progress.”
          </p>
          <p>
            But despite this pressure and the steady uncertainty caused by
            Brexit, Britain remains an attractive labour market, says Mr Gray.
            “While some UK employers have shifted their local workforce
            investments, our recent Total Workforce Index reveals that the
            country’s candidate pool and talent performance remains steady,
            with the UK ranked the most attractive labour market in EMEA
            (Europe, the Middle East and Africa).”
          </p>
        </AnimationTrigger>
        <Pullquote>
          <h3>
            For businesses, offering flexibility can pay dividends in terms of
            improving employee engagement and retention, and cutting training
            costs – both locally and globally.
          </h3>
        </Pullquote>
        <AnimationTrigger>
          <p>
            A report by the Society for Human Resource Management (SHRM) found
            that 91pc of HR professionals found that flexible work arrangements
            positively influence employee engagement, job satisfaction and
            retention. Employees with workplace flexibility show increased
            commitment and improved performance, the report found.
            Pharmaceutical company AstraZeneca conducted a flexibility survey
            of employees based at its Delaware HQ and 96pc said flexibility
            influenced their decision to stay at the business.
          </p>
          <p>
            Neil Bellamy, head of technology, media and telecommunications,
            NatWest, says: “The ‘gig economy’ has potentially negative
            connotations: we prefer to call it the liquid workforce, to
            reflect the fact that this trend offers lasting opportunities for
            both employee and employer.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Companies have traditionally been set up for the industrial age
            rather than a digital economy, which can potentially result in
            workers becoming deskilled and/or disengaged.
          </h3>
        </Pullquote>
        <AnimationTrigger>
          <p>
            “Liquid workforces need continuous training, aligned to their
            personal needs and aspirations. People don’t typically work
            vertically any more, but come together and share skills in project
            working groups. They need to be adaptable and ready for change,
            supported by an innovative management culture of failing fast,
            working iteratively and being empowered to succeed.”
          </p>
          <p>
            Antony Woodcock, co-founder and chief executive at GIG, says:
            “Millennials want to experience life in a different way to their
            parents and their approach to work is what differs most. Young
            workers want work built around their lifestyle, while older
            generations believe a lifestyle is built around work.
          </p>
          <p>
            “This isn’t to say that security isn’t important to young
            generations; it’s merely a reflection of how young workers view
            careers and work in general, which is that it doesn’t have to be
            9am-5pm or be contained with the confines of one employer for 40+
            years.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Pagebody
        title="How to keep talent"
        img={trophy}
      >
        <AnimationTrigger>
          <p>
            Retaining talent is a key challenge for modern companies, says Ross
            Tracey, managing director at Ceridian Europe.
          </p>
          <p>
            Mr Tracey says that technology can help companies to retain
            talent – for instance, by using predictive analytics to work out
            whether star performers are at risk of leaving.
          </p>
          <p>
            But he believes that a shift in the relationship with employees
            (and taking into account the needs of the 5G workforce) can help
            companies to retain that talent.
          </p>
          <p>
            He says: “Employers should create flexible strategies to accommodate
            the unique circumstances of employees’ career and life stages.
            Employees need clarity on what to expect about compensation,
            promotions and their career trajectories at the organisation.
            Regular check-ins keep everyone on the same page.
          </p>
          <p>
            “Shift from a transactional relationship with employees to one of
            mutual support. Organisations that support the complete financial,
            physical, social, and emotional well-being of employees, at any
            stage of life, inspire dedication and loyalty.
          </p>
          <p>
            “Ensure every employee knows the impact they make on company goals,
            and empower them to drive results,” he says.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            To attract and retain talent, employers will have to balance the
            needs of the multigenerational workforce.
          </h3>
          <p>
            Adrian Wright, principal lecturer at the University of Central
            Lancashire
          </p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            Dr Wright says: “According to the 2018 Deloitte Millennial Survey,
            50pc of millennials consider flexibility as ‘very important’ when
            choosing where they work. Employers that proactively cater to the
            need for flexibility are developing a clear advantage.”
          </p>
          <p>
            He says that different generations may have different needs, such
            as people with caring responsibilities requiring flexible hours,
            and that employers need to cater for this.
          </p>
          <p>
            Training is key to making employees feel valued, and technology can
            help to deliver it, says David Willett, corporate director at the
            Open University.
          </p>
          <p>
            He says: “Employers need to take a more agile approach when it comes
            to developing talent. The way in which training it is delivered will
            need to become more flexible too.”
          </p>
          <p>
            Nick Whiteley, managing director of HFX workforce management and
            author of Business Innovation: A Little Book of Big Ideas, says:
            “Treat someone like a robot or clone and they surely will not stay
            in an organisation. But the right environment and raison d’être can
            make a difference.
          </p>
          <p>
            “In my view adopting a hive approach to a company is the exact
            opposite from the autocratic hierarchy – everyone plays a role and
            can see how their contribution makes a difference. Yet many
            companies are a long way from this position.”
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Workplace culture is the key to attracting and retaining workers of
            all generations.
          </h3>
          <p>
            Andy Young, talent and organisation lead at Accenture UK
          </p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            He says: “Inclusive cultures and teams, where people feel a sense
            of belonging and feel safe to volunteer a new idea, are
            higher-performing.”
          </p>
          <p>
            Accenture research shows that equal workplaces have six times the
            level of innovation mindset as the least equal, Mr Young says.
          </p>
          <p>
            “With real-wage rises since the financial crisis being suppressed
            in many areas of the labour market, fair pay still matters, but so
            does the quality of the work and the work environment,” he says.
            “Most of all, workers are looking for greater freedom, good team
            environments, skills and career development, and purpose at
            work – they want ‘good work’.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <CTA>
        <p>For more information visit the NatWest Rethinking Business Hub</p>
        <Button
          link="https://ad.doubleclick.net/ddm/trackclk/N8083.124621MSNUK/B22370404.240723500;dc_trk_aid=443465896;dc_trk_cid=105350124;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
        />
      </CTA>
      <Socials />
      <Broughttyb />
      <Credits />
      <Related />
      <Footer />
    </>
  );
}

export default App;
