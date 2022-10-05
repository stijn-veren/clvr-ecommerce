import PropTypes from 'prop-types'

export default function Gallery({ page }) {
  return (
    <main>
      <div className="wrapper">
        <h1>Gallery</h1>
        <p>Page is {page}</p>
      </div>
    </main>
  )
}

Gallery.propTypes = {
  page: PropTypes.string,
}
