function Header(props) {
  const style = {
    color: "red"
  }
  return (
      <>
        <h1 style={style}>Hello {props.name}!</h1>
        <h2 style={{color: 'blue'}}>Hello {props.name}!</h2>
      </>
  )
}

export {Header};