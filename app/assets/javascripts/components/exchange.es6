let Row = ReactBootstrap.Row
let Col = ReactBootstrap.Col
const Exchange = React.createClass({
  getChildContext(){
    return {
      data: this.state.TextExchangeValue
    }
  },
  childContextTypes: {
    data: React.PropTypes.array
  },
  getInitialState(){
    return {
      TextExchangeValue: []
    }
  },
  getDefaultProps(){
    return {
      data: {
        a:0, 
        b:0
      }
    }
  },
  EventExchange(e){
    this.setState({TextExchangeValue: e})
  },
  render(){
    return (<div>
      <Header/>
      <Row>
        <Col md={6} xs={6}>
          <TextExchange callback={this.EventExchange}/>
        </Col>

        <Col md={6} xs={6}>
          {this.state.TextExchangeValue.map( (e) => { 
            return (<div>
              <Result data={e.records} />
            </div>)
          })}
        </Col>
      </Row>
      <Footer/>
    </div>)
  }
})
