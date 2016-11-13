let Row = ReactBootstrap.Row
let Image = ReactBootstrap.Image
let Col = ReactBootstrap.Col
const Result = React.createClass({
  getDefaultProps(){
    return {
      data: []
    }
  },
  getInitialState() {
    return { show: false };
  },
  renderInformation(){
    return (<Row>
          <Col xs={3} md={2}>
           <Image src="/assets/people.png" responsive />
          </Col>
          <Col xs={4} md={3}>
           <h3>Office Name</h3>
           <h4>Place</h4>
          </Col>
          <Col xs={3} md={2}>
           <h4 style={{"background-color": "red", color: "white"}}>90 Pound</h4>
          </Col>
        </Row>)
  },
  render(){
    return (<div onClick={()=>this.setState({ show: true })}>
        {this.renderInformation()}
        <ShowModal data={this.props.data} infor={this.renderInformation} show={this.state.show} onHide={() => this.setState({ show: false })} />
      </div>)
  }
})

