import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.scrollElement = React.createRef();
    this.state = {
      scrollPosition: 0,
      scrollMax: 0,
      increment: 772
    }
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
  }

  componentDidMount() {
    this.scrollElement.current.scrollTo(0,0);
    
    // Each item is 193px in width, and container is 820px
    this.setState({ 
      scrollMax: this.props.trackItems.length * 193 - 820
    });
  }

  handleScroll(inc) {
    console.log(inc)
    this.scrollElement.current.scrollLeft += inc;
    this.setState({ scrollPosition: this.scrollElement.current.scrollLeft });
  }

  handleScrollRight() {
    let increment = this.state.increment;
    if (this.state.scrollPosition === 0) increment -= 34;
    this.handleScroll(increment);
  }
  
  handleScrollLeft() {
    let increment = this.state.increment;
    if (this.state.scrollPosition === this.state.scrollMax) increment -= (this.state.scrollMax % increment) + 62;
    this.handleScroll(-increment);
  }

  render() {
    return(
      <>
        <div ref={this.scrollElement} className="discover-list">
          {this.props.trackItems}
        </div>
        {(this.state.scrollPosition !== this.state.scrollMax) && <button onClick={this.handleScrollRight}>right</button>}
        {(this.state.scrollPosition !== 0) && <button onClick={this.handleScrollLeft}>left</button>}
      </>
    );
  }

}

export default Carousel;