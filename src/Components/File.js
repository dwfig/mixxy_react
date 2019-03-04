import React, { Fragment } from 'react';

  const File = (props) => {
    // console.log(props);

    return (
      <div className="file">
        {props.url.name}
      </div>
    )


  }

export default File;
