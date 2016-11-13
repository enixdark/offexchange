let Modal = ReactBootstrap.Modal
let Button = ReactBootstrap.Button
let Table = ReactBootstrap.Table
const ShowModal = React.createClass({
  getDefaultProps(){
    return {
      data: []
    }
  },
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{this.props.infor()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Products</th>
                <th>Base Currency</th>
                <th>Exchange Currency</th>
                <th>Rate</th>
                <th>Commision</th>
              </tr>
            </thead>

            <tbody>
              {this.props.data.map( (e,idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{e.base_currency}</td>
                    <td>{e.exchange_currency}</td>
                    <td>{e.rate}</td>
                    <td>{e.commission}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
})