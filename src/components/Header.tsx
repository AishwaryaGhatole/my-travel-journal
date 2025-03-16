import globe from "../images/globe.png"

export default function Header(){

  return(
      <>
        <header>
          <img src={globe} alt="globe-image" />
          <h1>my travel journal.</h1>
        </header>
      </>
  )
}