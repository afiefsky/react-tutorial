import React, {Component} from 'react'

import './css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/owl.carousel.css'
import './css/owl.theme.css'
import './css/owl.transitions.css'
import './css/meanmenu/meanmenu.min.css'
import './css/animate.css'
import './css/normalize.css'
import './css/scrollbar/jquery.mCustomScrollbar.min.css'
import './css/jvectormap/jquery-jvectormap-2.0.3.css'
import './css/notika-custom-icon.css'
import './css/wave/waves.min.css'
import './css/main.css'
import './style.css'
import './css/responsive.css'

import Logo from './img/logo/logo.png'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="header-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="logo-area">
                  <a href="#foo"><img src={Logo} alt="" /></a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="header-top-menu">
                  <ul className="nav navbar-nav notika-top-nav">
                    <li className="nav-item dropdown">
                      <a href="#foo" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><span><i className="notika-icon notika-search" /></span></a>
                      <div role="menu" className="dropdown-menu search-dd animated flipInX">
                        <div className="search-input">
                          <i className="notika-icon notika-left-arrow" />
                          <input type="text" />
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#foo"data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><span><i className="notika-icon notika-mail" /></span></a>
                      <div role="menu" className="dropdown-menu message-dd animated zoomIn">
                        <div className="hd-mg-tt">
                          <h2>Messages</h2>
                        </div>
                        <div className="hd-message-info">
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/1.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>David Belle</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/2.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Jonathan Morris</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/4.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Fredric Mitchell</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/1.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>David Belle</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/2.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Glenn Jecobs</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="hd-mg-va">
                          <a href="#foo">View All</a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item nc-al"><a href="#foo" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><span><i className="notika-icon notika-alarm" /></span><div className="spinner4 spinner-4" /><div className="ntd-ctn"><span>3</span></div></a>
                      <div role="menu" className="dropdown-menu message-dd notification-dd animated zoomIn">
                        <div className="hd-mg-tt">
                          <h2>Notification</h2>
                        </div>
                        <div className="hd-message-info">
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/1.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>David Belle</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/2.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Jonathan Morris</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/4.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Fredric Mitchell</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/1.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>David Belle</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img">
                                <img src="img/post/2.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Glenn Jecobs</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="hd-mg-va">
                          <a href="#foo">View All</a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item"><a href="#foo" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><span><i className="notika-icon notika-menus" /></span><div className="spinner4 spinner-4" /><div className="ntd-ctn"><span>2</span></div></a>
                      <div role="menu" className="dropdown-menu message-dd task-dd animated zoomIn">
                        <div className="hd-mg-tt">
                          <h2>Tasks</h2>
                        </div>
                        <div className="hd-message-info hd-task-info">
                          <div className="skill">
                            <div className="progress">
                              <div className="lead-content">
                                <p>HTML5 Validation Report</p>
                              </div>
                              <div className="progress-bar wow fadeInLeft" data-progress="95%" style={{width: '95%'}} data-wow-duration="1.5s" data-wow-delay="1.2s"> <span>95%</span>
                              </div>
                            </div>
                            <div className="progress">
                              <div className="lead-content">
                                <p>Google Chrome Extension</p>
                              </div>
                              <div className="progress-bar wow fadeInLeft" data-progress="85%" style={{width: '85%'}} data-wow-duration="1.5s" data-wow-delay="1.2s"><span>85%</span> </div>
                            </div>
                            <div className="progress">
                              <div className="lead-content">
                                <p>Social Internet Projects</p>
                              </div>
                              <div className="progress-bar wow fadeInLeft" data-progress="75%" style={{width: '75%'}} data-wow-duration="1.5s" data-wow-delay="1.2s"><span>75%</span> </div>
                            </div>
                            <div className="progress">
                              <div className="lead-content">
                                <p>Bootstrap Admin</p>
                              </div>
                              <div className="progress-bar wow fadeInLeft" data-progress="93%" style={{width: '65%'}} data-wow-duration="1.5s" data-wow-delay="1.2s"><span>65%</span> </div>
                            </div>
                            <div className="progress progress-bt">
                              <div className="lead-content">
                                <p>Youtube App</p>
                              </div>
                              <div className="progress-bar wow fadeInLeft" data-progress="55%" style={{width: '55%'}} data-wow-duration="1.5s" data-wow-delay="1.2s"><span>55%</span> </div>
                            </div>
                          </div>
                        </div>
                        <div className="hd-mg-va">
                          <a href="#foo">View All</a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item"><a href="#foo" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><span><i className="notika-icon notika-chat" /></span></a>
                      <div role="menu" className="dropdown-menu message-dd chat-dd animated zoomIn">
                        <div className="hd-mg-tt">
                          <h2>Chat</h2>
                        </div>
                        <div className="search-people">
                          <i className="notika-icon notika-left-arrow" />
                          <input type="text" placeholder="Search People" />
                        </div>
                        <div className="hd-message-info">
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img chat-img">
                                <img src="img/post/1.jpg" alt="" />
                                <div className="chat-avaible"><i className="notika-icon notika-dot" /></div>
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>David Belle</h3>
                                <p>Available</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img chat-img">
                                <img src="img/post/2.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Jonathan Morris</h3>
                                <p>Last seen 3 hours ago</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img chat-img">
                                <img src="img/post/4.jpg" alt="" />
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Fredric Mitchell</h3>
                                <p>Last seen 2 minutes ago</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img chat-img">
                                <img src="img/post/1.jpg" alt="" />
                                <div className="chat-avaible"><i className="notika-icon notika-dot" /></div>
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>David Belle</h3>
                                <p>Available</p>
                              </div>
                            </div>
                          </a>
                          <a href="#foo">
                            <div className="hd-message-sn">
                              <div className="hd-message-img chat-img">
                                <img src="img/post/2.jpg" alt="" />
                                <div className="chat-avaible"><i className="notika-icon notika-dot" /></div>
                              </div>
                              <div className="hd-mg-ctn">
                                <h3>Glenn Jecobs</h3>
                                <p>Available</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="hd-mg-va">
                          <a href="#foo">View All</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Top Area */}
        {/* Mobile Menu start */}
        <div className="mobile-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="mobile-menu">
                  <nav id="dropdown">
                    <ul className="mobile-menu-nav">
                      <li><a href="#foo"data-toggle="collapse" data-target="Charts" >Home</a>
                        <ul className="collapse dropdown-header-top">
                          <li><a href="index.html">Dashboard One</a></li>
                          <li><a href="index-2.html">Dashboard Two</a></li>
                          <li><a href="index-3.html">Dashboard Three</a></li>
                          <li><a href="index-4.html">Dashboard Four</a></li>
                          <li><a href="analytics.html">Analytics</a></li>
                          <li><a href="widgets.html">Widgets</a></li>
                        </ul>
                      </li>
                      <li><a href="#foo"data-toggle="collapse" data-target="demoevent" >Email</a>
                        <ul id="demoevent" className="collapse dropdown-header-top">
                          <li><a href="inbox.html">Inbox</a></li>
                          <li><a href="view-email.html">View Email</a></li>
                          <li><a href="compose-email.html">Compose Email</a></li>
                        </ul>
                      </li>
                      <li><a href="#foo"data-toggle="collapse" data-target="democrou" >Interface</a>
                        <ul id="democrou" className="collapse dropdown-header-top">
                          <li><a href="animations.html">Animations</a></li>
                          <li><a href="google-map.html">Google Map</a></li>
                          <li><a href="data-map.html">Data Maps</a></li>
                          <li><a href="code-editor.html">Code Editor</a></li>
                          <li><a href="image-cropper.html">Images Cropper</a></li>
                          <li><a href="wizard.html">Wizard</a></li>
                        </ul>
                      </li>
                      <li><a href="#foo"data-toggle="collapse" data-target="demolibra" >Charts</a>
                        <ul id="demolibra" className="collapse dropdown-header-top">
                          <li><a href="flot-charts.html">Flot Charts</a></li>
                          <li><a href="bar-charts.html">Bar Charts</a></li>
                          <li><a href="line-charts.html">Line Charts</a></li>
                          <li><a href="area-charts.html">Area Charts</a></li>
                        </ul>
                      </li>
                      <li><a href="#foo"data-toggle="collapse" data-target="demodepart" >Tables</a>
                        <ul id="demodepart" className="collapse dropdown-header-top">
                          <li><a href="normal-table.html">Normal Table</a></li>
                          <li><a href="data-table.html">Data Table</a></li>
                        </ul>
                      </li>
                      <li><a href="#foo"data-toggle="collapse" data-target="demo" >Forms</a>
                        <ul id="demo" className="collapse dropdown-header-top">
                          <li><a href="form-elements.html">Form Elements</a></li>
                          <li><a href="form-components.html">Form Components</a></li>
                          <li><a href="form-examples.html">Form Examples</a></li>
                        </ul>
                      </li>
                      <li><a href="#foo"data-toggle="collapse" data-target="Miscellaneousmob" >App views</a>
                        <ul id="Miscellaneousmob" className="collapse dropdown-header-top">
                          <li><a href="notification.html">Notifications</a>
                          </li>
                          <li><a href="alert.html">Alerts</a>
                          </li>
                          <li><a href="modals.html">Modals</a>
                          </li>
                          <li><a href="buttons.html">Buttons</a>
                          </li>
                          <li><a href="tabs.html">Tabs</a>
                          </li>
                          <li><a href="accordion.html">Accordion</a>
                          </li>
                          <li><a href="dialog.html">Dialogs</a>
                          </li>
                          <li><a href="popovers.html">Popovers</a>
                          </li>
                          <li><a href="tooltips.html">Tooltips</a>
                          </li>
                          <li><a href="dropdown.html">Dropdowns</a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#foo"data-toggle="collapse" data-target="Pagemob" >Pages</a>
                        <ul id="Pagemob" className="collapse dropdown-header-top">
                          <li><a href="contact.html">Contact</a>
                          </li>
                          <li><a href="invoice.html">Invoice</a>
                          </li>
                          <li><a href="typography.html">Typography</a>
                          </li>
                          <li><a href="color.html">Color</a>
                          </li>
                          <li><a href="login-register.html">Login Register</a>
                          </li>
                          <li><a href="404.html">404 Page</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu end */}
        {/* Main Menu area start*/}
        <div className="main-menu-area mg-tb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul className="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
                  <li className="active"><a data-toggle="tab" href="Home"><i className="notika-icon notika-house" /> Home</a>
                  </li>
                  <li><a data-toggle="tab" href="mailbox"><i className="notika-icon notika-mail" /> Email</a>
                  </li>
                  <li><a data-toggle="tab" href="Interface"><i className="notika-icon notika-edit" /> Interface</a>
                  </li>
                  <li><a data-toggle="tab" href="Charts"><i className="notika-icon notika-bar-chart" /> Charts</a>
                  </li>
                  <li><a data-toggle="tab" href="Tables"><i className="notika-icon notika-windows" /> Tables</a>
                  </li>
                  <li><a data-toggle="tab" href="Forms"><i className="notika-icon notika-form" /> Forms</a>
                  </li>
                  <li><a data-toggle="tab" href="Appviews"><i className="notika-icon notika-app" /> App views</a>
                  </li>
                  <li><a data-toggle="tab" href="Page"><i className="notika-icon notika-support" /> Pages</a>
                  </li>
                </ul>
                <div className="tab-content custom-menu-content">
                  <div id="Home" className="tab-pane in active notika-tab-menu-bg animated flipInX">
                    <ul className="notika-main-menu-dropdown">
                      <li><a href="index.html">Dashboard One</a>
                      </li>
                      <li><a href="index-2.html">Dashboard Two</a>
                      </li>
                      <li><a href="index-3.html">Dashboard Three</a>
                      </li>
                      <li><a href="index-4.html">Dashboard Four</a>
                      </li>
                      <li><a href="analytics.html">Analytics</a>
                      </li>
                      <li><a href="widgets.html">Widgets</a>
                      </li>
                    </ul>
                  </div>
                  <div id="mailbox" className="tab-pane notika-tab-menu-bg animated flipInX">
                    <ul className="notika-main-menu-dropdown">
                      <li><a href="inbox.html">Inbox</a>
                      </li>
                      <li><a href="view-email.html">View Email</a>
                      </li>
                      <li><a href="compose-email.html">Compose Email</a>
                      </li>
                    </ul>
                  </div>
                  <div id="Interface" className="tab-pane notika-tab-menu-bg animated flipInX">
                    <ul className="notika-main-menu-dropdown">
                      <li><a href="animations.html">Animations</a>
                      </li>
                      <li><a href="google-map.html">Google Map</a>
                      </li>
                      <li><a href="data-map.html">Data Maps</a>
                      </li>
                      <li><a href="code-editor.html">Code Editor</a>
                      </li>
                      <li><a href="image-cropper.html">Images Cropper</a>
                      </li>
                      <li><a href="wizard.html">Wizard</a>
                      </li>
                    </ul>
                  </div>
                  <div id="Charts" className="tab-pane notika-tab-menu-bg animated flipInX">
                    <ul className="notika-main-menu-dropdown">
                      <li><a href="flot-charts.html">Flot Charts</a>
                      </li>
                      <li><a href="bar-charts.html">Bar Charts</a>
                      </li>
                      <li><a href="line-charts.html">Line Charts</a>
                      </li>
                      <li><a href="area-charts.html">Area Charts</a>
                      </li>
                    </ul>
                  </div>
                  <div id="Tables" className="tab-pane notika-tab-menu-bg animated flipInX">
                    <ul className="notika-main-menu-dropdown">
                      <li><a href="normal-table.html">Normal Table</a>
                      </li>
                      <li><a href="data-table.html">Data Table</a>
                      </li>
                    </ul>
                  </div>
                  <div id="Forms" className="tab-pane notika-tab-menu-bg animated flipInX">
                    <ul className="notika-main-menu-dropdown">
                      <li><a href="form-elements.html">Form Elements</a>
                      </li>
                      <li><a href="form-components.html">Form Components</a>
                      </li>
                      <li><a href="form-examples.html">Form Examples</a>
                      </li>
                    </ul>
                  </div>
                  <div id="Appviews" className="tab-pane notika-tab-menu-bg animated flipInX">
                    <ul className="notika-main-menu-dropdown">
                      <li><a href="notification.html">Notifications</a>
                      </li>
                      <li><a href="alert.html">Alerts</a>
                      </li>
                      <li><a href="modals.html">Modals</a>
                      </li>
                      <li><a href="buttons.html">Buttons</a>
                      </li>
                      <li><a href="tabs.html">Tabs</a>
                      </li>
                      <li><a href="accordion.html">Accordion</a>
                      </li>
                      <li><a href="dialog.html">Dialogs</a>
                      </li>
                      <li><a href="popovers.html">Popovers</a>
                      </li>
                      <li><a href="tooltips.html">Tooltips</a>
                      </li>
                      <li><a href="dropdown.html">Dropdowns</a>
                      </li>
                    </ul>
                  </div>
                  <div id="Page" className="tab-pane notika-tab-menu-bg animated flipInX">
                    <ul className="notika-main-menu-dropdown">
                      <li><a href="contact.html">Contact</a>
                      </li>
                      <li><a href="invoice.html">Invoice</a>
                      </li>
                      <li><a href="typography.html">Typography</a>
                      </li>
                      <li><a href="color.html">Color</a>
                      </li>
                      <li><a href="login-register.html">Login Register</a>
                      </li>
                      <li><a href="404.html">404 Page</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Menu area End*/}
        {/* Start Status area */}
        <div className="notika-status-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="wb-traffic-inner notika-shadow sm-res-mg-t-30 tb-res-mg-t-30">
                  <div className="website-traffic-ctn">
                    <h2><span className="counter">50,000</span></h2>
                    <p>Total Website Traffics</p>
                  </div>
                  <div className="sparkline-bar-stats1">9,4,8,6,5,6,4,8,3,5,9,5</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="wb-traffic-inner notika-shadow sm-res-mg-t-30 tb-res-mg-t-30">
                  <div className="website-traffic-ctn">
                    <h2><span className="counter">90,000</span>k</h2>
                    <p>Website Impressions</p>
                  </div>
                  <div className="sparkline-bar-stats2">1,4,8,3,5,6,4,8,3,3,9,5</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="wb-traffic-inner notika-shadow sm-res-mg-t-30 tb-res-mg-t-30 dk-res-mg-t-30">
                  <div className="website-traffic-ctn">
                    <h2>$<span className="counter">40,000</span></h2>
                    <p>Total Online Sales</p>
                  </div>
                  <div className="sparkline-bar-stats3">4,2,8,2,5,6,3,8,3,5,9,5</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="wb-traffic-inner notika-shadow sm-res-mg-t-30 tb-res-mg-t-30 dk-res-mg-t-30">
                  <div className="website-traffic-ctn">
                    <h2><span className="counter">1,000</span></h2>
                    <p>Total Support Tickets</p>
                  </div>
                  <div className="sparkline-bar-stats4">2,4,8,4,5,7,4,7,3,5,7,5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Status area*/}
        {/* Start Sale Statistic area*/}
        <div className="sale-statistic-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-7 col-xs-12">
                <div className="sale-statistic-inner notika-shadow mg-tb-30">
                  <div className="curved-inner-pro">
                    <div className="curved-ctn">
                      <h2>Sales Statistics</h2>
                      <p>Vestibulum purus quam scelerisque, mollis nonummy metus</p>
                    </div>
                  </div>
                  <div id="curved-line-chart" className="flot-chart-sts flot-chart" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5 col-xs-12">
                <div className="statistic-right-area notika-shadow mg-tb-30 sm-res-mg-t-0">
                  <div className="past-day-statis">
                    <h2>For The Past 30 Days</h2>
                    <p>Fusce eget dolor id justo luctus the commodo vel pharetra nisi. Donec velit of libero.</p>
                  </div>
                  <div className="dash-widget-visits" />
                  <div className="past-statistic-an">
                    <div className="past-statistic-ctn">
                      <h3><span className="counter">3,20,000</span></h3>
                      <p>Page Views</p>
                    </div>
                    <div className="past-statistic-graph">
                      <div className="stats-bar" />
                    </div>
                  </div>
                  <div className="past-statistic-an">
                    <div className="past-statistic-ctn">
                      <h3><span className="counter">1,03,000</span></h3>
                      <p>Total Clicks</p>
                    </div>
                    <div className="past-statistic-graph">
                      <div className="stats-line" />
                    </div>
                  </div>
                  <div className="past-statistic-an">
                    <div className="past-statistic-ctn">
                      <h3><span className="counter">24,00,000</span></h3>
                      <p>Site Visitors</p>
                    </div>
                    <div className="past-statistic-graph">
                      <div className="stats-bar-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sale Statistic area*/}
        {/* Start Email Statistic area*/}
        <div className="notika-email-post-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="email-statis-inner notika-shadow">
                  <div className="email-ctn-round">
                    <div className="email-rdn-hd">
                      <h2>Email Statistics</h2>
                    </div>
                    <div className="email-statis-wrap">
                      <div className="email-round-nock">
                        <input type="text" className="knob" defaultValue={0} data-rel={55} data-linecap="round" data-width={130} data-bgcolor="E4E4E4" data-fgcolor="00c292" data-thickness=".10" data-readonly="true" />
                      </div>
                      <div className="email-ctn-nock">
                        <p>Total Emails Sent</p>
                      </div>
                    </div>
                    <div className="email-round-gp">
                      <div className="email-round-pro">
                        <div className="email-signle-gp">
                          <input type="text" className="knob" defaultValue={0} data-rel={75} data-linecap="round" data-width={90} data-bgcolor="E4E4E4" data-fgcolor="00c292" data-thickness=".10" data-readonly="true" disabled />
                        </div>
                        <div className="email-ctn-nock">
                          <p>Bounce Rate</p>
                        </div>
                      </div>
                      <div className="email-round-pro">
                        <div className="email-signle-gp">
                          <input type="text" className="knob" defaultValue={0} data-rel={35} data-linecap="round" data-width={90} data-bgcolor="E4E4E4" data-fgcolor="00c292" data-thickness=".10" data-readonly="true" disabled />
                        </div>
                        <div className="email-ctn-nock">
                          <p>Total Opened</p>
                        </div>
                      </div>
                      <div className="email-round-pro sm-res-ds-n lg-res-mg-bl">
                        <div className="email-signle-gp">
                          <input type="text" className="knob" defaultValue={0} data-rel={45} data-linecap="round" data-width={90} data-bgcolor="E4E4E4" data-fgcolor="00c292" data-thickness=".10" data-readonly="true" disabled />
                        </div>
                        <div className="email-ctn-nock">
                          <p>Total Ignored</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="recent-post-wrapper notika-shadow sm-res-mg-t-30 tb-res-ds-n dk-res-ds">
                  <div className="recent-post-ctn">
                    <div className="recent-post-title">
                      <h2>Recent Posts</h2>
                    </div>
                  </div>
                  <div className="recent-post-items">
                    <div className="recent-post-signle rct-pt-mg-wp">
                      <a href="#foo">
                        <div className="recent-post-flex">
                          <div className="recent-post-img">
                            <img src="img/post/2.jpg" alt="" />
                          </div>
                          <div className="recent-post-it-ctn">
                            <h2>Smith</h2>
                            <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="recent-post-signle">
                      <a href="#foo">
                        <div className="recent-post-flex rct-pt-mg">
                          <div className="recent-post-img">
                            <img src="img/post/1.jpg" alt="" />
                          </div>
                          <div className="recent-post-it-ctn">
                            <h2>John Deo</h2>
                            <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="recent-post-signle">
                      <a href="#foo">
                        <div className="recent-post-flex rct-pt-mg">
                          <div className="recent-post-img">
                            <img src="img/post/4.jpg" alt="" />
                          </div>
                          <div className="recent-post-it-ctn">
                            <h2>Malika</h2>
                            <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="recent-post-signle">
                      <a href="#foo">
                        <div className="recent-post-flex rct-pt-mg">
                          <div className="recent-post-img">
                            <img src="img/post/2.jpg" alt="" />
                          </div>
                          <div className="recent-post-it-ctn">
                            <h2>Smith</h2>
                            <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="recent-post-signle">
                      <a href="#foo">
                        <div className="recent-post-flex rct-pt-mg">
                          <div className="recent-post-img">
                            <img src="img/post/1.jpg" alt="" />
                          </div>
                          <div className="recent-post-it-ctn">
                            <h2>John Deo</h2>
                            <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="recent-post-signle">
                      <a href="#foo">
                        <div className="recent-post-flex rc-ps-vw">
                          <div className="recent-post-line rct-pt-mg">
                            <p>View All</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="recent-items-wp notika-shadow sm-res-mg-t-30">
                  <div className="rc-it-ltd">
                    <div className="recent-items-ctn">
                      <div className="recent-items-title">
                        <h2>Recent Items</h2>
                      </div>
                    </div>
                    <div className="recent-items-inn">
                      <table className="table table-inner table-vmiddle">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th style={{width: '60px'}}>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="f-500 c-cyan">4555</td>
                            <td>Samsung Galaxy Mega</td>
                            <td className="f-500 c-cyan">$921</td>
                          </tr>
                          <tr>
                            <td className="f-500 c-cyan">4556</td>
                            <td>Huawei Ascend P6</td>
                            <td className="f-500 c-cyan">$240</td>
                          </tr>
                          <tr>
                            <td className="f-500 c-cyan">8778</td>
                            <td>HTC One M8</td>
                            <td className="f-500 c-cyan">$400</td>
                          </tr>
                          <tr>
                            <td className="f-500 c-cyan">5667</td>
                            <td>Samsung Galaxy Alpha</td>
                            <td className="f-500 c-cyan">$870</td>
                          </tr>
                          <tr>
                            <td className="f-500 c-cyan">7886</td>
                            <td>LG G3</td>
                            <td className="f-500 c-cyan">$790</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div id="recent-items-chart" className="flot-chart-items flot-chart vt-ct-it tb-rc-it-res" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Email Statistic area*/}
        {/* Start Realtime sts area*/}
        <div className="realtime-statistic-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="realtime-wrap notika-shadow mg-t-30">
                  <div className="realtime-ctn">
                    <div className="realtime-title">
                      <h2>Realtime Visitors</h2>
                    </div>
                  </div>
                  <div className="realtime-visitor-ctn">
                    <div className="realtime-vst-sg">
                      <h4><span className="counter">4,35,456</span></h4>
                      <p>Visitors last 24h</p>
                    </div>
                    <div className="realtime-vst-sg">
                      <h4><span className="counter">4,566</span></h4>
                      <p>Visitors last 30m</p>
                    </div>
                  </div>
                  <div className="realtime-map">
                    <div className="vectorjsmarp" id="world-map" />
                  </div>
                  <div className="realtime-country-ctn realtime-ltd-mg">
                    <h5>September 4, 21:44:02 (2 Mins 56 Seconds)</h5>
                    <div className="realtime-ctn-bw">
                      <div className="realtime-ctn-st">
                        <span><img src="img/country/1.png" alt="" /></span> <span>United States</span>
                      </div>
                      <div className="realtime-bw">
                        <span>Firefox</span>
                      </div>
                      <div className="realtime-bw">
                        <span>Mac OSX</span>
                      </div>
                    </div>
                  </div>
                  <div className="realtime-country-ctn">
                    <h5>September 7, 20:44:02 (5 Mins 56 Seconds)</h5>
                    <div className="realtime-ctn-bw">
                      <div className="realtime-ctn-st">
                        <span><img src="img/country/2.png" alt="" /></span> <span>Australia</span>
                      </div>
                      <div className="realtime-bw">
                        <span>Firefox</span>
                      </div>
                      <div className="realtime-bw">
                        <span>Mac OSX</span>
                      </div>
                    </div>
                  </div>
                  <div className="realtime-country-ctn">
                    <h5>September 9, 19:44:02 (10 Mins 56 Seconds)</h5>
                    <div className="realtime-ctn-bw">
                      <div className="realtime-ctn-st">
                        <span><img src="img/country/3.png" alt="" /></span> <span>Brazil</span>
                      </div>
                      <div className="realtime-bw">
                        <span>Firefox</span>
                      </div>
                      <div className="realtime-bw">
                        <span>Mac OSX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="add-todo-list notika-shadow mg-t-30">
                  <div className="realtime-ctn">
                    <div className="realtime-title">
                      <h2>Add Todo</h2>
                    </div>
                  </div>
                  <div className="card-box">
                    <div className="todoapp">
                      <div className="row">
                        <div className="col-sm-6 col-md-6 col-sm-6 col-xs-12">
                          <h4 id="todo-message"><span id="todo-remaining" /> of <span id="todo-total" /> remaining</h4>
                        </div>
                        <div className="col-sm-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="notika-todo-btn">
                            <a href="#foo" className="pull-right btn btn-primary btn-sm" id="btn-archive">Archive</a>
                          </div>
                        </div>
                      </div>
                      <div className="notika-todo-scrollbar">
                        <ul className="list-group no-margn todo-list" id="todo-list" />
                      </div>
                      <div id="todo-form">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-sm-12 col-xs-12 todo-inputbar">
                            <div className="form-group todo-flex">
                              <div className="nk-int-st">
                                <input type="text" id="todo-input-text" name="todo-input-text" className="form-control" placeholder="Add new todo" />
                              </div>
                              <div className="todo-send">
                                <button className="btn-primary btn-md btn-block btn notika-add-todo" type="button" id="todo-btn-submit">Add</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="notika-chat-list notika-shadow mg-t-30 tb-res-ds-n dk-res-ds">
                  <div className="realtime-ctn">
                    <div className="realtime-title">
                      <h2>Chat Box</h2>
                    </div>
                  </div>
                  <div className="card-box">
                    <div className="chat-conversation">
                      <div className="widgets-chat-scrollbar">
                        <ul className="conversation-list">
                          <li className="clearfix">
                            <div className="chat-avatar">
                              <img src="img/post/1.jpg" alt="male" />
                              <i>10:00</i>
                            </div>
                            <div className="conversation-text">
                              <div className="ctext-wrap">
                                <i>John Deo</i>
                                <p>
                                  Hello!
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="clearfix odd">
                            <div className="chat-avatar">
                              <img src="img/post/2.jpg" alt="Female" />
                              <i>10:01</i>
                            </div>
                            <div className="conversation-text">
                              <div className="ctext-wrap chat-widgets-cn">
                                <i>Smith</i>
                                <p>
                                  Hi, How are you? What about our next meeting?
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="clearfix">
                            <div className="chat-avatar">
                              <img src="img/post/1.jpg" alt="male" />
                              <i>10:01</i>
                            </div>
                            <div className="conversation-text">
                              <div className="ctext-wrap">
                                <i>John Deo</i>
                                <p>
                                  Yeah everything is fine
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="clearfix odd">
                            <div className="chat-avatar">
                              <img src="img/post/2.jpg" alt="male" />
                              <i>10:02</i>
                            </div>
                            <div className="conversation-text">
                              <div className="ctext-wrap chat-widgets-cn">
                                <i>Smith</i>
                                <p>
                                  Wow that's great
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="clearfix">
                            <div className="chat-avatar">
                              <img src="img/post/1.jpg" alt="male" />
                              <i>10:01</i>
                            </div>
                            <div className="conversation-text">
                              <div className="ctext-wrap">
                                <i>John Deo</i>
                                <p>
                                  Doing Better i am thinking about that..
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="clearfix odd">
                            <div className="chat-avatar">
                              <img src="img/post/2.jpg" alt="male" />
                              <i>10:02</i>
                            </div>
                            <div className="conversation-text">
                              <div className="ctext-wrap chat-widgets-cn">
                                <i>Smith</i>
                                <p>
                                  Wow, You also tallent man...
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="chat-widget-input">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-sm-12 col-xs-12 chat-inputbar">
                            <div className="form-group todo-flex">
                              <div className="nk-int-st">
                                <input type="text" className="form-control chat-input" placeholder="Enter your text" />
                              </div>
                              <div className="chat-send">
                                <button type="submit" className="btn btn-md btn-primary btn-block notika-chat-btn">Send</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="footer-copy-right">
                  <p>Copyright © 2018. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard