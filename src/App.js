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
import BasicSlider from './components/BasicSlider';
import Slider from './components/Slider';
import Related from './components/Related';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Socials from './components/Socials';
import AnimationTrigger from './components/AnimationTrigger';
import Bubbles from './components/Bubbles';
import VerticalSlider from './components/VerticalSlider';

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
      <Pagebody
        title="You have to keep evolving"
        img={dumbbell}
      >
        <AnimationTrigger>
          <p>
            So the advantages of using digitisation to transform business are clear – yet many companies hold back because of concerns about the challenges of implementing digitisation. However, by starting small and maintaining clarity about your goals, becoming a digital-first business can be straightfoward.
          </p>
          <p>
            It is true that a lack of expertise can certainly slow down digitisation projects, but thanks to the rise of cloud computing it is easy to start with small test projects and then grow quickly once you have found the right combination.
          </p>
          <p>
            Jillian Moore, head of digital for UK and Ireland at IT company Atos, says that knowing exactly what you want to achieve, rather than a vague, broad goal of becoming a digital business, is crucial. “If you think about the cloud in isolation as an infrastructure project it can become quite daunting and quite expensive. But the cloud is a beginning, not an end.
          </p>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote quote>
            <h3>
              If you really want to justify the effort, cost and disruption [that digitisation] can cause, it’s about what happens next, which is about all the things that it enables – being able to grow and respond to your business challenges.
            </h3>
            <p>
              Jillian Moore, head of digital for UK and Ireland at IT company Atos
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            It is also unwise to consider digitisation as a project, or a problem, just for technology specialists. While there may well be new technology involved, these initiatives have to be led from the top and kept going.
          </p>
          <p>
            Javid Khan, chief cloud officer at IT and services company Pulsant, says: “We call it digital evolution. It’s an evolving road map. Once you’re in the cloud, it doesn’t stop there. You have to keep evolving. Technology is advancing so you have to advance in the way you implement and advance public cloud.”
          </p>
          <p>
            Finally, there are challenges are to do with the organisation and culture of your business. Making radical changes to any business can meet opposition, especially within in a long-established company. Breaking down barriers between departments is vital to make the data, and the bright ideas, flow across the organisation.
          </p>
        </AnimationTrigger>
      </Pagebody>
      <VerticalSlider />
      <BasicSlider />
      <Pagebody
        title="You have to keep evolving"
        img={dumbbell}
      >
        <AnimationTrigger>
          <p>
            So the advantages of using digitisation to transform business are clear – yet many companies hold back because of concerns about the challenges of implementing digitisation. However, by starting small and maintaining clarity about your goals, becoming a digital-first business can be straightfoward.
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
