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
      increment: 772
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
    let inc = this.state.increment;
    let pos = this.state.scrollPosition;

    // Reduce increment if at a container edge
    if (pos === 0 || pos === this.state.scrollMax) inc -= 34;
    
    if (dir === "left") inc *= -1;
    pos += inc;

    this.scrollElement.current.scrollLeft = pos;
    this.setState({ scrollPosition: Math.max(0, Math.min(pos, this.state.scrollMax)) });
  }

  render() {
    let leftClass = (this.state.scrollPosition !== 0) ? "button-carousel" : "button-carousel hide-scroll";
    let rightClass = (this.state.scrollPosition !== this.state.scrollMax) ? "button-carousel" : "button-carousel hide-scroll";

    return(
      <div ref={this.scrollElement} className="discover-list">
        <div className="discover-scroll-container">
          <button className={leftClass} onClick={() => this.handleScroll("left")}><FontAwesomeIcon icon={faAngleLeft} size="lg"/></button>
          <button className={rightClass} onClick={() => this.handleScroll("right")}><FontAwesomeIcon icon={faAngleRight} size="lg"/></button>
        </div>
        {this.props.trackItems}
      </div>
    );
  }

}

export default Carousel;