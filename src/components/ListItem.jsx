import React from 'react'
import styles from '../assets/css/ListItem.module.css';
import ListItemUpper from './ListItemUpper';
import ListItemLower from './ListItemLower';

const ListItem = () => {
  return (
    <div className={styles.MainListItemWrapper}>
        <ListItemUpper />
        <ListItemLower />
    </div>
  )
}

export default ListItem