
let Navbar = ReactBootstrap.Navbar
let NavItem = ReactBootstrap.NavItem
let MenuItem = ReactBootstrap.MenuItem
let NavDropdown = ReactBootstrap.NavDropdown

const Header = React.createClass({
  render(){
    return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/exchange">React</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
    )
  }
})

