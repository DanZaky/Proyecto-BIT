import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Salva tiempo, salva dinero!</h1>
      <span className="mailDesc">Suscribete para noticias</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Suscribirse</button>
      </div>
    </div>
  )
}

export default MailList