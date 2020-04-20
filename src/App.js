import React, { useState, useRef } from 'react'
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Modal from 'react-bootstrap/Modal'
import Popover from 'react-bootstrap/Popover'
import { useTransition, useSpring, useChain, useTrail, animated } from 'react-spring'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ListGroup from 'react-bootstrap/ListGroup'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {isMobile} from 'react-device-detect';
import SvgLines from 'react-mt-svg-lines';
import { Waypoint } from 'react-waypoint';
import StarfieldAnimation from 'react-starfield-animation'
import SaturnVFirstStage from './assets/SaturnV-First-Stage.svg';
import SaturnVSecondStage from './assets/SaturnV-Second-Stage.svg';
import SaturnVThirdStage from './assets/SaturnV-Third-Stage.svg';
import SaturnVLRV from './assets/SaturnV-LRV.svg';
import SaturnVCommand from './assets/SaturnV-Command.svg';
import SaturnVEscape from './assets/SaturnV-Launch-Escape.svg';
import SaturnVEngines from './assets/SaturnV-Engines.svg';
import StatueOfLiberty from './assets/StatueOfLiberty-min.png'
import FlightBackground from './assets/Flight-Background.svg'
import UserSVG from './assets/user.svg'
import {ReactComponent as FlightLaunch} from './assets/Flight-Launch.svg'
import {ReactComponent as FlightEarthOrbit} from './assets/Flight-Earth-Orbit.svg'
import {ReactComponent as FlightLunarInjection} from './assets/Flight-Lunar-Injection.svg'
import {ReactComponent as FlightLunarOrbit} from './assets/Flight-Lunar-Orbit.svg'
import {ReactComponent as FlightLunarLanding} from './assets/Flight-Lunar-Landing.svg'
import {ReactComponent as FlightLunarLaunch} from './assets/Flight-Lunar-Launch.svg'
import {ReactComponent as FlightEarthInjection} from './assets/Flight-Earth-Injection.svg'
import {ReactComponent as FlightEarthReentry} from './assets/Flight-Earth-Reentry.svg'
import data from './mh-data'
import dataPeople from './mh-data-people'

const items = ['SATURN', 'V']
const config = { mass: 5, tension: 2000, friction: 200, reset: true }

