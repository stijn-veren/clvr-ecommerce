import './contacts.css'

export default function Contacts() {
  return (
    <main id="contacts">
      <div className="wrapper">
        <div className="row">
          <p>
            For any enquiries regarding photographic & film productions,
            location scouting, image licensing, prints, brand collaborations or
            anything else, please complete the form below and he will be in
            touch shortly.
          </p>
        </div>

        <div className="row">
          <hr />

          <form action="/action_page.php">
            <div className="columns">
              <div className="left-col">
                <label htmlFor="fname">First name:</label>
                <br />
                <input type="text" name="fname" id="fname" />
              </div>

              <div className="right-col">
                <label htmlFor="lname">Last name:</label>
                <br />
                <input type="text" name="lname" id="lname" />
              </div>
            </div>

            <div className="row">
              <label htmlFor="email">Email Address:</label>
              <br />
              <input type="email" name="email" id="email" />
            </div>

            <div className="row">
              <label htmlFor="subject">Subject:</label>
              <br />
              <input type="text" name="subject" id="subject" />
            </div>

            <div className="row">
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
