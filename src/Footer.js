

const Footer = (props) => {
    const today=new Date();
  return (
    <footer>
        <p>
            {props?.length} List {props?.length===1?"item": "items"} <br />
            {props.title} {today.getFullYear()}
        </p>
    </footer>
  )
}

export default Footer