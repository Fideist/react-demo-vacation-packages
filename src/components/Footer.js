import React from 'react';

export default function Footer(props) {
  return (
    <div>
      {props.children[0]}
      <div>hey there</div>
      <div>{props.children[1]}</div>
      <div>aloha</div>
    </div>
  )
}
