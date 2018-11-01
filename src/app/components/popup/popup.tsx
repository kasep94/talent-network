import React from 'react';
import './popup.scss';

class Popup extends React.Component<{onNodeClick: () => void}, {}> {
  public render() {
    const { children } = this.props;
    return <div onClick={this.onNodeClick} className='popup-comp flex-center'>
      <div className='content'>
        {children}
      </div>
    </div>
  }
  private onNodeClick = () => {
    this.props.onNodeClick();
  }
}

export default Popup;