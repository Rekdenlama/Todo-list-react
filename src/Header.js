
// other option is props in paramter
// and h1 expression we use props.title
//usinf destructing is below method
const Header = ({title}) => {
   
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

//default title will be given
Header.defaultProps={
  title: "Default Page"
}

export default Header