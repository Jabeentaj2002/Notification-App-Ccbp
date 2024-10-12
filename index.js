const Notification = props => {
  //  Write your code here.
  const {notificationText} = props
  return <p>{notificationText}</p>
}

const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <div className='notificationContainer container1'>
      <img src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' />
      <Notification notificationText='Information Meassage' />
    </div>
    <div className='notificationContainer container1'>
      <img src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' />
      <Notification notificationText='Success Meassage' />
    </div>
    <div className='notificationContainer container1'>
      <img src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png' />
      <Notification notificationText='Warning Meassage' />
    </div>
    <div className='notificationContainer container1'>
      <img src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png' />
      <Notification notificationText='Error Meassage' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
