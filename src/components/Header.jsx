export default function Header(){
  const Reload = () => {
    window.location.reload()};
  return(
    
    
     <nav className="burger navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid headerBar">
    <div className="logo d-flex align-items-center">
      <img src="/ehsaan.jpg" alt="logo" height={"70px"} />
      <h4 className="mx-1">Ehsaan Batt</h4>
    </div>
        <di className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="">Made with love</span>
    </di>
    <div >
      <h2 className="d-flex justify-content-center">Flag Quiz Game</h2>
        
       
      
    </div>
    <div className="btn">
    <button type="button" onClick={Reload} className="btn btn-primary">Reset Game
    </button>

    </div>
  </div>
</nav>

  );
}