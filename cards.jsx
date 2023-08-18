import React from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, title } = this.props.data;
    return (
      <div>
        <img src={image} alt="fruits" />
        <h4 class="title_style">{title}</h4>
      </div>
    );
  }
}

export default Cards;
