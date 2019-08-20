import React, { useEffect } from 'react';

function Holder(props) {
  useEffect(() => {
    const node = document.createElement('LI');
    for (let i = 0; i < props.item.length; i++) {
      node.appendChild(document.createTextNode(props.item[i]));
      document.getElementById('items').appendChild(node);
    }
  });
  return (
    <div className="stored-items">
      <ul id="items" />
    </div>
  );
}

export default Holder;
