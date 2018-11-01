import React from 'react';
import './search-wrapper.scss';
import { CompProps } from '../../types';

class SearchWrapperComp extends React.Component<CompProps<string>, {}>{
  public render() {
    const { data } = this.props;
    return <div className='search-wrapper-comp flex-center'>
      <div>
        <div className='search flex'>
          <input />
          <span>搜索</span>
        </div>
        <div className='hot'>
          <span>热门搜索:</span>
          {
            data.map((v, i) => {
              return <span key={'hot-' + i}>{v}</span>
            })
          }
        </div>
      </div>
    </div>
  }
}

export default SearchWrapperComp;