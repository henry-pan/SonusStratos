import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight  } from "@fortawesome/free-solid-svg-icons";


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.scrollElement = React.createRef();
    this.state = {
      scrollPosition: 0,
      scrollMax: 0,
      increment: 772,
      scrolling: false
    }
  }

  componentDidMount() {
    this.scrollElement.current.scrollLeft = 0;
    
    // Each item is 193px in width, container 820px, last item margin -20px
    this.setState({ 
      scrollMax: this.props.trackItems.length * 193 - 820 - 20
    });
  }

  handleScroll(dir) {
    if (this.state.scrolling) return;
    let inc = this.state.increment;

    // Reduce increment if at a container edge
    if (this.state.scrollPosition === 0 || this.state.scrollPosition === this.state.scrollMax) inc -= 34;
    
    if (dir === "left") inc *= -1;
    this.scrollElement.current.scrollLeft += inc;
    this.setState({ scrolling: true });

    // Need to wait for scrolling to finish or increment breaks
    setTimeout(() => {
      this.setState({ scrollPosition: this.scrollElement.current.scrollLeft, scrolling: false });
    }, 700);
  }

  render() {
    let leftClass = (this.state.scrollPosition !== 0) ? "button-carousel" : "button-carousel hide-scroll";
    let rightClass = (this.state.scrollPosition !== this.state.scrollMax) ? "button-carousel" : "button-carousel hide-scroll";

    return(
      <>
        <div ref={this.scrollElement} className="discover-list">
          <div className="discover-scroll-container">
            <button className={leftClass} onClick={() => this.handleScroll("left")}><FontAwesomeIcon icon={faAngleLeft} size="lg"/></button>
            <button className={rightClass} onClick={() => this.handleScroll("right")}><FontAwesomeIcon icon={faAngleRight} size="lg"/></button>
          </div>
          {this.props.trackItems}
        </div>
      </>
    );
  }

}

export default Carousel;