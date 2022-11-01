import Notifaction from './components/Notification'
import Form from './components/Form'
import Fetching from './components/Fetching'
import Queue from './components/QueueList'
// import Modal from './components/Modal.js'
// import Tick from './components/Tick'
// import List from './components/List'

function App() {
  return (
    <div>
      {/* <Modal /> */}
      <Queue />
      <Notifaction />
      {/* <Notifaction />
      <Tick />
      <List /> */}
      <Form />
      <Fetching />
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor=''>
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </label>
      </label>
    </div>
  );
}

export default App;
