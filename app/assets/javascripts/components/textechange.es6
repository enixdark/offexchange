
let PageHeader = ReactBootstrap.PageHeader
let FieldGroup = ReactBootstrap.FieldGroup
let Row = ReactBootstrap.Row
let FormGroup = ReactBootstrap.FormGroup
let ControlLabel = ReactBootstrap.ControlLabel
let Col = ReactBootstrap.Col
let FormControl = ReactBootstrap.FormControl
let Button = ReactBootstrap.Button
let InputGroup = ReactBootstrap.InputGroup

const TextExchange = React.createClass({
  getInitialState(){
    return {
      selectBaseValue: "select",
      selectExchangeValue: "select"
    }
  },

  handleClick(e){
    // ReactDOM.findDOMNode(this.refs.inputText).value
    fetch('/api/v1/records').then(r => r.json())
      .then(data => {
        this.props.callback(data.results)
      })
      .catch(e => this.props.callback([]))
    
  },
  handleSelectBase(e){
    this.setState({selectBaseValue: e.target.value})
  },
  handleSelectExchange(e){
    this.setState({selectExchangeValue: e.target.value})
  },
  renderBox(){
    return (
      <div>
        <form>
          <Row>
            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsSelectBase">
                <ControlLabel>Base Currency</ControlLabel>
                <FormControl componentClass="select" placeholder="select" 
                  value={this.selectBaseValue}
                  onChange={this.handleSelectBase}>
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
            </Col>

            <Col xs={3} md={3}>
              <FormGroup controlId="formControlsSelectExchange">
                <ControlLabel>Exchange Currency</ControlLabel>
                <FormControl componentClass="select" placeholder="select" 
                  value={this.selectExchangeValue}
                  onChange={this.handleSelectExchange}>
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={3} md={3}>
              <FormGroup controlId="input">
                <ControlLabel>Exchange Amount</ControlLabel>
                <FormControl
                type="text"
                ref="inputText"
                placeholder="Enter Number"
                />
                <FormControl.Feedback />
              </FormGroup>
            </Col>

            <Col xs={3} md={3}>
              <FormGroup controlId="button">
                <ControlLabel></ControlLabel>
                <FormControl 
                type="button" value="Search" onClick={this.handleClick.bind(this)}/>

              </FormGroup>
              
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <ShowMap/>
            </Col>
          </Row>
        </form>
      </div>
    )
  },
  render(){
    return (
      <div>
      <PageHeader>Nearby Exchange Officers <br/> <small>Some Text</small> </PageHeader>
      {this.renderBox()}
      </div>
    )
  }
})