function App() {
  /* Splash animation */
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  /* Clickable Saturn V */
  const [stageNum, setStageNum] = useState(0);

  /* Carousel Index */
  const [index, setIndex] = useState(0);

  /* Flight Path Info */
  const [showPath, setShowPath] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const showFlightPath = () => {
    setShowPath(true);
  };

  let noShow;
  if(showPath) {
    noShow = {
      animation: 'popout 1s ease',
      opacity: '1',
    };
  } else {
    noShow = {
      opacity: '0',
    };
  }

  /* Stop Scrolling */
  const [stopScroll, setStopScroll] = useState(true);

  let stopScrollStyle;
  if(stopScroll) {
    stopScrollStyle = {
      position: 'fixed', 
    };
  } else {
    stopScrollStyle = {
    };
  }

  const interval = null;

  /* Mission History Animation */
  const [MHOpen, setMHOpen] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: { size: MHOpen ? '100%' : '20%', background: MHOpen ? 'rgb(24, 27, 36)' : 'hotpink' }
  })

  const transRef = useRef()
  const transitions = useTransition(MHOpen ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useChain(MHOpen ? [springRef, transRef] : [transRef, springRef], [0, MHOpen ? 0.1 : 0.6])

  const showMH = () => {
    setMHOpen(true);
  };

  /* Mission History Modals */

  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);
  const [modalShow7, setModalShow7] = useState(false);
  const [modalShow8, setModalShow8] = useState(false);
  const [modalShow9, setModalShow9] = useState(false);
  const [modalShow10, setModalShow10] = useState(false);
  const [modalShow11, setModalShow11] = useState(false);
  const [modalShow12, setModalShow12] = useState(false);
  const [modalShow13, setModalShow13] = useState(false);

  function modalShowMiddleware(num) {
    switch(num) {
      case 1:
        setModalShow1(!modalShow1);
        break;
      case 2:
        setModalShow2(!modalShow2);
        break;
      case 3:
        setModalShow3(!modalShow3);
        break;
      case 4:
        setModalShow4(!modalShow4);
        break;
      case 5:
        setModalShow5(!modalShow5);
        break;
      case 6:
        setModalShow6(!modalShow6);
        break;
      case 7:
        setModalShow7(!modalShow7);
        break;
      case 8:
        setModalShow8(!modalShow8);
        break;
      case 9:
        setModalShow9(!modalShow9);
        break;
      case 10:
        setModalShow10(!modalShow10);
        break;
      case 11:
        setModalShow11(!modalShow11);
        break;
      case 12:
        setModalShow12(!modalShow12);
        break;
      case 13:
        setModalShow13(!modalShow13);
        break;
      default:
        break;
    }
  }
  
  const MHModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-text">
            {props.children}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  /* Mission History People */
  
  const [showCivilian, setShowCivilian] = useState(true)
  const [showNavy, setShowNavy] = useState(true)
  const [showAirForce, setShowAirForce] = useState(true)
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const toggleShowNavy = () => {
    if(!showAirForce || !showCivilian) {
      setShowAirForce(true);
      setShowCivilian(true);
      setShowNavy(true);
    } else {
      setShowAirForce(false);
      setShowCivilian(false);
      setShowNavy(true);
    }
  };

  const toggleShowAirForce = () => {
    if(!showNavy || !showCivilian) {
      setShowNavy(true);
      setShowCivilian(true);
      setShowAirForce(true);
    } else {
      setShowNavy(false);
      setShowCivilian(false);
      setShowAirForce(true);
    }
  };

  const toggleShowCivilian = () => {
    if(!showNavy || !showAirForce) {
      setShowNavy(true);
      setShowAirForce(true);
      setShowCivilian(true);
    } else {
      setShowNavy(false);
      setShowAirForce(false);
      setShowCivilian(true);
    }
  };

  return (
    <div className="App">
            <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <div className="trails-main">
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
        <StarfieldAnimation
        depth={150}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
        ></StarfieldAnimation>
      </div>
      <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#" className="header">SATURN V</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#stage-info">Stage Information</Nav.Link>
            <Nav.Link href="#fp-heading">Flight Path</Nav.Link>
            <Nav.Link href="#mh-heading">Mission History</Nav.Link>
            <Nav.Link href="#astronauts">Astronauts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header className="App-header">
        <Container id="containerNoMargin">
          {isMobile && 
            <div>
              <Alert variant="danger">
                <Alert.Heading>Mobile device detected</Alert.Heading>
                <p>
                  For the best experience, please use a larger display.
                </p>
              </Alert>
            </div>
          }
          <div id="stage-info" className="heading-wrapper"><h1 className="heading">Stage Information</h1></div>
          <Row className="stage-info-wrapper">
            <Col lg="2">
              <div className="saturn-v-container">
                {stageNum === 0 ? (
                  <img src={SaturnVEscape} className="SaturnVSVG" alt="logo" onClick={() => setStageNum(1)} />
                ) : stageNum === 1 ? (
                  <img src={SaturnVEscape} className="SaturnVSVG zoomed" alt="logo" onClick={() => setStageNum(1)} />
                ) : (
                  <img src={SaturnVEscape} className="SaturnVSVG grayscale" alt="logo" onClick={() => setStageNum(1)} />
                )}
                {stageNum === 0 ? (
                  <img src={SaturnVCommand} className="SaturnVSVG" alt="logo" onClick={() => setStageNum(2)} />
                ) : stageNum === 2 ? (
                  <img src={SaturnVCommand} className="SaturnVSVG zoomed" alt="logo" onClick={() => setStageNum(2)} />
                ) : (
                  <img src={SaturnVCommand} className="SaturnVSVG grayscale" alt="logo" onClick={() => setStageNum(2)} />
                )}
                {stageNum === 0 ? (
                  <img src={SaturnVLRV} className="SaturnVSVG" alt="logo" onClick={() => setStageNum(3)} />
                ) : stageNum === 3 ? (
                  <img src={SaturnVLRV} className="SaturnVSVG zoomed" alt="logo" onClick={() => setStageNum(3)} />
                ) : (
                  <img src={SaturnVLRV} className="SaturnVSVG grayscale" alt="logo" onClick={() => setStageNum(3)} />
                )}
                {stageNum === 0 ? (
                  <img src={SaturnVThirdStage} className="SaturnVSVG" alt="logo" onClick={() => setStageNum(4)} />
                ) : stageNum === 4 ? (
                  <img src={SaturnVThirdStage} className="SaturnVSVG zoomed" alt="logo" onClick={() => setStageNum(4)} />
                ) : (
                  <img src={SaturnVThirdStage} className="SaturnVSVG grayscale" alt="logo" onClick={() => setStageNum(4)} />
                )}
                {stageNum === 0 ? (
                  <img src={SaturnVSecondStage} className="SaturnVSVG" alt="logo" onClick={() => setStageNum(5)} />
                ) : stageNum === 5 ? (
                  <img src={SaturnVSecondStage} className="SaturnVSVG zoomed" alt="logo" onClick={() => setStageNum(5)} />
                ) : (
                  <img src={SaturnVSecondStage} className="SaturnVSVG grayscale" alt="logo" onClick={() => setStageNum(5)} />
                )}
                {stageNum === 0 ? (
                  <img src={SaturnVFirstStage} className="SaturnVSVG" alt="logo" onClick={() => setStageNum(6)} />
                ) : stageNum === 6 ? (
                  <img src={SaturnVFirstStage} className="SaturnVSVG zoomed" alt="logo" onClick={() => setStageNum(6)} />
                ) : (
                  <img src={SaturnVFirstStage} className="SaturnVSVG grayscale" alt="logo" onClick={() => setStageNum(6)} />
                )}
                {stageNum === 0 ? (
                  <img src={SaturnVEngines} className="SaturnVSVG" alt="logo" onClick={() => setStageNum(7)} />
                ) : stageNum === 7 ? (
                  <img src={SaturnVEngines} className="SaturnVSVG zoomed" alt="logo" onClick={() => setStageNum(7)} />
                ) : (
                  <img src={SaturnVEngines} className="SaturnVSVG grayscale" alt="logo" onClick={() => setStageNum(7)} />
                )}
              </div>
            </Col>
            <Col md="10">
              <SwitchTransition>
                <CSSTransition 
                  key={stageNum} 
                  in={stageNum} 
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }} classNames="stage"
                >
                  <Container className="full-area">
                    <div className="saturn-info-container">
                    {stageNum !== 0 && 
                      <div className="close-button-wrapper">
                        <h1 className="subheading">
                          {stageNum === 1 ? (<span>Launch Escape</span>)
                          : stageNum === 2 ? (<span>Command Module</span>)
                          : stageNum === 3 ? (<span>Lunar Module</span>)
                          : stageNum === 4 ? (<span>3rd Stage</span>)
                          : stageNum === 5 ? (<span>2nd Stage</span>)
                          : stageNum === 6 ? (<span>1st Stage</span>)
                          : stageNum === 7 && (<span>Engines</span>)
                          }
                        </h1>
                        <OverlayTrigger
                          key='close'
                          placement='bottom'
                          overlay={
                            <Tooltip id='tooltip-close'>
                              Close stage info.
                            </Tooltip>
                          }
                        >
                          <Button variant="outline-info" className="close-button" aria-label="Close" onClick={() => setStageNum(0)}>
                            <span aria-hidden="true">&times;</span>
                          </Button>
                        </OverlayTrigger>
                      </div>
                    }
                    {stageNum === 0 ? (
                      <div className="info-content-wrapper">
                        <div id="info-zero-wrapper">
                          <Col sm="4" id="statue-of-liberty-wrapper">
                            <img src={StatueOfLiberty} className="statue" alt="Statue of Liberty" />
                          </Col>
                          <Col sm="8" className="align-text-left">
                            <p>This is the Saturn V, the rocket that carried man to the Moon. It was 363 ft tall, with a diamter of 33 ft. In comparison, the Statue of Liberty is 305 ft tall.</p><br></br><p>Click on the Saturn V or use the navigation buttons below to view detailed information on each stage/part.</p>
                          </Col>
                        </div>
                      </div>
                    
                    ) : stageNum === 1 ? ( 
                      <div className="info-content-wrapper">
                        This is the launch escape system, which is used to propel the crew module away from the rocket if an anomoly were to occur, whether on the pad or during launch. The rocket motors could deliver 667 kN of force, and could be activated manually. This was jettisoned shortly after the first stage seperated.
                      </div>
                    
                    ) : stageNum === 2 ? ( 
                      <div className="info-content-wrapper">
                        This is the command and service module, built by North American Aviation, which carried the astronauts themselves. It consists of of the command module, used for reentry, and the service module which houses electrical, propulsion, and other various equipment.
                      </div>
                    
                    ) : stageNum === 3 ? ( 
                      <div className="info-content-wrapper">
                        This is the lunar module, built by Grumman Aircraft. It was used to descend astronauts to the surface and back. It would also act as a "lifeboat" if the command and service module were to fail. It was made of of primarily two parts: the descent and ascent stages. The lunar module also carries the Lunar Roving Vehicle, made by Boeing and General Motors.
                      </div>
                    
                    ) : stageNum === 4 ? ( 
                      <div className="info-content-wrapper">
                        This is the 3rd stage, also known as S-IVB. It was build by Douglas Aircraft Company in California, and had to be transported by barge to the lauch site for integration. It was 58.6 ft tall and 21.7 ft in diameter. The most notable difference compared to the first two stages is that it's engine was able to be restarted, allowing it to perform multiple burns to complete the Earth parking orbit and translunar injection.
                      </div>
                    
                    ) : stageNum === 5 ? ( 
                      <div className="info-content-wrapper">
                        This is the 2nd stage, also known as S-II. It was built by North American Aviation in California, and had to be transported by barge to the lauch site for integration. It was 81.6 ft tall and 33 ft in diameter. Fully fulled, it weighed about 1,060,000 pounds.
                      </div>
                    
                    ) : stageNum === 6 ? (
                      <div className="info-content-wrapper">
                        This is the 1st stage, also known as S-IC. It was built by Boeing in New Orleans, and had to be transported by barge to the lauch site for integration. It was 138 ft tall and 33 ft in diameter. Fully fulled, it weighed about 5,100,000 pounds.
                      </div>
                    
                    ) : stageNum === 7 && 
                      <div className="info-content-wrapper">
                        The 1st stage was propelled by 5 F-1 Engines. Developed by Rocketdyne, these are gas generator-cycle engines that remain the most powerful single combustion chamber liquid-propellant engine ever developed, each capable of producing 1,522,000 pounds of force at sea level. They were 18.5 ft long and had a diameter of 12.2 ft.
                      </div>
                    }
                    <Waypoint onLeave={showFlightPath}></Waypoint>
                    <div className="info-buttons-wrapper">
                      <Button variant="outline-info" onClick={() => stageNum === 0 ? setStageNum(7) : setStageNum(stageNum-1)}>&lt; Previous</Button>
                      <Button variant="outline-info" onClick={() => stageNum === 7 ? setStageNum(0) : setStageNum(stageNum+1)}>Next &gt;</Button>
                    </div>
                    </div>
                  </Container>
                </CSSTransition>
              </SwitchTransition>
            </Col>
          </Row>
          <div id="fp-heading" className="heading-wrapper"><h1 className="heading">Flight Path</h1></div>
          <Row className="flight-path-info-container" style={noShow}>
            <div className="flight-path-wrapper">
              <div className="flight-background">
                <img src={FlightBackground} alt="Earth and moon background"/>
              </div>
              <div className="flight-path-container">
                {index === 0 && showPath && 
                  <SvgLines id="index-0" className="svg-overlay" animate={ true } duration={ 1000 } timing={"linear"}>
                    <FlightLaunch />
                  </SvgLines>
                }
                {index === 1 &&
                  <>
                    <FlightLaunch />
                    <SvgLines id="index-1" className="svg-overlay" animate={ true } duration={ 2000 } timing={"linear"}>
                      <FlightEarthOrbit />
                    </SvgLines>
                  </>
                }
                {index === 2 &&
                  <>
                    <div className="svg-flight-wrapper">
                      <FlightLaunch />
                      <FlightEarthOrbit className="svg-overlay"/>
                    </div>
                    <SvgLines id="index-2" className="svg-overlay" animate={ true } duration={ 1500 } timing={"linear"}>
                      <FlightLunarInjection />
                    </SvgLines>
                  </>
                }
                {index === 3 &&
                  <>
                    <div className="svg-flight-wrapper">
                      <FlightLaunch />
                      <FlightEarthOrbit className="svg-overlay" />
                      <FlightLunarInjection className="svg-overlay" />
                    </div>
                    <SvgLines id="index-3-0" className="svg-overlay" animate={ true } duration={ 2000 } timing={"linear"}>
                      <FlightLunarOrbit />
                    </SvgLines>
                    <SvgLines id="index-3-1" className="svg-overlay" animate={ 2000 } duration={ 1000 } timing={"linear"} fade={ true }>
                      <FlightLunarLanding />
                    </SvgLines>
                    <SvgLines id="index-3-2" className="svg-overlay" animate={ 3000 }  duration={ 1000 } timing={"linear"} fade={ true }>
                      <FlightLunarLaunch />
                    </SvgLines>
                  </>
                }
                {index === 4 &&
                  <>
                    <div className="svg-flight-wrapper">
                      <FlightLaunch />
                      <FlightEarthOrbit className="svg-overlay" />
                      <FlightLunarInjection className="svg-overlay" />
                      <FlightLunarOrbit className="svg-overlay" />
                      <FlightLunarLanding className="svg-overlay" />
                      <FlightLunarLaunch className="svg-overlay" />
                    </div>
                    <SvgLines id="index-4" className="svg-overlay" animate={ true } duration={ 1500 } timing={"linear"}>
                      <FlightEarthInjection />
                    </SvgLines>
                  </>
                }
                {index === 5 &&
                  <>
                    <div className="svg-flight-wrapper">
                      <FlightLaunch />
                      <FlightEarthOrbit className="svg-overlay" />
                      <FlightLunarInjection className="svg-overlay" />
                      <FlightLunarOrbit className="svg-overlay" />
                      <FlightLunarLanding className="svg-overlay" />
                      <FlightLunarLaunch className="svg-overlay" />
                      <FlightEarthInjection className="svg-overlay" />
                    </div>
                    <SvgLines id="index-5" className="svg-overlay" animate={ true } duration={ 1000 } timing={"linear"}>
                      <FlightEarthReentry />
                    </SvgLines>
                  </>
                }
              </div>
              <div className="flight-spacing"></div>
            </div>
            <div className="flight-path-info-wrapper">
            <Carousel className="flight-path-info" activeIndex={index} onSelect={handleSelect} interval={interval}>
              <Carousel.Item>
                <h1 className="flight-info-header">Launch</h1>
                <div className="flight-info-body">
                  <p>The first, second, and third stage would lift the rocket to a parking orbit of 191.1km with a velocity of 17,432 mph. It took 12 seconds for the rocket to clear the launch tower.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Earth Orbit</h1>
                <div className="flight-info-body">
                  <p>The remaining spacecraft would orbit earth one and a half times while preparing for translunar injection. During this time, the third stage remained attached.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Translunar Injection</h1>
                <div className="flight-info-body">
                  <p>The third stage burned for nearly six minutes to approach Earth's escape velocity. 40 minutes into the translunar injection, the command and service module would separate from the third stage and dock with the lunar module.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Lunar Orbit & Landing</h1>
                <div className="flight-info-body">
                  <p>Two burns were performed to bring the spacecraft to a lunar parking orbit. Then two crew members would enter the lunar module and perform land on the surface. When leaving the lunar surface, the descent stage was detached while the ascent stage fired.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Transearth Injection</h1>
                <div className="flight-info-body">
                  <p>Using similar concepts as the translunar injection, this manuever was performed by the engine on the service module to bring the spacecraft towards Earth from a parking orbit around the Moon.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Re-entry</h1>
                <div className="flight-info-body">
                  <p>The command module seperates from the service module, and then begins to reenter Earth's atmosphere at a velocity of about 9337 mph. At 24,000 ft the heatshield jettisoned to allow the parachutes to deploy.</p>
                </div>
              </Carousel.Item>
            </Carousel>
            </div>
          </Row>
          <div id="mh-heading" className="heading-wrapper"><h1 className="heading">Mission History</h1></div>
          <Row>   
            <Container className="mh-center-wrapper">
              <animated.div className="mh-inner-container" style={{ ...rest, width: size, height: size }}>
                {transitions.map(({ item, key, props }) => (
                  <animated.div key={key} className="mh-item" style={{ ...props, background: item.css }} onClick={() => modalShowMiddleware(item.num)}>
                    <p>{item.text}</p>
                  </animated.div>
                ))}
                <Waypoint onEnter={showMH}></Waypoint>
              </animated.div>
              <div className="legend-outer-container">
                <div className="legend-wrapper">
                  <div className="legend-item-container">
                    <div className="square orange"></div>
                    <p className="legend-label">Uncrewed</p>
                  </div>
                  <div className="legend-item-container">
                    <div className="square blue"></div>
                    <p className="legend-label">Crewed, no landing</p>
                  </div>
                  <div className="legend-item-container">
                    <div className="square green"></div>
                    <p className="legend-label">Crewed, landing</p>
                  </div>
                  <div className="legend-item-container">
                    <div className="square red"></div>
                    <p className="legend-label">Crewed, landing aborted</p>
                  </div>
                </div>
                {MHOpen && 
                <Container><p>Click on the mission boxes for more details.</p></Container>
                }
              </div>
            </Container>
            <>
              <MHModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                heading="Apollo 4"
              >
                <h4>Launched November 9, 1967</h4>
                <h4>Landed November 9, 1967</h4>
                <p>Uncrewed test flight.</p>
              </MHModal>
              <MHModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                heading="Apollo 6"
              >
                <h4>Launched April 4, 1968</h4>
                <h4>Landed April 4, 1968</h4>
                <p>Uncrewed test flight. Two engines in the second stage shut down early which prevented the third stage engines from restarting.</p>
              </MHModal>
              <MHModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                heading="Apollo 8"
              >
                <h4>Launched December 21, 1968</h4>
                <h4>Landed December 27, 1968</h4>
                <p>First crewed flight. Source of the famous "Earthrise" photo.</p>
              </MHModal>
              <MHModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                heading="Apollo 9"
              >
                <h4>Launched March 3, 1969</h4>
                <h4>Landed March 13, 1969</h4>
                <p>First flight with the full Saturn V rocket (previous launches did not have the lunar module).</p>
              </MHModal>
              <MHModal
                show={modalShow5}
                onHide={() => setModalShow5(false)}
                heading="Apollo 10"
              >
                <h4>Launched May 18, 1969</h4>
                <h4>Landed May 26, 1969</h4>
                <p>F mission ("dress rehersal") for landing on the moon.</p>
              </MHModal>
              <MHModal
                show={modalShow6}
                onHide={() => setModalShow6(false)}
                heading="Apollo 11"
              >
                <h4>Launched July 16, 1969</h4>
                <h4>Landed July 24, 1969</h4>
                <p>First manned landing on the moon, on the Sea of Tranquility.</p>
              </MHModal>
              <MHModal
                show={modalShow7}
                onHide={() => setModalShow7(false)}
                heading="Apollo 12"
              >
                <h4>Launched November 14, 1969</h4>
                <h4>Landed November 24, 1969</h4>
                <p>Lunar landing at Ocean of Storms. A color television camera was brought to the surface, but was destroyed when accidentally pointed at the sun.</p>
              </MHModal>
              <MHModal
                show={modalShow8}
                onHide={() => setModalShow8(false)}
                heading="Apollo 13"
              >
                <h4>Launched April 11, 1970</h4>
                <h4>Landed April 17, 1970</h4>
                <p>Lunar landing aborted after an oxygen tank ruptured in the service module.</p>
              </MHModal>
              <MHModal
                show={modalShow9}
                onHide={() => setModalShow9(false)}
                heading="Apollo 14"
              >
                <h4>Launched January 31, 1971</h4>
                <h4>Landed February 9, 1971</h4>
                <p>Lunar landing at the Fra Mauro highlands. Shepard hit two golf balls on the lunar surface.</p>
              </MHModal>
              <MHModal
                show={modalShow10}
                onHide={() => setModalShow10(false)}
                heading="Apollo 15"
              >
                <h4>Launched July 26, 1971</h4>
                <h4>Landed August 7, 1971</h4>
                <p>Lunar landing near Hadley Rille. First use of the Lunar Roving Vehicle.</p>
              </MHModal>
              <MHModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                heading="Apollo 16"
              >
                <h4>Launched April 16, 1972</h4>
                <h4>Landed April 27, 1972</h4>
                <p>Lunar landing in the highlands.</p>
              </MHModal>
              <MHModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
                heading="Apollo 17"
              >
                <h4>Launched December 7, 1972</h4>
                <h4>Landed December 19, 1972</h4>
                <p>Final lunar landing. Currently holds the record for the longest Moon landing.</p>
              </MHModal>
              <MHModal
                show={modalShow13}
                onHide={() => setModalShow13(false)}
                heading="SkyLab 1"
              >
                <h4>Launched May 14, 1973</h4>
                <h4>Reentered July 11, 1979</h4>
                <p>Launch of the first United States space station.</p>
              </MHModal>
            </>
          </Row>
          <div id="astronauts" className="heading-wrapper"><h1 className="heading">Astronauts That Flew on Saturn V</h1></div>
          <Row>
            <Container className="mhp-outer-container">
              <div className="split">
                <Col md={6} className="list">
                  {dataPeople.map(( item ) => {
                    if(!isSwitchOn || (isSwitchOn && item.moonwalked)) {
                    if(item.id === "Navy" && showNavy) {
                      return (
                        <OverlayTrigger 
                          key={item.label}
                          trigger={["hover", "focus"]}
                          placement={'top'}  
                          overlay={
                            <Popover id={`popover-positioned-top`}>
                              <Popover.Title as="h3">{item.label}</Popover.Title>
                              <Popover.Content>
                                <div className="mhp-container">
                                  <div>
                                    <strong>{item.mission}</strong>
                                  </div>
                                  <div>
                                    {item.comment}
                                  </div>
                                </div>
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <div className="lg-square navy">
                            <img src={UserSVG} />
                          </div>
                        </OverlayTrigger>
                      )
                    } else if (item.id === "Civilian" && showCivilian) {
                      return (
                        <OverlayTrigger 
                          key={item.label}
                          trigger={["hover", "focus"]}
                          placement={'top'}  
                          overlay={
                            <Popover id={`popover-positioned-top`}>
                              <Popover.Title as="h3">{item.label}</Popover.Title>
                              <Popover.Content>
                                <div className="mhp-container">
                                  <div>
                                    <strong>{item.mission}</strong>
                                  </div>
                                  <div>
                                    {item.comment}
                                  </div>
                                </div>
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <div className="lg-square civilian">
                            <img src={UserSVG} />
                          </div>
                        </OverlayTrigger> 
                      )
                    } else if (item.id === "Air Force" && showAirForce) {
                      return (
                        <OverlayTrigger 
                          key={item.label}
                          trigger={["hover", "focus"]}
                          placement={'top'}  
                          overlay={
                            <Popover id={`popover-positioned-top`}>
                              <Popover.Title as="h3">{item.label}</Popover.Title>
                              <Popover.Content>
                                <div className="mhp-container">
                                  <div>
                                    <strong>{item.mission}</strong>
                                  </div>
                                  <div>
                                    {item.comment}
                                  </div>
                                </div>
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <div className="lg-square airforce">
                            <img src={UserSVG} />
                          </div>
                        </OverlayTrigger>
                      )
                    } else {
                      return (
                        <div className="lg-square gray">
                          <img src={UserSVG} />
                        </div>
                      )
                    }
                    } else {
                      return (
                        <div className="lg-square gray">
                          <img src={UserSVG} />
                        </div>
                      )
                    }
                    })}
                </Col>
                <Col md={4} className="legend-side-wrapper">
                  <div className="legend-outer-container-2">
                    <div className="legend-wrapper-2">
                      <div className="legend-item-container" onClick={() => toggleShowCivilian()}>
                        <div className="square orange"></div>
                        <p className="legend-label-2">Civilian</p>
                      </div>
                      <div className="legend-item-container" onClick={() => toggleShowNavy()}>
                        <div className="square blue"></div>
                        <p className="legend-label-2">Navy</p>
                      </div>
                      <div className="legend-item-container" onClick={() => toggleShowAirForce()}>
                        <div className="square green"></div>
                        <p className="legend-label-2">Air Force</p>
                      </div>
                    </div>
                  </div>
                  <Form className="switch-wrapper">
                    <Form.Switch
                      onChange={onSwitchAction}
                      id="custom-switch"
                      label="Moonwalked"
                      checked={isSwitchOn}
                    />
                  </Form>
                </Col>
              </div>
            </Container>
          </Row>
        </Container>
      </header>
      <footer>
        <Jumbotron fluid>
          <Container>
            <h1>Sources</h1>
            <ListGroup variant="flush">
              <ListGroup.Item><a href="https://www.boeing.com/history/products/saturn-v-moon-rocket.page">Boeing - Saturn V</a></ListGroup.Item>
              <ListGroup.Item><a href="https://history.nasa.gov/afj//ap08fj/pdf/sa503-flightmanual.pdf">NASA - Saturn V Flight Manual</a></ListGroup.Item>
              <ListGroup.Item><a href="https://historicspacecraft.com/Rockets_Saturn_5.html">Historic Spacecraft - Saturn V Stages</a></ListGroup.Item>
              <ListGroup.Item><a href="https://history.nasa.gov/ap11ann/astrobios.htm#other">NASA - Apollo Astronaut Biographys</a></ListGroup.Item>
              <ListGroup.Item><a href="https://airandspace.si.edu/multimedia-gallery/5317hjpg">Air & Space Museum - Lunar Flight Path</a></ListGroup.Item>
            </ListGroup>
            <h1>Attributions</h1>
            <ListGroup variant="flush">
              <ListGroup.Item><a href="https://freesvg.org/saturn-v-rocket">Saturn V SVG - OpenClipart, Public Domain</a></ListGroup.Item>
              <ListGroup.Item><a href="https://unsplash.com/@aussieactive?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Statue of Liberty - AussieActive on Unsplash</a></ListGroup.Item>
              <ListGroup.Item><a href="https://commons.wikimedia.org/wiki/File:%C3%86toms_-_Earth.svg">Earth SVG - Designed by Ætoms from Flaticon</a></ListGroup.Item>
              <ListGroup.Item><a href="https://www.flaticon.com/free-icon/moon_2530880?term=moon&page=1&position=28">Moon SVG - Designed by Good Ware from Flaticon</a></ListGroup.Item>
              <ListGroup.Item><a href="https://www.flaticon.com/free-icon/user_747376?term=person&page=1&position=3">Person SVG - Designed by Freepik from Flaticon</a></ListGroup.Item>
            </ListGroup>
          </Container>
        </Jumbotron>
        <h6>Made for ENGR 2367.01H</h6>
      </footer>
    </div>
    
  );
  
}

export default App;
