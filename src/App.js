///Default React import
import React, { Component } from 'react';

///Importing classes related to ReactStrap
import { Container, Jumbotron, Card, CardImg, CardTitle, CardBody, Col, Row, Fade, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

//Importing React-Markdown

//Importing pages
import Welcome from './assets/content/welcome';
import Homemore from './assets/content/homemore';
import Testtable from './assets/content/testtable';
import Aboutus from './assets/content/aboutus';

//Importing Image Bundle JSONs
import ImagePage from './assets/images/bundles/imagePage.json';

//Misc Imports
import PageLinks from './assets/json/NavBar.json';

//HTTP to HTTPS Redirect
import HttpsRedirect from 'react-https-redirect';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleImage = this.toggleImage.bind(this);
    this.state = {
      activeTab: "home",
      activeImage: null,
      collapsed: true
    };
  }

  renderImages(imageJSON) {
    return imageJSON.map((picture) => {
      const imgURL = require(`${picture.src}`);
      return (
        <Col sm="15" md="6" lg="4" className="pt-2">
          <Card>
            <CardImg top src={imgURL} className="img-pointer" alt={picture.desc} onClick={() => { this.toggleImage(picture.name) }} />
            <CardTitle className="pt-2 pl-2">{picture.name}</CardTitle>
          </Card>
          <Modal isOpen={this.state.activeImage === picture.name} toggle={this.toggleImage} size="lg">
            <ModalHeader>{picture.name}</ModalHeader>
            <ModalBody>
              <p>
                <img src={imgURL} className="inline-img inline-img-size-full" alt={picture.desc} />
              </p>
              <p>
                {picture.desc}
              </p>
            </ModalBody>
          </Modal>
        </Col>);
    }
    );
  }

  renderNavBar(linksList) {
    return linksList.map((link) => {

      return (
        <NavItem>
          <NavLink href={"#" + link.tabID} className={classnames({ active: this.state.activeTab === link.tabID })} onClick={() => { this.toggle(link.tabID) }}>{link.title}</NavLink>
        </NavItem>
      )
    });
  }

  ///ReactStrap Tab Toggle
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    if (this.state.collapsed !== true) { ///When the Navbar has the toggler, this will close the expanded Navbar
      this.toggleNavbar();
    }

    ///Scroll to the top when toggled.
    document.body.scrollTop = 0; ///Safari only
    document.documentElement.scrollTop = 0; ///Everything else
  }

  toggleImage(image) {
    if (this.state.activeImage !== image) {
      this.setState({
        activeImage: image
      });
    }
    else {
      this.setState({
        activeImage: null
      });
    }
  }

  ///ReactStrap Toggle Navbar Collapse Button
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount() {

    ///On page load, set the activeTab to what is defined in the URL if specified.
    let url = document.location.toString();

    if (url.match('#')) {
      this.setState({
        activeTab: url.split('#')[1]
      });
    }

  }

  ///Rendering the page.
  render() {
    return (
      <div>
        <HttpsRedirect>
          <header>
            <Container className="pt-4">
              <Navbar color="dark" dark className="rounded" expand="lg">
                <NavbarBrand className="text-white">Demo Site</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav navbar className="ml-auto">
                    {this.renderNavBar(PageLinks)}
                  </Nav>
                </Collapse>
              </Navbar>
            </Container>
          </header>
          <main className="pt-3">
            <Container>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="home">
                  <Fade in={this.state.activeTab === "home"}>
                    <Jumbotron>
                      <Row>
                        <Col>
                          <img src={require('./assets/images/IMG_4238-1.png')} className="inline-img inline-img-size-sm inline-img-float-right py-2" alt="" />
                          <Welcome />
                          <Homemore />
                        </Col>
                      </Row>
                    </Jumbotron>
                  </Fade>
                </TabPane>
                <TabPane tabId="images">
                  <Fade in={this.state.activeTab === "images"}>
                    <Jumbotron>
                      <Row>
                        <Col>
                          <h1>Images</h1>
                        </Col>
                      </Row>
                      <Row>
                        {
                          this.renderImages(ImagePage)
                        }
                      </Row>
                    </Jumbotron>
                  </Fade>
                </TabPane>
                <TabPane tabId="test-table">
                  <Fade in={this.state.activeTab === "test-table"}>
                    <Jumbotron>
                      <Row>
                        <Col>
                          <Testtable />
                        </Col>
                      </Row>
                    </Jumbotron>
                  </Fade>
                </TabPane>
                <TabPane tabId="aboutus">
                  <Fade in={this.state.activeTab === "aboutus"}>
                    <Jumbotron>
                      <Row>
                        <Col>
                          <Aboutus />
                        </Col>
                      </Row>
                    </Jumbotron>
                  </Fade>
                </TabPane>
              </TabContent>
            </Container>
          </main>
        </HttpsRedirect>
      </div >
    );
  }
}

export default App;
