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
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {isMobile} from 'react-device-detect';
import SvgLines from 'react-mt-svg-lines';
import { Waypoint } from 'react-waypoint';
import SaturnVFirstStage from './assets/SaturnV-First-Stage.svg';
import SaturnVSecondStage from './assets/SaturnV-Second-Stage.svg';
import SaturnVThirdStage from './assets/SaturnV-Third-Stage.svg';
import SaturnVLRV from './assets/SaturnV-LRV.svg';
import SaturnVCommand from './assets/SaturnV-Command.svg';
import SaturnVEscape from './assets/SaturnV-Launch-Escape.svg';
import SaturnVEngines from './assets/SaturnV-Engines.svg';
import StatueOfLiberty from './assets/StatueOfLiberty-min.png'
import FlightBackground from './assets/Flight-Background.svg'
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
    onRest: () => {setStopScroll(false)}
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
    <div className="App" style={stopScrollStyle}>
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
      </div>
      <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#" className="header">SATURN V</Navbar.Brand>
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
          <div className="heading-wrapper"><h1 className="heading">Stage Information</h1></div>
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
                          : stageNum === 3 ? (<span>Lunar Rover Vehicle</span>)
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
                            <p>This is the default page. Click on the Saturn V or use the navigation buttons below to view detailed information on each stage/part.</p>
                          </Col>
                        </div>
                      </div>
                    
                    ) : stageNum === 1 ? ( 
                      <div className="info-content-wrapper">
                        This is LE.
                      </div>
                    
                    ) : stageNum === 2 ? ( 
                      <div className="info-content-wrapper">
                        This is CM.
                      </div>
                    
                    ) : stageNum === 3 ? ( 
                      <div className="info-content-wrapper">
                        This is LRV.
                      </div>
                    
                    ) : stageNum === 4 ? ( 
                      <div className="info-content-wrapper">
                        This is 3rd stage.
                      </div>
                    
                    ) : stageNum === 5 ? ( 
                      <div className="info-content-wrapper">
                        This is 2nd stage.
                      </div>
                    
                    ) : stageNum === 6 ? (
                      <div className="info-content-wrapper">
                        This is 1st stage.
                      </div>
                    
                    ) : stageNum === 7 && 
                      <div className="info-content-wrapper">
                        This is engines.
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
                  <p>This is launch body.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Earth Orbit</h1>
                <div className="flight-info-body">
                  <p>This is earth orbit body.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Translunar Injection</h1>
                <div className="flight-info-body">
                  <p>This is translunar injection body.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Lunar Orbit & Landing</h1>
                <div className="flight-info-body">
                  <p>This is lunar orbit, landing, and launch body.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Transearth Injection</h1>
                <div className="flight-info-body">
                  <p>This is transearth injection body.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className="flight-info-header">Re-entry</h1>
                <div className="flight-info-body">
                  <p>This is re-entry body.</p>
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
                <Container><p>Click on the mission boxes for more detail.</p></Container>
                }
              </div>
            </Container>
            <>
              <MHModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                heading="Apollo 4"
              >
                <p>This is 1.</p>
              </MHModal>
              <MHModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                heading="Apollo 6"
              >
                <p>This is 2.</p>
              </MHModal>
              <MHModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                heading="Apollo 8"
              >
                <p>This is 3.</p>
              </MHModal>
              <MHModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                heading="Apollo 9"
              >
                <p>This is 4.</p>
              </MHModal>
              <MHModal
                show={modalShow5}
                onHide={() => setModalShow5(false)}
                heading="Apollo 10"
              >
                <p>This is 5.</p>
              </MHModal>
              <MHModal
                show={modalShow6}
                onHide={() => setModalShow6(false)}
                heading="Apollo 11"
              >
                <p>This is 6.</p>
              </MHModal>
              <MHModal
                show={modalShow7}
                onHide={() => setModalShow7(false)}
                heading="Apollo 12"
              >
                <p>This is 7.</p>
              </MHModal>
              <MHModal
                show={modalShow8}
                onHide={() => setModalShow8(false)}
                heading="Apollo 13"
              >
                <p>This is 8.</p>
              </MHModal>
              <MHModal
                show={modalShow9}
                onHide={() => setModalShow9(false)}
                heading="Apollo 14"
              >
                <p>This is 9.</p>
              </MHModal>
              <MHModal
                show={modalShow10}
                onHide={() => setModalShow10(false)}
                heading="Apollo 15"
              >
                <p>This is 10.</p>
              </MHModal>
              <MHModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                heading="Apollo 16"
              >
                <p>This is 11.</p>
              </MHModal>
              <MHModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
                heading="Apollo 17"
              >
                <p>This is 12.</p>
              </MHModal>
              <MHModal
                show={modalShow13}
                onHide={() => setModalShow13(false)}
                heading="SkyLab 1"
              >
                <p>This is 13.</p>
              </MHModal>
            </>
          </Row>
          <div id="mh-heading" className="heading-wrapper"><h1 className="heading">Astronauts That Flew on Saturn V</h1></div>
          <Row>
            <Container className="mhp-outer-container">
              <div className="split">
                <div className="list">
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
                            
                          </div>
                        </OverlayTrigger>
                      )
                    }
                    }
                    })}
                </div>
                <div className="legend-side-wrapper">
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
                </div>
              </div>
            </Container>
          </Row>
        </Container>
      </header>
      <footer>
        <h6>Made for ENGR 2367.01H</h6>
      </footer>
    </div>
    
  );
  
}

export default App;
