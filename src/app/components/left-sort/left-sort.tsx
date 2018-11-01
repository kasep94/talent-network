import React from 'react';
import './left-sort.scss';
import {CompProps, Node} from '../../types';

class LeftSort extends React.Component<CompProps<Node>, {}> {
  constructor(props: CompProps<Node>) {
    super(props);
  }

  public render() {
    const {data} = this.props;
    return <div className='left-sort-comp'>
      {
        data.map(v => {
          return <p className='both-sides-center' key={v.name}><span>{v.label}</span><i className='icon icon-arrow'/></p>
        })
      }
    </div>
  }
}

export default LeftSort