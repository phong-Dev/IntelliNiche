const Menu = ({ menuItem }) => {
  return (
    <div className="row">
      {
        menuItem.map((item) => {
          return (
            <div key={item.id} className="col-md-4 col-sm-6">
              <div  className="view-people">
                <div className="effect-text">
                  <h3>View</h3>
                </div>
              </div>
              <div className="info-people mb-5 mt-3">
                <p>{item.name}</p>
                <p>{item.part}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Menu;
