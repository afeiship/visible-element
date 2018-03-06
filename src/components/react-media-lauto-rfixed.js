import React, { Component, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    gap: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    aside: PropTypes.element,
    elements: PropTypes.array
  };

  static defaultProps = {
    gap: '10px',
    align: 'normal',
    elements:[],
    justify: 'space-between'
  };
  /*===properties end===*/

  get elements(){
    const { elements } = this.props;
    return elements.map((elem,index)=>{
      const newProps = objectAssign({ key: index }, elem.props);
      return cloneElement(elem,newProps);
    })
  }

  render() {
    const {
      className,
      aside,
      gap,
      align,
      justify,
      elements,
      ...props
    } = this.props;
    return (
      <section
        {...props}
        data-align={align}
        className={classNames('webkit-sassui-flex-lauto-rfixed react-media-lauto-rfixed', className)}>
        <div className="webkit-sassui-flex-justify left"
        style={{ marginRight: gap }}
        data-align="normal"
        data-justify={justify}
        data-direction='column'>
          { this. elements }
        </div>
        { aside && <aside className="right"> {aside} </aside> }
      </section>
    );
  }
}
