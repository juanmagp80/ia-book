function BookPreview({ pages }) {
    return (
      <div className="book-preview">
        {pages.map((page, index) => (
          <div key={index} className="page" style={{backgroundImage: `url(${page.bg})`}}>
            <p>{page.text}</p>
            {page.illustration && <img src={page.illustration} alt=""/>}
          </div>
        ))}
      </div>
    )
  }