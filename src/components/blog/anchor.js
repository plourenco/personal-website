import React from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './anchor.module.css';

export default function Anchor(Tag) {
  return props => {
    if (!props.id) return <Tag {...props} />;

    return (
      <Tag {...props} className={styles.heading}>
        <a href={`#${props.id}`}>
          <FontAwesomeIcon icon={faLink} />
        </a>
        {props.children}
      </Tag>
    );
  };
}
