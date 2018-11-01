import React from 'react';
import './box.scss';
import { CompProps, BoxNode } from '../../types';

class Box extends React.Component<CompProps<BoxNode>, {}> {
  constructor(props: CompProps<BoxNode>) {
    super(props);
  }
  public render() {
    const { data } = this.props;
    return <div className='box-comp flex'>
      {
        data.map(v => {
          return <div className='content shadow' key={v.id}>
            <div className='both-sides'>
              <p className='career a'>{v.career}</p>
              <p className='cl-red'>{v.prive}</p>
            </div>
            <p className='cl-gray type'>{v.type}</p>
            <p>{v.company}</p>
          </div>
        })
      }
    </div>
  }
}

export default Box;